import { vehicles } from "@/lib/data"
import { Button } from "@/components/ui/Button"
import { Users, Bed, Gauge, Fuel, Settings, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getDictionary } from "@/lib/dictionary"

export default async function VehicleDetailPage({ params }: { params: Promise<{ id: string, lang: string }> }) {
    const { id, lang } = await params
    const dict = await getDictionary(lang)
    const vehicle = vehicles.find((v) => v.id === id)
    const isJa = lang === "ja"

    if (!vehicle) {
        return <div className="min-h-screen flex items-center justify-center">{isJa ? "車両が見つかりません" : "Vehicle not found"}</div>
    }

    return (
        <div className="bg-white min-h-screen pb-12">
            {/* Hero Image */}
            <div className="relative h-[50vh] bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-2xl font-semibold">{vehicle.name}</span>
                </div>
                {/* <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" /> */}
                <div className="absolute top-4 left-4">
                    <Button asChild variant="secondary" size="sm">
                        <Link href={`/${lang}/lineup`} className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            {dict.common.back}
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{vehicle.name}</h1>
                            <div className="flex gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    <span>{vehicle.capacity} {isJa ? "人乗り" : "People"}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Bed className="w-4 h-4" />
                                    <span>{vehicle.sleep} {isJa ? "人就寝" : "Sleeps"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">{dict.common.from}</p>
                            <p className="text-3xl font-bold text-primary">¥{vehicle.price.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">{dict.common.pricePerDay}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <section>
                                <h2 className="text-xl font-bold mb-4">{isJa ? "車両について" : "Description"}</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {vehicle.description}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4">{isJa ? "特徴" : "Features"}</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {vehicle.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 bg-gray-50 p-3 rounded-md">
                                            <div className="w-2 h-2 bg-primary rounded-full" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="font-bold mb-4 text-lg">{isJa ? "スペック" : "Specifications"}</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600 flex items-center gap-2"><Gauge className="w-4 h-4" /> {isJa ? "サイズ (長さ)" : "Length"}</span>
                                        <span className="font-medium">{vehicle.specs.length}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600 flex items-center gap-2"><Gauge className="w-4 h-4" /> {isJa ? "サイズ (幅)" : "Width"}</span>
                                        <span className="font-medium">{vehicle.specs.width}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600 flex items-center gap-2"><Gauge className="w-4 h-4" /> {isJa ? "サイズ (高さ)" : "Height"}</span>
                                        <span className="font-medium">{vehicle.specs.height}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600 flex items-center gap-2"><Fuel className="w-4 h-4" /> {isJa ? "エンジン" : "Engine"}</span>
                                        <span className="font-medium">{vehicle.specs.engine}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-gray-600 flex items-center gap-2"><Settings className="w-4 h-4" /> {isJa ? "駆動方式" : "Drive"}</span>
                                        <span className="font-medium">{vehicle.specs.drive}</span>
                                    </div>
                                </div>
                            </div>

                            <Button size="lg" className="w-full text-lg h-14" asChild>
                                <Link href={`/${lang}/booking?vehicleId=${vehicle.id}`}>
                                    {dict.common.bookNow}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
