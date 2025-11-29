import { SearchBox } from "@/components/features/SearchBox"
import { MapPin, ShieldCheck, Bed } from "lucide-react"
import { getDictionary } from "@/lib/dictionary"


export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 whitespace-pre-line">
            {dict.home.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            {dict.home.heroSubtitle}
          </p>

          <SearchBox dict={dict} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{dict.home.whyChoose}</h2>
            <p className="mt-4 text-xl text-gray-600">{dict.home.whyChooseSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{dict.home.features.safe.title}</h3>
              <p className="text-gray-600">
                {dict.home.features.safe.desc}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Bed className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{dict.home.features.comfort.title}</h3>
              <p className="text-gray-600">
                {dict.home.features.comfort.desc}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{dict.home.features.freedom.title}</h3>
              <p className="text-gray-600">
                {dict.home.features.freedom.desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
