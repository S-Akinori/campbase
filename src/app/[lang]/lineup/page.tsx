import { VehicleCard } from "@/components/features/VehicleCard"
import { vehicles } from "@/lib/data"
import { getDictionary } from "@/lib/dictionary"

export default async function LineupPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">{dict.nav.lineup}</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {lang === "en"
                            ? "Choose the perfect campervan for your journey. All our vehicles are well-maintained and fully equipped."
                            : "旅に最適なキャンピングカーをお選びください。すべての車両は整備が行き届き、充実した装備を備えています。"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.map((vehicle) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} dict={dict} lang={lang} />
                    ))}
                </div>
            </div>
        </div>
    )
}
