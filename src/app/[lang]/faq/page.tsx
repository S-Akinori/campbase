import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { getDictionary } from "@/lib/dictionary"

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const isJa = lang === "ja"

    const faqs = [
        {
            question: isJa ? "国際免許証は必要ですか？" : "Do I need an International Driving Permit?",
            answer: isJa ? "はい、日本の運転免許証をお持ちでない場合は、有効な国際運転免許証が必要です。" : "Yes, if you do not hold a Japanese driver's license, you must have a valid International Driving Permit.",
        },
        {
            question: isJa ? "ペットを同伴できますか？" : "Can I bring my pet?",
            answer: isJa ? "申し訳ありませんが、アレルギーや清掃の観点から、ペットの同伴はお断りしております。" : "Unfortunately, pets are not allowed in our vehicles due to allergy and cleaning concerns.",
        },
        {
            question: isJa ? "キャンセル料はかかりますか？" : "Is there a cancellation fee?",
            answer: isJa ? "出発の7日前からキャンセル料が発生します。詳細は利用規約をご確認ください。" : "Yes, cancellation fees apply starting 7 days before the pickup date. Please check our Terms of Service for details.",
        },
        {
            question: isJa ? "保険は含まれていますか？" : "Is insurance included?",
            answer: isJa ? "はい、基本保険はレンタル料金に含まれています。追加の補償オプションもご用意しています。" : "Yes, basic insurance is included in the rental fee. We also offer additional coverage options.",
        },
    ]

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">{dict.nav.faq}</h1>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
