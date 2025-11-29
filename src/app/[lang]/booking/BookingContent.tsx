"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { vehicles } from "@/lib/data"
import { Button } from "@/components/ui/Button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BookingContent({ dict, lang }: { dict: any, lang: string }) {
    const searchParams = useSearchParams()
    const vehicleId = searchParams.get("vehicleId")
    const vehicle = vehicles.find((v) => v.id === vehicleId)
    const isJa = lang === "ja"

    const [step, setStep] = useState(1)

    if (!vehicle && step === 1) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">{isJa ? "車両が選択されていません" : "No vehicle selected"}</h1>
                    <Button asChild><Link href={`/${lang}/lineup`}>{isJa ? "車両一覧へ" : "Go to Lineup"}</Link></Button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <div className="flex items-center justify-between text-sm font-medium text-gray-500">
                        <span className={step >= 1 ? "text-primary" : ""}>1. {isJa ? "確認" : "Confirm"}</span>
                        <span className={step >= 2 ? "text-primary" : ""}>2. {isJa ? "オプション" : "Options"}</span>
                        <span className={step >= 3 ? "text-primary" : ""}>3. {isJa ? "情報" : "Info"}</span>
                        <span className={step >= 4 ? "text-primary" : ""}>4. {isJa ? "支払い" : "Payment"}</span>
                        <span className={step >= 5 ? "text-primary" : ""}>5. {isJa ? "完了" : "Done"}</span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary transition-all duration-300" style={{ width: `${(step / 5) * 100}%` }} />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    {step === 1 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">{isJa ? "車両確認" : "Confirm Vehicle"}</h2>
                            <div className="flex gap-4 mb-6">
                                <div className="w-32 h-24 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500">
                                    {vehicle?.name}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{vehicle?.name}</h3>
                                    <p className="text-gray-600">{isJa ? "乗車定員" : "Capacity"}: {vehicle?.capacity} / {isJa ? "就寝定員" : "Sleep"}: {vehicle?.sleep}</p>
                                    <p className="text-primary font-bold mt-2">¥{vehicle?.price.toLocaleString()} {dict.common.pricePerDay}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{dict.search.pickupDate}</label>
                                    <input type="date" className="w-full p-2 border rounded-md" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{dict.search.returnDate}</label>
                                    <input type="date" className="w-full p-2 border rounded-md" />
                                </div>
                            </div>
                            <Button onClick={() => setStep(2)} className="w-full">{dict.common.next}: {isJa ? "オプション選択" : "Select Options"}</Button>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">{isJa ? "オプション選択" : "Select Options"}</h2>
                            <div className="space-y-4 mb-8">
                                {[
                                    isJa ? "寝具セット" : "Bedding Set",
                                    isJa ? "キッチンセット" : "Kitchen Set",
                                    isJa ? "チャイルドシート" : "Child Seat",
                                    isJa ? "WiFi" : "WiFi"
                                ].map((opt) => (
                                    <label key={opt} className="flex items-center gap-3 p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="checkbox" className="w-5 h-5 text-primary rounded focus:ring-primary" />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <Button variant="outline" onClick={() => setStep(1)} className="w-1/3">{dict.common.back}</Button>
                                <Button onClick={() => setStep(3)} className="w-2/3">{dict.common.next}: {isJa ? "お客様情報" : "Customer Info"}</Button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">{isJa ? "お客様情報" : "Customer Information"}</h2>
                            <div className="space-y-4 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{isJa ? "お名前" : "Full Name"}</label>
                                    <input type="text" className="w-full p-2 border rounded-md" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{isJa ? "メールアドレス" : "Email"}</label>
                                    <input type="email" className="w-full p-2 border rounded-md" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{isJa ? "電話番号" : "Phone"}</label>
                                    <input type="tel" className="w-full p-2 border rounded-md" placeholder="+1 234 567 890" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Button variant="outline" onClick={() => setStep(2)} className="w-1/3">{dict.common.back}</Button>
                                <Button onClick={() => setStep(4)} className="w-2/3">{dict.common.next}: {isJa ? "支払い" : "Payment"}</Button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">{isJa ? "支払い" : "Payment"}</h2>
                            <div className="bg-gray-50 p-4 rounded-md mb-6">
                                <h3 className="font-bold mb-2">{isJa ? "注文内容" : "Order Summary"}</h3>
                                <div className="flex justify-between mb-1">
                                    <span>{isJa ? "車両レンタル (3日間)" : "Vehicle Rental (3 days)"}</span>
                                    <span>¥{(vehicle?.price || 0) * 3}</span>
                                </div>
                                <div className="flex justify-between mb-1 text-gray-600">
                                    <span>{isJa ? "オプション" : "Options"}</span>
                                    <span>¥5,000</span>
                                </div>
                                <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-bold text-lg">
                                    <span>{isJa ? "合計" : "Total"}</span>
                                    <span>¥{((vehicle?.price || 0) * 3 + 5000).toLocaleString()}</span>
                                </div>
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="p-4 border rounded-md flex items-center gap-3">
                                    <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-primary" />
                                    <span>{isJa ? "クレジットカード" : "Credit Card"}</span>
                                </div>
                                <div className="p-4 border rounded-md flex items-center gap-3">
                                    <input type="radio" name="payment" className="w-5 h-5 text-primary" />
                                    <span>{isJa ? "現地決済" : "Pay at Store"}</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Button variant="outline" onClick={() => setStep(3)} className="w-1/3">{dict.common.back}</Button>
                                <Button onClick={() => setStep(5)} className="w-2/3">{isJa ? "予約確定" : "Confirm Booking"}</Button>
                            </div>
                        </div>
                    )}

                    {step === 5 && (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">{isJa ? "予約完了！" : "Booking Complete!"}</h2>
                            <p className="text-gray-600 mb-8">
                                {isJa ? "ご予約ありがとうございます。確認メールをお送りしました。" : "Thank you for your reservation. We have sent a confirmation email to your address."}
                            </p>
                            <Button asChild className="w-full max-w-xs">
                                <Link href={`/${lang}`}>{isJa ? "ホームへ戻る" : "Return to Home"}</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
