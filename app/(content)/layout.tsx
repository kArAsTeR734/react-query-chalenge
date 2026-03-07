import React from "react";
import Link from "next/link";

export default function ContentLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <Link
        href='/'
        className="inline-block text-white rounded-md p-2 font-medium text-lg bg-green-500 hover:bg-green-700 transition-colors"
      >
        Вернуться назад
      </Link>
    </>

  )
}