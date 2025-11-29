import { Button } from "@/components/ui/Button"
import { getDictionary } from "@/lib/dictionary"

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const isJa = lang === "ja"

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">{dict.nav.contact}</h1>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">{isJa ? "お名前" : "Name"}</label>
                        <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">{isJa ? "メールアドレス" : "Email"}</label>
                        <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">{isJa ? "メッセージ" : "Message"}</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"></textarea>
                    </div>

                    <Button type="submit" className="w-full">{dict.common.submit}</Button>
                </form>
            </div>
        </div>
    )
}
