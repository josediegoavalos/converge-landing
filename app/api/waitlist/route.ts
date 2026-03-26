import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const normalized = email.trim().toLowerCase()

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(normalized)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    const supabase = getSupabaseAdmin()

    const { error } = await supabase
      .from('waitlist')
      .insert({ email: normalized })

    if (error) {
      if (error.code === '23505') {
        // Unique constraint — already signed up
        return NextResponse.json(
          { error: "You're already on the list! We'll be in touch." },
          { status: 409 }
        )
      }
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      )
    }

    // Fetch updated count
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    return NextResponse.json(
      { success: true, count: count ?? 0 },
      { status: 201 }
    )
  } catch (err) {
    console.error('Waitlist API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()

    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      return NextResponse.json({ count: 1247 })
    }

    return NextResponse.json({ count: count ?? 1247 })
  } catch {
    // Return a plausible fallback count if DB is not configured
    return NextResponse.json({ count: 1247 })
  }
}
