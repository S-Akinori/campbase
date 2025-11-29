import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { getDictionary } from "@/lib/dictionary"

export default async function AccessPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const isJa = lang === "ja"

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">{dict.nav.access}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-xl font-bold mb-6">{isJa ? "店舗情報" : "Shop Information"}</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <p className="font-bold">{isJa ? "CampBase 東京本店" : "CampBase Tokyo Main Shop"}</p>
                                    <p className="text-gray-600">
                                        {isJa ? "〒150-0001 東京都渋谷区神宮前1-1-1" : "1-1-1 Jingumae, Shibuya-ku, Tokyo 150-0001"}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <p className="text-gray-600">03-1234-5678</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <p className="text-gray-600">info@campbase.jp</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <p className="font-bold">{isJa ? "営業時間" : "Business Hours"}</p>
                                    <p className="text-gray-600">9:00 - 18:00 ({isJa ? "年中無休" : "Open everyday"})</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-64 md:h-auto bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">{isJa ? "地図が表示されます" : "Map Placeholder"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
