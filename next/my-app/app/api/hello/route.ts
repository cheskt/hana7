import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  //   const { searchParams, host, hostname, port, protocol, pathname, basePath } =
  //   request.nextUrl;

  const nextCookies = await cookies();
  console.log('🚀 ~ GET ~ reqCookies:', nextCookies);

  //   const sid = newCookies.get('sid');

  const reqHeaders = new Headers(request.headers);
  console.log('🚀 ~ GET ~ reqHeaders:', reqHeaders);

  const nextHeaders = await headers();
  console.log('🚀 ~ GET ~ nextHeaders:', nextHeaders);

  const userAgent = nextHeaders.get('user-agent');
  console.log('🚀 ~ GET ~ userAgent:', userAgent);

  const res = NextResponse.json(
    {
      id: 1,
    },
    { headers: { 'Custom-Cookie': userAgent!, 'Set-Cookie': 'sid-1223' } }
  );

  res.cookies.set('X', '123');
  res.cookies.set('y', '456');

  const dbPasswd = process.env.DB_PASSWD;
  console.log('🚀 ~ GET ~ dbPasswd:', dbPasswd);
  console.log('🚀 ~ GET ~ NEXT_PUBLIC_URL:', process.env.NEXT_PUBLIC_URL);

  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + 86400 * 1000);
  res.cookies.set('otherCookies', 'oo', {
    maxAge: 300, // 86400
    httpOnly: true,
    path: '/',
    secure: false,
    expires: expireDate,
  });

  return res;

  //   return NextResponse.json({
  //     id: 1,
  //     name: '홍길동',
  //     str: searchParams.get('str'),
  //     host,
  //     hostname,
  //     pathname,
  //     basePath,
  //     port,
  //     protocol,
  //   });
}

export function POST() {}
