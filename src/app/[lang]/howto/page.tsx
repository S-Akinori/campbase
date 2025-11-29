import { CheckCircle2 } from "lucide-react"
import { getDictionary } from "@/lib/dictionary"

export default async function HowToRentPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const isJa = lang === "ja"

    const steps = [
        {
            title: isJa ? "1. 検索・予約" : "1. Search & Book",
            description: isJa ? "希望の日程と車両を選択し、オンラインで予約を完了してください。" : "Select your desired dates and vehicle. Complete the booking online.",
        },
        {
            title: isJa ? "2. 予約確認" : "2. Confirmation",
            description: isJa ? "詳細と支払い方法が記載された確認メールが届きます。" : "You will receive a confirmation email with details and payment instructions.",
        },
        {
            title: isJa ? "3. 当日・出発" : "3. Pick-up",
            description: isJa ? "予約日時に店舗へお越しください。車両の操作説明を行います。" : "Come to our shop on the day. We will explain the vehicle operation.",
        },
        {
            title: isJa ? "4. 旅を楽しむ" : "4. Enjoy your Trip",
            description: isJa ? "自由に日本を冒険しましょう！旅行中のサポートも万全です。" : "Explore Japan freely! Support is available during your trip.",
        },
        {
            title: isJa ? "5. 返却" : "5. Return",
            description: isJa ? "店舗へ車両をご返却ください。またのご利用をお待ちしております！" : "Return the vehicle to the shop. We hope to see you again!",
        },
    ]

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">{dict.nav.howto}</h1>

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h2>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        {isJa ? "必要書類" : "Requirements"}
                    </h3>
                    <ul className="list-disc list-inside text-yellow-800 space-y-1">
                        <li>{isJa ? "有効な運転免許証（海外在住の方は国際免許証）" : "Valid Driver's License (International Driving Permit for non-residents)"}</li>
                        <li>{isJa ? "パスポート（海外在住の方）" : "Passport (for non-residents)"}</li>
                        <li>{isJa ? "お支払い用のクレジットカード" : "Credit Card for payment"}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
