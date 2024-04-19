import React from 'react';

import VintageImageOverlay from '../components/VintageImageOverlay';

import alien from '../images/alien.jpg';
import noise from '../images/noise.gif';
// import regateLogo from '../images/regate_logo.jpg';

import '../styles/imageWithBlur.css';
import '../styles/vintageImageOverlay.css';

function ContentBlock() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-[var(--content-width)] max-w-full relative">
        <div className="font-bold w-[340px]">
          <h1 className="custom-h1">Projects</h1>
        </div>
        <VintageImageOverlay image={alien} noise={noise} />
      </div>

      <div className=" overflow-hidden">
        <div className="rubik-font">
          <div className="mx-auto text-center">
            <h2 className="custom-h2-regate mb-12">
              Regate
            </h2>
            <p className="my-9 text-lg custom-text text-left">
              Automated accounting processes in a high-traffic French fintech startup.
              Led the integration of numerous payment and finance APIs.
              Enhanced software reliability and user experience by with Cypress and RSpec.
              Deployed and maintained the project using Docker, utilizing Rails 6 and Ruby 3.
              Proactively monitored and resolved potential issues using Datadog, significantly reducing error rates and improving system stability.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specs</h2>
            <p className="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Origin</dt>
                <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Material</dt>
                <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Dimensions</dt>
                <dd className="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Finish</dt>
                <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Includes</dt>
                <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Considerations</dt>
                <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100"></img>
            <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100"></img>
            <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100"></img>
            <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBlock;
