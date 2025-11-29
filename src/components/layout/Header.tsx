"use client"
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Header({ dict, lang }: { dict: any, lang: string }) {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const navigation = [
        { name: dict.nav.lineup, href: `/${lang}/lineup` },
        { name: dict.nav.howto, href: `/${lang}/howto` },
        { name: dict.nav.price, href: `/${lang}/price` },
        { name: dict.nav.faq, href: `/${lang}/faq` },
        { name: dict.nav.access, href: `/${lang}/access` },
        { name: dict.nav.contact, href: `/${lang}/contact` },
    ]

    const switchLanguage = () => {
        const newLang = lang === "en" ? "ja" : "en"
        const newPath = pathname.replace(`/${lang}`, `/${newLang}`)
        router.push(newPath)
    }

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href={`/${lang}`} className="-m-1.5 p-1.5 text-2xl font-bold text-primary">
                        CampBase
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-2" onClick={switchLanguage}>
                        <Globe className="h-4 w-4" />
                        <span>{lang === "en" ? "JA" : "EN"}</span>
                    </Button>
                    <Button asChild><Link href={`/${lang}/booking?vehicleId=standard-cabin`}>{dict.common.bookNow}</Link></Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
                <div className="space-y-1 px-4 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="mt-4 flex flex-col gap-2">
                        <Button variant="outline" className="w-full justify-start gap-2" onClick={switchLanguage}>
                            <Globe className="h-4 w-4" />
                            <span>{lang === "en" ? "Switch to Japanese" : "Switch to English"}</span>
                        </Button>
                        <Button className="w-full" asChild><Link href={`/${lang}/booking?vehicleId=standard-cabin`}>{dict.common.bookNow}</Link></Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
