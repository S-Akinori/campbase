import { Suspense } from "react"
import { getDictionary } from "@/lib/dictionary"
import { BookingContent } from "./BookingContent"

export default async function BookingPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">{dict.common.loading}</div>}>
            <BookingContent dict={dict} lang={lang} />
        </Suspense>
    )
}
