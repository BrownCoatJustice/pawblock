# PawBlock

[![Netlify Status](https://api.netlify.com/api/v1/badges/07e5b357-76a0-4481-b896-0b240e9075bf/deploy-status)](https://app.netlify.com/sites/pawblock/deploys)
[![CI status](https://github.com/dguo/pawblock/workflows/CI/badge.svg)](https://github.com/dguo/pawblock/actions?query=branch%3Amain)

[PawBlock](https://www.pawblock.dannyguo.com) is a [browser
extension](https://en.wikipedia.org/wiki/Browser_extension) for beating
procrastination and excessive web surfing. It blocks websites using the power of
animal pictures. Check out the [landing page](https://www.pawblock.dannyguo.com)
for screenshots and a FAQ.

## Installation

* [Chrome](https://chrome.google.com/webstore/detail/pawblock/jngmmiaolbliepfphdnelgfcclpnkoja)
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/pawblock/)

## Alternatives

* [StayFocusd](https://chrome.google.com/webstore/detail/stayfocusd/laankejkbhbdhmipfmgcngdelahlfoji)
* [WasteNoTime](http://www.bumblebeesystems.com/wastenotime/) - Available only for Safari. See footnotes for more info.
* [Block Site](https://chrome.google.com/webstore/detail/block-site/eiimnmioipafcokbfikbljfdeojpcgbh)
* [uBlock Origin](https://ublockorigin.com/) - Can block most counter-productive sites with the help of filter lists. See footnotes.

## Firefox Review Instructions

With Node and Yarn installed (see the versions specified in `.tool-versions`),
you can run `yarn release` to generate the ZIP file in the `web-ext-artifacts`
folder.

## License

[MIT](https://github.com/dguo/pawblock/blob/main/LICENSE)

## Footnotes

* WasteNoTime has discontinued Google Chrome support due to
> "WasteNoTime extension is no longer supported due to Google's enforcement of Manifest V3 on Chrome, which is incompatible with WasteNoTime" - Bumblebee Systems' Webpage for WasteNoTime.

* uBlock Origin is a content blocker, and not a productivity enhancer tool by design. But it is extensible enough to be used as a site block with the help of filter lists. Filter lists can be found with a simple web search but also can be found at [FilterLists](https://filterlists.com).
