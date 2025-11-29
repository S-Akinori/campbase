import Link from "next/link"
import { getDictionary } from "@/lib/dictionary"

export default async function PricePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const isJa = lang === "ja"

    const options = [
        { name: isJa ? "寝具セット（枕、毛布、シーツ）" : "Bedding Set (Pillow, Blanket, Sheets)", price: 2000 },
        { name: isJa ? "キッチンセット（コンロ、鍋、フライパン）" : "Kitchen Set (Stove, Pots, Pans)", price: 1500 },
        { name: isJa ? "チャイルドシート" : "Child Seat", price: 1000 },
        { name: isJa ? "ポータブルWiFi" : "Portable WiFi", price: 1000 },
        { name: isJa ? "キャンプ用テーブル＆チェア" : "Camping Table & Chairs", price: 2500 },
    ]

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">{dict.nav.price}</h1>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{isJa ? "レンタル料金" : "Rental Fees"}</h2>
                    <p className="text-gray-600 mb-4">
                        {isJa
                            ? "レンタル料金は車両タイプとシーズンによって異なります。詳細は"
                            : "Rental fees vary by vehicle type and season. Please check the "}
                        <Link href={`/${lang}/lineup`} className="text-primary hover:underline">
                            {isJa ? "車両一覧ページ" : "Lineup page"}
                        </Link>
                        {isJa ? "をご確認ください。" : " for specific pricing."}
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-2">{isJa ? "シーズン区分" : "Seasons"}</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><span className="font-semibold">{isJa ? "ハイシーズン:" : "High Season:"}</span> {isJa ? "7月 - 8月、ゴールデンウィーク、年末年始" : "July - August, Golden Week, New Year"}</li>
                            <li><span className="font-semibold">{isJa ? "レギュラーシーズン:" : "Regular Season:"}</span> {isJa ? "3月 - 6月、9月 - 11月" : "March - June, September - November"}</li>
                            <li><span className="font-semibold">{isJa ? "オフシーズン:" : "Off Season:"}</span> {isJa ? "12月 - 2月（年末年始を除く）" : "December - February (excluding New Year)"}</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{isJa ? "オプション" : "Optional Add-ons"}</h2>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{isJa ? "項目" : "Item"}</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{isJa ? "価格 (1回あたり)" : "Price (per trip)"}</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {options.map((option) => (
                                    <tr key={option.name}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{option.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">¥{option.price.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
