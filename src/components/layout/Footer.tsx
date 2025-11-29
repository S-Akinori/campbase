import Link from "next/link"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Footer({ dict }: { dict: any }) {
    const navigation = {
        main: [
            { name: dict.nav.lineup, href: "/lineup" },
            { name: dict.nav.howto, href: "/howto" },
            { name: dict.nav.price, href: "/price" },
            { name: dict.nav.faq, href: "/faq" },
            { name: dict.nav.access, href: "/access" },
            { name: dict.nav.contact, href: "/contact" },
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
        ]
    }

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.legal.map((item) => (
                        <Link key={item.name} href={item.href} className="text-xs text-gray-500 hover:text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; {new Date().getFullYear()} CampBase. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
