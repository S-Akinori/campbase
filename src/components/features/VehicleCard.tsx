import Link from "next/link"
import { Users, Bed } from "lucide-react"
import { Button } from "@/components/ui/Button"


interface VehicleProps {
    id: string
    name: string
    description: string
    capacity: number
    sleep: number
    price: number
    features: string[]
    image: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function VehicleCard({ vehicle, dict, lang }: { vehicle: VehicleProps, dict: any, lang: string }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48 bg-gray-200">
                {/* Placeholder for Vehicle Image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-lg font-semibold">{vehicle.name}</span>
                </div>
                {/* Real implementation would use next/image */}
                {/* <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" /> */}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                        AT / 4WD
                    </span>
                </div>

                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                    {vehicle.description}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{vehicle.capacity} People</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>Sleeps {vehicle.sleep}</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <span className="text-xs text-gray-500 block">{dict.common.from}</span>
                        <span className="text-lg font-bold text-primary">¥{vehicle.price.toLocaleString()}</span>
                        <span className="text-xs text-gray-500">{dict.common.pricePerDay}</span>
                    </div>
                    <Button asChild size="sm">
                        <Link href={`/${lang}/lineup/${vehicle.id}`}>{dict.common.viewDetails}</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
