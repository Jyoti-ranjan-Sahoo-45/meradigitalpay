import React from "react";

function ServiceTemplate({
  title,
  subTitle,
  heading,
  description,
  features = [],
  image,
}) {
  return (
    <main className="w-full bg-white">

      {/* =====================================================
          HERO / INTRO SECTION
      ===================================================== */}

      <section className="w-full bg-slate-50 px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Small Title */}
          {subTitle && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 md:text-base">
              {subTitle}
            </p>
          )}

          {/* Main Title */}
          {title && (
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              {title}
            </h1>
          )}

        </div>
      </section>


      {/* =====================================================
          MAIN CONTENT SECTION
      ===================================================== */}

      <section className="w-full px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT CONTENT */}
            <div>

              {heading && (
                <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                  {heading}
                </h2>
              )}

              {description && (
                <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  {description}
                </p>
              )}


              {/* FEATURES */}

              {features.length > 0 && (
                <div className="mt-8 space-y-4">

                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >

                      {/* Check Icon */}
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                        ✓
                      </div>

                      <p className="text-base leading-7 text-slate-700 md:text-lg">
                        {feature}
                      </p>

                    </div>
                  ))}

                </div>
              )}

            </div>


            {/* RIGHT IMAGE */}

            {image && (
              <div className="relative">

                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={image}
                    alt={title || "Service"}
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>
            )}

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURE CARDS
      ===================================================== */}

      {features.length > 0 && (
        <section className="w-full bg-slate-50 px-6 py-16 md:px-10 md:py-20 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <div className="mb-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Choose Us
              </p>

              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Everything you need in one place
              </h2>
            </div>


            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                    ✓
                  </div>

                  <p className="font-medium leading-7 text-slate-700">
                    {feature}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>
      )}

    </main>
  );
}

export default ServiceTemplate;