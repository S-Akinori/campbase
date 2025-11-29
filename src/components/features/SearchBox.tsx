"use client"

import { useState } from "react"
import { Calendar, Users, Search } from "lucide-react"
import { Button } from "@/components/ui/Button"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SearchBox({ dict }: { dict: any }) {
    const [pickupDate, setPickupDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [people, setPeople] = useState("2")

    return (
        <div className="bg-white p-4 rounded-lg shadow-xl max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-gray-500 uppercase">{dict.search.pickupDate}</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                            type="date"
                            className="w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:ring-primary focus:border-primary text-gray-900"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-gray-500 uppercase">{dict.search.returnDate}</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                            type="date"
                            className="w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:ring-primary focus:border-primary text-gray-900"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-gray-500 uppercase">{dict.search.people}</label>
                    <div className="relative">
                        <Users className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <select
                            className="w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:ring-primary focus:border-primary text-gray-900"
                            value={people}
                            onChange={(e) => setPeople(e.target.value)}
                        >
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5+ People</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-end">
                    <Button className="w-full gap-2">
                        <Search className="h-4 w-4" />
                        {dict.search.search}
                    </Button>
                </div>
            </div>
        </div>
    )
}
