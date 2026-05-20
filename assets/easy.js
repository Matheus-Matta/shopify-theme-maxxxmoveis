var hi = window.TPOConfigs?.product_options || window.TPOConfigs?.product_options_easify || [];
window.TPOConfigs.product_options_1?.length && (hi = [...hi, ...window.TPOConfigs.product_options_1]);
window.TPOConfigs.product_options_2?.length && (hi = [...hi, ...window.TPOConfigs.product_options_2]);
window.TPOConfigs.product_options_3?.length && (hi = [...hi, ...window.TPOConfigs.product_options_3]);
window.TPOConfigs.product_options_4?.length && (hi = [...hi, ...window.TPOConfigs.product_options_4]);
hi = Mf(hi);
var pf = window.TPOConfigs?.queryOptionSet === "metaobject";
window.TPOConfigs.product_options_tpo = hi;
var Qo = window?.TPOConfigs?.app === "fjckPiAzNHI1MzwtMzo=" || window?.TPOConfigs?.app === "czMzNikuOVNfTg=="
  , Rs = window.TPOConfigs?.timezone
  , wn = null
  , Ju = window.TPOConfigs.settings?.advancedTranslation
  , df = window.TPOConfigs?.queryOptionSet === "query"
  , sp = window.TPOConfigs.settings?.translationFileCSV
  , Qu = !!window.upcartOnAddToCart
  , xt = document.querySelector("html").getAttribute("lang")
  , Re = {}
  , uf = {
    requiredMessage: "This is a required field",
    requiredOptionMessage: "This is a required option",
    minCharacterMessage: "Please type at least {{minValue}} characters",
    maxCharacterMessage: "Please type at maximum {{maxValue}} characters",
    minValueMessage: "Please enter a minimum value of {{minValue}}",
    maxValueMessage: "Please enter a maximum value of {{maxValue}}",
    minOptionMessage: "Please select at least {{minValue}} options",
    maxOptionMessage: "Please select at maximum {{maxValue}} options",
    errorQuantityMessage: "Between {{minValue}} - {{maxValue}}",
    totalQuantitySelectorMessage: "Select a minimum of {{minValue}} and a maximum of {{maxValue}} items",
    totalSelectedQuantityLabel: "You've chosen: ",
    totalAdditionalPriceLabel: "Your selections will add an additional charge of",
    validNumbericMessage: "This input value is not numeric!",
    tableTitle: "Tiered wholesale price",
    quantityHeading: "Quantity",
    savingHeading: "Savings",
    saveLabel: "Save",
    discountBoxButton: "Apply",
    discountBoxPlaceholder: "Enter your discount here",
    discountText: "Discount",
    discountValidateBlank: "Discount field must not be blank",
    discountValidateCode: "Invalid discount code",
    wholeSaleDiscountLabel: "Wholesale discount",
    customOptionFor: "Custom Option for {{productName}}",
    colorPickerText: "Choose color",
    minFileAtleastMessage: "You must upload at least {{minValue}} file(s)",
    minFileMessage: "You must upload at least {{minValue}} file(s)"
}
  , Gh = ["label", "metadata"]
  , Kh = ["title", "help_text", "info_text", "option_identifier", "placeholder", "switch_label", "option_label", "contentHTML"]
  , Xh = ["content", "contentHTML", "modalTitle", "buttonText", "labelX", "labelY", "labelZ"]
  , Gu = Object.keys(uf)
  , Yh = Object.entries(uf)
  , ff = new Map;
Yh.forEach( ([se,ce]) => {
    ff.set(se, ce)
}
);
var Ki = JSON.parse(document.getElementById("tpo-store-data")?.textContent || "{}")
  , Ka = null;
if (!Ki?.product)
    try {
        const se = document.getElementById("easify-product-info");
        se && (Ka = JSON?.parse(se?.textContent))
    } catch {}
var Zt = Ki?.product || Ka
  , mf = Ki?.collections
  , ga = Ki?.cart_type
  , lp = Ki?.shop?.money_format || "${{amount}}"
  , cp = Ki?.shop?.money_with_currency_format || "${{amount}}"
  , vn = window.TPOConfigs.template
  , Nc = Ki?.customer?.id
  , Ai = window.TPOConfigs.theme.product.form
  , ko = window.TPOConfigs.theme.cart.form
  , tl = window.TPOConfigs.theme.product.addToCartButton
  , Sn = ['gp-product-button button:not([class*="tpo_option"])', "#corner-sticky-atc-cta-button", 'gp-product form[data-type="add-to-cart-form"] .gp-button-atc:not(.tpo_ignore)']
  , Wc = ["style-bundle-dev.myshopify.com", "style-bundle-au.myshopify.com", "textilfarm.myshopify.com", "a864ee-3.myshopify.com", "sports-beta.myshopify.com", "608e06-2.myshopify.com", "scarves-by-ruthie-l-designs.myshopify.com", "toshipmyshop.myshopify.com", "s-and-s-handmade-natural.myshopify.com", "creativekidswonderland.myshopify.com", "2397da.myshopify.com", "the-inspired-stories.myshopify.com", "49476b.myshopify.com", "bff7f4.myshopify.com", "10fae7-82.myshopify.com", "reflectiveberlin.myshopify.com", "b0f760-f0.myshopify.com", "806bad-23.myshopify.com", "animus-medicus-gmbh.myshopify.com"]
  , _f = ["chips-shop-online.myshopify.com", "kudosgiftwrap.myshopify.com", "61062a-2.myshopify.com"]
  , Zh = ["hoangpm-dev.myshopify.com", "frio-sparkling-water.myshopify.com"]
  , hf = ["liam-test-store.myshopify.com"]
  , Uc = []
  , Xs = ["prix2pro.myshopify.com", "thetowelturban.myshopify.com", "26911b-3.myshopify.com", "gorgeous-and-beautiful-flowers.myshopify.com", "137837.myshopify.com", "monk-customs-b2b.myshopify.com", "felara.myshopify.com", "a53efb.myshopify.com", "28c562-3.myshopify.com", "erikampowell.myshopify.com", "47b05d-aa.myshopify.com", "cdfa64-2.myshopify.com", "quiz-trail.myshopify.com", "nickoftime3.myshopify.com", "2c42f0.myshopify.com", "c4ac3b.myshopify.com", "ea2bb7-7b.myshopify.com", "shobputinzdoh.myshopify.com", "bebebydunja.myshopify.com", "destination-roll.myshopify.com", "hicapahub.myshopify.com", "3640aa-b4.myshopify.com", "faa1a1-4.myshopify.com", "roots-to-table.myshopify.com", "4f40bd-2.myshopify.com", "fennel-and-ginger.myshopify.com", "duo-nini-laundry.myshopify.com"]
  , Rc = ["lepage-shop.myshopify.com", "cowhides-direct.myshopify.com", "842dc1-2.myshopify.com", "6bdfce-6a.myshopify.com", "2cacec-6.myshopify.com", "lumerings.myshopify.com", "ad5bfe-41.myshopify.com", "a06aea-2.myshopify.com", "spluxwheel.myshopify.com", "the-cover-lounge.myshopify.com", "mptperformance.myshopify.com"]
  , Vc = ["once-upon-a-book-club.myshopify.com", "madeoftomorrow.myshopify.com"]
  , xn = ["style-bundle-au.myshopify.com", "lumerings.myshopify.com", "94844e-2.myshopify.com", "8c05c0-5.myshopify.com", "nickrivettsport.myshopify.com", "leatherique-australia.myshopify.com", "asrinventions.myshopify.com", "costlowboxes.myshopify.com"]
  , Ys = ["fa3a6d-3.myshopify.com", "mount-it-site.myshopify.com", "emblematic-creative.myshopify.com", "developecansandco.myshopify.com", "c37d5f-72.myshopify.com", "the-c0-op.myshopify.com", "1a3849-55.myshopify.com"]
  , En = ['.seven.columns.omega form[action$="/cart/add"] .ajax-submit.action_button.add_to_cart', '.seven.columns.omega form[action$="/cart/add"] .action_button.add_to_cart', 'form[action$="/cart/add"] .atc-btn-container .add_to_cart', ".shopify-product-form .add_to_cart", '.product-form-container form[action$="/cart/add"] .button.ajax-submit.action_button', '.seven.columns.omega form[action$="/cart/add"] .action_button.add_to_cart', '.six.columns.omega form[action$="/cart/add"] .action_button.add_to_cart', 'form[action$="/cart/add"] .btn-addtocart', ".product-form form .product-form__submit:not(.tpo_ignore)", ".product-form form .product-form__add-button", 'form[action$="/cart/add"] .product-form--add-to-cart', 'form[action$="/cart/add"] .btn--subtle-hover', 'form[action$="/cart/add"] #product-add-to-cart', 'form[action$="/cart/add"] #AddToCart', 'form[action$="/cart/add"] .button--large', 'form[action$="/cart/add"] .AddtoCart', 'form.product-buy-buttons--form[action$="/cart/add"] .product-buy-buttons--primary[data-item="secondary-button"]', 'button[aria-label="add to cart"]', 'button[type="submit"][name="add"][data-variant-id]', ".nm-easywholesale-add-to-cart-container .nm-wholesale-btn-add-to-cart", ".product__atc .button--addToCart", 'form[action$="/cart/add"] .product-addToCart.addToCart', 'form[action$="/cart/add"] input[type="submit"].add-to-cart-btn', 'form[action$="/cart/add"] .w-commerce-commerceaddtocartbutton.add-to-cart-button', 'form[action$="/cart/add"] product-buy-buttons-root .product-buy-buttons--primary', ".button.product-form__submit:not(.tpo_ignore)"]
  , er = {
    wrapper: [".sticky-add-to-cart__inner"],
    form: ['.sticky-add-to-cart__inner form[action*="/cart/add"]:not([id*="installment"])'],
    atcButton: [".product-form__mobile-sticky-button .product-form__btn", "product-sticky-bar buy-buttons button", ".m-sticky-addtocart .m-add-to-cart", ".hs-checkout-bar-add-to-cart.btn", ".sticky-add-to-cart__controls .ux-cart.button--add-to-cart", "#corner-sticky-atc-cta-button", ".tpo_sticky_add_to_cart_btn"]
}
  , Ku = [".product-info quantity-selector", ".product__info quantity-selector"]
  , Fo = window.TPOConfigs.theme.product.variantWrapper
  , Lt = window.TPOConfigs.settings || {}
  , ba = Lt?.selectorSettings ? JSON.parse(Lt.selectorSettings) : {
    productPageSelector: {},
    cartDrawerSelector: {},
    cartPageSelector: {},
    quickViewSelector: {},
    advanceSelectors: {}
}
  , An = ['form[action*="/cart"] [type="submit"][name="checkout"]:not(.tpo_ignore)', 'form[action*="/cart"] [name="checkout"]:not(.tpo_ignore)', ".cart__checkout-button.button:not(.cart__reset-button):not(.tpo_ignore)", "a.checkout-button.button:not(.tpo_ignore)", '.checkout-buttons a.button[href="/checkout"]:not(.tpo_ignore)', ".button-checkout#cart-checkout:not(.tpo_ignore)", 'a.btn[href="/checkout"]:not(.tpo_ignore)', ".actions button.btn-checkout:not(.tpo_ignore)", ".cms-btn-check:not(.tpo_ignore)", ".cart__footer--body .cart__checkout-button:not(.tpo_ignore)", ".cart-buttons__btn:not(.tpo_ignore)", "#CartDrawer-Checkout:not(.tpo_ignore)", '.checkout-button[name="checkout"]:not(.tpo_ignore)', "button#checkout:not(.tpo_ignore)", "button#CheckOut:not(.tpo_ignore)", "button#checkout-btn-card:not(.tpo_ignore)", ".w-commerce-commercecartcheckoutbutton:not(.tpo_ignore)", '[type="submit"][name="checkout"][form="cart"]:not(.tpo_ignore)', 'a.button[href="/checkout"]:not(.tpo_ignore)', ".upcart-checkout-button:not(.tpo_ignore)"]
  , zc = ["#cart-sidebar-checkout:not(.tpo_ignore)", "#CartDrawer-Checkout:not(.tpo_ignore)", "button#CheckOut:not(.tpo_ignore)", '.m-cart-drawer__inner [type="submit"][name="checkout"]:not(.tpo_ignore)', '.scd__checkout[type="submit"][name="checkout"]:not(.tpo_ignore)', ".w-commerce-commercecartcheckoutbutton:not(.tpo_ignore)", '[type="submit"][name="checkout"][form="cart"]:not(.tpo_ignore)', "#CartDrawer-Checkout:not(.tpo_ignore)", '.icartCheckoutBtnGroup button[name="icartCheckout"]:not(.tpo_ignore)', ".icart-checkout-btn:not(.tpo_ignore)", ".rebuy-cart__checkout-button:not(.tpo_ignore)"]
  , Mc = window.location.href
  , Xu = ""
  , Vs = ["gp-product-dynamic button", "form[action*='/cart/add'] .shopify-payment-button__button:not([disabled])", "form[action*='/cart/add'] .shopify-payment-button shop-pay-wallet-button", "form[action*='/cart/add'] .shopify-payment-button shopify-google-pay-button", "form[action*='/cart/add'] .shopify-payment-button shopify-apple-pay-button", "form[action*='/cart/add'] .shopify-payment-button shopify-paypal-button", ".tpo-custom_buy_it_now", ".ecom-product-single__buy_it_now_btn--checkout", ".m-product-form--wrapper a.buy-now_btn", ".main-product__form-buttons--buyitnow button.main-product__form-submit"]
  , B = typeof Shopify < "u" ? Shopify.shop : ""
  , Ja = window.location.hostname
  , $n = typeof Shopify < "u" ? Shopify : {}
  , gt = typeof Shopify < "u" && $n.theme && ($n.theme.schema_name || $n.theme.name) || ""
  , ey = !0
  , yf = ["TITLE", "TYPE", "VENDOR", "HANDLE"]
  , di = document.querySelector("form.preview-form")
  , zs = document.querySelectorAll(".easify-product-options")
  , ty = ["span[data-money-convertible]"]
  , wa = ['form[action*="/cart"] .cart__final-price.text-right.small--hide [data-cart-item-regular-price]', 'form[action*="/cart"] .cart-item__totals.right.small-hide .price.price--end:not(.cart-item__old-price):not(.tpo_ignore)', 'form[action*="/cart"] .cart-item__totals.right.large-up-hide .price.price--end:not(.cart-item__old-price):not(.tpo_ignore)', 'form[action*="/cart"] span.text-right[data-label="Total"]', 'form[action*="/cart"] .cart__table-cell.cart__table-cell--total.cart__table-cell--right-aligned .cart__price.cart__price--bold', 'form[action*="/cart"] .grid-item.one-half.medium-down--text-left.text-right .cart-original-price', 'form[action*="/cart"] .grid__item.two-thirds.text-right .cart__price', 'form[action*="/cart"] .cart__items .cart__item .cart__price:not(.tpo_ignore)', 'form[action*="/cart"] .grid__item.one-quarter.one-half.medium-down--one-third.text-right .h5', 'form[action*="/cart"] .text-right.small--hide [data-cart-item-line-price-container] .cart-item__original-price.cart-item__price', 'form[action*="/cart"] .cart-item__totals.right:not(.large-up-hide) .cart-item__price-wrapper .price.price--end:not(.cart-item__old-price):not(.tpo_ignore)', 'form[action*="/cart"] .cart__page .cart__item .cart__price:not(.tpo_ignore)', 'form[action*="/cart"] .cartitems .cart-item--inner .cart-item__total .money:not(.tpo_ignore)', 'form[action*="/cart"] .price_total .money > span:not(.tpo_ignore)', "cart-drawer line-item price-list span.money:not(.tpo_ignore)", "cart-drawer line-item price-list sale-price:not(.tpo_ignore)", 'form[action*="/cart"] .order-summary__body td:last-child span.money:not(.tpo_ignore)', 'form[action*="/cart"] .order-summary__body td:last-child:not(.tpo_ignore)', 'form[action*="/cart"] .cart__page .cart__item .cart__price:not(.tpo_ignore)', "cart-form .cart-item__price .cart-item__selling-price:not(.tpo_ignore)", ".previewCartItem-content .previewCartItem-price .price span[data-item-final-price-display]", ".cart-item .cart-item-value[data-item-price-with-quantity-display]", ".cart__item .cart__item__price:not(.tpo_ignore)", "line-item .price-list:not([class*='hidden']) .price:not(.price--compare)", "tr.line-item .price-list:not([class*='hidden']) .price:not(.price--compare)", 'form[action*="/cart"] .cart__items > div[data-js-product] div:last-child > .price > span', ".cart__product .o-layout__item.u-6\\/10.u-2\\/8\\@tab .cart-item__price .money > span", ".cart-collateral > .price", ".product-item-qty > .price", "[data-mczr='item_final_line_price-not-mczr']", ".pr_price_rw > .product-price", "#cart-items .cart-item .cart-item__total.price .price__current", ".cart__item--price .cart__price:not(.tpo_ignore)", ".CartItem__PriceList span[data-money-convertible]", ".ajaxcart-item__price .money:not(.tpo_ignore)", "span.cart-item__final-price:not(.tpo_ignore)", ".ajaxcart__product-price-wrapper .ajaxcart__price:not(.tpo_ignore)", "cart-remove-button ~ .price.product-price:not(.tpo_ignore)", ".cart-item__price .cart-item__price-item:not(.tpo_ignore)", ".cart-product__price span:not(.tpo_ignore)", ".cart-product__total-price:not(.tpo_ignore)", "tr .cart-price:not(.tpo_ignore)", ".tdf-cart-item-lp-p", ".line-item__line-price span:not(.tpo_ignore)", ".line-item__price.line-item__price--highlight:not([data-tpo])", ".line-item__price:not([data-tpo])", ".cart-item__price .money:not(.tpo_ignore)", ".t4s-cart-item-price:not(.tpo_ignore)", ".t4s-cart_meta_prices .t4s-cart_price:not(.tpo_ignore)", ".cart-item__totals .price.price--end:not(.cart-item__old-price):not(.tpo_ignore)", ".cart-totals .price.price--end:not(.cart-item__old-price) .ymq_item_original_line_price", ".cart__items__price .line__price:not(.tpo_ignore)", ".ajax-cart__item-line-price span[data-cart-item-regular-price]:not(.tpo_ignore)", ".cart-item__price strong:not(.tpo_ignore)", ".cart-item__total strong:not(.tpo_ignore)", ".scd-item__original_line_price", ".scd-item__original-price", ".cart-item__total .theme-money:not(.tpo_ignore)", ".price_total span.money:not(.tpo_ignore)", ".mini-cart__item-price .money:not(.tpo_ignore)", ".CartItem__Actions ~ .CartItem__LinePriceList .CartItem__Price.Price", ".bcpo-cart-item-line-price", ".cart-notification-product .amount", ".mini-cart__price-list", ".product-cart-item-price ins .amount", ".product-subtotal ins .amount", ".item.product.product-item .price:not(.tpo_ignore)", ".cart-item__total-price span.price:not(.tpo_ignore)", ".cart-item__totals .cart-item__price-wrapper span.price:not(.tpo_ignore)", ".cart__item__content .cart__price:not(.tpo_ignore)", ".totalPriceOfItemElementTPO", ".cart-item__total .cart-item__price:not(.tpo_ignore)", ".price.price--default .price__items span.price__regular:not(.tpo_ignore)", ".cart__price-wrapper .text-money .cart__price:not(.cart__price--compare) span.money", ".cart-item-line-prices .money.cart-item-line-price.cart-item-final-line-price:not(.tpo_ignore)", ".drawer-item__info .item-info__price span.money", ".cart-item__price span.money:not(.tpo_ignore)", ".cart-item__total span.money:not(.tpo_ignore)", ".cart__item-total.text-body:not(.tpo_ignore)", ".item__subtotal-price .tt-price.subtotal:not(.tpo_ignore)", ".ajax-cart__price:not(.tpo_ignore)", ".cart__total .money:not(.tpo_ignore)", ".mini-cart-item__details-right .mini-cart-item__price-wrapper .price--end:not(.tpo_ignore)", ".upcart-item-price", ".cart-item__totals .total-price > span:not(.tpo_ignore)", ".icart-product-price .transcy-money", ".icart-pg-item-total .total-cart-price .transcy-money", ".rebuy-money > span:not(.sr-only)", '.cart-items__price[headers="productTotal"] text-component']
  , Yu = ['form[action*="/cart"] .cart-item__totals.right.small-hide .cart-item__old-price', 'form[action*="/cart"] .cart-item__totals.right.large-up-hide .cart-item__old-price', 'form[action*="/cart"] .cart-item__totals.right:not(.large-up-hide) .cart-item__price-wrapper .cart-item__old-price', ".previewCartItem-content .previewCartItem-price .price .before-discount-price", "cart__price--strikethrough", ".line-item__price.line-item__price--compare", ".oldPriceOfCartItemElementTPO"]
  , Br = [".cart-subtotal .cart-subtotal__price", ".totals .totals__subtotal-value:not(.tpo-ignore)", ".totals .totals__total-value:not(.tpo-ignore)", ".grid__item.text-center.large-up--one-half.large-up--text-right .cart__subtotal.h3", ".cart__subtotal-wrapper .cart__subtotal[data-cart-total]", "p.h3.cart__subtotal span", ".cart-subtotal .h1.cart-subtotal--price small", ".grid__item.one-half.large--one-third .cart__subtotal", ".cart__subtotal .h5.cart__subtotal-price", ".cart__item-sub [data-subtotal]", ".cart__item-sub .cart__item-row", ".cart-drawer .subtotal .theme-money", ".cart-subtotal-row .product-price", ".cart__item-sub .cart__item-row", ".totals .totals__total-value:not(.tpo-ignore)", ".cart-total .cart-final-total .cart-subtotal .money", ".cart-title-total .money", ".cart-recap span:nth-child(2):not(.cart-recap__amount-saved):not(.__affirm-logo)", ".cart-drawer__button-price > span.money", ".cart-drawer__button-price", ".previewCartTotals.total .previewCartTotals-value", ".cart-total-value[data-cart-total-value]:not(.tpo_ignore)", ".summary > .total > .price", "span[data-cart-total].cart__total__money", "div.cart__item-sub.cart__item-row.cart__item--subtotal > div.bcpo-cart-original-total span", ".mini-cart__total-price", ".tpo_cart-drawer-checkout-price", ".subtotal .js-total-price", ".cart_total .product-price", ".ajaxcart__subtotal .money", ".ajaxcart__footer-price .ajaxcart__subtotal", ".cart-notification-popup-item__price-item", ".cart-subtotal .cart-subtotal__totals-price", ".cart-total-price .cart-total-price__value", ".tpo_total-price_element", ".cart-original-total.cart-price", ".tdf-cart-total-parent", ".cart-recap__price-line-price", ".cart__footer-total .money", ".t4s-cart__totalPrice", ".cart_btns .cart_total span:last-child", ".totals.cart_total span:last-child", "span[data-cart-final]", ".cart__total strong.text-size--heading", ".cart__total.cart__details--row strong", ".cart_subtotal.js-cart_subtotal span.money", ".cart-cost .money", ".cart-drawer__total_text-button", ".mini-cart-bottom .cart-subtotal span", ".cart-total .price .amount", ".tpo_cart_subtotal", ".cart-total .subtotal .amount.price-container", ".minicartpro-summary .amount.price-container", ".cart__total .cart__total__price:not(.tpo_ignore)", ".cart-item__total-content .cart-item__price", ".cart-drawer__total span[data-price]", ".cart__total-price-info .cart__subtotal span.money", ".cart-cost span.money", ".header-minicart-footer-wrapper .sticky-menu-button-checkout-price.money", ".cart-drawer__cart-total span.money", ".mini-cart-total .js-cart-total", ".ajax-cart__subtotal .money", ".mini-cart__subtotal-wrapper .mini-cart__subtotal .totals .totals__subtotal-value", ".cart-summary__line-items #cart-total-price", ".cart-total-price", ".rebuy-cart__flyout-subtotal-amount", ".cart-subtotal:not(:has(.amount))"]
  , Tn = [".cart-subtotal .cart-subtotal__price", ".totals .totals__subtotal-value:not(.tpo-ignore)", ".totals .totals__total-value:not(.tpo-ignore)", ".grid__item.text-center.large-up--one-half.large-up--text-right .cart__subtotal.h3", ".cart__subtotal-wrapper .cart__subtotal[data-cart-total]", "p.h3.cart__subtotal span", ".cart-subtotal .h1.cart-subtotal--price small", ".grid__item.one-half.large--one-third .cart__subtotal", ".cart__subtotal .h5.cart__subtotal-price", ".cart__item-sub [data-subtotal]", ".cart__item-sub .cart__item-row", ".cart__item-sub .cart__item-row", ".totals .totals__total-value:not(.tpo-ignore)", ".cart-total .cart-final-total .cart-subtotal .money", ".cart-title-total .money", ".cart-recap span:nth-child(2):not(.cart-recap__amount-saved):not(.__affirm-logo)", ".previewCartTotals.total .previewCartTotals-value", ".cart-total-value[data-cart-total-value]:not(.tpo_ignore)", ".total > .label~.price", ".cart__total span[data-cart-total].cart__total__money", "div.cart__item-sub.cart__item-row.cart__item--subtotal > div.bcpo-cart-original-total span", ".cart__total-container > span:last-child", ".cart__sidebar .cart__subtotal > h3", ".info-checkout .item.total", '[data-mczr="cart_total_price"]', ".cart_total .product-price", ".subtotal .cart_subtotal .money > span", ".totals .totals__subtotal-value.product-price", ".cart-subtotal .cart-subtotal__totals-price", ".cart-total-price .cart-total-price__value", ".cart-original-total.cart-price", ".tdf-cart-total-parent", ".cart-recap__price-line-price", ".cart__footer-total .money", ".t4s-cart__totalPrice", ".cart_btns .cart_total span:last-child", ".totals.cart_total span:last-child", ".cart__total strong.text-size--heading", ".subtotal .theme-money", ".cart__total.cart__details--row strong", ".cart_subtotal.js-cart_subtotal span.money", ".cart__total cart-total.money .money", ".Cart__Recap .Cart__Total span", ".tpo_cart_subtotal", ".cart-cost .money", ".subtotal .subtotal__price", ".header-top__cart-button .cart-button__total.money", ".checkout-sidebar .cart-subtotal .ymq_cart_total_price", ".cart-items__totals .cart-items__total span[data-price]", ".cart__total-price-info .cart__subtotal span.money", ".cart-cost span.money", ".cart-total-row .cart-total-row-value.money", ".sticky-menu-container .sticky-menu-button-checkout-price.money", ".cart-template__cart-total .ymq_cart_total_price", "p#CartSubtotal", "tr#grandtotal td", ".cart__subtotal-container .cart__subtotalcart__subtotal .money", ".cart-total-price", ".icart-pg-checkout .icart-pg-discount-price .transcy-money"]
  , Ic = [".previewCartTotals.subTotal .previewCartTotals-value", 'form[action*="/cart"] .cart-total-subtotal .cart-total-value', "div.cart__item-sub.cart__item-row.cart__item--subtotal > div.bcpo-cart-original-total span", ".cart__footer-total .money > span", ".info-checkout .item.subtotal", "#cart-summary > div.flex.justify-between.items-center.mt-6 > p:not(.tpo_ignore)", ".cart__footer-page span[data-subtotal]", ".sf-cart-subtotal__price", ".scd__subtotal-price", ".subtotal .subtotal__price", ".cart__summary-totals .cart__total-container .cart__summary-item.cart__total .cart__total-value[data-cart-subtotal]"]
  , iy = [".btn-secondary.update-cart", ".btn--secondary.update-cart", '.cart__actions input[name="update"]', '.cart__footer button[name="update"]', ".btn--secondary.cart__update", ".btn-update-qty.active-update", ".ajax-cart__item-update--no-js"]
  , jo = [".cart-items__quantity .cart-items__remove", ".cart-item__quantity .cart-item__quantity-wrapper cart-remove-button > a", ".cart-item__quantity .cart-item__quantity-wrapper cart-remove-button > button", ".small--text-left .cart__product-information .cart__remove:not(.tpo_ignore)", ".small--text-left .cart-item__remove:not(.tpo_ignore)", ".cart-item__totals.right cart-remove-button", ".con_row .remove_item_button", ".item-details .three .remove_item_multi ", '.cart-page form[action*="/cart"] .ajax-cart__cart-items .ajax-cart__cart-item .ajax-cart__item-remove ', ".mini-products-list .remove", "quantity-popover cart-remove-button", ".cart__item__remove[data-item-remove]", ".previewCartItem-remove", "a.cart-remove", "li.item > a.btn-remove", ".cart--remove a.remove", ".cart-remove a", ".cart__remove:not(.tpo_ignore)", "line-item-quantity > a[href*='quantity=0']", ".cart__product .cart__remove-wrapper > a", ".cart-item__remove-link", ".each-item > .delete-item > a", ".js-remove-item.remove", ".btn.cart_remove", ".ajaxcart__qty-remove", '.w-commerce-commercecartiteminfo a[data-node-type="cart-remove-link"]', ".cart__items__remove", "a.CartItem__Remove", "cart-remove-button .btn-remove", "cart-remove-button", ".ajaxcart__remove", ".cart-product__remove", ".ajax-cart__item-remove", ".t4s-mini_cart__remove", ".t4s-page_cart__remove", ".cart-item__actions .remove", ".scd-item__remove", ".cart-item__remove:not(.tpo_ignore)", ".cart__remove-btn", ".cart__product-remove", ".cart-product-info .remove", ".product-cart-item-info > a.remove", ".product-quantity > a.remove", ".quantity__remove", ".action.cart-close.btn-remove", "cart-remove-button button.link", "cart-remove-button > a", "a.ajax-cart__item-remove--no-js", "button.cart-item-remove", ".item-info__remove", ".btn.js-remove-mini-cart", ".cart__row a.small", ".cart-remove-mobile", ".cart-item--remove-link", ".ajax-cart__delete", ".icart-delete-btn", ".icart-pg-qty-delete-btn", ".rebuy-cart__flyout-item-remove", ".cart-items__remove"]
  , Xo = ["#CartDrawer.drawer", "#CartDrawer", "#cart-drawer", "cart-slideout #MiniCartSlideout", "#js_cart_popup", "#shopify-section-cart-drawer", "#drawer-cart", "#halo-cart-sidebar", "#sidebar-cart.Drawer", ".right-drawer-vue", ".js-drawer.drawer", "#slideout-ajax-cart", "#t4s-mini_cart", "sidebar-drawer#site-cart-sidebar", "#cart-notification", "#mini-cart .mini-cart__inner", "#cdz-popup-area", ".drawer.drawer--cart", ".minicart", ".site-main.header-minicart", ".site-header__cart .mini-cart-content", ".w-commerce-commercecartform", "#theme-ajax-cart", ".mini-cart__contents", ".icart-cart-main", "#CartPopup", "form.mini-cart__sidebar", ".icart-slider-drawer", "#rebuy-cart .rebuy-cart__flyout", "cart-drawer-component.cart-drawer cart-items-component.cart-items-component"]
  , za = ["cart-drawer-items", "cart-drawer > .cart-drawer__items", ".cart-drawer__items", ".cart-drawer__body", ".js-cart-inner", ".cart__table-row", ".ajax-cart__cart-items", "#CartDrawer-CartItems", ".cart__items", ".w-commerce-commercecartitem", ".cart_items .mini-cart__item", ".cart-notification-products .cart-notification-product", ".item.product.product-item", "#header-minicart-drawer .cart-item", ".cart-drawer__item", ".mini-cart-item", ".icart-new-box", ".upcart-product-item", ".m-cart-drawer__items", ".cart-items__wrapper"]
  , Ln = ["cart-items", ".cartitems", ".cartContainer .cartContent", ".shopify-section--main-cart", ".cart__items__wrapper .cart__items", "#MainContent > div.page-width.page-width--cart.page-content", "#CartPageForm > div.cart__page .cart__page-col", ".line-item-table__list", ".shoppingcart-content > .wrap-cart", ".cart-items__items", ".cart__table-body .cart__table-row", ".cart-wrapper__inner", "#cart .cart__items", ".cart__products", "tbody[data-cart-line-items]", ".mini-products-list.minicart-items.product-items", ".cart-template__items .cart-item:not(.cart-item--titles)", ".icart-pg", ".cart-items-container", ".icart-pg-cart-content", '[data-template="cart"] cart-items-component.cart-items-component .cart-page']
  , ji = ['tbody:not(.tpo_table-body) > tr:not([class="title"]):not(.cart-total):not(.cart-subtotal):not(.order-total):not(.tpo_table-body > *)', "div.cart__item:not(.cart__item--headers)", ".cartitems--list:not(.cartitems > *)", ".cart-drawer__items line-item", ".cart-drawer__items tr", "li.previewCartItem.clearfix", ".cart-item:not(td):not(li):not(.cart-item--titles):not(.col):not(.tpo_ignore)", "li.cart-product-item", "#CartDrawerForm:not(form)", ".cart__item:not(.cart__item--headers)", "line-item:not(.tpo_ignore)", "tr.line-item", ".cart__product", ".cart__items__row", ".Cart__ItemList .CartItem:not(.CartUpsell__ProductItem)", ".cart__table-body .cart__table-row", ".t4s-page_cart__item", ".t4s-mini_cart__item", ".cart-items .cart-item:not(.cart-item--titles):not(.col):not(.tpo_ignore)", ".ajax-cart__cart-items .ajax-cart__cart-item", "#cart .cart__items .cart__item", ".cart-form__items .cart-form-item", ".w-commerce-commercecartitem", ".cart__wrapper .cart__item", ".cart_items .mini-cart__item", ".cart-notification-products .cart-notification-product", ".mini-cart__line-item", "#Cart-Drawer .product-cart-item", ".drawer__cart-items-wrapper .cart-item", ".minicart__entry", ".cart-items__products", ".cart-template__items .cart-item:not(.cart-item--titles)", ".cart-drawer__item", ".mini-cart-item", "tr.cart__row", "li.cart-item:not(.tpo_ignore)", ".ajax-cart__product", ".cart__card.container", ".upcart-product-item", ".icart-bottom-new-checkout.ic-cart-item", ".icart-pg-cart-item.ic-cart-item", ".rebuy-cart__flyout-item", ".cart-items__table tbody tr.cart-items__table-row"]
  , va = ["dl", ".cart__item--name", "cart-item--content", "div.line-item-info", ".cart-item-properties", ".cart__item__meta", "div.cart__item-details .cart__item--properties", ".cart__item-details .cart__item-title", ".line-item__info .product-item-meta", ".cart-item__description .lightly-spaced-row .small-text", ".cart__items__meta", ".CartItem__PropertyList", ".cart-product__desc", ".cart-item .cart-title", ".line-item__meta:not([data-tpo])", ".t4s-cart_meta_propertyList", ".cart-item__details dl", ".cart-item__content", ".cart-form-item__price-title-variants", ".cart__product-options", ".mini-cart__item-properties", ".tpo_properties_wrapper", ".cart-product-info", ".line-item__property-list", ".mini-cart__property-list", ".product-item .product-info", ".cart-item-information-row", ".cart-item__info .cart-info", ".mini-cart-meta", ".icart-product-properties", ".cart-item__title"]
  , Cn = {
    CART: ["#main-cart-items .cart-item__media .cart-item__image-container .cart-item__image", ".cart__item .cart__image .image-wrap img"],
    DRAWER: [".drawer__cart-items-wrapper .cart-items .cart-item .cart-item__media .cart-item__image", ".cart__item .cart__image .image-wrap img", ".cart-items__media .cart-items__media-container .cart-items__media-image"]
}
  , Fc = [".quantity__input[name*='quantity']:not(.tpo_option-input):not(.tpo_ignore)", "input[name*='quantity']:not(.tpo_option-input):not(.tpo_ignore)"]
  , so = ["quantity-input:not(.tpo_ignore)", 'input[aria-label="Quantity"]:not(.tpo_ignore)', "input.form-input.quantity:not(.tpo_ignore)", ".quantity > input.item-quantity:not(.tpo_ignore)", ".cart--quantity input:not(.tpo_ignore)", ".cart-quantity input:not(.tpo_ignore)", ".cart__item__quantity-field:not(.tpo_ignore)", "line-item-quantity:not([class*='hidden']) > .quantity-selector:not(.tpo_ignore)", 'div[data-js-product] input[name="updates[]"]:not(.tpo_ignore)', ".js-qty__num:not(.tpo_ignore)", ".js-qty__num .js-qty-input:not(.tpo_ignore)", ".input-text.qty.js_qty:not(.tpo_ignore)", ".qty.cart__qty-input:not(.tpo_ignore)", ".ajaxcart__qty-num:not(.tpo_ignore)", ".cart-item-quantity__input:not(.tpo_ignore)", ".cart-quantity input:not(.tpo_ignore)", "input.quantity-selector__value:not(.tpo_ignore)", ".t4s-quantity-input:not(.tpo_ignore)", ".ajax-cart__qty-input:not(.tpo_ignore)", ".qty.qty-selector.product__quantity:not(.tpo_ignore)", ".scd-item__qty_input:not(.tpo_ignore)", ".w-commerce-commercecartquantity:not(.tpo_ignore)", ".product-quantity-box input.quantity:not(.tpo_ignore)", ".cart__qty-input:not(.tpo_ignore)", ".QuantitySelector__CurrentQuantity:not(.tpo_ignore)", ".cart__product-qty:not(.tpo_ignore)", ".quantity-input:not(.tpo_ignore)", 'quantity-selector input[name="updates[]"]:not(.tpo_ignore)', ".quantity__change .quantity__number:not(.tpo_ignore)", ".item-qty.cart-item-qty:not(.tpo_ignore)", ".ajax-cart__item-quantity input.ajax-cart__qty-input:not(.tpo_ignore)", ".quantity--input__input:not(.tpo_ignore)", ".cart-item__quantity quantity-select input.quantity__input:not(.tpo_ignore)", ".cart-item__quantity-wrapper .quantity:not(.tpo_ignore)", ".item-info__quantity-wrapper ", "input.js-qty__input:not(.tpo_ignore)", ".icart-qty-picker:not(.tpo_ignore)", ".cart-item__quantity .quantity input:not(.tpo_ignore)", ".cart-items__quantity quantity-selector-component:not(.tpo_ignore)"]
  , yo = ["quantity-input:not(.tpo_ignore)", "input.quantity__input:not(.tpo_ignore)", "input.form-input.quantity:not(.tpo_ignore)", "quantity-selector input:not(.tpo_ignore)", ".cart__item-sub .js-qty__wrapper input:not(.tpo_ignore)", ".cart__item__quantity-field:not(.tpo_ignore)", 'input[pattern="[0-9]"]:not(.tpo_ignore)', ".input-text.js_qty:not(.tpo_ignore)", ".cart-item__quantity-input:not(.tpo_ignore)", 'input.ajaxcart__qty-num[name="updates[]"]:not(.tpo_ignore)', "input.QuantitySelector__CurrentQuantity:not(.tpo_ignore)", ".counter.input-group input.inputCounter:not(.tpo_ignore)", ".ajax-cart__qty-input:not(.tpo_ignore)", ".quantity-selector__input:not(.tpo_ignore)", ".js-qty__num:not(.tpo_ignore)", ".t4s-quantity-input:not(.tpo_ignore)", ".qty.qty-selector.product__quantity:not(.tpo_ignore)", ".scd-item__qty_input:not(.tpo_ignore)", ".w-commerce-commercecartquantity:not(.tpo_ignore)", ".product-quantity-box input.quantity:not(.tpo_ignore)", ".item-qty.cart-item-qty:not(.tpo_ignore)", ".quantity--input__input:not(.tpo_ignore)", ".cart-item__quantity-wrapper .quantity:not(.tpo_ignore)", ".item-info__quantity-wrapper:not(.tpo_ignore)", ".js-qty .js-qty__input:not(.tpo_ignore)", ".tpo_quantity_hidden", ".quantity-input:not(.tpo_ignore)", ".icart-qty-picker:not(.tpo_ignore)", ".upcart-product-quantity-input:not(.tpo_ignore)", ".cart-item__quantity .quantity input:not(.tpo_ignore)", ".rebuy-cart__flyout-item-quantity-widget-label:not(.tpo_ignore)", ".cart-items__quantity quantity-selector-component:not(.tpo_ignore)"]
  , oy = [".quantity__input[name*='quantity']"]
  , bo = [".quantity__button.no-js-hidden:not(.qtyremove):not(.tpo_ignore)", "button.js-qty__adjust:not(.tpo_ignore)", ".qtyField .qtyBtn:not([rv-text]):not(.tpo_ignore)", ".quantity.buttoned-input .notabutton:not(.tpo_ignore)", "button.js-qty__adjust:not(.tpo_ignore)", ".quantity-selector__wrapper .quantity-selector__button.quantity-selector__button--minus:not(.tpo_ignore)", ".quantity-selector__wrapper .quantity-selector__button.quantity-selector__button--plus:not(.tpo_ignore)", "line-item-quantity:not([class*='hidden']) > quantity-selector > a:not(.tpo_ignore)", "a.btn-quantity:not(.tpo_ignore)", ".cart-quantity .qty-group a:not(.tpo_ignore)", ".cart__item__quantity button[data-quantity-button]:not(.tpo_ignore)", "line-item-quantity:not([class*='hidden']) > .quantity-selector > a:not(.tpo_ignore)", "button[name='minus']:not(.tpo_ignore)", "button[name='plus']:not(.tpo_ignore)", ".group-quantity-button > a", "button.ajaxcart__qty-adjust.ajaxcart__qty--minus:not(.tpo_ignore)", "button.ajaxcart__qty-adjust.ajaxcart__qty--plus:not(.tpo_ignore)", ".quantity__wrapper > .quantity__button:not(.tpo_ignore)", ".CartItem__QuantitySelector .QuantitySelector .QuantitySelector__Button", "quantity-component quantity-btn", ".counter.input-group .inputCounter__btn", "button.quantity-selector__button", ".t4s-quantity-selector.is--minus:not(.tpo_ignore)", ".t4s-quantity-selector.is--plus:not(.tpo_ignore)", ".ajax-cart__qty-control--down:not(.tpo_ignore)", ".ajax-cart__qty-control--up:not(.tpo_ignore)", ".qty-button.qty-minus:not(.tpo_ignore)", ".qty-button.qty-plus:not(.tpo_ignore)", ".scd-item__btn", ".cart-item__quantity .quantity > a", ".product-minus", ".product-plus", ".qty-container .qty-adjust", "quantity-selector button", ".quantity__change > a", ".quantity--input__button", ".cart-item-quantity .quantity-decrement:not(.tpo_ignore)", ".cart-item-quantity .quantity-increment:not(.tpo_ignore)", ".quantity--minus:not(.tpo_ignore)", ".quantity--plus:not(.tpo_ignore)", ".quantity-minus:not(.tpo_ignore)", ".quantity-plus:not(.tpo_ignore)", ".icart-minus:not(.tpo_ignore)", ".icart-plus:not(.tpo_ignore)", ".icart-pg-minus:not(.tpo_ignore)", ".icart-pg-plus:not(.tpo_ignore)", ".upcart-product-quantity-minus:not(.tpo_ignore)", ".upcart-product-quantity-plus:not(.tpo_ignore)", ".rebuy-cart__flyout-item-quantity-widget-button:not(.tpo_ignore)"]
  , go = ["span.price-item--last:not(.tpo_ignore)", "span.price-item--regular:not(.tpo_ignore)", ".cart-item__name ~ .product-option > span:not(.tpo_ignore)", ".cart-item__name ~ .product-option:not(.tpo_ignore)", ".product-detail .price-container .price-area .price .current-price.theme-money", ".product__info-wrapper .price-item.price-item--regular:not(.tpo_ignored) .money", ".product__price:not(.product__price--compare) .price__current .money:not(.tpo_ignore)", ".price-list > span.price:not(.tpo_ignore)", "span.price-item.price-item--regular:not(.tpo_ignore)", ".product-info sale-price:not(.tpo_ignore)", 'span.pr_price > span[id*="ProductPrice"]:not(.tpo_ignore)', ".ProductMeta__PriceList span.ProductMeta__Price", ".product-block--price span.product__price:not(.product__price--compare):not(.tpo_ignore)", ".price__current .money:not(.tpo_ignore)", "#product-price .product-price:not(.tpo_ignore)", ".product-price span.product-price--original:not(.tpo_ignore)", ".product-single__price-number .money:not(.tpo_ignore)", ".product-info__price .price__default .price__current:not(.tpo_ignore)", ".price-item.price-item--sale:not(.tpo_ignore)", ".tpo_product_price_element", ".price-list.price--highlight > span", ".product-single__price.product-price.price-box:not(.tpo_ignore)", ".price-container__price span.price-container__price:not(.tpo_ignore)", ".product-single__price:not(.tpo_ignore)", ".product-price .product-price__current-price:not(.tpo_ignore)", ".tt-price > .new-price:not(.tpo_ignore)", 'product-price div[ref="priceContainer"] .price:not(.tpo_ignore)', "gp-product:not(.gp-sticky):not(.gp-carousel) gp-product-price .gp-price:not(.gp-product-compare-price)"]
  , il = ["s.price-item.price-item--regular:not(.tpo_ignore)", ".price__compare-at .money", ".product-block--price .product__price--compare", ".was-price.theme-money", "del > span.amount", ".price.price--compare > span", ".tpo_product_old_price_element", "s.price__was"]
  , Yt = [".product-card-wrapper:not(.tpo_ignore)", 'form[action="/cart/add"] [data-pf-type="Column"]', 'form[action="/cart/add"] .item-content:not(.tpo_ignore)', ".product-details-wrapper:not(.tpo_ignore)", "product-info:not(.tpo_ignore)", "product-card:not(.tpo_ignore)", ".product-info:not(.tpo_ignore)", ".product__info:not(.tpo_ignore)", ".wrap-product-info:not(.tpo_ignore)", ".productitem[data-product-item-content]", ".productView-details .productView-product:not(.tpo_ignore)", ".product__sale-box.product__info-box:not(.tpo_ignore)", ".Product__InfoWrapper .Product__Info:not(.tpo_ignore)", ".product-details:not(.tpo_ignore)", ".product-form[data-product-id]:not(.tpo_ignore)", ".product-single__meta:not(.tpo_ignore)", "#product-description", ".grid-product__content", ".product-single__box", ".product__info-wrapper", ".product-information:not(.tpo_ignore)", ".product-block-list__item.product-block-list__item--info", ".product-info-main:not(.tpo_ignore)", ".card-product:not(.tpo_ignore)", ".product-information--inner", ".product-single__info-wrapper", ".tt-product-single-info", ".product-converter__content:not(.tpo_ignore)", "gp-product:not(.gp-sticky):not(.gp-carousel)"]
  , tr = [".cart__item-details:not(.tpo_ignore)", ".cart-item__details:not(.tpo_ignore)", ".cart-item-properties:not(.tpo_ignore)", "div.line-item-info:not(.tpo_ignore)", ".cart__item__info .cart__item__meta:not(.tpo_ignore)", ".cart-item--content:not(.tpo_ignore)", ".product-item-meta__property-list:not(.tpo_ignore)", ".wrap_item_cart dl", "ul.product-details:not(.tpo_ignore)", ".cart-item__title:not(.tpo_ignore)", ".cart-items__details"]
  , Xa = ["li:not(.tpo_ignore)", "figure", ".flickity-viewport > div > div", ".flickity-viewport .product__media-item", ".splide__list .splide__slide", ".product__thumb-item", "button.product-gallery--media-thumbnail.product-gallery--image-thumbnail", ".image-thumbnail.product-single__thumbnails-item.js-thumb-item", ".slick-list .slick-track li.slick-slide", ".product-thumb-wrap .swiper-wrapper .swiper-slide", ".pmslider-dots_container .pmslider-dots_dot-wrapper", ".product-gallery__thumbnail", ".lSSlideOuter .view-more-list .lslide", ".pf-media-slider div", ".main-product__media-thumbs-list .main-product__media-thumbs-item", ".product-single__thumbnail-item", ".prThumb.product-single__thumbnails-item", ".media__thumb", ".slideshow-controls__thumbnails .slideshow-control"]
  , ol = []
  , al = []
  , gf = []
  , bf = []
  , Jc = ["5a75b6-6.myshopify.com", "79e519-2.myshopify.com", "94844e-2.myshopify.com", "ofeksjudaica.myshopify.com"]
  , wf = ["lowens-little-treasures.myshopify.com", "melanie-jayne-com-au.myshopify.com", "snapemaltings.myshopify.com", "a53efb.myshopify.com", "ren-jewelry-4772.myshopify.com", "502c73-2.myshopify.com", "iboxspring.myshopify.com", "aaceeb-2.myshopify.com", "f6991b-2.myshopify.com", "039f1d-2.myshopify.com", "7cc67c.myshopify.com", "fireflybazaartx.myshopify.com", "e639ab.myshopify.com"]
  , vf = ["a53efb.myshopify.com", "a553aa-2.myshopify.com", "college-jewelry.myshopify.com", "hannahchobeauty.myshopify.com"]
  , Sf = ["the-f3-gear-store.myshopify.com", "ren-jewelry-4772.myshopify.com", "pet-on-canvas.myshopify.com", "1c30a9-3.myshopify.com", "272d29.myshopify.com", "d2d521-2.myshopify.com", "classyironworks.myshopify.com", "ba1d4b.myshopify.com", "ohmollydress.myshopify.com", "55361c-bc.myshopify.com", "eenie-meenie-mine.myshopify.com", "3394c3-2.myshopify.com", "classyironworks.myshopify.com", "de2962-2.myshopify.com", "cf463b-3.myshopify.com", "mastergrade-hobbies-inc.myshopify.com", "66c988-2.myshopify.com", "confetticom.myshopify.com", "biaseditions.myshopify.com"]
  , xf = ["creativelykaty.myshopify.com", "a553aa-2.myshopify.com", "shop-living-gardens.myshopify.com", "pet-on-canvas.myshopify.com", "fratrings.myshopify.com", "ringsforchamps.myshopify.com", "ad7dbd-2.myshopify.com", "sayitwithdiamonds-com.myshopify.com", "55361c-bc.myshopify.com", "acropad.myshopify.com", "flightcell.myshopify.com", "oppastore-rashmi.myshopify.com"]
  , ay = ["66f2b7.myshopify.com", "noallani.myshopify.com", "whelan-wellness-merch.myshopify.com", "0eeaa5.myshopify.com", "526942-3.myshopify.com", "62df50.myshopify.com", "f7eadb-56.myshopify.com"]
  , Qc = ["initial-tiles.myshopify.com", "pretty-fireplaces.myshopify.com", "jis-boutique.myshopify.com", "embroplacestore.myshopify.com", "confetticom.myshopify.com", "15f2b9-71.myshopify.com", "3ccede-0d.myshopify.com"]
  , ry = ["oliprikcph.myshopify.com", "nqijpq-dq.myshopify.com", "0dmaei-23.myshopify.com"]
  , Cf = ["net-development.myshopify.com", "pkdotbiz.myshopify.com"]
  , kf = ["anh-27-dev.myshopify.com"]
  , Ef = []
  , $f = []
  , Tf = !1
  , Lf = []
  , Of = []
  , Pf = []
  , Af = []
  , Qa = Cf.includes(B)
  , Zs = kf.includes(B)
  , Gc = Ef.includes(B)
  , Kc = $f.includes(B)
  , qf = TPOConfigs?.settings?.livePreviewShowPreviewProperties === "notActive" || Lf.includes(B)
  , Eo = Of.includes(B)
  , kn = Pf.includes(B)
  , ny = TPOConfigs?.settings?.livePreviewShowProductImageWithOptionPreview === "notActive"
  , Go = Af.includes(B)
  , sy = ["pkdotbiz.myshopify.com"]
  , ly = sy.includes(B)
  , cy = ["79dd1a-48.myshopify.com", "7b9ee9-61.myshopify.com", "mikreative.myshopify.com", "the-meter-box.myshopify.com", "jd-customs-usa.myshopify.com", "6e8b56.myshopify.com", "intersport-kuhn.myshopify.com", "oneworld-memorials.myshopify.com", "ac2cea-2.myshopify.com", "73836b-3.myshopify.com", "playr-fit-teamwear.myshopify.com", "3156cc-5.myshopify.com", "www-sinclo-com-au.myshopify.com", "www-smocksandfrocks-co-uk.myshopify.com", "embroplacestore.myshopify.com", "77d582-83.myshopify.com", "eenie-meenie-mine.myshopify.com", "the-couture-cushion.myshopify.com", "easify-product-options.myshopify.com", "barrier-boss.myshopify.com", "home-themedhome.myshopify.com", "leatherexpressions.myshopify.com", "943925-c1.myshopify.com", "04afea-3.myshopify.com", "dab95a-2.myshopify.com", "5324bd.myshopify.com", "29b7f4-ea.myshopify.com", "7e2dfe.myshopify.com", "b2c4cd-d7.myshopify.com", "carlitos-handmade-de.myshopify.com", "a88723-60.myshopify.com", "rofielty.myshopify.com", "8a56ab-4.myshopify.com", "luffleberry.myshopify.com", "index-bindery-and-stationery.myshopify.com", "cakewarehouse-co-nz.myshopify.com", "251263-43.myshopify.com", "69aa90-3.myshopify.com", "rasicaljp.myshopify.com", "classichound.myshopify.com", "dc5116-83.myshopify.com", "bloomthis.myshopify.com", "raceline-digital-7369.myshopify.com", "g1ki1p-q0.myshopify.com", "silver-supermarket.myshopify.com", "houndtees.myshopify.com"]
  , Js = cy.includes(B)
  , Qs = ""
  , py = [".product-form__buttons"]
  , Dc = "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/flatpickr.min.css?v=1742204346"
  , dy = "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/flatpickr.js?v=1742044448"
  , uy = "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/luxon.min.js?v=1742204347"
  , fy = "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/math.min.js?v=1742044449"
  , Zu = "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/quill.snow.css?v=1742204347"
  , ef = "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/swiper-bundle.min.css?v=1742204347"
  , my = "https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.7.1/nouislider.min.css"
  , _y = "https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.7.1/nouislider.min.js"
  , Ya = document.getElementsByTagName("head")[0]
  , hy = document.getElementsByTagName("body")[0]
  , Do = "/";
typeof Shopify < "u" && typeof Shopify.routes < "u" && (typeof Shopify.routes.root < "u" ? Do = Shopify.routes.root : typeof Shopify.routes.root_url < "u" && (Do = Shopify.routes.root_url));
var yy = [".right-drawer-vue:not(.tpo_ignore)", "quick-view-modal:not(.tpo_ignore)"]
  , Xc = ["quick-add-modal:not(.tpo_ignore)", "quick-buy-modal:not(.tpo_ignore)", ".modal[data-modal-container]:not(.tpo_ignore)", "quick-view-modal:not(.tpo_ignore)", ".modal--quick-shop:not(.tpo_ignore)", "#halo-quick-view-popup:not(.tpo_ignore)", "#Product-Drawer:not(.tpo_ignore)", "#quick-add-modal-content:not(.tpo_ignore)"]
  , On = []
  , rl = ["modal-opener:not(.tpo_ignore)", ".quick-add-wrapper:not(.tpo_ignore)", "product-card .product-card__quick-add-button[type='button']:not(.tpo_ignore)", ".productitem--action-trigger:not(.tpo_ignore)", "quick-view-modal-opener:not(.tpo_ignore)", ".quick-product__btn:not(.tpo_ignore)", ".quickview-icon:not(.tpo_ignore)", "quick-view:not(.tpo_ignore)", ".quick-add__button--choose:not(.tpo_ignore)", ".product-item__quick-form button.button:not(.tpo_ignore)", ".product-card .quick-view__button:not(.tpo_ignore)"]
  , Pn = []
  , tf = ["button", "a"]
  , Yc = [".product-details-wrapper", ".product__info-wrapper", "quick-buy-drawer.drawer:not(.tpo_ignore)", "body > quick-view.quick-view product-info:not(.tpo_ignore)"]
  , nl = []
  , Zc = ["quick-buy-drawer.drawer:not(.tpo_ignore)", "body > quick-view.quick-view:not(.tpo_ignore)"]
  , of = []
  , ep = ['quick-buy-drawer.drawer form[action="/cart/add"]:not(.tpo_ignore)', 'body > quick-view.quick-view .product__info .product-form-wrapper form[action="/cart/add"]:not(.tpo_ignore)']
  , af = []
  , tp = ["quick-view.quick-view .easify-product-options:not(.tpo_ignore)"]
  , rf = []
  , ip = []
  , op = ["quantity-input .quantity__button:not(.tpo_ignore)", ".quantity-selector .button"]
  , Za = [".cart-drawer .header-actions__action", ".section-header a.cart-link", ".cart__toggle", ".header__icon-list a[aria-controls='mini-cart']", ".navlink[data-drawer-toggle='drawer-cart']", ".js-drawer-open-right-link", ".header__cart.cart-open-trigger", "#cartTotal", "#cart-icon-bubble", ".js-mini-cart-trigger.js-slideout-open", ".js-drawer-open-cart", "#HeaderCartTrigger", '[data-drawer-toggle="drawer-cart"]', "a.js-mini-cart-trigger", '.header__secondary-nav a[href="/cart"]', ".header-actions.header-actions--buttons a.button", 'a.sf-cart-icon[href="/cart"]', ".w-commerce-commercecartwrapper", ".header__icons a#cart-icon", ".header__cart-toggle", "#cart-drawer-toggle", '.header-cart > a[href="/cart"]', ".action.showcart", 'label[for="minicart__button--header--default"]', ".theme__header a.navlink.navlink--cart.navlink--cart--icon", ".site-actions-cart a[header-minicart-drawer]", ".header-controls__cart", ".js-toggle-cart", ".js-header-cart-status-btn", ".icon-bag.mini_cart.dropdown_link", "#cart-open", 'a.hdt-has-count-box[href="/cart"]', "cart-drawer-component.cart-drawer button.header-actions__action", ".js-mini-cart-trigger", ".tpo-mini-cart-trigger"]
  , gy = [".js-btn-addgifcart", ".js-btn-giftcart"]
  , nf = ["imaginedgifts.myshopify.com", "51c5d9-2.myshopify.com"]
  , Fr = ["text-box", "text-number", "text-area", "quantity", "date-picker", "time-picker", "color-picker", "time-picker", "date-range", "range", "switch", "file-upload", "font-picker"]
  , Nf = ["93359d-2.myshopify.com", "65be99-6.myshopify.com", "198dni-4v.myshopify.com", "acez9x-fa.myshopify.com", "fit-scrubs.myshopify.com", "mdrdxp-wp.myshopify.com", "bc1afe.myshopify.com", "prt4kv-qb.myshopify.com", "the-little-laser-shop-aebf.myshopify.com", "xv6513-zc.myshopify.com", "dipcrew.myshopify.com", "8eeabd-2.myshopify.com", "48ae95-b4.myshopify.com", "70is8v-n0.myshopify.com", "roots-to-table.myshopify.com", "fta0zs-xz.myshopify.com", "private-label-skin-care.myshopify.com"]
  , by = !!window.outsellApp
  , _i = "tpo_duplicate-addtional-price__wrapper"
  , zi = ["Heritage", "Horizon", "Savor", "Vessel", "Dwell", "Tinker", "Ritual", "Pitch", "Atelier", "Fabric"]
  , wy = ["ul.product-grid .product-grid__item product-card-link product-card.product-card", "slideshow-component.resource-list__carousel product-card.product-card", ".resource-list--grid .resource-list__item product-card.product-card"];
B === "a864ee-3.myshopify.com" ? (window.location.href.includes("/cart") || window.location.href.includes("/products")) && window.console.log("%cWelcome to Easify Product Options app!", "color: blue; font-size: 16px; font-weight: bold;") : B !== "ac9697-3.myshopify.com" && window.console.log("%cWelcome to Easify Product Options app!", "color: blue; font-size: 16px; font-weight: bold;");
var jr = 1e-4
  , qi = {
    approxEqual: (se, ce) => Math.abs(se - ce) < jr,
    approxGte: (se, ce) => se >= ce - jr,
    approxLte: (se, ce) => se <= ce + jr,
    isMultipleOf: (se, ce) => {
        const ve = Math.abs(se % ce);
        return ve < jr || Math.abs(ve - ce) < jr
    }
    ,
    getPrecision: se => {
        const ce = se.toString().split(".");
        return ce.length > 1 ? ce[1].length : 0
    }
    ,
    robustSnap: (se, ce, ve, ge) => {
        if (ce <= 0)
            return se;
        let $e = Math.round(se / ce) * ce;
        $e < ve && !qi.approxGte($e, ve) && ($e += ce),
        $e > ge && !qi.approxLte($e, ge) && ($e -= ce),
        $e < ve && ($e = ve),
        $e > ge && ($e = ge);
        const ae = qi.getPrecision(ce);
        return parseFloat($e.toFixed(ae))
    }
    ,
    formatDisplayValue: se => {
        const ve = se.toString().match(/\.(\d*?)(9{4,}|0{4,})\d*$/);
        if (ve) {
            const ge = ve[1].length;
            return parseFloat(se.toFixed(ge))
        }
        return parseFloat(se.toFixed(2))
    }
};
function Mf(se) {
    return se.filter(ve => ve && ve.option_set_id !== void 0).sort( (ve, ge) => ve.option_set_id - ge.option_set_id)
}
async function vy() {
    await fetch(sp).then(se => se.text()).then(se => {
        const ce = se.split(`
`)
          , ve = sf(ce[0])
          , ge = {};
        for (let $e = 1; $e < ce.length; $e++) {
            if (!ce[$e])
                continue;
            const ae = sf(ce[$e])
              , W = ae[0]?.trim();
            if (!W)
                continue;
            const ne = {};
            for (let De = 1; De < ve.length; De++)
                ne[ve[De].trim()] = ae[De]?.trim();
            ge[W] = ne
        }
        return Re = ge,
        ge
    }
    ).catch(se => ({}))
}
function sf(se) {
    const ce = [];
    let ve = ""
      , ge = !1;
    for (let $e = 0; $e < se.length; $e++) {
        const ae = se[$e];
        ae === '"' ? ge && se[$e + 1] === '"' ? (ve += '"',
        $e++) : ge = !ge : ae === "," && !ge ? (ce.push(ve),
        ve = "") : ve += ae
    }
    return ce.push(ve),
    ce.map($e => $e.replace(/\r$/, ""))
}
async function Sy() {
    const se = Array.from(document.querySelectorAll("[tpo-product-id]")).flatMap(ge => ge.getAttribute("tpo-product-id").split(",")).map(ge => ge.trim()).filter(Boolean);
    Zt?.id && se.push(Zt.id.toString());
    const ve = [...new Set(se)].join(",");
    await fetch(`https://${Ja}/apps/easify-po/apps/v2/option_sets?product_ids=${ve}`).then(ge => {
        if (!ge.ok)
            throw new Error("Network response was not ok");
        return ge.json()
    }
    ).then(ge => {
        hi = Mf(ge.items),
        window.TPOConfigs.product_options_tpo = hi
    }
    ).catch(ge => {}
    )
}
async function xy(se, ce, ve, ge="$app:app_option_set_stg") {
    if (!se || !ce || !ve)
        return null;
    const $e = `https://${se}/api/2025-07/graphql.json`
      , ae = `
  query getMetaobject($handle: String!, $type: String!) {
    metaobject(handle: { handle: $handle, type: $type }) {
      id
      handle
      type
      fields {
        key
        value
      }
    }
  }
`;
    try {
        const W = await fetch($e, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                [atob("WC1TaG9waWZ5LVN0b3JlZnJvbnQtQWNjZXNzLVRva2Vu")]: ce
            },
            body: JSON.stringify({
                query: ae,
                variables: {
                    handle: ve,
                    type: ge
                }
            })
        });
        if (!W.ok) {
            const rt = await W.json();
            throw new Error(`HTTP error! Status: ${W.status}, Errors: ${JSON.stringify(rt.errors)}`)
        }
        const ne = await W.json();
        if (ne.errors)
            throw new Error(`GraphQL Errors: ${JSON.stringify(ne.errors)}`);
        return ne.data?.metaobject ? [ne.data?.metaobject] : null
    } catch (W) {
        throw W
    }
}
async function Cy(se, ce, ve) {
    const {operator: ge, conditions: $e} = se;
    {
        const W = {
            title: Zt?.title || "",
            price: Zt?.price / 100 || 0,
            tag: Zt?.tags || "",
            vendor: Zt?.vendor || "",
            type: Zt?.type || "",
            handle: Zt?.handle || "",
            collections: mf || ""
        };
        return ae(W)
    }
    function ae(W) {
        let ne = [];
        if ($e.forEach( ({select: De, relative: rt, value: Fe}) => {
            if (De !== "COLLECTION") {
                if (yf.includes(De))
                    switch (rt) {
                    case "EQUAL":
                        Fe.toString() === W[De.toLowerCase()].toString() ? ne = [...ne, !0] : ne = [...ne, !1];
                        break;
                    case "NOT_EQUAL":
                        Fe.toString() !== W[De.toLowerCase()].toString() ? ne = [...ne, !0] : ne = [...ne, !1];
                        break;
                    case "CONTAIN":
                        W[De.toLowerCase()].toString().includes(Fe.toString()) ? ne = [...ne, !0] : ne = [...ne, !1];
                        break;
                    case "NOT_CONTAIN":
                        W[De.toLowerCase()].toString().includes(Fe.toString()) ? ne = [...ne, !1] : ne = [...ne, !0];
                        break;
                    case "START_WITH":
                        W[De.toLowerCase()].toString().startsWith(Fe.toString()) ? ne = [...ne, !0] : ne = [...ne, !1];
                        break;
                    case "END_WITH":
                        W[De.toLowerCase()].toString().endsWith(Fe.toString()) ? ne = [...ne, !0] : ne = [...ne, !1];
                        break
                    }
                if (De === "PRICE")
                    switch (rt) {
                    case "EQUAL":
                        Fe.toString() === W[De.toLowerCase()].toString() ? ne = [...ne, !0] : ne = [...ne, !1];
                        break;
                    case "NOT_EQUAL":
                        Fe.toString() !== W[De.toLowerCase()].toString() ? ne = [...ne, !0] : ne = [...ne, !1];
                        break;
                    case "GREATER_THAN":
                        isNaN(Number(Fe)) || (W[De.toLowerCase()] > Number(Fe) ? ne = [...ne, !0] : ne = [...ne, !1]);
                        break;
                    case "LESS_THAN":
                        isNaN(Number(Fe)) || (W[De.toLowerCase()] < Number(Fe) ? ne = [...ne, !0] : ne = [...ne, !1]);
                        break
                    }
                if (De === "TAG")
                    switch (rt) {
                    case "EQUAL":
                        W[De.toLowerCase()].indexOf(`${Fe}`) !== -1 ? ne = [...ne, !0] : ne = [...ne, !1];
                        break;
                    case "NOT_EQUAL":
                        W[De.toLowerCase()].indexOf(`${Fe}`) === -1 ? ne = [...ne, !0] : ne = [...ne, !1];
                        break
                    }
            } else
                switch (rt) {
                case "EQUAL":
                    W.collections.length && W.collections.indexOf(parseInt(Fe.id)) !== -1 ? ne = [...ne, !0] : ne = [...ne, !1];
                    break;
                case "NOT_EQUAL":
                    W.collections.length ? W.collections.indexOf(parseInt(Fe.id)) === -1 ? ne = [...ne, !0] : ne = [...ne, !1] : ne = [...ne, !0];
                    break
                }
        }
        ),
        ge === "all")
            return !ne.includes(!1);
        if (ge === "any")
            return ne.includes(!0)
    }
}
async function ky(se, ce) {
    const ve = se.slice().sort( (ge, $e) => {
        const ae = parseInt(ge.handle, 10) || 0;
        return (parseInt($e.handle, 10) || 0) - ae
    }
    );
    for (const ge of ve) {
        const $e = ge.applyType ? Number(ge.applyType) : null;
        if ((ge.status ?? 1) !== 0) {
            if ($e === 0)
                return ge.handle;
            if ($e === 1) {
                if (!ce)
                    continue;
                const W = ge.condition ? JSON.parse(ge.condition) : [];
                if (!W.length)
                    continue;
                if (W.map(De => De.product_id.slice(22)).includes(ce.toString()))
                    return ge.handle
            }
            if ($e === 2) {
                const W = ge.condition ? JSON.parse(ge.condition) : void 0;
                if (!W)
                    continue;
                if (W.conditions && W.conditions.length && (W.conditions = W.conditions.map(De => typeof De.value == "string" ? {
                    ...De
                } : De.value?.id ? {
                    ...De,
                    value: {
                        ...De.value,
                        id: De.value.id.slice(25)
                    }
                } : De),
                await Cy(W)))
                    return ge.handle
            }
        }
    }
    return null
}
async function Ey(se, ce) {
    if (!se || !ce)
        return null;
    const ve = Math.floor(Date.now() / 1e3)
      , ge = `https://${se}/api/2025-07/graphql.json?dud=${ve}`;
    let $e = []
      , ae = !0
      , W = null;
    const ne = `
      query getMetaobjects($cursor: String) {
        metaobjects(type: "$app:app_option_set_stg", first: 50, after: $cursor) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              handle
              type
              title: field(key: "title") {
                  value
              }
            }
          }
        }
      }
    `;
    try {
        for (; ae; ) {
            const rt = await fetch(ge, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    [atob("WC1TaG9waWZ5LVN0b3JlZnJvbnQtQWNjZXNzLVRva2Vu")]: ce
                },
                body: JSON.stringify({
                    query: ne,
                    variables: {
                        cursor: W
                    }
                })
            });
            if (!rt.ok)
                return [];
            const Fe = await rt.json();
            if (Fe.errors)
                return [];
            const Ft = Fe.data.metaobjects;
            if (!Ft)
                return [];
            const At = Ft.edges.map(Bi => {
                const io = Bi.node
                  , ir = io.title?.value || ""
                  , Bo = ir.match(/\{--AT_(.*?)--\}/)
                  , Dt = ir.match(/\{--COND_(.*?)--\}/)
                  , wo = ir.match(/\{--STA_(.*?)--\}/)
                  , or = Bo ? Bo[1] : null
                  , qn = Dt ? Dt[1] : null
                  , Ni = wo ? Number(wo[1]) : null;
                return {
                    ...io,
                    applyType: or,
                    condition: qn,
                    status: Ni
                }
            }
            );
            $e = $e.concat(At),
            ae = Ft.pageInfo.hasNextPage,
            W = Ft.pageInfo.endCursor
        }
        const De = await ky($e, Zt?.id);
        return De ? await xy(se, ce, De) : []
    } catch (De) {
        throw De
    }
}
function sl(se) {
    if (!se)
        return "";
    try {
        return se.length === 32 && /^[0-9a-fA-F]+$/.test(se) ? se : atob(se)
    } catch {
        return se
    }
}
async function $y() {
    if (sp && await vy(),
    df && await Sy(),
    pf) {
        const ge = (await Ey(B, sl(TPOConfigs?.settings?.extraRequirement), meta?.product?.id))?.map($e => $e.fields.filter(ae => ae.key === "option_set_data").map(ae => JSON.parse(ae.value))).flat();
        hi = ge,
        window.TPOConfigs.product_options_tpo = ge
    }
    if (Object.keys(Re).length === 0)
        return;
    let se = [];
    hi.forEach(ve => {
        let ge = ve.option_set.options
          , $e = [];
        ge?.forEach(ae => {
            const W = Ty(ae, Re, Kh);
            $e.push(W)
        }
        ),
        se.push({
            ...ve,
            option_set: {
                ...ve.option_set,
                options: $e
            }
        })
    }
    ),
    hi = se,
    TPOConfigs.product_options_tpo = se;
    for (const ve of Gu)
        Lt.hasOwnProperty(ve) || (Lt[ve] = ff.get(ve));
    Lt = ap(Lt, Re, Gu)
}
function Ty(se, ce, ve) {
    const ge = {
        ...se
    };
    let $e = xt;
    for (const ae of ve)
        if (ce[se[ae]]) {
            const W = ce[se[ae]];
            W[$e] && (ge[ae] = W[$e])
        }
    if (se.metadata) {
        const ae = {
            ...JSON.parse(se.metadata || "{}")
        };
        ge.metadata = JSON.stringify(ap(ae, ce, Xh))
    }
    return se.option_types && se.option_types.length > 0 && (ge.option_types = se.option_types.map(ae => ap(ae, ce, Gh))),
    ge
}
function ap(se, ce, ve) {
    const ge = {
        ...se
    };
    let $e = xt;
    for (const ae of ve) {
        if (se[ae]) {
            if (ae === "content" || ae === "contentHTML") {
                const W = se[ae];
                if (W.includes("<") && W.includes(">"))
                    ge[ae] = Ly(W, ce, $e);
                else if (ce[W]) {
                    const ne = ce[W];
                    ne[$e] && (ge[ae] = ne[$e])
                }
            } else if (ce[se[ae]]) {
                const W = ce[se[ae]];
                W[$e] && (ge[ae] = W[$e])
            }
        }
        if (ae === "metadata" && se.metadata !== "{}") {
            const W = {
                ...JSON.parse(se.metadata || "{}")
            };
            let ne = W.description
              , De = W.tooltip;
            if (ce[ne]) {
                const rt = ce[ne];
                rt[$e] && (ne = rt[$e])
            }
            if (ce[De]) {
                const rt = ce[De];
                rt[$e] && (De = rt[$e])
            }
            ge.metadata = JSON.stringify({
                ...W,
                description: ne,
                tooltip: De
            })
        }
    }
    return ge
}
function Ly(se, ce, ve) {
    if (!se || typeof se != "string" || !se.includes("<"))
        return ce[se] && ce[se][ve] ? ce[se][ve] : se;
    try {
        const ge = document.createElement("div");
        ge.innerHTML = se;
        const $e = " ||| "
          , ae = Fe => (Fe || "").replace(/\s+/g, " ").trim()
          , W = []
          , ne = Fe => {
            if (Fe.nodeType === Node.TEXT_NODE) {
                const Ft = Fe.textContent || ""
                  , At = Ft.trim()
                  , Bi = ae(At);
                Bi && W.push({
                    node: Fe,
                    fullText: Ft,
                    rawTrimmedText: At,
                    normalizedText: Bi
                })
            } else
                Fe.nodeType === Node.ELEMENT_NODE && Array.from(Fe.childNodes).forEach(ne)
        }
        ;
        ne(ge);
        const De = Fe => {
            if (Fe.nodeType === Node.TEXT_NODE) {
                const Ft = Fe.textContent || ""
                  , At = Ft.trim()
                  , Bi = ae(At);
                if (Bi && ce[Bi] && ce[Bi][ve]) {
                    const io = ce[Bi][ve];
                    Fe.textContent = Ft.replace(At, io)
                }
            } else
                Fe.nodeType === Node.ELEMENT_NODE && Array.from(Fe.childNodes).forEach(De)
        }
        ;
        De(ge);
        const rt = W.map(Fe => Fe.normalizedText).join($e).trim();
        if (rt && ce[rt] && ce[rt][ve]) {
            const Ft = (ce[rt][ve] || "").trim().split(/\s*\|\|\|\s*/);
            W.forEach( (At, Bi) => {
                const io = (Ft[Bi] ?? "").trim();
                io && (At.node.textContent = At.fullText.replace(At.rawTrimmedText, io))
            }
            )
        }
        return ge.innerHTML
    } catch {
        let $e = se;
        const ae = se.match(/>([^<]+)</g);
        return ae && ae.forEach(W => {
            const ne = W.slice(1, -1).trim();
            ne && ce[ne] && ce[ne][ve] && ($e = $e.replace(`>${ne}<`, `>${ce[ne][ve]}<`))
        }
        ),
        $e
    }
}
async function If(se) {
    try {
        const ce = await fetch(`${Do}products/${se}.js`, {
            method: "GET"
        })
          , ve = await ce.json();
        if (ce.ok)
            return ve
    } catch {}
}
async function jc(se, ce) {
    const ve = se ? JSON.parse(se) : [];
    let ge = !0;
    return ce && ce.length && ce.every( (ae, W) => ve[W] && ae.url === `/products/${ve[W].product_handle}`) && (ge = !1),
    ge && ve && ve.length ? await Promise.all(ve.map(async ae => {
        if (ae && ae.product_handle) {
            const W = await If(ae.product_handle);
            return W ? {
                variants: [...W.variants],
                selling_plan_groups: [...W.selling_plan_groups],
                url: W.url,
                title: W.title,
                id: W.id,
                price: W.price,
                image: W.featured_image,
                description: W.description,
                available: W.available,
                vendor: W.vendor
            } : {
                variants: [],
                selling_plan_groups: [],
                url: "",
                title: "",
                id: "",
                price: "",
                image: "",
                description: "",
                available: "",
                vendor: ""
            }
        }
    }
    )) : []
}
function Oy(se) {
    return se.map(ce => {
        const ve = parseInt(ce.id.split("/").pop())
          , ge = ce.title
          , $e = ce.variants.nodes.map(De => {
            const rt = parseInt(De.id.split("/").pop());
            let Fe = null;
            return De.featuredImage && (Fe = {
                id: parseInt(De.featuredImage.id.split("/").pop()),
                product_id: ve,
                src: De.featuredImage.url
            }),
            {
                id: rt,
                title: De.title,
                featured_image: Fe,
                available: De.availableForSale,
                name: `${ge}${De.title !== "Default Title" ? " - " + De.title : ""}`,
                public_title: De.title !== "Default Title" ? De.title : null,
                price: Math.round(parseFloat(De.price.amount) * 100),
                requires_selling_plan: !1,
                selling_plan_allocations: []
            }
        }
        )
          , ae = `/products/${ce.handle}`
          , W = Math.round(parseFloat(ce.priceRange.minVariantPrice.amount) * 100);
        let ne = null;
        return ce.featuredImage && (ne = ce.featuredImage.url),
        {
            variants: $e,
            url: ae,
            title: ce.title,
            id: ve,
            price: W,
            image: ne,
            available: ce.availableForSale,
            vendor: ce.vendor
        }
    }
    )
}
async function Py(se) {
    const ce = `
        #graphql
        query getProducts(
            $after: String,
            $first: Int,
            $query: String,
            $languageCode: LanguageCode
        ) @inContext(language: $languageCode) {
            products(
                query: $query
                first: $first,
                after: $after
            ) {
                nodes {
                    id
                    handle
                    title
                    totalInventory
                    availableForSale
                    options {
                        id
                        name
                        optionValues {
                            id
                            name
                        }
                    }
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    featuredImage {
                        id
                        url
                    }
                    images (first: 10) {
                        nodes {
                            id
                            url
                            altText
                        }
                    }
                    variants(first: 250) {
                        nodes {
                            id
                            title
                            availableForSale
                            quantityAvailable
                            price{
                                amount
                                currencyCode
                            }
                            image{
                                id
                                url
                            }
                            featuredImage: image{
                                id
                                url
                            }
                        }
                    }
                }
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }
        }
    `
      , $e = [...new Set(se.options.reduce( (ae, W) => ae.concat(W.option_types.map(ne => ne.product_id).filter(ne => ne !== null && ne !== "")), []))].map(ae => `id:${ae}`).join(" OR ");
    try {
        let ae = []
          , W = !0
          , ne = null
          , De = sl(TPOConfigs?.settings?.extraRequirement);
        for (; W; ) {
            const Fe = await (await fetch(`https://${B}/api/2025-07/graphql.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Shopify-Storefront-Access-Token": De
                },
                body: JSON.stringify({
                    query: ce,
                    variables: {
                        query: $e,
                        first: 250,
                        after: ne,
                        languageCode: Shopify?.locale.toUpperCase() || "EN"
                    }
                })
            })).json();
            if (Fe.errors)
                throw new Error("GraphQL query failed");
            const Ft = Fe.data.products.nodes
              , At = Fe.data.products.pageInfo;
            ae = [...ae, ...Ft],
            W = At.hasNextPage,
            ne = At.endCursor
        }
        return Oy(ae)
    } catch (ae) {
        throw ae
    }
}
function to(se, ce, ve, ge) {
    if (!ve || !se)
        return;
    let $e, ae = document.createElement(se);
    return se === "script" ? ($e = ge ? ge.querySelector(`${se}[src='${ve}']`) : document.querySelector(`${se}[src='${ve}']`),
    ae.src = ve) : se === "link" && ($e = ge ? ge.querySelector(`${se}[src="${ve}"]`) : document.querySelector(`${se}[href='${ve}']`),
    ae.rel = ce || "",
    ae.href = ve),
    $e || (ge ? ge.prepend(ae) : Ya.appendChild(ae)),
    ae
}
function el(se) {
    const ce = {
        "93a5d3-96.myshopify.com": "ja",
        "celebritysposa.myshopify.com": "it",
        "3fd228-83.myshopify.com": "es",
        "za06nu-3w.myshopify.com": "es",
        "nellys-grannys.myshopify.com": "de",
        "tvgcg6-iu.myshopify.com": "de",
        "asmenf-pg.myshopify.com": "es",
        "mjtart-zi.myshopify.com": "fr",
        "blendys-cakes.myshopify.com": "fr",
        "tc9iw1-g6.myshopify.com": "fr",
        "esvzwx-sh.myshopify.com": "pl",
        "xivygw-7a.myshopify.com": "lt",
        "apny1y-46.myshopify.com": "de"
    }
      , ve = {
        ja: "https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/ja.js",
        it: "https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/it.js",
        es: "https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/es.js",
        pl: "https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/pl.js",
        fr: "https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/fr.js",
        zh: "https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/zh.js",
        lt: "https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/lt.js",
        de: "https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/de.js"
    }
      , ge = ce[B];
    if (!ge)
        return;
    const $e = ve[ge];
    $e && (to("script", "", $e),
    se.locale = ge)
}
B !== "2t7k0t-gj.myshopify.com" && (to("script", "", dy),
to("script", "", uy),
to("script", "", fy),
to("script", "", _y),
to("link", "stylesheet", my),
el({}));
function Ay(se) {
    if (!hi.length)
        return;
    const ce = document.createElement("style");
    ce.id = "tpo_custom_fonts";
    const ve = {};
    hi.forEach(ge => {
        const $e = ge.option_set ? ge.option_set : ge
          , {options: ae} = $e;
        !ae || !ae.length || ae.forEach(W => {
            if (W.type !== "font-picker")
                return;
            const De = JSON.parse(W.metadata || "{}").customFonts || [];
            De.length && De.filter(rt => se.findIndex(Ft => Ft.name === rt.name) > -1).forEach( ({name: rt, url: Fe}) => {
                ve[rt] = Fe
            }
            )
        }
        )
    }
    );
    for (const [ge,$e] of Object.entries(ve))
        ce.innerHTML += `
            @font-face {
                font-family: ${ge};
                src: url('${$e}')
            }
        `;
    Ya.appendChild(ce)
}
var Ff = ["b7e47e.myshopify.com", "6a1aab.myshopify.com", "orbix-5081.myshopify.com", "a57a86.myshopify.com", "7ea8a3.myshopify.com", "net-development-store.myshopify.com", "deinweddingshop.myshopify.com", "cyrell-shop.myshopify.com", "fringegarments.myshopify.com", "51c5d9-2.myshopify.com", "jd-customs-usa.myshopify.com", "0c500d-3.myshopify.com", "pppublications.myshopify.com", "248f3f-3.myshopify.com", "3b4695.myshopify.com", "sublimajewels.myshopify.com", "ef0f4f-2.myshopify.com", "bd5499-5.myshopify.com", "dc9bee-3.myshopify.com", "6b5bfc-2.myshopify.com", "covenant-security-equipment.myshopify.com", "56ed65-3.myshopify.com", "555b61.myshopify.com", "zoe-app-testing.myshopify.com", "nice-digs.myshopify.com", "8c05c0-5.myshopify.com", "bff7f4.myshopify.com", "6667f3-ae.myshopify.com", "classyironworks.myshopify.com", "the-inspired-stories.myshopify.com", "49476b.myshopify.com", "the-classy-hustle.myshopify.com", "jednay.myshopify.com", "exchange-life.myshopify.com", "moondolls.myshopify.com", "lori-wall-beds.myshopify.com", "graffitiwallart.myshopify.com", "9f4edd.myshopify.com", "16480f-3.myshopify.com", "a06aea-2.myshopify.com", "moossweetsandchews.myshopify.com", "the-artistic-pirates.myshopify.com", "qwertyqop.myshopify.com", "a222ae-2.myshopify.com", "cck-outfitters.myshopify.com", "2e27cf.myshopify.com", "a88723-60.myshopify.com", "designfabrikhamburg.myshopify.com", "62df50.myshopify.com", "ad5cdd-3.myshopify.com", "not-your-average-candy.myshopify.com", "costlowboxes.myshopify.com", "5a6c60-9a.myshopify.com", "3d-crystal-eye.myshopify.com", "6667f3-ae.myshopify.com", "3d1497-32.myshopify.com", "b9cbed.myshopify.com", "angelasmithkyy.myshopify.com", "frio-sparkling-water.myshopify.com"], rp = ["248a58.myshopify.com"], Dr;
Ko();
function qy() {
    const se = ba.productPageSelector
      , ce = ba.cartDrawerSelector
      , ve = ba.cartPageSelector
      , ge = ba.quickViewSelector
      , $e = ba.advanceSelectors;
    for (const ae in se)
        if (Object.hasOwnProperty.call(se, ae)) {
            let W = se[ae] ? se[ae].split(", ") : void 0;
            if (W && W.length)
                switch (W = W.filter(ne => !!ne.trim()).map(ne => ne.trim()),
                ae) {
                case "productForm":
                    Ai = [...Ai, ...W];
                    break;
                case "productDetails":
                    Yt = [...Yt, ...W];
                    break;
                case "productPrice":
                    go = [...go, ...W];
                    break;
                case "productOldPrice":
                    il = [...il, ...W];
                    break;
                case "addToCart":
                    En = [...En, ...W],
                    tl = [...tl, ...W];
                    break;
                case "stickyAddToCartWrapper":
                    er.wrapper.push(W);
                    break;
                case "stickyAddToCartForm":
                    er.form.push(W);
                    break;
                case "stickyAddToCartBtn":
                    er.atcButton.push(W);
                    break;
                case "variants":
                    Fo = [...Fo, ...W];
                    break;
                case "productImageWrapper":
                    Xa = [...Xa, ...W];
                    break;
                case "productPageQuantityInputSelector":
                    ip = [...ip, ...W];
                    break;
                case "productPageQuantityButtonSelector":
                    op = [...op, ...W];
                    break
                }
        }
    for (const ae in ce)
        if (Object.hasOwnProperty.call(ce, ae)) {
            let W = ce[ae] ? ce[ae].split(", ") : void 0;
            if (W && W.length)
                switch (W = W.filter(ne => !!ne.trim()).map(ne => ne.trim()),
                ae) {
                case "cartDrawerElement":
                    Xo = [...Xo, ...W];
                    break;
                case "toggleButtonCartDrawer":
                    Za = [...Za, ...W];
                    break;
                case "allItemsWrapper":
                    Xo = [...Xo, ...W];
                    break;
                case "lineItem":
                    ji = [...ji, ...W];
                    break;
                case "priceItem":
                    wa = [...wa, ...W];
                    break;
                case "totalPrice":
                    Br = [...Br, ...W];
                    break;
                case "quantityInput":
                    yo = [...yo, ...W];
                    break;
                case "quantityMinus":
                    bo = [...bo, ...W];
                    break;
                case "quantityPlus":
                    bo = [...bo, ...W];
                    break;
                case "removeButton":
                    jo = [...jo, ...W];
                    break;
                case "checkoutButton":
                    zc = [...zc, ...W];
                    break;
                case "itemProperties":
                    va = [...va, ...W],
                    tr = [...tr, ...W];
                    break;
                case "livePreviewCartDrawerMedia":
                    Cn.DRAWER = [...Cn.DRAWER, ...W];
                    break
                }
        }
    for (const ae in ve)
        if (Object.hasOwnProperty.call(ve, ae)) {
            let W = ve[ae] ? ve[ae].split(", ") : void 0;
            if (W && W.length)
                switch (W = W.filter(ne => !!ne.trim()).map(ne => ne.trim()),
                ae) {
                case "allItemsWrapper":
                    Ln = [...Ln, ...W];
                    break;
                case "lineItem":
                    ji = [...ji, ...W];
                    break;
                case "priceItem":
                    wa = [...wa, ...W];
                    break;
                case "totalPrice":
                    Br = [...Br, ...W],
                    Tn = [...Tn, ...W];
                    break;
                case "quantityInput":
                    so = [...so, ...W];
                    break;
                case "quantityMinus":
                    bo = [...bo, ...W];
                    break;
                case "quantityPlus":
                    bo = [...bo, ...W];
                    break;
                case "removeButton":
                    jo = [...jo, ...W];
                    break;
                case "quantityBlockWrapperSelectorForDesktop":
                    ol = [...ol, ...W];
                    break;
                case "quantityBlockWrapperSelectorForMobile":
                    al = [...al, ...W];
                    break;
                case "checkoutButton":
                    An = [...An, ...W];
                    break;
                case "itemProperties":
                    va = [...va, ...W],
                    tr = [...tr, ...W];
                    break;
                case "livePreviewCartPageMedia":
                    Cn.CART = [...Cn.CART, ...W];
                    break
                }
        }
    for (const ae in ge)
        if (Object.hasOwnProperty.call(ge, ae)) {
            let W = ge[ae] ? ge[ae].split(", ") : void 0;
            if (W && W.length)
                switch (W = W.filter(ne => !!ne.trim()).map(ne => ne.trim()),
                ae) {
                case "quickViewModalSelector":
                    Xc = [...Xc, ...W];
                    break;
                case "quickViewModalSelectorMobile":
                    On = [...On, ...W];
                    break;
                case "quickViewModalOpenerSelector":
                    rl = [...rl, ...W];
                    break;
                case "quickViewModalOpenerSelectorMobile":
                    Pn = [...Pn, ...W];
                    break;
                case "productDetailWrapperInsideQuickViewSelector":
                    Yc = [...Yc, ...W];
                    break;
                case "productDetailWrapperInsideQuickViewSelectorMobile":
                    nl = [...nl, ...W];
                    break;
                case "quickViewGetModalAfterDisplaySelector":
                    Zc = [...Zc, ...W];
                    break;
                case "quickViewGetFormElementAfterDisplaySelector":
                    ep = [...ep, ...W];
                    break;
                case "quickViewEasifyTagAfterDisplaySelector":
                    tp = [...tp, ...W];
                    break
                }
        }
    for (const ae in $e)
        if (Object.hasOwnProperty.call($e, ae) && ($e[ae] ? $e[ae] : void 0))
            switch (ae) {
            case "quickViewOptionSetWrapperNoRemoveAfterDisplay":
                gf.push(B);
                break;
            case "quickViewExtraLogicRunOnProductPageAfterDisplay":
                bf.push(B);
                break;
            case "oldChangeImage":
                Jc.push(B);
                break;
            case "isMultipleForm":
                wf.push(B);
                break;
            case "cloneAddToCart":
                vf.push(B);
                break;
            case "manualAddToCart":
                Sf.push(B);
                break;
            case "manualSubmit":
                xf.push(B);
                break;
            case "useMoneyFormat":
                rp.push(B),
                pp = rp.includes(B);
                break;
            case "useMultiCurrency":
                $o = !0;
                break;
            case "customStoreRedirectCartPage":
                Rc.push(B);
                break;
            case "customThemeStoreOpenCartDrawer":
                Wc.push(B);
                break;
            case "customStoreReloadProductPage":
                Vc.push(B);
                break;
            case "storeCustomPositionAddOnProduct":
                xn.push(B);
                break;
            case "storeCustomNotAddToCartMainProduct":
                Ys.push(B);
                break;
            case "listStoreNotUseEasifyPrice":
                _f.push(B);
                break;
            case "storeNotAddingEventToBuyNow":
                hf.push(B);
                break;
            case "storePreventCloneWhenEmpty":
                Uc.push(B);
                break;
            case "storeFreePlanTPO":
                Xs.push(B);
                break;
            case "storeDOMContentLoaded":
                Ff.push(B);
                break;
            case "storeRerenderATCWhenChangeVariants":
                Qc.push(B);
                break;
            case "storeUpdateMainProductProperties":
                Df.push(B),
                jf = !0;
                break;
            case "storeUpdateProductPrice":
                Cf.push(B),
                Qa = !0;
                break;
            case "storeUpdatePriceBoxProductPrice":
                kf.push(B),
                Zs = !0;
                break;
            case "storeMergePriceExcludeOneTimeCharge":
                Ef.push(B),
                Gc = !0;
                break;
            case "storePricingBoxWholesaleMainProductOnly":
                $f.push(B),
                Kc = !0;
                break;
            case "storeHideLivePreviewLink":
                Lf.push(B),
                qf = !0;
                break;
            case "storePutDesignLayersBottom":
                break;
            case "storeSeparateAddOnQuantity":
                Of.push(B),
                Eo = !0;
                break;
            case "storeNotUseQuantitySelector":
                Tf = !0;
                break;
            case "storeHidePriceInCart":
                Pf.push(B),
                kn = !0;
                break;
            case "storeWrapBuyItNow":
                Af.push(B),
                Go = !0;
                break;
            case "storeUsingCartDrawer":
                Nf.push(B);
                break
            }
}
var Ny = ["exchange-life.myshopify.com"]
  , My = Ny.includes(B)
  , Iy = ["net-development.myshopify.com", "test-product-attachment.myshopify.com", "seppy-custom-options-base-on-po.myshopify.com", "ormsprintroom.myshopify.com"]
  , Io = Iy.includes(B)
  , Bc = ["2e27cf.myshopify.com", "420dbb-2e.myshopify.com", "akiv-hk.myshopify.com", "69aa90-3.myshopify.com", "99de86-d0.myshopify.com", "ccwkwb-qx.myshopify.com", "b89b5b-2.myshopify.com", "ujzyuu-u0.myshopify.com", "lakenil.myshopify.com"]
  , Gs = ["hoa-test-store.myshopify.com", "frio-sparkling-water.myshopify.com", "7fbfaa.myshopify.com", "ap-salad-bar.myshopify.com"]
  , Fy = ["doggos-united.myshopify.com"]
  , lf = Fy.includes(B)
  , Dy = ["pretty-fireplaces.myshopify.com", "scarves-by-ruthie-l-designs.myshopify.com", "embroplacestore.myshopify.com"]
  , Ks = Dy.includes(B)
  , Df = ["soy-austin.myshopify.com", "jigsawpuzzles.myshopify.com", "alljigsawpuzzles.myshopify.com", "butler-and-hill-store.myshopify.com", "landsbybilleder.myshopify.com", "717402-2.myshopify.com", "3d-crystal-eye.myshopify.com", "286197-95.myshopify.com", "thebakespace.myshopify.com", "5b5c9d-2.myshopify.com"]
  , jf = Df.includes(B)
  , jy = ["9d8805-3.myshopify.com", "graffitiwallart.myshopify.com"]
  , By = jy.includes(B)
  , pp = rp.includes(B)
  , Hy = ["ornamentallyyou.myshopify.com", "barrier-boss.myshopify.com", "f132c9-76.myshopify.com", "35eb0b-2.myshopify.com"]
  , $o = Hy.includes(B)
  , Wy = ["63d1ce.myshopify.com", "1hpdba-ph.myshopify.com", "tigren-demo.myshopify.com", "zenshadetest.myshopify.com", "net-development.myshopify.com", "newaddon2install.myshopify.com"]
  , Uy = Wy.includes(B)
  , Ry = "https://cdn.shopify.com/s/files/1/0766/0417/8716/files/google-fonts.json?v=1695971108"
  , ht = window.Shopify?.currency?.rate || 1
  , Hc = window.Shopify?.currency?.active || "USD"
  , Ga = window.Shopify?.country || "en-US"
  , cf = !0
  , Pi = zi.includes(gt);
function Ko() {
    if (["c6268c.myshopify.com", "https-cookiebouquets-com.myshopify.com", "liam-store-dev.myshopify.com"].includes(B))
        return;
    let ce = document.querySelectorAll(An.join(","));
    for (let ve = 0; ve < ce.length; ve++) {
        let ge = ce[ve];
        ge && (ge.style.pointerEvents = "none")
    }
    setTimeout(async () => {
        np()
    }
    , 1500)
}
function np() {
    if (["https-cookiebouquets-com.myshopify.com", "liam-store-dev.myshopify.com"].includes(B))
        return;
    let ce = document.querySelectorAll(An.join(","));
    for (let ve = 0; ve < ce.length; ve++) {
        let ge = ce[ve];
        ge && (ge.style.pointerEvents = "auto")
    }
}
qy();
Ff.includes(B) ? window.addEventListener("DOMContentLoaded", ll, !1) : window.addEventListener("load", ll, !1);
(function() {
    class se {
        static getMoneyPropertyRegex() {
            return / [\[(] .+ [)\]]/g
        }
    }
    class ce {
        static getMoneyFormat() {
            return (pp ? cp : lp).trim()
        }
        static getSeparator(ae="en-US") {
            if (!$o)
                return {
                    decimal: ".",
                    group: ","
                };
            if (window.TPOGlobal && window.TPOGlobal.currencySeparator && window.TPOGlobal.currencySeparator[ae])
                return window.TPOGlobal.currencySeparator[ae];
            const ne = Intl.NumberFormat(ae).formatToParts(10000.1);
            return {
                decimal: ne.find(De => De.type === "decimal")?.value || ".",
                group: ne.find(De => De.type === "group")?.value || ","
            }
        }
    }
    class ve {
        constructor() {}
        static formatMoney(ae, W=!1) {
            typeof ae == "string" && (ae = ae.replace(".", ""));
            let ne = this.convertMoney(ae)
              , De = ce.getMoneyFormat()
              , rt = /\{\{\s*(\w+)\s*\}\}/
              , Fe = /(<\w*( \w+=?('|")?(\w|-)+('|")?)*>)+|(<\/\w*>)+/g;
            return W && ne == "0" && De.match(rt)[1] !== "amount_no_decimals" ? null : ["f6899f-5.myshopify.com", "w0zdzz-im.myshopify.com", "neonland-8196.myshopify.com", "tronxy3dprinters.myshopify.com", "shop-otowagarou.myshopify.com", "reelken.myshopify.com"].includes(B) ? De.replace(rt, ne).replace(Fe, "") : De.replace(rt, ne).replaceAll(Fe, "")
        }
        static convertMoney(ae) {
            let W = ""
              , ne = /\{\{\s*(\w+)\s*\}\}/;
            switch (ce.getMoneyFormat().match(ne)[1]) {
            case "amount":
                W = this.formatWithDelimiters(ae, 2);
                break;
            case "amount_no_decimals":
                W = this.formatWithDelimiters(ae, 0);
                break;
            case "amount_with_comma_separator":
                W = this.formatWithDelimiters(ae, 2, ".", ",");
                break;
            case "amount_no_decimals_with_comma_separator":
                W = this.formatWithDelimiters(ae, 0, ".", ",");
                break;
            case "amount_no_decimals_with_space_separator":
                W = this.formatWithDelimiters(ae, 0, " ");
                break;
            case "amount_with_apostrophe_separator":
                W = this.formatWithDelimiters(ae, 2, "'");
                break;
            case "amount_with_period_and_space_separator":
                W = this.formatWithDelimiters(ae, 2, " ", ".");
                break;
            case "amount_with_space_separator":
                W = this.formatWithDelimiters(ae, 2, " ", ".");
                break
            }
            return W
        }
        static formatWithDelimiters(ae, W, ne, De) {
            const rt = ce.getSeparator(Ga);
            if (ne = ne || rt.group,
            De = De || rt.decimal,
            isNaN(ae) || ae === null)
                return 0;
            W === 0 ? ae = Math.ceil(ae / 100).toFixed(W) : ae = (ae / 100).toFixed(W);
            let Fe = ae.split(".")
              , Ft = Fe[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + ne)
              , At = Fe[1] ? De + Fe[1] : "";
            return Ft + At
        }
        static formatMoneyForAddOnProductProperty(ae, W) {
            return W ? "" : ` ( +${ae} )`
        }
    }
    class ge {
        static removeMoneyProperty(ae="") {
            return ae.replace(se.getMoneyPropertyRegex(), "")
        }
        static formatDefaultPropertyValues(ae) {
            const [W,ne] = ae.split(" | ");
            return {
                label: W,
                quantity: ne ? parseInt(ne, 10) : null
            }
        }
    }
    window.Regex = se,
    window.MoneyFormat = ce,
    window.PriceFormatter = ve,
    window.PropertyFormatter = ge
}
)();
if (di) {
    const se = document.querySelectorAll(".tpo_modal-background");
    se.length && se.forEach(ce => {
        ce.remove()
    }
    ),
    window.TPOConfigs?.formatMoneyPreview && (lp = window.TPOConfigs?.formatMoneyPreview,
    cp = window.TPOConfigs?.formatMoneyPreview),
    ll()
}
async function ll() {
    if (!cf)
        return;
    if (cf = !1,
    (Ju && Number(Ju) === 1 && sp && !di || df || pf) && await $y(),
    document.addEventListener("tpo_loaded", function() {
        np()
    }),
    window.innerWidth < 1023) {
        document.addEventListener("touchmove", function() {}),
        document.body.setAttribute("tabIndex", 0),
        (function(o) {
            let i, a = {
                touchend: function() {}
            };
            for (i in a)
                o.addEventListener(i, a)
        }
        )(document);
        const t = document.createElement("meta");
        Object.assign(t, {
            name: "viewport",
            content: `width=device-width, initial-scale=1 ${My ? ", maximum-scale=1.0" : ""}`
        }),
        document.head.prepend(t)
    }
    let se = /^product.*$/.test(vn), ce = /^collection.*$/.test(vn), ve = /^index.*$/.test(vn), ge = /^search.*$/.test(vn), $e = [], ae = [], W = [], ne = [], De = [], rt = [], Fe = [], Ft = -1, At = {}, Bi = [], io = [], ir;
    const Bo = ["_tpo_main_product_id", "_tpo_is_main_product", "_tpo_add_on_keys", "_tpo_add_on_key", "_tpo_add_on_variant_ids"]
      , Dt = "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/default_image_url.png?v=1713240055"
      , wo = "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/Group_111.png?v=1680839617"
      , or = Lt?.targetSelectorSetting || "slider-component.thumbnail-slider .thumbnail-list , .slideshow-controls__thumbnails-container .slideshow-controls__thumbnails"
      , qn = Jc.includes(B);
    let Ni = document.querySelectorAll(`${or}`).length ? document.querySelectorAll(`${or}`) : qn ? document.querySelectorAll(".product__media-list.contains-media , .media-gallery__grid") : document.querySelectorAll("slider-component.thumbnail-slider .thumbnail-list , .slideshow-controls__thumbnails-container .slideshow-controls__thumbnails")
      , Gt = Ni.length ? Array.from(Ni[0].querySelectorAll(Xa)) : []
      , ar = [];
    Gt.length && (ar = [...Gt.map(t => {
        const o = t.querySelectorAll("img");
        if (o.length)
            return o[0].getAttribute("alt")
    }
    )]),
    document.addEventListener("product:media-updated", () => {
        cl()
    }
    ),
    document.addEventListener("variant:update", () => {
        cl()
    }
    );
    function cl() {
        Ni = document.querySelectorAll(`${or}`).length ? document.querySelectorAll(`${or}`) : qn ? document.querySelectorAll(".product__media-list.contains-media , .media-gallery__grid") : document.querySelectorAll("slider-component.thumbnail-slider .thumbnail-list , .slideshow-controls__thumbnails-container .slideshow-controls__thumbnails"),
        Gt = Ni.length ? Array.from(Ni[0].querySelectorAll(Xa)) : [],
        ar = Gt.map(t => {
            const o = t.querySelector("img");
            return o ? o.getAttribute("alt") : ""
        }
        ),
        Gt.length && (Qs = Gt[0].parentNode?.style?.transform || "")
    }
    cl();
    var pl = bf.includes(B) ? se : !0;
    const {requiredMessage: To, requiredOptionMessage: ei, minCharacterMessage: dp, maxCharacterMessage: up, exceptNumberMessage: fp, exceptSpaceMessage: mp, exceptSpecialCharacterMessage: _p, exceptLetterMessage: hp, minValueMessage: rr, maxValueMessage: nr, minOptionMessage: lo, maxOptionMessage: co, errorQuantityMessage: Nn, totalQuantitySelectorMessage: yp, totalSelectedQuantityLabel: sr, totalAdditionalPriceLabel: gp, totalPriceIncludeTaxLabel: Bf="Total price include tax", validNumbericMessage: lr, designSetting: bp="{}", tableTitle: wp, quantityHeading: vp, savingHeading: Sp, saveLabel: xp, tieredPricePosition: Mn="below_add_to_cart", wholeSaleDiscountLabel: Li, showOptionSetOnCollectionPage: Cp, showOptionSetOnHomepage: kp, showOptionSetOnQuickView: Ep, showOptionSetOnFeatureProduct: $p, totalPriceMode: In, isShowTotalPrice: Tp, isTrackingAnalytic: Lp, newAddOnPrice: Vt="no", newAddOnProduct: si="no", customOptionFor: Yo, changeProductPrice: Hf, taxRateField: Fn, originalPriceLabelField: Wf="Our price just", customOptionsDisplay: Op="split", addOnProductsDisplay: Uf="hide", dimensionDropdownErrorMessage: dl="", minFileMessage: Pp, minFileAtleastMessage: Ap, livePreviewTextProperties: Rf="Preview"} = Lt;
    let Sa = Uf === "disabled";
    const xa = !!Number(Lt.enableTieredPrice !== void 0 ? Lt.enableTieredPrice : "1")
      , Vf = Lt.allowEditCart == "1" || Lt.allowEditCart == "true"
      , Hr = B !== "d75b8b-2b.myshopify.com" ? Lt?.isShowPopup === "active" : !1
      , zf = !!Number(Lt.showDiscountBoxOnCart || "0")
      , Jf = !!Number(Lt.showDiscountBoxOnCheckout || "0")
      , Qf = Lt?.popupMode || "separate_button"
      , Gf = Lt?.popupTitle || "Customize Your Product"
      , Kf = Lt?.buttonPopupTitle || "Customize it"
      , Xf = Lt?.discountBoxButton || "Apply"
      , Yf = Lt?.discountBoxPlaceholder || "Enter your discount here"
      , Zf = Lt?.discountText || "Discount"
      , em = Lt?.discountValidateBlank || "Discount field must not be blank"
      , qp = Lt?.discountValidateCode || "Invalid discount code"
      , tm = Tp === void 0 ? !0 : Tp === "active"
      , zt = Lp === void 0 || Lp === "active"
      , {designColor: V={}, designStyle: Ho={}, designCustomCSS: ul={}, designSize: Kt={}, designShape: Oi={}, designSpacing: Hi={}, optionLabel: bi={}, optionValue: tt={}, helpText: cr={}, infoTooltip: Wt={}, totalPrice: Ca={}, errorText: li={}, inputText: pt={}, fileUpload_buttonText: Dn={}, fileUpload_name: Zo={}, quantitySelector: pr={}, tableCell: Wr={}, badgeText: jn={}, tableHeading: Ur={}, tableTitle: Rr={}, selectedValue: dr={}, inputSetting: jt={}, switchSetting: Np={}, dropdownSetting: Bn={}, buttonSetting: vo={}, colorSwatchesSetting: Hn={}, imageSwatchesSetting: wi={}, wholesaleBorderSetting: im={}, discountBoxSetting: Wn={}} = JSON.parse(bp)
      , Mp = JSON.parse(Lt.customFonts || "[]");
    Ay(Mp);
    const Un = {};
    window.tpoCartCollections && window.tpoCartCollections.forEach(t => {
        const o = t?.productId || "tpo";
        Un[o] = t?.collections || []
    }
    );
    let st = !0;
    const Ip = Zt?.id || ""
      , Lo = Ho && Ho?.appTheme === "modern"
      , po = Ho && Ho?.appMode === "dark";
    let ti = [];
    const Fp = Vf
      , Rn = Array.from(document.getElementsByTagName("form"));
    let Vn = Rn.length ? Rn.find(t => typeof t.action == "string" && t.action.includes("/cart")) : null
      , ii = document.querySelector(Ln)
      , vi = document.querySelector(Xo)
      , ka = document.querySelectorAll(Xo);
    const It = `${vn}` == "cart";
    let Wo = !!vi
      , Ke = It ? ii ? ii?.querySelector(ko) || document.querySelector(ko) : Vn || document.createElement("div") : document.querySelector(Ai);
    Ka && Ka?.formElement && (Ke = document.querySelector(Ka?.formElement) || Ke);
    let Vr = Ke?.attributes.id?.value || null;
    if (Vr && typeof Vr == "string" && !It && B === "eenie-meenie-mine.myshopify.com") {
        const t = document.querySelectorAll(`#${Vr}`);
        t.length > 1 && t.forEach(o => {
            o.classList.contains("js-prod-form-submit") && (Ke = document.querySelector(`#${Vr}`))
        }
        )
    }
    const om = yr( () => {
        const t = document.querySelector(Ai);
        t && Jl(t).then()
    }
    , 400);
    function fl(t) {
        if (!t)
            return;
        const o = document.querySelector(".tpo_option-set-wrapper");
        if (!o)
            return;
        const i = o.querySelectorAll('input.tpo_file-upload-input[name^="properties["]');
        if (!i || i.length === 0)
            return;
        const a = /\s*\[\s*[+-]?\s*[^\]]+\s*\]/g;
        i.forEach(r => {
            try {
                let c = r.value;
                if (!c)
                    return;
                const d = c.match(a);
                if (d && d.length > 0) {
                    const n = r.getAttribute("name");
                    if (!n || !n.includes("[") || !n.includes("]"))
                        return;
                    const f = n.substring(n.indexOf("[") + 1, n.lastIndexOf("]"));
                    if (!f)
                        return;
                    const p = `properties[_${f}_price-tpo]`;
                    let s = t.querySelector(`input[name="${p}"]`);
                    if (s || (s = document.createElement("input"),
                    s.type = "hidden",
                    s.name = p,
                    t.appendChild(s)),
                    d.length > 1)
                        s.value = c;
                    else {
                        const b = d[0].trim();
                        b.length >= 2 && (s.value = b.substring(1, b.length - 1).trim())
                    }
                    const l = c.replace(a, "").trim();
                    r.value = l
                }
            } catch {}
        }
        )
    }
    function Ea() {
        ii = document.querySelector(Ln);
        const t = document.querySelectorAll(Ln);
        let o = Rn.length ? Rn.find(i => typeof i.action == "string" && i.action.includes("/cart")) : null;
        return Ke = It ? ii ? ii?.querySelector(ko) || document.querySelector(ko) : o || document.createElement("div") : document.querySelector(Ai),
        Dp(),
        di && (Ke = document.querySelector(".preview-form")),
        vi = document.querySelector(Xo),
        ka = document.querySelectorAll(Xo),
        Wo = !!vi,
        {
            cartPageElement: ii,
            cartDrawerElements: ka,
            hasCartDrawer: Wo,
            listCartPageElements: t
        }
    }
    function am() {
        const t = [{
            size: 1400,
            class: "xxl"
        }, {
            size: 1200,
            class: "xl"
        }, {
            size: 992,
            class: "lg"
        }, {
            size: 768,
            class: "md"
        }, {
            size: 576,
            class: "sm"
        }]
          , o = window.innerWidth;
        for (const i of t)
            if (o >= i.size)
                return i.class;
        return "xs"
    }
    function Dp() {
        const t = am()
          , o = document.querySelector(`.tpo-form-selector-${t}`);
        if (o) {
            Ke = o;
            return
        }
        let i = document.querySelectorAll(Ai);
        It || (wf.includes(B) && i.length > 1 && i.forEach(a => {
            (a.querySelector(".tpo-custom_add_to_cart_selector") || a.closest(".prd-block-actions") || a.querySelector("#addToCart") || a.querySelector("#add") || a.querySelector(".product_details_info") || a.querySelector('button[id*="AddToCart"]') || a.querySelector(".product-info__add-to-cart") || a.querySelector(".shopify-payment-button")) && (Ke = a)
        }
        ),
        window.customElements && Ke && !Ke.offsetParent && i && i.length && i.forEach(a => {
            a.offsetParent && (Ke = a)
        }
        ))
    }
    Dp();
    function ml() {
        if (!(Uc.includes(B) && ti?.length === 0) && vf.includes(B) && mt.parentNode) {
            const t = mt.cloneNode(!0);
            mt.parentNode.insertBefore(t, mt),
            mt.parentNode.removeChild(mt),
            t.classList.add("tpo-btn-add_to_cart"),
            mt = t
        }
    }
    di && (Ke = document.querySelector(".preview-form")),
    B === "757a1b-2.myshopify.com" && (Ke = It ? ii ? ii?.querySelector(ko) || document.querySelector(ko) : Vn || document.createElement("div") : document.querySelector('form[class*="form-submit"][action*="/cart/add"][data-product-id]'));
    let ea = Ke?.attributes.id?.value || null
      , mt = Ke ? Ke.querySelector(tl) : null;
    if (Ke && !mt && (mt = document.querySelector(En)),
    !mt)
        mt = document.createElement("div");
    else {
        const t = Array.from(Ke.querySelectorAll(En));
        if (t.length > 1 && !mt.offsetParent) {
            const o = t.filter(i => !!i.offsetParent);
            o && o.length && (mt = o[0])
        }
    }
    B === "bff7f4.myshopify.com" && (mt = Ke.querySelector("#product-add-to-cart-cloned") || document.createElement("div")),
    ml(),
    Ke || (Ke = document.createElement("div"));
    function rm(t) {
        const o = t.getBoundingClientRect();
        return o.top >= 0 && o.left >= 0 && o.bottom <= (window.innerHeight || document.documentElement.clientHeight) && o.right <= (window.innerWidth || document.documentElement.clientWidth)
    }
    function jp(t) {
        if (!t)
            return !0;
        let o = !0;
        for (const i of t) {
            let a = `${i.id},${i.type}`
              , r = document.querySelector(`[id*='${a}']`);
            if (!r || r.classList.contains("tpo_hidden"))
                break;
            if (i.is_required === 1) {
                o = !1;
                break
            }
            if (i.is_required === 1 && i.type !== "group") {
                o = !1;
                break
            }
            if (i.type === "checkbox" && (i.min_value || i.max_value)) {
                const c = i.option_types.filter(d => d.is_default === 1).length;
                if (i.min_value && c < i.min_value) {
                    o = !1;
                    break
                }
                if (i.max_value && c > i.max_value) {
                    o = !1;
                    break
                }
            }
        }
        return o
    }
    if (Array.isArray(hi) && hi.length > 0)
        for (let t = hi.length - 1; t >= 0; t--) {
            let o = hi[t].option_set || {};
            const i = Ki?.customer || {}
              , a = i.tags || []
              , r = o.customer_tag || "{}"
              , c = JSON.parse(r)
              , {tagSet: d, appliedCustomer: n} = c
              , f = Object.keys(c).length < 1 || n === "ALL" || n === "GUEST" && i.id === null || n === "LOGIN" && i.id || n === "TAG" && a.some(b => d.includes(b))
              , p = o?.status || 0;
            let s = kd(o?.title || "");
            if (p === 0 || !f || !s)
                continue;
            const l = o.apply_type;
            if (l === 0) {
                ti.push(o);
                break
            }
            if (l === 1) {
                if (o.option_set_products.length < 1)
                    continue;
                if (o.option_set_products.map(h => h.product_id.slice(22)).includes(Ip.toString())) {
                    ti.push(o);
                    break
                }
            }
            if (l === 2) {
                const b = o.product_condition ? JSON.parse(o.product_condition) : void 0;
                if (b) {
                    if (b.conditions.length)
                        if (b.conditions = b.conditions.map(u => {
                            if (typeof u.value == "string")
                                return {
                                    ...u
                                };
                            if (u.value.id)
                                return {
                                    ...u,
                                    value: {
                                        ...u.value,
                                        id: u.value.id.slice(25)
                                    }
                                }
                        }
                        ),
                        await _l(b)) {
                            ti.push(o);
                            break
                        } else
                            continue
                } else
                    continue
            }
        }
    di && ti.length === 0 && (ti = window.TPOConfigs.product_options);
    const nm = ["21ac22-5c.myshopify.com", "tigren-demo.myshopify.com"].includes(B) ? () => Py(ti[0]) : () => jc(ti[0].products_handle);
    let Mi = !di && ti.length ? await nm() : [];
    async function _l(t, o, i) {
        const {operator: a, conditions: r} = t;
        if (o)
            try {
                let d = {};
                if (o)
                    if (i) {
                        const p = Bi.find(s => s.productHandle === o);
                        p && (d = {
                            ...p.data
                        })
                    } else {
                        const p = await fetch(`${Do}products/${o}.js`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(s => s.json());
                        d = {
                            ...p
                        },
                        Bi.push({
                            productHandle: o,
                            data: {
                                ...p
                            }
                        })
                    }
                const n = {
                    id: d?.id || "",
                    title: d?.title || "",
                    price: d?.price / 100 || 0,
                    tag: d?.tags || [],
                    vendor: d?.vendor || "",
                    type: d?.type || "",
                    handle: d?.handle || "",
                    collections: []
                };
                return r.some(p => p.select === "COLLECTION") && Un[n.id || "tpo"] && Un[n.id || "tpo"].length && (n.collections = [...Un[n.id]]),
                c(n)
            } catch {
                return !1
            }
        else {
            const d = {
                title: Zt?.title || "",
                price: Zt?.price / 100 || 0,
                tag: Zt?.tags || "",
                vendor: Zt?.vendor || "",
                type: Zt?.type || "",
                handle: Zt?.handle || "",
                collections: mf || ""
            };
            return c(d)
        }
        function c(d) {
            let n = [];
            if (r.forEach( ({select: f, relative: p, value: s}) => {
                if (f !== "COLLECTION") {
                    if (yf.includes(f))
                        switch (p) {
                        case "EQUAL":
                            s.toString() === d[f.toLowerCase()].toString() ? n = [...n, !0] : n = [...n, !1];
                            break;
                        case "NOT_EQUAL":
                            s.toString() !== d[f.toLowerCase()].toString() ? n = [...n, !0] : n = [...n, !1];
                            break;
                        case "CONTAIN":
                            d[f.toLowerCase()].toString().includes(s.toString()) ? n = [...n, !0] : n = [...n, !1];
                            break;
                        case "NOT_CONTAIN":
                            d[f.toLowerCase()].toString().includes(s.toString()) ? n = [...n, !1] : n = [...n, !0];
                            break;
                        case "START_WITH":
                            d[f.toLowerCase()].toString().startsWith(s.toString()) ? n = [...n, !0] : n = [...n, !1];
                            break;
                        case "END_WITH":
                            d[f.toLowerCase()].toString().endsWith(s.toString()) ? n = [...n, !0] : n = [...n, !1];
                            break
                        }
                    if (f === "PRICE")
                        switch (p) {
                        case "EQUAL":
                            s.toString() === d[f.toLowerCase()].toString() ? n = [...n, !0] : n = [...n, !1];
                            break;
                        case "NOT_EQUAL":
                            s.toString() !== d[f.toLowerCase()].toString() ? n = [...n, !0] : n = [...n, !1];
                            break;
                        case "GREATER_THAN":
                            isNaN(Number(s)) || (d[f.toLowerCase()] > Number(s) ? n = [...n, !0] : n = [...n, !1]);
                            break;
                        case "LESS_THAN":
                            isNaN(Number(s)) || (d[f.toLowerCase()] < Number(s) ? n = [...n, !0] : n = [...n, !1]);
                            break
                        }
                    if (f === "TAG")
                        switch (p) {
                        case "EQUAL":
                            d[f.toLowerCase()].indexOf(`${s}`) !== -1 ? n = [...n, !0] : n = [...n, !1];
                            break;
                        case "NOT_EQUAL":
                            d[f.toLowerCase()].indexOf(`${s}`) === -1 ? n = [...n, !0] : n = [...n, !1];
                            break
                        }
                } else
                    switch (p) {
                    case "EQUAL":
                        d.collections.length && d.collections.indexOf(parseInt(s.id)) !== -1 ? n = [...n, !0] : n = [...n, !1];
                        break;
                    case "NOT_EQUAL":
                        d.collections.length ? d.collections.indexOf(parseInt(s.id)) === -1 ? n = [...n, !0] : n = [...n, !1] : n = [...n, !0];
                        break
                    }
            }
            ),
            a === "all")
                return !n.includes(!1);
            if (a === "any")
                return n.includes(!0)
        }
    }
    const zr = ti[0]?.wholesale_price || {};
    zr?.wholesale_pricing_id;
    const ur = JSON.parse(zr.price_set || "[]")
      , Jr = JSON.parse(zr.customer_tag || "{}").appliedCustomer || "ALL"
      , sm = JSON.parse(zr.customer_tag || "{}").tagSet || []
      , lm = JSON.parse(zr.customer_tag || "{}").excludeTagSet || []
      , hl = Ki?.customer || {}
      , Bp = hl.tags || []
      , zn = ur.length > 0 && xa && (Jr === "ALL" || Jr === "GUEST" && hl.id === null || Jr === "LOGIN" && hl.id || Jr === "TAG" && Bp.some(t => sm.includes(t)) || Jr === "EXCLUDE_TAG" && !Bp.some(t => lm.includes(t)));
    function cm(t) {
        const o = JSON.parse(t.price_set || "[]")
          , i = JSON.parse(t.customer_tag || "{}")
          , a = i.appliedCustomer || "ALL"
          , r = i.tagSet || []
          , c = i.excludeTagSet || []
          , d = Ki?.customer || {}
          , n = d.tags || []
          , f = o.length > 0 && xa && (a === "ALL" || a === "GUEST" && d.id === null || a === "LOGIN" && d.id || a === "TAG" && n.some(p => r.includes(p)) || a === "EXCLUDE_TAG" && !n.some(p => c.includes(p)));
        return {
            tieredPrices: o,
            allowTieredPrices: f,
            appliedCustomer: a,
            appliedTags: r,
            excludeTags: c
        }
    }
    async function pm(t, o) {
        const i = {};
        for (let a = 0; a < t.length; a++) {
            const r = t[a]
              , c = o[a]
              , d = await br(r, c);
            if (!d)
                continue;
            const n = d.wholesale_price || {}
              , {tieredPrices: f, allowTieredPrices: p} = cm(n);
            i[r] || (i[r] = []),
            i[r].push({
                optionSet: d,
                wholesalePrice: n,
                tieredPrices: f,
                allowTieredPrices: p
            })
        }
        return i
    }
    (async () => {
        if (B === "the-licorice-guy-b2b.myshopify.com") {
            const t = document.querySelectorAll("[data-product-id]")
              , o = Array.from(t).map(r => r.dataset.productId)
              , i = Array.from(t).map(r => r.dataset.productHandle)
              , a = await pm(o, i);
            Object.entries(a).forEach( ([r,c]) => {
                const d = document.querySelector(`[data-product-id="${r}"] form`);
                d && c.forEach(n => {
                    const {tieredPrices: f, allowTieredPrices: p} = n;
                    if (p) {
                        let s = d.querySelector('[name="properties[_tpo_wholesale]"]');
                        s || (s = document.createElement("input"),
                        s.type = "hidden",
                        s.name = "properties[_tpo_wholesale]",
                        d.appendChild(s)),
                        s.value = Hp(f)
                    } else {
                        const s = d.querySelector('[name="properties[_tpo_wholesale]"]');
                        s && s.remove()
                    }
                }
                )
            }
            )
        }
    }
    )();
    let $a = document.querySelector(Fc) || document.createElement("div")
      , qt = {
        easifyUrl: `https://${Ja}/apps/easify-po/`,
        tokenCart: "",
        cartJson: {}
    };
    ry.includes(B) && Shopify?.routes?.root && (qt.easifyUrl = `https://${Ja}${Shopify?.routes?.root}apps/easify-po/`);
    function fr(t) {
        let o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return o ? `${parseInt(o[1], 16)}, ${parseInt(o[2], 16)}, ${parseInt(o[3], 16)}` : null
    }
    function ci(t, o=Ga) {
        let i = L_()
          , a = /\{\{\s*(\w+)\s*\}\}/;
        const r = O_(o);
        let c = r.group
          , d = r.decimal;
        if (o === Ga)
            switch (i.match(a)[1]) {
            case "amount_with_comma_separator":
            case "amount_no_decimals_with_comma_separator":
                c = ".",
                d = ",";
                break;
            case "amount_no_decimals_with_space_separator":
                c = " ";
                break;
            case "amount_with_apostrophe_separator":
                c = "'";
                break
            }
        let n = /\d+((\.|\'|\,| )\d+)*/g
          , f = t.trim().match(n);
        if (f) {
            let p = f[0];
            if (p = p.replaceAll(c, ""),
            p = p.replace(d, "."),
            p = p.replaceAll(" ", ""),
            dm(p))
                return parseFloat(p)
        }
        return 0
    }
    function Ta(t, o) {
        const i = ci(t);
        if (!$o)
            return i;
        const r = (o.properties || {})._tpo_active_currency;
        return r ? ci(t, r) : i
    }
    function dm(t) {
        return !isNaN(t) && !isNaN(parseFloat(t))
    }
    function um(t, o="default") {
        return o === "checkout" ? t.some(i => i.key === "_tpo_price") : t.some(i => i.key === "_tpo_price" || i.key === "_tpo_wholesale")
    }
    function Hp(t) {
        const o = t.map(i => ({
            min: i.minQty,
            max: i.maxQty,
            t: i.type === "percentage" ? "p" : "f",
            v: i.value
        }));
        return JSON.stringify(o)
    }
    function uo(t) {
        let o = {
            ...t
        };
        for (const i in o)
            i.startsWith("_tpo") && i !== "_tpo_add_by" && i !== "_tpo_option_value_id" ? delete o[i] : typeof o[i] == "string" && (o[i].trim() === "" ? delete o[i] : o[i] = o[i].replace(/\( \+(.*?) \)/g, "[ +$1 ]"));
        return o
    }
    function mr(t) {
        const o = t.filter(i => i.properties._tpo_add_on_key && i.properties._tpo_add_on_key !== "[]").map(i => ({
            i: i.id,
            q: parseInt(i.quantity),
            p: i.price,
            x: {
                o: i.properties?._tpo_option_value_id || ""
            }
        }));
        return JSON.stringify(o)
    }
    function Wp(t, o) {
        if (t === o)
            return !0;
        if (typeof t != "object" || typeof o != "object" || t === null || o === null)
            return typeof t == "string" && typeof o == "string" ? t.trim() === o.trim() : !1;
        const i = Object.keys(t).sort()
          , a = Object.keys(o).sort();
        if (i.length !== a.length)
            return !1;
        for (let r = 0; r < i.length; r++)
            if (i[r] !== a[r] || !Wp(t[i[r]], o[a[r]]))
                return !1;
        return !0
    }
    async function Up(t, o="default") {
        const i = "cart"
          , a = !ay.includes(B);
        let r = []
          , c = []
          , d = 0;
        qt.cartJson = {},
        qt.cartJson.tpo_add_price = 0,
        qt.cartJson.items = [],
        qt.tpoCartJson = t,
        qt.isCartEmpty = qt.tpoCartJson.items.length === 0;
        let n = 0;
        const f = Op === "split"
          , s = ["muskokahighlands.myshopify.com", "muskoka-highlands.myshopify.com"].includes(B);
        for (let l = 0; l < qt.tpoCartJson.items.length; l++) {
            let b = {
                title: "",
                originalUnitPrice: 0,
                quantity: 0,
                requiresShipping: Js,
                customAttributes: [],
                appliedDiscount: {
                    title: "",
                    valueType: "FIXED_AMOUNT",
                    value: 0,
                    description: ""
                },
                index: 0,
                taxable: a,
                isFromOptionSet: !0
            }
              , h = 0;
            const u = qt.tpoCartJson.items[l];
            d += u.quantity;
            let x = u.properties || {}
              , m = (Object.entries(x).length ? Object.entries(x).filter( ([H,T]) => T !== "") : [])?.map( ([H,T]) => ({
                key: H,
                value: T
            }))
              , S = [...m].filter( ({key: H, value: T}) => !Bo.includes(H));
            if (um(S, o))
                return {
                    lineItemsCustom: r
                };
            const y = u.product_id
              , g = u.handle
              , w = (await br(y, g))?.wholesale_price || {}
              , $ = JSON.parse(w.price_set || "[]")
              , L = JSON.parse(w.customer_tag || "{}").appliedCustomer || "ALL"
              , P = JSON.parse(w.customer_tag || "{}").tagSet || []
              , k = JSON.parse(w.customer_tag || "{}").excludeTagSet || []
              , A = Ki?.customer || {}
              , R = A.tags || []
              , Q = $.length > 0 && xa && (L === "ALL" || L === "GUEST" && A.id === null || L === "LOGIN" && A.id || L === "TAG" && R.some(H => P.includes(H)) || L === "EXCLUDE_TAG" && !R.some(H => k.includes(H)));
            let I = 0
              , F = 0
              , ee = 0;
            f || m.findIndex(T => /\[ .+ \]/g.test(T.value)) > -1 && (m = m.filter( ({key: T, value: E}) => Bo.includes(T))),
            r.push({
                variantId: `gid://shopify/ProductVariant/${u.variant_id}`,
                quantity: u.quantity,
                sku: u.sku,
                customAttributes: m,
                appliedDiscount: {
                    title: Li ? ze(Li, "") : "Wholesale discount",
                    valueType: "FIXED_AMOUNT",
                    value: h || 0,
                    description: ""
                },
                originalUnitPrice: u.final_line_price,
                index: n,
                productId: u.product_id
            });
            let K = n;
            if (n++,
            u.properties) {
                let H = 0;
                for (const q in u.properties) {
                    let j = u.properties[q];
                    if (j && typeof j == "string") {
                        const N = / \|\s+\d+/g;
                        N.test(j) && (j = j.replace(N, ""));
                        for (let O of j.split("],"))
                            if (O) {
                                O.endsWith("]") || (O = O + "]");
                                let M = /\[ \+(.*)\]/
                                  , z = O.match(M);
                                if (z) {
                                    let X = z[1]
                                      , J = ci(X);
                                    J = Ta(X, u),
                                    H += parseFloat(J * 100)
                                }
                            }
                    }
                }
                H += u.price;
                let T;
                TPOConfigs?.settings?.newAddOnPrice === "expand" ? T = 0 : T = H - ta(H, {
                    value: u.quantity
                }, Q, $, i),
                F += T * u.quantity;
                for (const q in u.properties) {
                    let j = 0
                      , N = u.properties[q]
                      , U = {
                        key: q,
                        value: N
                    }
                      , O = null
                      , M = N;
                    if (M && typeof M == "string") {
                        let z = !1;
                        const X = / \|\s+\d+/g;
                        X.test(M) && (M = M.replace(X, ""));
                        for (let me of M.split("],"))
                            if (me) {
                                me.endsWith("]") || (me = me + "]");
                                let Me = /\[ \+(.*)\]/
                                  , Te = me.match(Me);
                                if (Te) {
                                    z = !0;
                                    let we = Te[1]
                                      , Ce = ci(we);
                                    Ce = Ta(we, u),
                                    j += parseFloat(Ce * 100),
                                    I += parseFloat(Ce * 100) * u.quantity
                                }
                            }
                        let te = /\( \+(.*)\)/;
                        if (M.match(te)) {
                            for (let me of M.split("),"))
                                if (me) {
                                    me.endsWith(")") || (me = me + ")");
                                    let Me = /\( \+(.*)\)/
                                      , Te = me.match(Me);
                                    if (Te) {
                                        let we = Te[1]
                                          , Ce = ci(we);
                                        Ce = Ta(we, u),
                                        ee += parseFloat(Ce * 100) * (Eo ? 1 : u.quantity)
                                    }
                                }
                        }
                        let ue = T * j / H;
                        ue = parseFloat((ue / 100).toFixed(2)),
                        z && (O = {
                            key: `${q}`,
                            value: N
                        },
                        f ? (r.push({
                            title: Yo ? ze(Yo, u.title) : `Custom Option for ${u.title}`,
                            originalUnitPrice: parseFloat(j / 100),
                            quantity: s ? 1 : u.quantity,
                            requiresShipping: Js,
                            customAttributes: [U, O],
                            appliedDiscount: {
                                title: Li ? ze(Li, "") : "Wholesale discount",
                                valueType: "FIXED_AMOUNT",
                                value: ue || 0,
                                description: ""
                            },
                            taxable: a,
                            index: n,
                            isFromOptionSet: !0,
                            properties: u.properties
                        }),
                        n++) : b = {
                            ...b,
                            title: Yo ? ze(Yo, u.title) : `Custom Option for ${u.title}`,
                            originalUnitPrice: b.originalUnitPrice + parseFloat(j / 100),
                            quantity: s ? 1 : u.quantity,
                            customAttributes: S,
                            appliedDiscount: {
                                title: Li ? ze(Li, "") : "Wholesale discount",
                                valueType: "FIXED_AMOUNT",
                                value: b.appliedDiscount.value + ue,
                                description: ""
                            },
                            index: n,
                            properties: u.properties
                        })
                    }
                }
                !f && b.quantity > 0 && (r.push(b),
                n++),
                h = T * u.price / H || 0,
                h = parseFloat((h / 100).toFixed(2));
                let E = {
                    tpo_add_price: I,
                    tpo_add_on_product_price: ee,
                    tpo_final_add_price: F ? I - F : I,
                    original_price: u.original_price,
                    original_line_price: u.original_line_price,
                    final_line_price: u.final_line_price,
                    final_price: u.final_price,
                    product_id: u.product_id,
                    variant_id: u.variant_id,
                    quantity: u.quantity,
                    key: u.key
                };
                qt.cartJson.items.push(E),
                u.original_price,
                u.original_line_price,
                u.final_price,
                u.final_line_price,
                I > -1 && (c.push({
                    cart_item_key: u.key,
                    price_add: I
                }),
                qt.cartJson.tpo_add_price += I)
            } else
                h = u.price - ta(u.price, {
                    value: u.quantity
                }, Q, $, i);
            r[K].appliedDiscount.value = h,
            r[K].key = u.key
        }
        return {
            lineItemsCustom: r
        }
    }
    async function yl(t) {
        let o = {
            updates: {}
        }
          , i = {
            items: []
        }
          , a = [];
        for (const d of t)
            if (d.properties) {
                const n = !!d.properties._tpo_add_on_key
                  , f = !!d.properties._tpo_is_main_product
                  , p = !!d.properties._tpo_custom_options
                  , s = !!d.properties._tpo_wholesale;
                if (p || s) {
                    let l = d.properties._tpo_custom_options ? JSON.parse(d.properties._tpo_custom_options) : {}
                      , b = uo(d.properties);
                    Wp(l, b) || a.push({
                        key: d.key,
                        properties: {
                            ...b,
                            ...d?.properties?._tpo_price != null ? {
                                _tpo_price: d.properties._tpo_price
                            } : {},
                            ...d?.properties?._tpo_wholesale != null ? {
                                _tpo_wholesale: d.properties._tpo_wholesale
                            } : {},
                            ...d?.properties?._tpo_add_on_products != null ? {
                                _tpo_add_on_products: d.properties._tpo_add_on_products
                            } : {},
                            ...d?.properties?._tpo_add_on_keys != null ? {
                                _tpo_add_on_keys: d.properties._tpo_add_on_keys
                            } : {},
                            _tpo_custom_options: JSON.stringify(b)
                        },
                        quantity: d.quantity
                    })
                }
                if (n) {
                    const l = d.properties._tpo_add_on_key;
                    t.findIndex(h => {
                        const u = h.properties ? JSON.parse(h.properties._tpo_add_on_keys || "[]") : [];
                        return !(!u.length || !u.includes(l))
                    }
                    ) < 0 && (o.updates[d.key] = 0)
                } else if (f) {
                    const l = JSON.parse(d.properties._tpo_add_on_keys || "[]")
                      , b = JSON.parse(d.properties._tpo_add_on_variant_ids || "[]")
                      , h = JSON.parse(d.properties._tpo_one_time_charges || "[]");
                    for (let u = 0; u < l.length; u++) {
                        const x = l[u]
                          , _ = b[u]
                          , m = t.find(v => {
                            const y = v.properties?._tpo_add_on_key;
                            return y ? v.variant_id == _ && y == x : !1
                        }
                        )
                          , S = h.find(v => v === _);
                        m ? Tf && !S && (o.updates[m.key] = Number(d.quantity || 0)) : S ? i.items.push({
                            id: _,
                            quantity: "1",
                            properties: {
                                _tpo_add_on_key: x,
                                _tpo_main_product_id: d.variant_id
                            }
                        }) : i.items.push({
                            id: _,
                            quantity: d.quantity,
                            properties: {
                                _tpo_add_on_key: x,
                                _tpo_main_product_id: d.variant_id
                            }
                        })
                    }
                }
            }
        return i.items.length && await fetch("/cart/add.js", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(i)
        }),
        JSON.stringify(o.updates) != "{}" && await fetch("/cart/update.js", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(o)
        }),
        a.length && await Promise.all(a.map(async d => {
            const n = {
                id: d.key,
                properties: d.properties,
                quantity: d.quantity
            };
            await fetch("/cart/change.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(n)
            })
        }
        )),
        await (await fetch("/cart.js?app=tpo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })).json()
    }
    async function _r(t="", o=!1) {
        try {
            let a = await (await fetch("/cart.js?app=tpo", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })).json();
            if (o) {
                await fm(a, t);
                return
            }
            a = await yl(a.items);
            let r = !1
              , d = (await Up(a, "checkout")).lineItemsCustom;
            for (let h = 0; h < d.length; h++)
                for (let u = h + 1; u < d.length; u++)
                    JSON.stringify(d[h]) === JSON.stringify(d[u]) && (d[h].quantity += d[u].quantity,
                    d.splice(u, 1));
            d.filter(h => h.customAttributes.some(u => u.key === "_tpo_add_on_keys")).length && (r = !0);
            const f = d.map(h => {
                if (h.isFromOptionSet ? delete h.isFromOptionSet : delete h.originalUnitPrice,
                $o) {
                    const u = h.properties || {}
                      , x = u._tpo_active_currency
                      , _ = u._tpo_currency_rate || 1;
                    x && (h.appliedDiscount && h.appliedDiscount.value && (h.appliedDiscount.value /= _),
                    h.variantId || (h.originalUnitPrice /= _))
                }
                if (delete h.properties,
                h.customAttributes.length)
                    h.customAttributes.forEach(u => {
                        if (typeof u.value == "string" && u.value.startsWith("https://") && (u.value.includes("apps/easify-po/apps/download") || u.value.includes("linodeobjects"))) {
                            const x = u.value.replace(/\[ \+(.*)\]/, "");
                            x && (u.value = x.trim())
                        }
                    }
                    );
                else
                    return h;
                return h
            }
            );
            let p = document.querySelector(".tpo-discount-code-block") || null
              , s = p ? p.querySelector("input.tpo-discount-code-input--input").value.trim() : ""
              , l = {
                line_items: f,
                cart: qt,
                customer: Nc,
                discount_code: s,
                showDiscountBoxOnCheckout: Jf,
                locale: {
                    shouldUseMultiCurrency: $o,
                    locale: Ga,
                    currency: Hc
                }
            };
            await S_(l);
            const b = qt.cartJson.items.some(h => h.tpo_add_price > h.tpo_final_add_price);
            if (B === "43d530-3.myshopify.com" && qt.cartJson.tpo_add_price > 0) {
                r ? window.location.href = "/checkout" : window.location.href = t || "/checkout";
                return
            }
            if (qt.cartJson.tpo_add_price > 0 || b) {
                const h = {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        shop: B
                    },
                    body: JSON.stringify(l)
                };
                fetch(`${qt.easifyUrl}apps/draft-order`, h).then(function(u) {
                    if (u.status == "200")
                        return u.json().then(function(x) {
                            typeof x?.draftOrder?.invoiceUrl == "string" && (window.location.href = x.draftOrder.invoiceUrl)
                        })
                }).catch(u => {}
                )
            } else
                r ? window.location.href = "/checkout" : window.location.href = t || "/checkout"
        } catch {}
    }
    async function fm(t, o) {
        await window.bndlr.getCheckoutInfo(async function(i) {
            if (typeof i < "u" && typeof i.can_apply_discount < "u" && i.can_apply_discount === !0) {
                let a = []
                  , r = 0;
                qt.cartJson.items = [],
                i.items.forEach(h => {
                    const u = t.items.findIndex(x => x.variant_id == h.variant_id);
                    u > -1 && (h.properties = t.items[u].properties,
                    h.handle = t.items[u].handle,
                    h.sku = t.items[u].sku,
                    h.final_price = t.items[u].final_price,
                    h.final_line_price = h.final_price * h.quantity,
                    h.key = self.crypto.randomUUID(),
                    h.original_price = t.items[u].original_price,
                    h.original_line_price = h.original_price * h.quantity)
                }
                );
                const d = ["muskokahighlands.myshopify.com", "muskoka-highlands.myshopify.com"].includes(B)
                  , n = Op === "split";
                for (let h = 0; h < i.items.length; h++) {
                    let u = {
                        title: "",
                        originalUnitPrice: 0,
                        quantity: 0,
                        requiresShipping: Js,
                        customAttributes: [],
                        appliedDiscount: {
                            title: "",
                            valueType: "FIXED_AMOUNT",
                            value: 0,
                            description: ""
                        },
                        index: 0,
                        isFromOptionSet: !0
                    }
                      , x = 0;
                    const _ = i.items[h];
                    let m = _.properties || {}
                      , v = (Object.entries(m).length ? Object.entries(m).filter( ([T,E]) => E !== "") : [])?.map( ([T,E]) => ({
                        key: T,
                        value: E
                    }))
                      , y = [...v].filter( ({key: T, value: E}) => !Bo.includes(T));
                    const g = _.product_id
                      , C = _.handle
                      , $ = (await br(g, C))?.wholesale_price || {}
                      , L = JSON.parse($.price_set || "[]")
                      , P = JSON.parse($.customer_tag || "{}").appliedCustomer || "ALL"
                      , k = JSON.parse($.customer_tag || "{}").tagSet || []
                      , A = JSON.parse($.customer_tag || "{}").excludeTagSet || []
                      , R = Ki?.customer || {}
                      , Q = R.tags || []
                      , I = L.length > 0 && xa && (P === "ALL" || P === "GUEST" && R.id === null || P === "LOGIN" && R.id || P === "TAG" && Q.some(T => k.includes(T)) || P === "EXCLUDE_TAG" && !Q.some(T => A.includes(T)));
                    let F = 0
                      , ee = 0;
                    n || v.findIndex(E => /\[ .+ \]/g.test(E.value)) > -1 && (v = v.filter( ({key: E, value: q}) => Bo.includes(E))),
                    a.push({
                        variantId: `gid://shopify/ProductVariant/${_.variant_id}`,
                        quantity: _.quantity,
                        sku: _.sku,
                        customAttributes: v,
                        appliedDiscount: {
                            title: Li ? ze(Li, "") : "Wholesale discount",
                            valueType: "FIXED_AMOUNT",
                            value: x || 0,
                            description: ""
                        },
                        originalUnitPrice: _.final_line_price,
                        index: r,
                        productId: _.product_id
                    });
                    let K = r;
                    if (r++,
                    _.properties) {
                        let T = 0;
                        for (const j in _.properties) {
                            let N = _.properties[j];
                            if (N && typeof N == "string") {
                                const U = / \|\s+\d+/g;
                                U.test(N) && (N = N.replace(U, ""));
                                for (let M of N.split("],"))
                                    if (M) {
                                        M.endsWith("]") || (M = M + "]");
                                        let z = /\[ \+(.*)\]/
                                          , X = M.match(z);
                                        if (X) {
                                            let J = X[1]
                                              , te = ci(J);
                                            te = Ta(J, _),
                                            T += parseFloat(te * 100)
                                        }
                                    }
                            }
                        }
                        T += _.price;
                        let E = T - ta(T, {
                            value: _.quantity
                        }, I, L);
                        ee += E * _.quantity;
                        for (const j in _.properties) {
                            let N = 0
                              , U = _.properties[j]
                              , O = {
                                key: j,
                                value: U
                            }
                              , M = null
                              , z = U;
                            if (z && typeof z == "string") {
                                let X = !1;
                                const J = / \|\s+\d+/g;
                                J.test(z) && (z = z.replace(J, ""));
                                for (let me of z.split("],"))
                                    if (me) {
                                        me.endsWith("]") || (me = me + "]");
                                        let Me = /\[ \+(.*)\]/
                                          , Te = me.match(Me);
                                        if (Te) {
                                            X = !0;
                                            let we = Te[1]
                                              , Ce = ci(we);
                                            Ce = Ta(we, _),
                                            N += parseFloat(Ce * 100),
                                            F += parseFloat(Ce * 100) * _.quantity
                                        }
                                    }
                                let ue = E * N / T;
                                ue = parseFloat((ue / 100).toFixed(2)),
                                X && (M = {
                                    key: `${j}`,
                                    value: U
                                },
                                n ? (a.push({
                                    title: Yo ? ze(Yo, _.title) : `Custom Option for ${_.title}`,
                                    originalUnitPrice: parseFloat(N / 100),
                                    quantity: d ? 1 : _.quantity,
                                    requiresShipping: Js,
                                    customAttributes: [O, M],
                                    appliedDiscount: {
                                        title: Li ? ze(Li, "") : "Wholesale discount",
                                        valueType: "FIXED_AMOUNT",
                                        value: ue || 0,
                                        description: ""
                                    },
                                    index: r,
                                    isFromOptionSet: !0
                                }),
                                r++) : u = {
                                    ...u,
                                    title: Yo ? ze(Yo, _.title) : `Custom Option for ${_.title}`,
                                    originalUnitPrice: u.originalUnitPrice + parseFloat(N / 100),
                                    quantity: d ? 1 : _.quantity,
                                    customAttributes: y,
                                    appliedDiscount: {
                                        title: Li ? ze(Li, "") : "Wholesale discount",
                                        valueType: "FIXED_AMOUNT",
                                        value: u.appliedDiscount.value + ue,
                                        description: ""
                                    },
                                    index: r
                                })
                            }
                        }
                        !n && u.quantity > 0 && (a.push(u),
                        r++),
                        x = E * _.price / T || 0,
                        x = parseFloat((x / 100).toFixed(2));
                        let q = {
                            tpo_add_price: F,
                            tpo_final_add_price: ee ? F - ee : F,
                            original_price: _.original_price,
                            original_line_price: _.original_line_price,
                            final_line_price: _.final_line_price,
                            final_price: _.final_price,
                            product_id: _.product_id,
                            variant_id: _.variant_id,
                            quantity: _.quantity,
                            key: _.key
                        };
                        qt.cartJson.items.push(q)
                    } else
                        x = _.price - ta(_.price, {
                            value: _.quantity
                        }, I, L);
                    let H = a[K].appliedDiscount;
                    _.applied_discount.value && (H.value ? H.title += `+ ${_.applied_discount.title}` : H.title = `${_.applied_discount.title}`,
                    H.value += _.applied_discount.value),
                    a[K].appliedDiscount = H,
                    a[K].key = _.key
                }
                for (let h = 0; h < a.length; h++)
                    for (let u = h + 1; u < a.length; u++)
                        JSON.stringify(a[h]) === JSON.stringify(a[u]) && (a[h].quantity += a[u].quantity,
                        a.splice(u, 1));
                a.filter(h => h.customAttributes.some(u => u.key === "_tpo_add_on_keys"));
                const f = a.map(h => (h.isFromOptionSet ? delete h.isFromOptionSet : delete h.originalUnitPrice,
                h.variantId || (h.originalUnitPrice /= ht),
                h.customAttributes.length,
                h));
                let p = document.querySelector(".tpo-discount-code-block") || null
                  , s = p ? p.querySelector("input.tpo-discount-code-input--input").value.trim() : ""
                  , l = {
                    line_items: f,
                    cart: qt,
                    customer: Nc,
                    discount_code: s,
                    locale: {
                        shouldUseMultiCurrency: $o,
                        locale: Ga,
                        currency: Hc
                    }
                };
                const b = qt.cartJson.items.some(h => h.tpo_add_price > h.tpo_final_add_price);
                if (qt.cartJson.tpo_add_price > 0 || b) {
                    const h = {
                        method: "POST",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json",
                            shop: B
                        },
                        body: JSON.stringify(l)
                    };
                    fetch(`${qt.easifyUrl}apps/draft-order`, h).then(function(u) {
                        if (u.status == "200")
                            return u.json().then(function(x) {
                                typeof x?.draftOrder?.invoiceUrl == "string" && (window.location.href = x.draftOrder.invoiceUrl)
                            })
                    }).catch(u => {}
                    )
                } else
                    window.bndlr.checkout()
            } else
                await _r(o, !1)
        })
    }
    function hr() {
        if (!zp() || !$d() || Xs.includes(B))
            return;
        let t = document.querySelectorAll(An.join(","));
        for (let i = 0; i < t.length; i++) {
            let a = t[i];
            if (a) {
                let d = function() {
                    c.innerHTML = r,
                    c.disabled = !1
                };
                var o = d;
                if (_m(a))
                    continue;
                let r = a.innerHTML
                  , c = a.cloneNode(!0);
                c.removeAttribute("onclick"),
                a.parentNode.insertBefore(c, a),
                c.classList.add("tpo-btn-checkout"),
                c.style.pointerEvents = "auto",
                c.onclick = function() {
                    return !1
                }
                ,
                c.removeAttribute("onclick"),
                a.parentNode.removeChild(a);
                let n = !1;
                Object.keys(window.bndlr || {}).length > 0 && (n = !0),
                n && window.bndlr.preventBundlerCheckout(),
                c.addEventListener("click", async function(f) {
                    if (!(window.pickeasy && typeof window.handleCheckoutClick == "function" && !window.handleCheckoutClick()) && !(window.Zapiet && !window.ZapietCheckoutEnabled))
                        if (nf.find(p => B === p)) {
                            const p = document.querySelector(".rale-widget .rale-container input");
                            p && p.checked && (f.preventDefault(),
                            f.stopPropagation(),
                            c.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
                            c.disabled = !0,
                            await _r("", n),
                            window.addEventListener("pagehide", function() {
                                d()
                            }))
                        } else {
                            if (!Rp(c)) {
                                if (window.rterms) {
                                    const s = window.rterms.metafield?.alert_message ? window.rterms.metafield.alert_message : "Please select the terms of service";
                                    alert(s)
                                }
                                return
                            }
                            let p = mm();
                            if (p) {
                                alert(`Please fill out ${p} field`);
                                return
                            }
                            f.preventDefault(),
                            f.stopPropagation(),
                            c.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
                            c.disabled = !0,
                            await _r("", n),
                            window.addEventListener("pagehide", function() {
                                d()
                            })
                        }
                })
            }
        }
    }
    hr();
    function Rp(t) {
        const o = t.parentElement.querySelector(".rterms-checkbox");
        return !o || o.checked
    }
    function mm() {
        let t = document.querySelectorAll('form[action="/cart"] input[name*="attributes["][required]')
          , o = t.length ? t : document.querySelectorAll(".tpo-cart-attribute[required]");
        if (!o.length)
            return !1;
        for (let i = 0; i < o.length; i++) {
            let a = o[i];
            if (a.value === "")
                return a.name?.match(/\[([^)]+)\]/)?.[1] || "Attributes"
        }
        return !1
    }
    const Vp = (t, o) => {
        o && (t === "enable" ? (o.classList.remove("swatches-not-avaliable"),
        o.querySelector("input").disabled = !1) : t === "disable" && (o.classList.add("swatches-not-avaliable"),
        o.querySelector("input").disabled = !0))
    }
    ;
    function zp() {
        const t = document.querySelector("#birdchime-slots-box");
        return !window.BirdApp && !t
    }
    function _m(t) {
        return t.id === "qtl-quote"
    }
    function hm(t) {
        let o = [".additional-checkout-buttons", ".dynamic-checkout__content"];
        const i = document.querySelector(o);
        if (!i)
            return;
        ym(t.items) ? i.style.pointerEvents = "none" : i.style.pointerEvents = "auto"
    }
    function ym(t) {
        if (!t.length)
            return !1;
        for (const o of t) {
            let i = o.properties;
            if (i && i.toString() !== "{}") {
                for (let[a,r] of Object.entries(i))
                    if (r && typeof r == "string") {
                        let c = /\[ \+(.*)\]/
                          , d = r.match(c);
                        if (d) {
                            let n = d[1]
                              , f = ci(n);
                            if (f = Ta(n, o),
                            f)
                                return !0
                        }
                    }
            }
        }
        return !1
    }
    async function Jn() {
        if (!zp() || !$d() || Xs.includes(B))
            return;
        let t = Array.from(document.querySelectorAll(zc.join(",")));
        for (let i = 0; i < t.length; i++) {
            let a = t[i];
            if (a) {
                let d = function() {
                    c.innerHTML = r,
                    c.disabled = !1
                };
                var o = d;
                let r = a.innerHTML
                  , c = a.cloneNode(!0);
                a.parentNode.insertBefore(c, a),
                c.classList.add("tpo-btn-checkout"),
                c.style.pointerEvents = "auto",
                c.onclick = function() {
                    return !1
                }
                ,
                c.removeAttribute("onclick"),
                a.parentNode.removeChild(a);
                let n = !1;
                Object.keys(window.bndlr || {}).length > 0 && (n = !0),
                n && window.bndlr.preventBundlerCheckout(),
                c.addEventListener("click", async function(f) {
                    if (!(window.pickeasy && typeof window.handleCheckoutClick == "function" && !window.handleCheckoutClick())) {
                        if (nf.find(p => B === p)) {
                            const p = document.querySelector(".rale-widget .rale-container input");
                            if (p && !p.checked)
                                return
                        }
                        if (!Rp(c)) {
                            if (window.rterms) {
                                const p = window.rterms.metafield?.alert_message ? window.rterms.metafield.alert_message : "Please select the terms of service";
                                alert(p)
                            }
                            return
                        }
                        f.preventDefault(),
                        f.stopPropagation(),
                        c.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
                        c.disabled = !0,
                        await _r("", n),
                        window.addEventListener("pagehide", function() {
                            d()
                        })
                    }
                })
            }
        }
    }
    setTimeout(async () => {
        await Jn()
    }
    , 1500);
    const Qn = {
        isProcessed: !1,
        activeIntervals: [],
        addInterval: function(t, o) {
            o && this.activeIntervals.push(t)
        },
        stopAll: function(t) {
            t && (this.isProcessed = !0,
            this.activeIntervals.forEach(o => clearInterval(o)),
            this.activeIntervals = [])
        }
    };
    function Gn(t, o) {
        if (hf.includes(B) || Go && Qn.isProcessed)
            return;
        let a = setInterval(function() {
            if (Go && Qn.isProcessed)
                return;
            const r = `
                <style>
                .lds-ring { display: inline-block; position: relative; width: 20px; height: 20px; }
                .lds-ring div { box-sizing: border-box; display: block; position: absolute; width: 16px; height: 16px; margin: 2px; border: 2px solid #fff; border-radius: 50%; animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite; border-color: #fff transparent transparent transparent; }
                .lds-ring div:nth-child(1) { animation-delay: -0.45s; }
                .lds-ring div:nth-child(2) { animation-delay: -0.3s; }
                .lds-ring div:nth-child(3) { animation-delay: -0.15s; }
                @keyframes lds-ring { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                </style>
            `
              , c = t.closest(Yt);
            let d = c ? c.querySelectorAll(".tpo-buy-it-now-btn") : document.querySelectorAll(".tpo-buy-it-now-btn");
            if (!d || d.length === 0) {
                let f = document.querySelectorAll(Vs.join(","));
                for (let p = 0; p < f.length; p++) {
                    let s = c ? c.querySelector(Vs) : f[p];
                    if (s) {
                        s.tagName,
                        (s.localName === "shop-pay-wallet-button" || s.localName === "shopify-google-pay-button" || s.localName === "shopify-apple-pay-button") && s.button && (s = s.button);
                        let l = s.innerHTML;
                        if (s !== mt) {
                            let h = function() {
                                Go ? (b.innerHTML = "",
                                b.style.backgroundColor = "transparent",
                                b.style.pointerEvents = "auto") : (b.innerHTML = l,
                                b.disabled = !1)
                            };
                            var n = h;
                            let b;
                            if (!Go) {
                                const u = document.createElement("div")
                                  , x = window.getComputedStyle(s);
                                u.style.display = x.display,
                                u.style.position = "relative",
                                u.style.width = "100%",
                                u.classList.add("tpo-btn-wrapper"),
                                s.slot && (u.slot = s.slot),
                                s.parentNode?.insertBefore(u, s),
                                u.appendChild(s),
                                b = document.createElement("div"),
                                b.classList.add("tpo-buy-it-now-btn"),
                                Object.assign(b.style, {
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: "2147483647",
                                    cursor: "pointer",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "transparent"
                                }),
                                u.appendChild(b),
                                Qn.stopAll(Go)
                            }
                            b.addEventListener("click", async function(u) {
                                u.preventDefault(),
                                u.stopPropagation();
                                let x;
                                if (Go)
                                    b.innerHTML = `${r}<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`,
                                    b.style.backgroundColor = "rgba(255, 255, 255, 0.6)",
                                    b.style.pointerEvents = "none",
                                    x = s.closest(Ai);
                                else {
                                    b.innerHTML = `${r}<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`,
                                    b.style.pointerEvents = "none",
                                    b.disabled = !0,
                                    x = b.closest(Ai);
                                    const C = b.closest(".tpo-btn-wrapper");
                                    C && (C.style.pointerEvents = "none",
                                    C.style.opacity = "0.5")
                                }
                                x || (x = t || null);
                                const _ = x?.querySelector('[name="properties[_tpo_price]"]')
                                  , m = x?.querySelector('[name="properties[_tpo_custom_options]"]')
                                  , S = x?.querySelector('[name="properties[_tpo_add_on_products]"]')
                                  , v = !!x?.querySelector('[name="properties[_tpo_wholesale]"]')
                                  , y = _?.value?.trim()
                                  , g = m?.value?.trim();
                                (y === "" || y === "0") && _?.remove(),
                                !v && (g === "" || g === "{}") && m?.remove(),
                                S?.value?.trim() || S?.remove(),
                                await Jp(x, o),
                                window.addEventListener("pagehide", function() {
                                    h()
                                })
                            })
                        } else
                            s.addEventListener("click", async function(b) {
                                let h = document.querySelector(Fc) || document.createElement("div");
                                const u = s.closest(Ai);
                                if (l = s.innerHTML,
                                ke(u, h)) {
                                    b.preventDefault(),
                                    b.stopPropagation(),
                                    s.innerHTML = `${Go ? r : ""}<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`,
                                    s.disabled = !0;
                                    const x = u.querySelector('[name="properties[_tpo_price]"]')
                                      , _ = u.querySelector('[name="properties[_tpo_custom_options]"]')
                                      , m = u.querySelector('[name="properties[_tpo_add_on_products]"]')
                                      , S = !!u.querySelector('[name="properties[_tpo_wholesale]"]')
                                      , v = x?.value?.trim()
                                      , y = _?.value?.trim();
                                    (v === "" || v === "0") && x?.remove(),
                                    !S && (y === "" || y === "{}") && _?.remove(),
                                    m?.value?.trim() || m?.remove(),
                                    await Jp(u, o),
                                    window.addEventListener("pagehide", function() {
                                        s.innerHTML = l,
                                        s.disabled = !1
                                    })
                                }
                            })
                    }
                }
            } else
                clearInterval(a)
        }, 500);
        Qn.addInterval(a, Go),
        setTimeout( () => {
            clearInterval(a)
        }
        , 2e3)
    }
    async function Jp(t, o=ti[0] || {}) {
        const i = t || (It ? ii.querySelector(ko) : document.querySelector(Ai));
        ld(i),
        Jl(i).then(y => {}
        ),
        kn && fl(i);
        const a = new FormData(i)
          , r = si !== "bundle" && a.get("quantity") || "1";
        let c = document.querySelector("cart-notification") || document.querySelector("cart-drawer") || document.querySelector("cart-dropdown-bubble");
        c && c.getSectionsToRender && (a.append("sections", c.getSectionsToRender().map(y => y.id)),
        a.append("sections_url", window.location.pathname));
        let d = !1
          , n = ""
          , f = ""
          , p = 0
          , s = {}
          , l = ""
          , b = !1;
        a.forEach( (y, g) => {
            /\[ \+(.*)\]/.exec(y) && (d = !0);
            let L = /properties\[(.+)\]/.exec(g);
            g === "quantity" ? f = y : g === "id" ? n = y : L && L.length > 1 && y && (L[1].startsWith("_tpo") || (b = !0),
            s[L[1]] = y)
        }
        ),
        b && zt && ed(s);
        const h = []
          , u = {
            properties: {
                _tpo_add_on_keys: [],
                _tpo_add_on_variant_ids: [],
                _tpo_one_time_charges: [],
                _tpo_wholesale: [],
                _tpo_custom_options: []
            }
        };
        a?.get("properties[_tpo_wholesale]") ? u.properties._tpo_wholesale = a.get("properties[_tpo_wholesale]") : delete u.properties._tpo_wholesale,
        a?.get("properties[_tpo_wholesale]") && a?.get("properties[_tpo_custom_options]") ? u.properties._tpo_custom_options = a.get("properties[_tpo_custom_options]") : delete u.properties._tpo_custom_options;
        let x = {
            items: []
        };
        const _ = o.options || [];
        Xp(u, i),
        Ld(u),
        _.forEach( (y, g) => {
            const C = y.one_time_charge ? JSON.parse(y.one_time_charge) : {
                enable: !1,
                type: "cart"
            }
              , w = C?.enable;
            C?.type;
            let $ = y.multi_select || 0;
            const L = y.id;
            y.type === "checkbox" && ($ = !0);
            const P = y.option_types || [];
            let k = y.option_identifier;
            const A = JSON.parse(y.metadata || "{}");
            let {separateAddOnProduct: R=!1} = A;
            R && (k = `_${k}`);
            const Q = y.quantity_selector ? JSON.parse(y.quantity_selector).enable : !1;
            let I = a.get(`properties[${k}]`);
            y.type === "file-upload" && (I = k);
            let F = null, ee;
            try {
                ee = JSON.parse(y?.metadata)
            } catch {
                ee = null
            }
            if (y.type !== "dimension" && ee?.useDimensionDropdownPricing) {
                const T = document.querySelector("[id*='" + y.id + "'] .tpo_additional-price.active")
                  , E = T ? T?.textContent.match(/\(\+?(.*)\)/) : null
                  , q = E ? E[1] : null;
                F = q ? ci(q) : null
            }
            const K = y?.option_types.map(T => ({
                label: T.label,
                price: F || T.additional_price,
                id: T.id,
                variantId: T.variant_id
            }));
            let H = K.some(T => T.variantId !== null && T.variantId !== "");
            if (typeof I == "string")
                if (y.type === "dropdown" || y.type === "radio-buttons" || $ && !Fr.find(T => T === y.type)) {
                    let T = [];
                    K.forEach( ({label: E, price: q, id: j, variantId: N}) => {
                        if (Q) {
                            const U = i.querySelector(`[id*="${L},${j},quantity_selector"]`) || i.querySelector(`[id*="${L},${y.type},quantity_selector"]`) || document.querySelector(`[id*="${L},${j},quantity_selector"]`) || document.querySelector(`[id*="${L},${y.type},quantity_selector"]`);
                            if (q) {
                                if (U && U.value) {
                                    const O = PriceFormatter.formatMoney(parseFloat(q * Number(U.value) * 100), !0);
                                    I.includes(`${E} [`) && I.startsWith(`${E} [`) || I.includes(`, ${E} [`) ? (T.push(`${E} [ +${O} ] | ${U.value}`),
                                    N || (p += parseFloat(q * Number(U.value)))) : (I.endsWith(`, ${E} [ +${O} ] | ${U.value}`) || I === `${E} [ +${O} ] | ${U.value}`) && (T.push(`${E} [ +${O} ] | ${U.value}`),
                                    N || (p += parseFloat(q * Number(U.value))))
                                }
                            } else
                                U && U.value && (I.includes(`${E} |`) && I.startsWith(`${E} | ${U.value}`) || I.includes(`, ${E} |`) ? T.push(`${E} | ${U.value}`) : (I.endsWith(`, ${E} | ${U.value}`) || I === `${E} | ${U.value}`) && T.push(`${E} | ${U.value}`))
                        } else if (q) {
                            if (I.includes(`${E} [`) && I.startsWith(`${E} [`) || I.includes(`, ${E} [`)) {
                                const U = PriceFormatter.formatMoney(parseFloat(q * 100), !0);
                                T.push(`${E} [ +${U} ]`),
                                N || (p += parseFloat(q))
                            }
                        } else
                            (I.includes(`${E},`) && I.startsWith(E) || I.includes(`, ${E},`) || I.endsWith(`, ${E}`) || I === E) && T.push(E)
                    }
                    ),
                    I = [...T]
                } else {
                    let T = y.additional_price || 0;
                    if (T && !H && (y.type === "date-picker" || y.type === "time-picker" || y.type === "date-range")) {
                        const E = PriceFormatter.formatMoney(parseFloat(T * 100), !0);
                        I = `${I} [ +${E} ]`
                    }
                    if (I && typeof I == "string") {
                        let E = /\[ \+(.*)\]/
                          , q = I.match(E);
                        if (q) {
                            let j = q[1]
                              , N = ci(j);
                            N && !H && (p += N)
                        }
                    }
                    I = [I]
                }
            if (P.forEach( (T, E) => {
                let q = T.variant_id || "";
                const j = T.additional_price || 0
                  , N = T.id;
                let U = T.label
                  , O = 1;
                if (Q) {
                    const X = i.querySelector(`[id*="${L},${N},quantity_selector"]`) || i.querySelector(`[id*="${L},${y.type},quantity_selector"]`) || document.querySelector(`[id*="${L},${N},quantity_selector"]`) || document.querySelector(`[id*="${L},${y.type},quantity_selector"]`);
                    if (X && X.value)
                        if (O = Number(X.value),
                        j) {
                            let J = PriceFormatter.formatMoney(parseFloat(j * O * 100), !0);
                            U = `${U} [ +${J} ] | ${O}`
                        } else
                            U = `${U} | ${O}`
                } else if (j) {
                    let X = PriceFormatter.formatMoney(parseFloat(j * 100), !0);
                    U = `${U} [ +${X} ]`
                }
                const z = Q_(y?.metadata)?.separateAddOnProduct || !1;
                if (q && I && I[0])
                    if (Fr.find(X => X === y.type)) {
                        let X = I[0];
                        X = X.replace(/\[/g, "("),
                        X = X.replace(/]/g, ")"),
                        I[0] = Sa ? PropertyFormatter.removeMoneyProperty(X) : X;
                        let J = X ? X.replace(/\s(\(.*?\)|\{.*?\})/g, "") : 0;
                        if (y.type === "text-box") {
                            const te = y.price_type
                              , ue = y.metadata ? JSON.parse(y.metadata) : {}
                              , me = ue.priceNotSpace ? ue.priceNotSpace : !1
                              , Me = {
                                enabled: !!ue?.noChargesSpecialChars?.enabled,
                                characters: ue?.noChargesSpecialChars?.characters || ""
                            };
                            switch (te) {
                            case "one":
                                J = 1;
                                break;
                            case "per_letter":
                                if (J) {
                                    let we = J;
                                    me && (we = we.replaceAll(" ", "")),
                                    Me?.enabled && Me.characters && (we = sa(we, Me.characters)),
                                    J = we.length
                                }
                                break;
                            case "quantity_letter":
                                const Te = JSON.parse(T.metadata || "{}");
                                if (Te.hasOwnProperty("min_text_length")) {
                                    q = "";
                                    let we = J;
                                    me && (we = we.replaceAll(" ", "")),
                                    Me?.enabled && Me.characters && (we = sa(we, Me.characters));
                                    let Ce = we.length;
                                    if (Ce < Te.min_text_length)
                                        break;
                                    if (!Te.max_text_length) {
                                        q = T.variant_id || "",
                                        J = "1";
                                        break
                                    }
                                    if (Te.max_text_length >= Te.min_text_length && Ce <= Te.max_text_length) {
                                        q = T.variant_id || "",
                                        J = "1";
                                        break
                                    }
                                    break
                                }
                            }
                        } else if (y.type === "range" && I && I[0]) {
                            let te = I[0].replace(/\[.*\]/, "").trim()
                              , ue = parseFloat(te);
                            const me = JSON.parse(T.metadata || "{}");
                            if ((JSON.parse(y.metadata || "{}").pricingLogic || "single") === "tiered" && (ue >= (me.min_value || 0) && ue <= (me.max_value || 1 / 0) || (q = "")),
                            q !== "")
                                if (si === "bundle" || Vt === "no" && si === "no") {
                                    const we = JSON.parse(y.metadata || "{}");
                                    if ((we.pricingLogic || "single") === "tiered" || y.option_types && y.option_types.length > 1) {
                                        const je = we.step || 1;
                                        J = Math.round(ue / je).toString()
                                    } else {
                                        const je = we.step || 1
                                          , Ae = Math.round(ue / je);
                                        Ae > 0 ? J = Ae.toString() : q = ""
                                    }
                                } else
                                    J = "1"
                        } else if (y.type === "quantity")
                            switch (y.price_type) {
                            case "all_with_new_price":
                                J = 1;
                                break
                            }
                        else
                            J.length && (J = "1");
                        if (q) {
                            if (Number(J) === 0)
                                return;
                            R ? h.push({
                                id: q,
                                quantity: Eo && Number(J) ? Number(J) : Number(J) ? Number(J) * (Number(r) || 1) : r,
                                price: parseFloat(j / ht),
                                identify: y?.option_identifier || "",
                                isSeparate: z,
                                properties: {
                                    ...zt && T.option_type_id && {
                                        _tpo_option_value_id: T.option_type_id.toString()
                                    }
                                }
                            }) : w ? h.push({
                                id: q,
                                quantity: "1",
                                price: parseFloat(j / ht),
                                identify: y?.option_identifier || "",
                                isSeparate: z,
                                properties: {
                                    _tpo_main_product_id: a.get("id"),
                                    _tpo_add_on_key: self.crypto.randomUUID(),
                                    _is_one_time_charge: `${q}`,
                                    ...zt && T.option_type_id && {
                                        _tpo_option_value_id: T.option_type_id.toString()
                                    }
                                }
                            }) : h.push({
                                id: q,
                                quantity: Eo && Number(J) ? Number(J) : Number(J) ? Number(J) * (Number(r) || 1) : r,
                                price: parseFloat(j / ht),
                                identify: y?.option_identifier || "",
                                isSeparate: z,
                                properties: {
                                    _tpo_main_product_id: a.get("id"),
                                    _tpo_add_on_key: self.crypto.randomUUID(),
                                    ...zt && T.option_type_id && {
                                        _tpo_option_value_id: T.option_type_id.toString()
                                    }
                                }
                            })
                        }
                    } else {
                        let X = I.indexOf(U);
                        if (X === -1 && y.type === "range" && I && I[0]) {
                            let J = I[0].replace(/\[.*\]/, "").trim()
                              , te = parseFloat(J);
                            const ue = JSON.parse(T.metadata || "{}");
                            (JSON.parse(y.metadata || "{}").pricingLogic || "single") === "tiered" ? te >= (ue.min_value || 0) && te <= (ue.max_value || 1 / 0) && (X = 0) : X = 0
                        }
                        if (X > -1) {
                            let J = 1;
                            if ((si === "bundle" || Vt === "no" && si === "no") && y.type === "range") {
                                const te = JSON.parse(y.metadata || "{}");
                                te.min;
                                const ue = te.step || 1;
                                let me = I[0].replace(/\[.*\]/, "").trim()
                                  , Me = parseFloat(me);
                                J = Math.round(Me / ue),
                                J === 0 && (q = "")
                            }
                            if (R) {
                                if (Q) {
                                    if (j) {
                                        let te = PriceFormatter.formatMoney(parseFloat(j * O * 100), !0);
                                        const ue = PriceFormatter.formatMoneyForAddOnProductProperty(te, Sa);
                                        I.splice(X, 1, `${T.label}${ue} | ${O}`)
                                    }
                                } else if (j) {
                                    let te = PriceFormatter.formatMoney(parseFloat(j * 100), !0);
                                    const ue = PriceFormatter.formatMoneyForAddOnProductProperty(te, Sa);
                                    I.splice(X, 1, `${T.label}${ue}`)
                                }
                            } else {
                                let te = I[X];
                                I[X] = te.replace(/\[(.+?)\]/, "($1)")
                            }
                            Q ? R ? h.push({
                                id: q,
                                quantity: Eo && O ? O : O ? O * (Number(r) || 1) : r,
                                price: parseFloat(j / ht),
                                identify: y?.option_identifier || "",
                                isSeparate: z,
                                properties: {
                                    ...zt && T.option_type_id && {
                                        _tpo_option_value_id: T.option_type_id.toString()
                                    }
                                }
                            }) : h.push({
                                id: q,
                                quantity: (Eo && O ? O : O ? O * (Number(r) || 1) : r) * J,
                                price: parseFloat(j / ht),
                                identify: y?.option_identifier || "",
                                isSeparate: z,
                                properties: {
                                    _tpo_main_product_id: a.get("id"),
                                    _tpo_add_on_key: self.crypto.randomUUID(),
                                    ...zt && T.option_type_id && {
                                        _tpo_option_value_id: T.option_type_id.toString()
                                    }
                                }
                            }) : w ? h.push({
                                id: q,
                                quantity: "1",
                                price: parseFloat(j / ht),
                                identify: y?.option_identifier || "",
                                isSeparate: z,
                                properties: {
                                    _tpo_main_product_id: a.get("id"),
                                    _tpo_add_on_key: self.crypto.randomUUID(),
                                    _is_one_time_charge: `${q}`,
                                    ...zt && T.option_type_id && {
                                        _tpo_option_value_id: T.option_type_id.toString()
                                    }
                                }
                            }) : R ? h.push({
                                id: q,
                                quantity: (J * (Number(r) || 1)).toString(),
                                price: parseFloat(j / ht),
                                identify: y?.option_identifier || "",
                                isSeparate: z,
                                properties: {
                                    ...zt && T.option_type_id && {
                                        _tpo_option_value_id: T.option_type_id.toString()
                                    }
                                }
                            }) : h.push({
                                id: q,
                                quantity: (J * (Number(r) || 1)).toString(),
                                price: parseFloat(j / ht),
                                identify: y?.option_identifier || "",
                                isSeparate: z,
                                properties: {
                                    _tpo_main_product_id: a.get("id"),
                                    _tpo_add_on_key: self.crypto.randomUUID(),
                                    ...zt && T.option_type_id && {
                                        _tpo_option_value_id: T.option_type_id.toString()
                                    }
                                }
                            })
                        }
                    }
            }
            ),
            I && I.length && !R && Array.isArray(I) && (u.properties[k] = I.join(", ")),
            y.type === "file-upload") {
                const T = !!y.option_types[0].variant_id;
                let E = !1
                  , q = JSON.parse(y.metadata || "{}")
                  , j = q.maxFileQty > 10 ? Qo ? q.maxFileQty : 10 : q.maxFileQty || 1;
                I && I.length && I[0] === k && u.properties && delete u.properties[k];
                for (let N = 0; N < j; N++) {
                    let U = N + 1;
                    const O = `${k}-${U}`;
                    let M = a.get(`properties[${O}]`);
                    M && (u.properties[O] = T ? M.replace(/ \[ \+(.*) \]/, "") : M,
                    E = !0)
                }
                if (T)
                    if (E) {
                        const N = PriceFormatter.formatMoney(y.option_types[0].additional_price * 100, !0)
                          , U = PriceFormatter.formatMoneyForAddOnProductProperty(N, Sa);
                        u.properties[k] = `${U}`
                    } else
                        h.pop(),
                        delete u.properties[k];
                else
                    E && y.additional_price && (p += y.additional_price)
            }
            if (y.type === "dimension") {
                let T = JSON.parse(y.metadata || "{}");
                if (Object.keys(T).length) {
                    const {labelX: E="", labelY: q="", labelZ: j=""} = T;
                    if (E) {
                        const N = `${k}-${E || "width"}`;
                        let U = a.get(`properties[${N}]`);
                        U && (u.properties[N] = U)
                    }
                    if (q) {
                        const N = `${k}-${q || "width"}`;
                        let U = a.get(`properties[${N}]`);
                        U && (u.properties[N] = U)
                    }
                    if (j) {
                        const N = `${k}-${j || "width"}`;
                        let U = a.get(`properties[${N}]`);
                        U && (u.properties[N] = U)
                    }
                }
            }
        }
        );
        for (const y of h)
            y.properties?._tpo_add_on_key && (u.properties._tpo_add_on_keys.push(y.properties._tpo_add_on_key),
            u.properties._tpo_add_on_variant_ids.push(y.id),
            y.properties?._is_one_time_charge && u.properties._tpo_one_time_charges.push(y.properties._is_one_time_charge));
        if (u.properties._tpo_add_on_keys = JSON.stringify(u.properties._tpo_add_on_keys),
        u.properties._tpo_add_on_variant_ids = JSON.stringify(u.properties._tpo_add_on_variant_ids),
        u.properties._tpo_one_time_charges && u.properties._tpo_one_time_charges.length ? u.properties._tpo_one_time_charges = JSON.stringify(u.properties._tpo_one_time_charges) : delete u.properties._tpo_one_time_charges,
        Vt !== "no" && (p || si === "bundle" && h.length)) {
            if (Vt === "expand") {
                let g = aa();
                g = {
                    ...g,
                    ...u.properties
                },
                u.properties._tpo_custom_options = JSON.stringify(uo(g)),
                s._tpo_custom_options = JSON.stringify(uo(g)),
                a.append("properties[_tpo_custom_options]", s._tpo_custom_options)
            }
            u.properties._tpo_price = parseFloat(p / ht),
            a.append("properties[_tpo_price]", p / ht),
            s._tpo_price = parseFloat(p / ht);
            let y = mr(h);
            s._tpo_add_on_products = y,
            u.properties._tpo_add_on_products = y,
            a.append("properties[_tpo_add_on_products]", y)
        }
        const m = !!h.length;
        if (m)
            if (u.properties._tpo_is_main_product = "1",
            u.id = a.get("id"),
            u.quantity = r,
            ["pacificsundaytour.myshopify.com", "bda175.myshopify.com", "paxscrubs.myshopify.com", "9059d2-ed.myshopify.com", "vixud8-2e.myshopify.com", "baby-elegance-ie.myshopify.com"].includes(B) && h.forEach(w => {
                w.properties && (w.properties = {
                    ...w.properties,
                    ...Kp(u.properties)
                })
            }
            ),
            ["sit-and-wonder.myshopify.com", "bluemilkstudio.myshopify.com", "honeycombliving.myshopify.com", "d17912.myshopify.com", "c91dd1-69.myshopify.com", "the-fieldbar-company-3998.myshopify.com", "diavy.myshopify.com"].includes(B) && h.forEach(w => {
                if (w.properties) {
                    const $ = Object.keys(u.properties).filter(L => L.startsWith("*")).reduce( (L, P) => (L[P] = u.properties[P],
                    L), {});
                    w.properties = {
                        ...w.properties,
                        ...$
                    }
                }
            }
            ),
            Gs.includes(B) && a.get("selling_plan") && h.length && (u.selling_plan = a.get("selling_plan"),
            a.get("subs_interval") && (u.subs_interval = a.get("subs_interval")),
            a.get("selling_plan_group") && (u.selling_plan_group = a.get("selling_plan_group")),
            h.forEach(w => {
                w.selling_plan || (w.selling_plan = u.selling_plan,
                u.subs_interval && (w.subs_interval = u.subs_interval),
                u.selling_plan_group && (w.selling_plan_group = u.selling_plan_group))
            }
            )),
            ["bisoo-shop.myshopify.com", "zeus-fitness-bc.myshopify.com", "fernandosscreenprinting.myshopify.com"].includes(B) && Ys.includes(B)) {
                const $ = {
                    items: h.map( ({properties: L, ...P}) => P)
                };
                fetch("/cart/clear.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then( () => fetch("/cart/add.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify($)
                })).then(L => {
                    if (!L.ok)
                        throw new Error("Add-on product add failed");
                    window.location.href = "/checkout"
                }
                ).catch(L => {}
                );
                return
            } else
                xn.includes(B) ? x.items = [...h, {
                    ...u
                }] : x.items = [{
                    ...u
                }, ...h];
        let S = encodeURIComponent(JSON.stringify(s));
        l = btoa(S);
        let v = `https://${Ja}/cart/${n}:${f || 1}?properties=${l}`;
        if (d || m)
            fetch("/cart/clear.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(y => y.json()).then(async y => {
                try {
                    let g = si === "bundle" && h.length;
                    if (!m || g) {
                        const w = new FormData;
                        for (const [L,P] of a.entries())
                            w.append(L, P);
                        h.forEach( ({identify: L, isSeparate: P}) => {
                            if (!L || !P)
                                return;
                            const k = `_${L}`
                              , A = `properties[${k}]`
                              , R = "properties[_tpo_custom_options]";
                            if (w.has(A) && w.delete(A),
                            w.has(R))
                                try {
                                    const Q = JSON.parse(w.get(R));
                                    k in Q && (delete Q[k],
                                    w.set(R, JSON.stringify(Q)))
                                } catch {}
                        }
                        );
                        const $ = await fetch("/cart/add.js", {
                            method: "POST",
                            headers: {
                                "X-Requested-With": "XMLHttpRequest",
                                Accept: "application/json"
                            },
                            body: w
                        });
                        if ($.status === 200) {
                            const L = {
                                items: h.filter(k => k.add !== !1 && k?.isSeparate)
                            };
                            await fetch("/cart/add.js", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(L)
                            });
                            const P = await $.json();
                            a.has(na()) && await yl([P])
                        }
                    } else {
                        const [w,$] = await ns({
                            body: x,
                            mainProduct: u,
                            formData: a,
                            cartAddUrl: "/cart/add.js"
                        })
                    }
                    let C = !1;
                    Object.keys(window.bndlr || {}).length > 0 && (C = !0),
                    C && window.bndlr.preventBundlerCheckout(),
                    Vt !== "no" && (p || g) && (window.location.href = "/checkout"),
                    await _r(v, C)
                } catch {
                    window.location.href = v
                }
            }
            ).catch(y => {
                window.location.href = v
            }
            );
        else if (a.has(na()))
            try {
                const y = await fetch("/cart/add.js", {
                    method: "POST",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json"
                    },
                    body: a
                });
                if (y.status === 200) {
                    const g = await y.json()
                      , C = g?.properties
                      , $ = await (await fetch("/cart/update.js", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            updates: {
                                [g.id]: 0
                            }
                        })
                    })).json();
                    let L = encodeURIComponent(JSON.stringify(C));
                    l = btoa(L),
                    window.location.href = `https://${Ja}/cart/${n}:${f || 1}?properties=${l}`
                }
            } catch {
                window.location.href = v
            }
        else
            window.location.href = v
    }
    async function gl(t, o, i, a, r, c, d, n=!1, f=!1) {
        try {
            const p = [];
            let s = !1
              , l = {
                properties: {
                    _tpo_add_on_keys: [],
                    _tpo_add_on_variant_ids: [],
                    _tpo_add_on_products: [],
                    _tpo_one_time_charges: [],
                    _tpo_products_per_cart: [],
                    _tpo_wholesale: [],
                    _tpo_custom_options: []
                }
            };
            si !== "bundle" && delete l.properties._tpo_add_on_products;
            let b = ["evergreeninteriors.myshopify.com", "oh-my-goody.myshopify.com", "letterally-8244.myshopify.com", "61062a-2.myshopify.com"];
            const h = t.options || [];
            B === "eenie-meenie-mine.myshopify.com" && (o = document.querySelector(`#${Vr}`));
            let u = 0;
            Jl(o).then(m => {}
            );
            const x = new FormData(o)
              , _ = si !== "bundle" && x.get("quantity") || "1";
            if (x?.get("properties[_tpo_wholesale]") ? l.properties._tpo_wholesale = x.get("properties[_tpo_wholesale]") : delete l.properties._tpo_wholesale,
            x?.get("properties[_tpo_wholesale]") && x?.get("properties[_tpo_custom_options]") ? l.properties._tpo_custom_options = x.get("properties[_tpo_custom_options]") : delete l.properties._tpo_custom_options,
            n) {
                if (r) {
                    let m = d || [];
                    const S = n;
                    o = document.querySelector(".tpo_edit-option-modal .tpo_option-set-container");
                    const v = JSON.parse(r.properties?._tpo_add_on_keys || "[]")
                      , y = JSON.parse(r.properties?._tpo_products_per_cart || "[]");
                    let g = !1;
                    if (h.forEach( ($, L) => {
                        const P = $.one_time_charge ? JSON.parse($.one_time_charge) : {
                            enable: !1,
                            type: "cart"
                        }
                          , k = P?.enable
                          , A = P?.type === "cart"
                          , R = A && k ? "disabled" : Sa;
                        let Q = $.multi_select || 0;
                        const I = $.id;
                        $.type === "checkbox" && (Q = !0);
                        const F = $.option_types || [];
                        let ee = $.option_identifier;
                        const K = JSON.parse($.metadata || "{}");
                        let {separateAddOnProduct: H=!1} = K;
                        H && (ee = `_${ee}`);
                        const T = $.quantity_selector ? JSON.parse($.quantity_selector).enable : !1;
                        let E = a[ee] || "";
                        E && (g = !0),
                        $.type === "file-upload" && (E = ee);
                        let q = null, j;
                        try {
                            j = JSON.parse($?.metadata)
                        } catch {
                            j = null
                        }
                        if ($.type !== "dimension" && j?.useDimensionDropdownPricing) {
                            const O = document.querySelector("[id*='" + $.id + "'] .tpo_additional-price.active")
                              , M = O ? O?.textContent.match(/\(\+?(.*)\)/) : null
                              , z = M ? M[1] : null;
                            q = z ? ci(z) : null
                        }
                        const N = $?.option_types.map(O => ({
                            label: O.label,
                            price: q || O.additional_price,
                            id: O.id,
                            variantId: O.variant_id
                        }));
                        let U = N.some(O => O.variantId !== null && O.variantId !== "");
                        if (typeof E == "string")
                            if ($.type === "dropdown" || $.type === "radio-buttons" || Q && !Fr.find(O => O === $.type)) {
                                let O = [];
                                N.forEach( ({label: M, price: z, id: X, variantId: J}) => {
                                    if (T) {
                                        const te = o.querySelector(`[id*="${I},${X},quantity_selector"]`) || o.querySelector(`[id*="${I},${$.type},quantity_selector"]`) || document.querySelector(`[id*="${I},${X},quantity_selector"]`) || document.querySelector(`[id*="${I},${$.type},quantity_selector"]`);
                                        if (z) {
                                            if (te && te.value) {
                                                const ue = PriceFormatter.formatMoney(parseFloat(z * Number(te.value) * 100), !0);
                                                E.includes(`${M} [`) && E.startsWith(`${M} [`) || E.includes(`, ${M} [`) ? (O.push(`${M} [ +${ue} ] | ${te.value}`),
                                                J || (u += parseFloat(z * Number(te.value)))) : (E.endsWith(`, ${M} [ +${ue} ] | ${te.value}`) || E === `${M} [ +${ue} ] | ${te.value}`) && (O.push(`${M} [ +${ue} ] | ${te.value}`),
                                                J || (u += parseFloat(z * Number(te.value))))
                                            }
                                        } else
                                            E.includes(`${M} |`) && E.startsWith(`${M} | ${te.value}`) || E.includes(`, ${M} |`) ? te && te.value && O.push(`${M} | ${te.value}`) : (E.endsWith(`, ${M} | ${te.value}`) || E === `${M} | ${te.value}`) && te && te.value && O.push(`${M} | ${te.value}`)
                                    } else if (z) {
                                        if (E.includes(`${M} [`) && E.startsWith(`${M} [`) || E.includes(`, ${M} [`)) {
                                            const te = PriceFormatter.formatMoney(parseFloat(z * 100), !0);
                                            O.push(`${M} [ +${te} ]`),
                                            J || (u += parseFloat(z))
                                        }
                                    } else
                                        (E.includes(`${M},`) && E.startsWith(M) || E.includes(`, ${M},`) || E.endsWith(`, ${M}`) || E === M) && O.push(M)
                                }
                                ),
                                E = [...O]
                            } else {
                                if (E && typeof E == "string") {
                                    let O = /\[ \+(.*)\]/
                                      , M = E.match(O);
                                    if (M) {
                                        let z = M[1]
                                          , X = ci(z);
                                        X && !U && (u += X)
                                    }
                                }
                                E = [E]
                            }
                        if (F.forEach( (O, M) => {
                            let z = O.variant_id || "";
                            const X = O.id
                              , J = O.additional_price || 0;
                            let te = O.label
                              , ue = 1;
                            if (T) {
                                const Te = o.querySelector(`[id*="${I},${X},quantity_selector"]`) || o.querySelector(`[id*="${I},${$.type},quantity_selector"]`) || document.querySelector(`[id*="${I},${X},quantity_selector"]`) || document.querySelector(`[id*="${I},${$.type},quantity_selector"]`);
                                if (Te && Te.value)
                                    if (ue = Number(Te.value),
                                    J) {
                                        let we = PriceFormatter.formatMoney(parseFloat(J * ue * 100), !0);
                                        te = `${te} [ +${we} ] | ${ue}`
                                    } else
                                        te = `${te} | ${ue}`
                            } else if (J) {
                                let Te = PriceFormatter.formatMoney(parseFloat(J * 100), !0);
                                te = `${te} [ +${Te} ]`
                            }
                            const me = Qp(z)
                              , Me = Gp(m, me);
                            if (z && E && E[0])
                                if (Fr.find(Te => Te === $.type)) {
                                    let Te = E[0];
                                    Te = Te.replace(/\[/g, "("),
                                    Te = Te.replace(/]/g, ")"),
                                    b.includes(B) && (Te = Te.replace(/ \( \+.* \)/g, "")),
                                    E[0] = R ? PropertyFormatter.removeMoneyProperty(Te) : Te;
                                    let we = Te ? Te.replace(/\s(\(.*?\)|\{.*?\})/g, "") : 0;
                                    if ($.type === "text-box") {
                                        const Ce = $.price_type
                                          , Le = $.metadata ? JSON.parse($.metadata) : {}
                                          , je = Le.priceNotSpace ? Le.priceNotSpace : !1
                                          , Ae = {
                                            enabled: !!Le?.noChargesSpecialChars?.enabled,
                                            characters: Le?.noChargesSpecialChars?.characters || ""
                                        };
                                        switch (Ce) {
                                        case "one":
                                            we = 1;
                                            break;
                                        case "per_letter":
                                            if (we) {
                                                let Ue = we;
                                                je && (Ue = Ue.replaceAll(" ", "")),
                                                Ae?.enabled && Ae.characters && (Ue = sa(Ue, Ae.characters)),
                                                we = Ue.length
                                            }
                                            break;
                                        case "quantity_letter":
                                            const Z = JSON.parse(O.metadata || "{}");
                                            if (Z.hasOwnProperty("min_text_length")) {
                                                z = "";
                                                let Ue = we;
                                                je && (Ue = Ue.replaceAll(" ", "")),
                                                Ae?.enabled && Ae.characters && (Ue = sa(Ue, Ae.characters));
                                                let ft = Ue.length;
                                                if (ft < Z.min_text_length)
                                                    break;
                                                if (!Z.max_text_length) {
                                                    z = O.variant_id || "",
                                                    we = 1;
                                                    break
                                                }
                                                if (Z.max_text_length >= Z.min_text_length && ft <= Z.max_text_length) {
                                                    z = O.variant_id || "",
                                                    we = 1;
                                                    break
                                                }
                                                break
                                            }
                                        default:
                                            break
                                        }
                                    } else if ($.type === "quantity")
                                        switch ($.price_type) {
                                        case "all_with_new_price":
                                            we = 1;
                                            break;
                                        default:
                                            break
                                        }
                                    else if ($.type === "range" && E && E[0]) {
                                        const Ce = JSON.parse(O.metadata || "{}");
                                        let Le = parseFloat(we);
                                        if ((JSON.parse($.metadata || "{}").pricingLogic || "single") === "tiered" && (Le < (Ce.min_value || 0) || Le > (Ce.max_value || 1 / 0)) && (z = ""),
                                        z !== "")
                                            if (si === "bundle" || Vt === "no" && si === "no") {
                                                const Z = JSON.parse($.metadata || "{}");
                                                if ((Z.pricingLogic || "single") === "tiered" || $.option_types && $.option_types.length > 1) {
                                                    const le = Z.min || 0
                                                      , at = Z.step || 1;
                                                    we = Math.round(Le / at).toString()
                                                } else {
                                                    const le = Z.min || 0
                                                      , at = Z.step || 1
                                                      , bt = Math.round(Le / at);
                                                    bt > 0 ? we = bt.toString() : z = ""
                                                }
                                            } else
                                                we = "1"
                                    } else
                                        we.length && (we = 1);
                                    if (z) {
                                        if (Number(we) === 0)
                                            return;
                                        H ? p.push({
                                            id: z,
                                            quantity: Eo && Number(we) ? Number(we) : Number(we) ? Number(we) * (Number(_) || 1) : _,
                                            price: parseFloat(J / ht),
                                            properties: {
                                                ...zt && O.option_type_id && {
                                                    _tpo_option_value_id: O.option_type_id.toString()
                                                }
                                            }
                                        }) : k ? A ? !Me && !p.find(Ce => Ce.id === z) ? p.push({
                                            id: z,
                                            quantity: "1",
                                            properties: {
                                                _one_time_per_cart: me
                                            }
                                        }) : p.push({
                                            properties: {
                                                _one_time_per_cart: me
                                            },
                                            add: !1
                                        }) : p.push({
                                            id: z,
                                            quantity: "1",
                                            price: parseFloat(J / ht),
                                            properties: {
                                                _tpo_main_product_id: `${r.variant_id}`,
                                                _tpo_add_on_key: self.crypto.randomUUID(),
                                                _is_one_time_charge: `${z}`,
                                                ...zt && O.option_type_id && {
                                                    _tpo_option_value_id: O.option_type_id.toString()
                                                }
                                            }
                                        }) : p.push({
                                            id: z,
                                            quantity: Number(we) * S,
                                            price: parseFloat(J / ht),
                                            properties: {
                                                _tpo_main_product_id: `${r.variant_id}`,
                                                _tpo_add_on_key: self.crypto.randomUUID(),
                                                ...zt && O.option_type_id && {
                                                    _tpo_option_value_id: O.option_type_id.toString()
                                                }
                                            }
                                        })
                                    }
                                } else {
                                    let Te = E.indexOf(te);
                                    if (Te === -1 && $.type === "range") {
                                        let we = E[0].replace(/\[.*\]/, "").trim()
                                          , Ce = parseFloat(we);
                                        const Le = JSON.parse(O.metadata || "{}");
                                        (JSON.parse($.metadata || "{}").pricingLogic || "single") === "tiered" ? Ce >= (Le.min_value || 0) && Ce <= (Le.max_value || 1 / 0) && (Te = 0) : Te = 0
                                    }
                                    if (Te > -1) {
                                        if (b.includes(B) || H)
                                            E.splice(Te, 1, `${O.label}`);
                                        else if (T) {
                                            if (J) {
                                                let we = PriceFormatter.formatMoney(parseFloat(J * ue * 100), !0);
                                                const Ce = PriceFormatter.formatMoneyForAddOnProductProperty(we, R);
                                                E.splice(Te, 1, `${O.label}${Ce} | ${ue}`)
                                            }
                                        } else if (J) {
                                            let we = PriceFormatter.formatMoney(parseFloat(J * 100), !0);
                                            const Ce = PriceFormatter.formatMoneyForAddOnProductProperty(we, R);
                                            let Le = O.label;
                                            $.type === "range" && (Le = E[Te].replace(/\[.*\]/, "").trim()),
                                            E.splice(Te, 1, `${Le}${Ce}`)
                                        }
                                        T ? H ? p.push({
                                            id: z,
                                            quantity: S * (ue || 1),
                                            properties: {
                                                ...zt && O.option_type_id && {
                                                    _tpo_option_value_id: O.option_type_id.toString()
                                                }
                                            }
                                        }) : p.push({
                                            id: z,
                                            quantity: S * (ue || 1),
                                            price: parseFloat(J / ht),
                                            properties: {
                                                _tpo_main_product_id: `${r.variant_id}`,
                                                _tpo_add_on_key: self.crypto.randomUUID(),
                                                ...zt && O.option_type_id && {
                                                    _tpo_option_value_id: O.option_type_id.toString()
                                                }
                                            }
                                        }) : k ? A ? !Me && !p.find(we => we.id === z) ? p.push({
                                            id: z,
                                            quantity: "1",
                                            properties: {
                                                _one_time_per_cart: me
                                            }
                                        }) : p.push({
                                            properties: {
                                                _one_time_per_cart: me
                                            },
                                            add: !1
                                        }) : p.push({
                                            id: z,
                                            quantity: "1",
                                            price: parseFloat(J / ht),
                                            properties: {
                                                _tpo_main_product_id: `${r.variant_id}`,
                                                _tpo_add_on_key: self.crypto.randomUUID(),
                                                _is_one_time_charge: `${z}`,
                                                ...zt && O.option_type_id && {
                                                    _tpo_option_value_id: O.option_type_id.toString()
                                                }
                                            }
                                        }) : H ? p.push({
                                            id: z,
                                            quantity: S || 1,
                                            properties: {
                                                ...zt && O.option_type_id && {
                                                    _tpo_option_value_id: O.option_type_id.toString()
                                                }
                                            }
                                        }) : p.push({
                                            id: z,
                                            quantity: S || 1,
                                            price: parseFloat(J / ht),
                                            properties: {
                                                _tpo_main_product_id: `${r.variant_id}`,
                                                _tpo_add_on_key: self.crypto.randomUUID(),
                                                ...zt && O.option_type_id && {
                                                    _tpo_option_value_id: O.option_type_id.toString()
                                                }
                                            }
                                        })
                                    }
                                }
                        }
                        ),
                        E.length && Array.isArray(E) && (l.properties[ee] = E.join(", ")),
                        $.type === "file-upload") {
                            const O = !!$.option_types[0].variant_id;
                            let M = !1
                              , z = JSON.parse($.metadata || "{}")
                              , X = z.maxFileQty > 10 ? Qo ? z.maxFileQty : 10 : z.maxFileQty || 1;
                            for (let J = 0; J < X; J++) {
                                let te = J + 1;
                                const ue = `${ee}-${te}`;
                                let me = a[ue];
                                me && (l.properties[ue] = O ? me.replace(/ \[ \+(.*) \]/, "") : me,
                                M = !0)
                            }
                            if (O)
                                if (M) {
                                    const J = PriceFormatter.formatMoney($.option_types[0].additional_price * 100, !0)
                                      , te = PriceFormatter.formatMoneyForAddOnProductProperty(J, R);
                                    l.properties[ee] = `${te}`
                                } else
                                    p.pop(),
                                    delete l.properties[ee];
                            else
                                M && $.additional_price && (u += $.additional_price)
                        }
                        if ($.type === "dimension") {
                            let O = JSON.parse($.metadata || "{}");
                            if (Object.keys(O).length) {
                                const {labelX: M="", labelY: z="", labelZ: X=""} = O;
                                if (M) {
                                    const J = `${ee}-${M || "width"}`;
                                    let te = a[J];
                                    te && (l.properties[J] = te)
                                }
                                if (z) {
                                    const J = `${ee}-${z || "width"}`;
                                    let te = a[J];
                                    te && (l.properties[J] = te)
                                }
                                if (X) {
                                    const J = `${ee}-${X || "width"}`;
                                    let te = a[J];
                                    te && (l.properties[J] = te)
                                }
                            }
                        }
                    }
                    ),
                    Vt !== "no" && u) {
                        if (Vt === "expand") {
                            let $ = aa();
                            $ = {
                                ...$,
                                ...l.properties
                            },
                            l.properties._tpo_custom_options = JSON.stringify(uo($))
                        }
                        l.properties._tpo_price = parseFloat(u / ht)
                    }
                    for (const $ of p)
                        $.properties?._tpo_add_on_key && (l.properties._tpo_add_on_keys.push($.properties._tpo_add_on_key),
                        l.properties._tpo_add_on_variant_ids.push($.id),
                        $.properties?._is_one_time_charge && l.properties._tpo_one_time_charges.push($.properties._is_one_time_charge)),
                        $.properties?._one_time_per_cart && (l.properties?._tpo_products_per_cart.find(L => L === $.properties?._one_time_per_cart) || l.properties?._tpo_products_per_cart.push($.properties?._one_time_per_cart));
                    l.properties._tpo_add_on_keys = JSON.stringify(l.properties._tpo_add_on_keys),
                    l.properties._tpo_add_on_variant_ids = JSON.stringify(l.properties._tpo_add_on_variant_ids),
                    l.properties._tpo_one_time_charges && l.properties._tpo_one_time_charges.length ? l.properties._tpo_one_time_charges = JSON.stringify(l.properties._tpo_one_time_charges) : delete l.properties._tpo_one_time_charges,
                    l.properties._tpo_products_per_cart && l.properties._tpo_products_per_cart.length ? l.properties._tpo_products_per_cart = JSON.stringify(l.properties._tpo_products_per_cart) : delete l.properties._tpo_products_per_cart;
                    const C = m[c]
                      , w = C.properties?._tpo_products_per_cart ? JSON.parse(C.properties?._tpo_products_per_cart) : [];
                    if (si === "bundle" && (l.properties._tpo_add_on_products = mr(p),
                    delete l.properties._tpo_add_on_keys,
                    delete l.properties._tpo_add_on_variant_ids),
                    s = !!p.length,
                    si === "bundle") {
                        let $ = !1;
                        p.forEach(L => {
                            L.properties._tpo_add_on_key || L.properties._tpo_main_product_id ? L.add = !1 : $ = !0
                        }
                        ),
                        $ || (s = !1),
                        kn && fl(o)
                    }
                    if (!s && !v.length && !y.length) {
                        if (Object.keys(l.properties).forEach($ => {
                            (typeof l.properties[$] == "string" && l.properties[$].trim() === "" || l.properties[$] === "[]") && delete l.properties[$]
                        }
                        ),
                        Object.keys(l.properties).length === 0) {
                            if (l.id = r.variant_id,
                            l.quantity = S,
                            Gs.includes(B))
                                C?.selling_plan_allocation?.selling_plan?.id && p.length && p.forEach(Q => {
                                    Q.selling_plan || (Q.selling_plan = C.selling_plan_allocation.selling_plan.id,
                                    Q.subs_interval = C.selling_plan_allocation.selling_plan.id)
                                }
                                ),
                                l.selling_plan = C?.selling_plan_allocation?.selling_plan?.id;
                            else if (C?.selling_plan_allocation?.selling_plan?.id) {
                                let Q = C?.selling_plan_allocation?.selling_plan ?? null;
                                l.selling_plan = C?.selling_plan_allocation?.selling_plan?.id,
                                Q && Q.id && p.length && p.forEach(I => {
                                    const F = Number(I.id);
                                    for (const ee of Mi) {
                                        const K = ee.variants.find(H => H.id === F);
                                        if (K) {
                                            const H = K.selling_plan_allocations.find(T => {
                                                const E = ee.selling_plan_groups.find(q => q.id === T.selling_plan_group_id);
                                                return E && E.name === Q.name
                                            }
                                            )?.selling_plan_id;
                                            H && (I.selling_plan = H);
                                            break
                                        }
                                    }
                                }
                                )
                            }
                            const $ = {
                                items: [{
                                    ...l
                                }]
                            };
                            let L = {
                                updates: {
                                    [m[c].key]: "0"
                                }
                            };
                            const [P,k] = await ns({
                                body: $,
                                mainProduct: l,
                                formData: x,
                                cartAddUrl: "/cart/add.js"
                            })
                              , R = await [k, P].find(Q => !!Q).json();
                            if (R.status >= 400)
                                return alert(R.description),
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                }),
                                setTimeout(async () => {
                                    window.location.reload()
                                }
                                , 500),
                                !0;
                            {
                                let Q = await Ii();
                                return Kr(w, Q?.items || [], C.key).forEach(F => {
                                    F && (L.updates[F] = "0")
                                }
                                ),
                                setTimeout(async () => {
                                    await fetch("/cart/update.js", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(L)
                                    }),
                                    await Ii(),
                                    window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth"
                                    }),
                                    window.location.reload()
                                }
                                , 500),
                                !0
                            }
                        }
                        return g && zt && ed(a),
                        {
                            properties: l.properties
                        }
                    } else {
                        if (l.properties._tpo_is_main_product = "1",
                        Object.keys(l.properties).forEach(T => {
                            typeof l.properties[T] == "string" && l.properties[T].trim() === "" && delete l.properties[T]
                        }
                        ),
                        l.id = r.variant_id,
                        l.quantity = S,
                        ["pacificsundaytour.myshopify.com", "bda175.myshopify.com", "paxscrubs.myshopify.com", "9059d2-ed.myshopify.com", "vixud8-2e.myshopify.com", "baby-elegance-ie.myshopify.com"].includes(B) && p.forEach(T => {
                            T.properties && (T.properties = {
                                ...T.properties,
                                ...l.properties
                            })
                        }
                        ),
                        ["toonz-by-aysh.myshopify.com"].includes(B) && p.forEach(T => {
                            T.properties && (T.properties = {
                                ...T.properties,
                                ...l["properties[_essential_preorder_campaign_id]"] && {
                                    _essential_preorder_campaign_id: l["properties[_essential_preorder_campaign_id]"]
                                },
                                ...l["properties[Note]"] && {
                                    Note: l["properties[Note]"]
                                }
                            })
                        }
                        ),
                        ["sit-and-wonder.myshopify.com", "bluemilkstudio.myshopify.com", "honeycombliving.myshopify.com", "d17912.myshopify.com", "c91dd1-69.myshopify.com", "the-fieldbar-company-3998.myshopify.com", "diavy.myshopify.com"].includes(B) && p.forEach(T => {
                            if (T.properties) {
                                const E = Object.keys(l.properties).filter(q => q.startsWith("*")).reduce( (q, j) => (q[j] = l.properties[j],
                                q), {});
                                T.properties = {
                                    ...T.properties,
                                    ...E
                                }
                            }
                        }
                        ),
                        Gs.includes(B))
                            C?.selling_plan_allocation?.selling_plan?.id && p.length && p.forEach(T => {
                                T.selling_plan || (T.selling_plan = C.selling_plan_allocation.selling_plan.id,
                                T.subs_interval = C.selling_plan_allocation.selling_plan.id)
                            }
                            ),
                            l.selling_plan = C?.selling_plan_allocation?.selling_plan?.id;
                        else if (C?.selling_plan_allocation?.selling_plan?.id) {
                            let T = C?.selling_plan_allocation?.selling_plan ?? null;
                            l.selling_plan = C?.selling_plan_allocation?.selling_plan?.id,
                            T && T.id && p.length && p.forEach(E => {
                                const q = Number(E.id);
                                for (const j of Mi) {
                                    const N = j.variants.find(U => U.id === q);
                                    if (N) {
                                        const U = N.selling_plan_allocations.find(O => {
                                            const M = j.selling_plan_groups.find(z => z.id === O.selling_plan_group_id);
                                            return M && M.name === T.name
                                        }
                                        )?.selling_plan_id;
                                        U && (E.selling_plan = U);
                                        break
                                    }
                                }
                            }
                            )
                        }
                        let k = [];
                        p && p.length && (k = p.filter(T => T.add !== !1));
                        const A = xn.includes(B) ? {
                            items: [...k, {
                                ...l
                            }]
                        } : {
                            items: [{
                                ...l
                            }, ...k]
                        };
                        let R = {
                            updates: {
                                [m[c].key]: "0"
                            }
                        };
                        for (let T = 0; T < v.length; T++) {
                            const E = m.find(q => q.properties._tpo_add_on_key === v[T])?.key;
                            E && (R.updates[E] = "0")
                        }
                        const Q = d[c].properties
                          , I = l.properties;
                        if (Object.keys(Q).every(T => Q[T] && I[T] ? Q[T] === I[T] : !Q[T] && !I[T]))
                            return !0;
                        const [F,ee] = await ns({
                            body: A,
                            mainProduct: l,
                            formData: x,
                            cartAddUrl: "/cart/add.js"
                        })
                          , H = await [ee, F].find(T => !!T).json();
                        if (H.status >= 400)
                            return alert(H.description),
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth"
                            }),
                            setTimeout(async () => {
                                window.location.reload()
                            }
                            , 500),
                            !0;
                        {
                            let T = await Ii();
                            return Kr(w, T?.items || [], C.key).forEach(q => {
                                q && (R.updates[q] = "0")
                            }
                            ),
                            setTimeout(async () => {
                                await fetch("/cart/update.js", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(R)
                                }),
                                await Ii(),
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                }),
                                window.location.reload()
                            }
                            , 500),
                            !0
                        }
                    }
                }
            } else {
                let m = d || [];
                ld(o),
                Xp(l, o),
                Ld(l);
                let S = !1;
                if (h.forEach( (v, y) => {
                    const g = v.one_time_charge ? JSON.parse(v.one_time_charge) : {
                        enable: !1,
                        type: "product"
                    }
                      , C = g?.enable
                      , w = g?.type === "cart"
                      , $ = w && C ? "disabled" : Sa;
                    let L = v.multi_select || 0;
                    const P = v.id;
                    v.type === "checkbox" && (L = !0);
                    const k = v.option_types || [];
                    let A = v.option_identifier;
                    const R = JSON.parse(v.metadata || "{}");
                    let {separateAddOnProduct: Q=!1} = R;
                    Q && (A = `_${A}`);
                    const I = v.quantity_selector ? JSON.parse(v.quantity_selector).enable : !1;
                    let F = x.get(`properties[${A}]`);
                    F && (S = !0),
                    v.type === "file-upload" && (F = A);
                    let ee = null, K;
                    try {
                        K = JSON.parse(v?.metadata)
                    } catch {
                        K = null
                    }
                    if (v.type !== "dimension" && K?.useDimensionDropdownPricing) {
                        const E = document.querySelector("[id*='" + v.id + "'] .tpo_additional-price.active")
                          , q = E ? E?.textContent.match(/\(\+?(.*)\)/) : null
                          , j = q ? q[1] : null;
                        ee = j ? ci(j) : null
                    }
                    const H = v?.option_types.map(E => ({
                        label: E.label,
                        price: ee || E.additional_price,
                        id: E.id,
                        variantId: E.variant_id
                    }));
                    let T = H.some(E => E.variantId !== null && E.variantId !== "");
                    if (typeof F == "string")
                        if (v.type === "dropdown" || v.type === "radio-buttons" || L && !Fr.find(E => E === v.type)) {
                            let E = [];
                            H.forEach( ({label: q, price: j, id: N, variantId: U}) => {
                                if (I) {
                                    const O = o.querySelector(`[id*="${P},${N},quantity_selector"]`) || o.querySelector(`[id*="${P},${v.type},quantity_selector"]`) || document.querySelector(`[id*="${P},${N},quantity_selector"]`) || document.querySelector(`[id*="${P},${v.type},quantity_selector"]`);
                                    if (j) {
                                        if (O && O.value) {
                                            const M = PriceFormatter.formatMoney(parseFloat(j * Number(O.value) * 100), !0);
                                            F.includes(`${q} [`) && F.startsWith(`${q} [`) || F.includes(`, ${q} [`) ? (E.push(`${q} [ +${M} ] | ${O.value}`),
                                            U || (u += parseFloat(j * Number(O.value)))) : (F.endsWith(`, ${q} [ +${M} ] | ${O.value}`) || F === `${q} [ +${M} ] | ${O.value}`) && (E.push(`${q} [ +${M} ] | ${O.value}`),
                                            U || (u += parseFloat(j * Number(O.value))))
                                        }
                                    } else
                                        O && O.value && (F.includes(`${q} |`) && F.startsWith(`${q} | ${O.value}`) || F.includes(`, ${q} |`) ? E.push(`${q} | ${O.value}`) : (F.endsWith(`, ${q} | ${O.value}`) || F === `${q} | ${O.value}`) && E.push(`${q} | ${O.value}`))
                                } else if (j) {
                                    if (F.includes(`${q} [`) && F.startsWith(`${q} [`) || F.includes(`, ${q} [`)) {
                                        const O = PriceFormatter.formatMoney(parseFloat(j * 100), !0);
                                        E.push(`${q} [ +${O} ]`),
                                        U || (u += parseFloat(j))
                                    }
                                } else
                                    (F.includes(`${q},`) && F.startsWith(q) || F.includes(`, ${q},`) || F.endsWith(`, ${q}`) || F === q) && E.push(q)
                            }
                            ),
                            F = [...E]
                        } else {
                            if (F && typeof F == "string") {
                                let E = /\[ \+(.*)\]/
                                  , q = F.match(E);
                                if (q) {
                                    let j = q[1]
                                      , N = ci(j);
                                    N && !T && (u += N)
                                }
                            }
                            F = [F]
                        }
                    if (k.forEach( (E, q) => {
                        let j = E.variant_id || "";
                        const N = E.id;
                        let U = E.additional_price || 0
                          , O = E.label
                          , M = 1;
                        if (I) {
                            const J = o.querySelector(`[id*="${P},${N},quantity_selector"]`) || o.querySelector(`[id*="${P},${v.type},quantity_selector"]`) || document.querySelector(`[id*="${P},${N},quantity_selector"]`) || document.querySelector(`[id*="${P},${v.type},quantity_selector"]`);
                            if (J && J.value)
                                if (M = Number(J.value),
                                U) {
                                    let te = PriceFormatter.formatMoney(parseFloat(U * M * 100), !0);
                                    O = `${O} [ +${te} ] | ${M}`
                                } else
                                    O = `${O} | ${M}`
                        } else if (U) {
                            let J = PriceFormatter.formatMoney(parseFloat(U * 100), !0);
                            O = `${O} [ +${J} ]`
                        }
                        const z = Qp(j)
                          , X = Gp(m, z);
                        if (j && F && F[0])
                            if (Fr.find(J => J === v.type)) {
                                let J = F[0];
                                J = J.replace(/\[/g, "("),
                                J = J.replace(/]/g, ")"),
                                b.includes(B) && (J = J.replace(/ \( \+.* \)/g, "")),
                                F[0] = $ ? PropertyFormatter.removeMoneyProperty(J) : J;
                                let te = J ? J.replace(/\s(\(.*?\)|\{.*?\})/g, "") : 0;
                                if (v.type === "text-box") {
                                    const ue = v.price_type
                                      , me = v.metadata ? JSON.parse(v.metadata) : {}
                                      , Me = me.priceNotSpace ? me.priceNotSpace : !1
                                      , Te = {
                                        enabled: !!me?.noChargesSpecialChars?.enabled,
                                        characters: me?.noChargesSpecialChars?.characters || ""
                                    };
                                    switch (ue) {
                                    case "one":
                                        te = 1;
                                        break;
                                    case "per_letter":
                                        if (te) {
                                            let Ce = te;
                                            Me && (Ce = Ce.replaceAll(" ", "")),
                                            Te?.enabled && Te.characters && (Ce = sa(Ce, Te.characters)),
                                            te = Ce.length
                                        }
                                        break;
                                    case "quantity_letter":
                                        const we = JSON.parse(E.metadata || "{}");
                                        if (we.hasOwnProperty("min_text_length")) {
                                            j = "";
                                            let Ce = te;
                                            Me && (Ce = Ce.replaceAll(" ", "")),
                                            Te?.enabled && Te.characters && (Ce = sa(Ce, Te.characters));
                                            let Le = Ce.length;
                                            if (Le < we.min_text_length)
                                                break;
                                            if (!we.max_text_length) {
                                                j = E.variant_id || "",
                                                te = _ || "1";
                                                break
                                            }
                                            if (we.max_text_length >= we.min_text_length && Le <= we.max_text_length) {
                                                j = E.variant_id || "",
                                                te = "1";
                                                break
                                            }
                                            break
                                        }
                                    default:
                                        break
                                    }
                                } else if (v.type === "quantity")
                                    switch (v.price_type) {
                                    case "all_with_new_price":
                                        te = 1;
                                        break;
                                    default:
                                        break
                                    }
                                else if (v.type === "range" && F && F[0]) {
                                    const ue = JSON.parse(E.metadata || "{}");
                                    let me = parseFloat(te);
                                    if ((JSON.parse(v.metadata || "{}").pricingLogic || "single") === "tiered" && (me < (ue.min_value || 0) || me > (ue.max_value || 1 / 0)) && (j = ""),
                                    j !== "")
                                        if (si === "bundle" || Vt === "no" && si === "no") {
                                            const we = JSON.parse(v.metadata || "{}");
                                            if ((we.pricingLogic || "single") === "tiered" || v.option_types && v.option_types.length > 1) {
                                                const je = we.step || 1;
                                                te = Math.round(me / je).toString()
                                            } else {
                                                const je = we.step || 1
                                                  , Ae = Math.round(me / je);
                                                Ae > 0 ? te = Ae.toString() : j = ""
                                            }
                                        } else
                                            te = "1"
                                } else
                                    te.length && (te = "1");
                                if (j) {
                                    if (Number(te) === 0)
                                        return;
                                    Q ? p.push({
                                        id: j,
                                        quantity: Eo && Number(te) ? Number(te) : Number(te) ? Number(te) * (Number(_) || 1) : _,
                                        price: parseFloat(U / ht),
                                        properties: {
                                            ...zt && E.option_type_id && {
                                                _tpo_option_value_id: E.option_type_id.toString()
                                            }
                                        }
                                    }) : C ? w ? !X && !p.find(ue => ue.id === j) ? p.push({
                                        id: j,
                                        quantity: "1",
                                        properties: {
                                            _one_time_per_cart: z
                                        }
                                    }) : p.push({
                                        properties: {
                                            _one_time_per_cart: z
                                        },
                                        add: !1
                                    }) : p.push({
                                        id: j,
                                        quantity: "1",
                                        price: parseFloat(U / ht),
                                        properties: {
                                            _tpo_main_product_id: x.get("id"),
                                            _tpo_add_on_key: self.crypto.randomUUID(),
                                            _is_one_time_charge: `${j}`,
                                            ...zt && E.option_type_id && {
                                                _tpo_option_value_id: E.option_type_id.toString()
                                            }
                                        }
                                    }) : p.push({
                                        id: j,
                                        quantity: Eo && Number(te) ? Number(te) : Number(te) ? Number(te) * (Number(_) || 1) : _,
                                        price: parseFloat(U / ht),
                                        properties: {
                                            _tpo_main_product_id: x.get("id"),
                                            _tpo_add_on_key: self.crypto.randomUUID(),
                                            ...zt && E.option_type_id && {
                                                _tpo_option_value_id: E.option_type_id.toString()
                                            }
                                        }
                                    })
                                }
                            } else {
                                let J = F.indexOf(O);
                                if (J === -1 && v.type === "range") {
                                    let te = F[0].replace(/\[.*\]/, "").trim()
                                      , ue = parseFloat(te);
                                    const me = JSON.parse(E.metadata || "{}");
                                    (JSON.parse(v.metadata || "{}").pricingLogic || "single") === "tiered" ? ue >= (me.min_value || 0) && ue <= (me.max_value || 1 / 0) && (J = 0) : J = 0
                                }
                                if (J > -1) {
                                    if (b.includes(B) || Q)
                                        F.splice(J, 1, `${E.label}`);
                                    else if (I) {
                                        if (U) {
                                            let te = PriceFormatter.formatMoney(parseFloat(U * M * 100), !0);
                                            const ue = PriceFormatter.formatMoneyForAddOnProductProperty(te, $);
                                            F.splice(J, 1, `${E.label}${ue} | ${M}`)
                                        }
                                    } else if (U) {
                                        let te = PriceFormatter.formatMoney(parseFloat(U * 100), !0);
                                        const ue = PriceFormatter.formatMoneyForAddOnProductProperty(te, $);
                                        let me = E.label;
                                        F.splice(J, 1, `${me}${ue}`)
                                    }
                                    I ? Q ? p.push({
                                        id: j,
                                        quantity: Eo && M ? M : M ? M * (Number(_) || 1) : _,
                                        price: parseFloat(U / ht),
                                        properties: {
                                            ...zt && E.option_type_id && {
                                                _tpo_option_value_id: E.option_type_id.toString()
                                            }
                                        }
                                    }) : p.push({
                                        id: j,
                                        quantity: Eo && M ? M : M ? M * (Number(_) || 1) : _,
                                        price: parseFloat(U / ht),
                                        properties: {
                                            _tpo_main_product_id: x.get("id"),
                                            _tpo_add_on_key: self.crypto.randomUUID(),
                                            ...zt && E.option_type_id && {
                                                _tpo_option_value_id: E.option_type_id.toString()
                                            }
                                        }
                                    }) : C ? w ? !X && !p.find(te => te.id === j) ? p.push({
                                        id: j,
                                        quantity: "1",
                                        properties: {
                                            _one_time_per_cart: z
                                        }
                                    }) : p.push({
                                        properties: {
                                            _one_time_per_cart: z
                                        },
                                        add: !1
                                    }) : p.push({
                                        id: j,
                                        quantity: "1",
                                        price: parseFloat(U / ht),
                                        properties: {
                                            _tpo_main_product_id: x.get("id"),
                                            _tpo_add_on_key: self.crypto.randomUUID(),
                                            _is_one_time_charge: `${j}`,
                                            ...zt && E.option_type_id && {
                                                _tpo_option_value_id: E.option_type_id.toString()
                                            }
                                        }
                                    }) : Q ? p.push({
                                        id: j,
                                        quantity: _ || "1",
                                        price: parseFloat(U / ht),
                                        properties: {
                                            ...zt && E.option_type_id && {
                                                _tpo_option_value_id: E.option_type_id.toString()
                                            }
                                        }
                                    }) : p.push({
                                        id: j,
                                        quantity: _ || "1",
                                        price: parseFloat(U / ht),
                                        properties: {
                                            _tpo_main_product_id: x.get("id"),
                                            _tpo_add_on_key: self.crypto.randomUUID(),
                                            ...zt && E.option_type_id && {
                                                _tpo_option_value_id: E.option_type_id.toString()
                                            }
                                        }
                                    })
                                }
                            }
                    }
                    ),
                    x.delete(`properties[${A}]`),
                    F && F.length && !Q && Array.isArray(F) && (l.properties[A] = F.join(", ")),
                    v.type === "file-upload") {
                        const E = !!v.option_types[0].variant_id;
                        let q = !1
                          , j = JSON.parse(v.metadata || "{}")
                          , N = j.maxFileQty > 10 ? Qo ? j.maxFileQty : 10 : j.maxFileQty || 1;
                        F && F.length && F[0] === A && l.properties && delete l.properties[A];
                        for (let U = 0; U < N; U++) {
                            let O = U + 1;
                            const M = `${A}-${O}`;
                            let z = x.get(`properties[${M}]`);
                            z && (x.delete(`properties[${M}]`),
                            l.properties[M] = E ? z.replace(/ \[ \+(.*) \]/, "") : z,
                            q = !0)
                        }
                        if (E)
                            if (q) {
                                const U = PriceFormatter.formatMoney(v.option_types[0].additional_price * 100, !0)
                                  , O = PriceFormatter.formatMoneyForAddOnProductProperty(U, $);
                                l.properties[A] = `${O}`
                            } else
                                p.pop(),
                                delete l.properties[A];
                        else
                            q && v.additional_price && (u += v.additional_price)
                    }
                    if (v.type === "dimension") {
                        let E = JSON.parse(v.metadata || "{}");
                        if (Object.keys(E).length) {
                            const {labelX: q="", labelY: j="", labelZ: N=""} = E;
                            if (q) {
                                const U = `${A}-${q || "width"}`;
                                let O = x.get(`properties[${U}]`);
                                O && (x.delete(`properties[${U}]`),
                                l.properties[U] = O)
                            }
                            if (j) {
                                const U = `${A}-${j || "width"}`;
                                let O = x.get(`properties[${U}]`);
                                O && (x.delete(`properties[${U}]`),
                                l.properties[U] = O)
                            }
                            if (N) {
                                const U = `${A}-${N || "width"}`;
                                let O = x.get(`properties[${U}]`);
                                O && (x.delete(`properties[${U}]`),
                                l.properties[U] = O)
                            }
                        }
                    }
                }
                ),
                (Vt !== "no" && u || si === "bundle") && kn && fl(o),
                Vt !== "no" && u) {
                    if (Vt === "expand") {
                        let v = aa();
                        v = {
                            ...v,
                            ...l.properties
                        },
                        l.properties._tpo_custom_options = JSON.stringify(uo(v))
                    }
                    l.properties._tpo_price = parseFloat(u / ht)
                }
                for (const v of p)
                    v.properties?._tpo_add_on_key && (l.properties._tpo_add_on_keys.push(v.properties._tpo_add_on_key),
                    l.properties._tpo_add_on_variant_ids.push(v.id),
                    v.properties?._is_one_time_charge && l.properties._tpo_one_time_charges.push(v.properties._is_one_time_charge)),
                    v.properties?._one_time_per_cart && (l.properties?._tpo_products_per_cart.find(y => y === v.properties?._one_time_per_cart) || l.properties?._tpo_products_per_cart.push(v.properties?._one_time_per_cart));
                if (l.properties._tpo_add_on_keys = JSON.stringify(l.properties._tpo_add_on_keys),
                l.properties._tpo_add_on_variant_ids = JSON.stringify(l.properties._tpo_add_on_variant_ids),
                l.properties._tpo_one_time_charges && l.properties._tpo_one_time_charges.length ? l.properties._tpo_one_time_charges = JSON.stringify(l.properties._tpo_one_time_charges) : delete l.properties._tpo_one_time_charges,
                l.properties._tpo_products_per_cart && l.properties._tpo_products_per_cart.length ? l.properties._tpo_products_per_cart = JSON.stringify(l.properties._tpo_products_per_cart) : delete l.properties._tpo_products_per_cart,
                x.get("properties[_tpo_active_currency]") && (l.properties._tpo_active_currency = x.get("properties[_tpo_active_currency]")),
                x.get("properties[_tpo_currency_rate]") && (l.properties._tpo_currency_rate = x.get("properties[_tpo_currency_rate]")),
                si === "bundle" && (l.properties._tpo_add_on_products = mr(p),
                delete l.properties._tpo_add_on_keys,
                delete l.properties._tpo_add_on_variant_ids),
                Vt !== "no" && u) {
                    if (Vt === "expand") {
                        let v = aa();
                        v = {
                            ...v,
                            ...l.properties
                        },
                        l.properties._tpo_custom_options = JSON.stringify(uo(v))
                    }
                    l.properties._tpo_price = parseFloat(u / ht)
                }
                if (s = !!p.length,
                si === "bundle") {
                    let v = !1;
                    if (p.forEach(y => {
                        y.properties._tpo_add_on_key || y.properties._tpo_main_product_id ? y.add = !1 : v = !0
                    }
                    ),
                    v) {
                        l.properties._tpo_price = parseFloat((u || 0) / ht);
                        let y = aa();
                        y = {
                            ...y,
                            ...l.properties
                        },
                        l.properties._tpo_custom_options = JSON.stringify(uo(y))
                    } else
                        s = !1
                }
                if (s) {
                    l.properties._tpo_is_main_product = "1",
                    o.dataset.hasAddOnProduct = !0,
                    o.onsubmit = () => !1;
                    for (const [L,P] of x)
                        l[L] = P;
                    let v = document.querySelector("cart-notification") || document.querySelector("cart-drawer") || document.querySelector("cart-dropdown-bubble");
                    if (v && v.getSectionsToRender && (l.sections = v.getSectionsToRender().map(L => L.id),
                    l.sections_url = window.location.pathname),
                    B === "emblematic-creative.myshopify.com") {
                        let L = [];
                        document.documentElement.dispatchEvent(new CustomEvent("cart:prepare-bundled-sections",{
                            bubbles: !0,
                            detail: {
                                sections: L
                            }
                        })),
                        l.sections = L.join(","),
                        l.sections_url = window.location.pathname
                    }
                    l.quantity || (l.quantity = "1");
                    let y = ["608e06-2.myshopify.com", "nevidjenoshop.myshopify.com", "faa1a1-4.myshopify.com"];
                    if (!l.id && window.__pageflyProducts && y.includes(B)) {
                        let L = l["product-id"];
                        L && (l.id = window.__pageflyProducts[L]?.selected_or_first_available_variant.id,
                        p.forEach(P => {
                            P.properties && P.properties._tpo_main_product_id !== void 0 && (P.properties._tpo_main_product_id = L)
                        }
                        ))
                    }
                    ["pacificsundaytour.myshopify.com", "bda175.myshopify.com", "paxscrubs.myshopify.com", "9059d2-ed.myshopify.com", "vixud8-2e.myshopify.com", "baby-elegance-ie.myshopify.com"].includes(B) && p.forEach(L => {
                        L.properties && (L.properties = {
                            ...L.properties,
                            ...Kp(l.properties)
                        })
                    }
                    ),
                    ["toonz-by-aysh.myshopify.com"].includes(B) && p.forEach(L => {
                        L.properties && (L.properties = {
                            ...L.properties,
                            ...l["properties[_essential_preorder_campaign_id]"] && {
                                _essential_preorder_campaign_id: l["properties[_essential_preorder_campaign_id]"]
                            },
                            ...l["properties[Note]"] && {
                                Note: l["properties[Note]"]
                            }
                        })
                    }
                    ),
                    ["sit-and-wonder.myshopify.com", "bluemilkstudio.myshopify.com", "honeycombliving.myshopify.com", "d17912.myshopify.com", "c91dd1-69.myshopify.com", "the-fieldbar-company-3998.myshopify.com", "diavy.myshopify.com"].includes(B) && p.forEach(L => {
                        if (L.properties) {
                            const P = Object.keys(l.properties).filter(k => k.startsWith("*")).reduce( (k, A) => (k[A] = l.properties[A],
                            k), {});
                            L.properties = {
                                ...L.properties,
                                ...P
                            }
                        }
                    }
                    ),
                    Gs.includes(B) && l.selling_plan && p.length && p.forEach(L => {
                        L.selling_plan || (L.selling_plan = l.selling_plan,
                        l.subs_interval && (L.subs_interval = l.subs_interval),
                        l.selling_plan_group && (L.selling_plan_group = l.selling_plan_group))
                    }
                    );
                    let $ = xn.includes(B) ? {
                        items: [...p, {
                            ...l
                        }]
                    } : {
                        items: [{
                            ...l
                        }]
                    };
                    Ys.includes(B) && ($ = {
                        items: p.map(P => {
                            const {properties: k, ...A} = P;
                            return A
                        }
                        )
                    });
                    try {
                        let L = /%[0-9A-Fa-f]{2}/g;
                        const P = Bc.includes(B);
                        let k = null
                          , A = l.sections && !P && !L.test(l.sections_url) ? `/cart/add.js?sections=${l.sections}&sections_url=${l.sections_url}` : "/cart/add.js";
                        Qu && (window.upcartOnCartLoaded = !1);
                        const [R,Q] = await ns({
                            body: $,
                            mainProduct: l,
                            formData: x,
                            cartAddUrl: A
                        })
                          , I = [Q, R].find(ee => !!ee)
                          , F = await I.json();
                        if (k = F,
                        I.status >= 400) {
                            const H = (await (await fetch("/cart.js?app=tpo", {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })).json())?.items.find(T => T.variant_id == x.get("id") && (JSON.parse(T.properties._tpo_add_on_keys || "[]").includes(p[0].properties._tpo_add_on_key) || JSON.parse(T.properties._tpo_products_per_cart || "[]").includes(p[0].properties._one_time_per_cart)))?.quantity || 0;
                            if (H) {
                                const E = {
                                    items: [...p.map(q => !q.properties.hasOwnProperty("_one_time_per_cart") && !q.properties.hasOwnProperty("_is_one_time_charge") ? {
                                        ...q,
                                        quantity: H
                                    } : q)]
                                };
                                await fetch("/cart/add.js", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(E)
                                })
                            }
                            if (alert(F.description),
                            Ia(F))
                                return;
                            if (Rc.includes(B))
                                window.location.href = "/cart";
                            else {
                                if (Ia(F))
                                    return;
                                Wc.includes(B) && !window.location.href.endsWith("true") ? window.location.href = window.location.href + "?addToCart=true" : o.dataset.afterAtc === "5" ? window.location.href = "/checkout" : Vc.includes(B) ? (window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                }),
                                window.location.reload()) : (ga === "drawer" || ga === "dropdown") && !window.location.href.endsWith("addToCart=true") ? window.location.href = window.location.href + "?addToCart=true" : ga === "page" ? window.location.href = "/cart" : lf ? document.documentElement.dispatchEvent(new Event("supercart:open")) : (window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                }),
                                window.location.reload())
                            }
                        } else {
                            if (document.dispatchEvent(new CustomEvent("easify:main-product:add",{
                                bubbles: !0,
                                detail: {
                                    cart: k
                                }
                            })),
                            !xn.includes(B) && !Ys.includes(B)) {
                                let ee = []
                                  , H = k?.items?.[0]?.selling_plan_allocation?.selling_plan ?? null;
                                H && H.id && p.length && p.forEach(E => {
                                    const q = Number(E.id);
                                    for (const j of Mi) {
                                        const N = j.variants.find(U => U.id === q);
                                        if (N) {
                                            const U = N.selling_plan_allocations.find(O => {
                                                const M = j.selling_plan_groups.find(z => z.id === O.selling_plan_group_id);
                                                return M && M.name === H.name
                                            }
                                            )?.selling_plan_id;
                                            U && (E.selling_plan = U);
                                            break
                                        }
                                    }
                                }
                                ),
                                p && p.length && (ee = p.filter(E => E.add !== !1));
                                const T = {
                                    items: [...ee]
                                };
                                if (ee.length) {
                                    let E = await fetch(A, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(T)
                                    });
                                    k = await E.json(),
                                    document.dispatchEvent(new CustomEvent("easify:add-on-product:add",{
                                        bubbles: !0,
                                        detail: {
                                            cart: k
                                        }
                                    })),
                                    k.status === 422 && k.description.includes("selling plan") && x.get("selling_plan") && (l.selling_plan = x.get("selling_plan"),
                                    ee.forEach(q => {
                                        q.selling_plan || (q.selling_plan = l.selling_plan)
                                    }
                                    ),
                                    E = await fetch(A, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            items: [...ee]
                                        })
                                    }),
                                    k = await E.json())
                                }
                            }
                            if (Ia(F))
                                return;
                            if (window.icartAddToCartEvent)
                                setTimeout(async () => {
                                    await Po()
                                }
                                , 1500);
                            else if (Rc.includes(B))
                                window.location.href = "/cart";
                            else if (Wc.includes(B) && !window.location.href.endsWith("true"))
                                window.location.href = window.location.href + "?addToCart=true";
                            else if (o.dataset.afterAtc === "5")
                                window.location.href = "/checkout";
                            else if (Vc.includes(B))
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                }),
                                window.location.reload();
                            else if (ga === "drawer" || ga === "dropdown") {
                                let ee = "";
                                window.theme ? ee = window.theme.settings?.themeName || window.theme.info?.name || gt : ee = gt,
                                ee.includes("Impulse") || ee.includes("Expanse") || ee.includes("Mount-It") ? document.dispatchEvent(new CustomEvent("ajaxProduct:added")) : ee.includes("Symmetry") || ee.includes("Mode") ? (document.dispatchEvent(new CustomEvent("on:cart:change")),
                                document.dispatchEvent(new CustomEvent("dispatch:cart-drawer:open")),
                                document.dispatchEvent(new CustomEvent("theme:cartchanged")),
                                document.dispatchEvent(new CustomEvent("theme:open-cart-drawer")),
                                await ui(),
                                await Pa(),
                                await Po()) : B === "emblematic-creative.myshopify.com" ? (document.dispatchEvent(new CustomEvent("variant:add")),
                                document.dispatchEvent(new CustomEvent("cart:refresh")),
                                document.documentElement.dispatchEvent(new CustomEvent("cart:change",{
                                    bubbles: !0,
                                    detail: {
                                        baseEvent: "variant:add",
                                        onSuccessDo: "force_open_drawer",
                                        cart: k
                                    }
                                })),
                                setTimeout( () => {
                                    document.dispatchEvent(new CustomEvent("cart:refresh"))
                                }
                                , 1500)) : ee.includes("Enterprise") ? window.location.href.endsWith("addToCart=true") ? (window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                }),
                                window.location.reload()) : window.location.href = window.location.href + "?addToCart=true" : v && v.renderContents && k && k?.sections ? (v.renderContents({
                                    ...k?.items[0],
                                    sections: k?.sections
                                }),
                                v && v.classList.contains("is-empty") && v.classList.remove("is-empty"),
                                await ui(),
                                await Pa(),
                                await Po()) : window.easifyAddToCartEvent || (window.location.href.endsWith("addToCart=true") ? (window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                }),
                                window.location.reload()) : window.location.href = window.location.href + "?addToCart=true")
                            } else if (gt === "Ecomus") {
                                document.dispatchEvent(new CustomEvent("cart:refresh"));
                                let ee = document.querySelector(Za);
                                if (ee) {
                                    let K = new CustomEvent("click",{
                                        bubbles: !0,
                                        cancelable: !0
                                    });
                                    ee.dispatchEvent(K)
                                }
                                await ui(),
                                await Pa(),
                                await Po()
                            } else
                                window.easifyAddToCartEvent || (ga === "page" || ga === "notification" ? window.location.href = "/cart" : lf ? document.documentElement.dispatchEvent(new Event("supercart:open")) : (window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                }),
                                window.location.reload()))
                        }
                    } catch {}
                } else {
                    if (S && xm(),
                    o.dataset.hasAddOnProduct = !1,
                    i.type = "submit",
                    Vt !== "no" && (u || si === "bundle")) {
                        let y = o?.querySelector('[name="properties[_tpo_price]"]');
                        if (y ? y.value = parseFloat(u / ht) : (y = document.createElement("input"),
                        y.type = "hidden",
                        y.id = "_tpo_price",
                        y.name = "properties[_tpo_price]",
                        y.value = parseFloat(u / ht),
                        o.appendChild(y)),
                        Vt === "expand" || si === "bundle") {
                            let g = aa();
                            g = {
                                ...g,
                                ...l.properties
                            };
                            let C = o.querySelector('[name="properties[_tpo_custom_options]"]');
                            C ? C.value = JSON.stringify(uo(g)) : (C = document.createElement("input"),
                            C.type = "hidden",
                            C.id = "_tpo_custom_options",
                            C.name = "properties[_tpo_custom_options]",
                            C.value = JSON.stringify(uo(g)),
                            o.appendChild(C));
                            let w = o.querySelector('[name="properties[_tpo_add_on_products]"]');
                            w ? w.value = mr(p) : (w = document.createElement("input"),
                            w.type = "hidden",
                            w.id = "_tpo_add_on_products",
                            w.name = "properties[_tpo_add_on_products]",
                            w.value = mr(p),
                            o.appendChild(w)),
                            w.value = mr(p) || "";
                            const $ = u && parseFloat(u) > 0
                              , L = p && p.length > 0
                              , P = !!o.querySelector('[name="properties[_tpo_wholesale]"]');
                            $ && !L && w && w.remove(),
                            !$ && !L && (y && y.remove(),
                            w && w.remove(),
                            !P && C && C.remove())
                        }
                    } else {
                        const y = o.querySelector('[name="properties[_tpo_price]"]')
                          , g = o.querySelector('[name="properties[_tpo_custom_options]"]')
                          , C = o.querySelector('[name="properties[_tpo_add_on_products]"]')
                          , w = !!o.querySelector('[name="properties[_tpo_wholesale]"]');
                        y && y.remove(),
                        C && C.remove(),
                        !w && g && g.remove()
                    }
                    const v = i.getAttribute("stickyAdd") === "true";
                    if ((xf.includes(B) || by || v) && o.dispatchEvent(new Event("submit")),
                    Sf.includes(B) || f) {
                        const y = {
                            method: "POST",
                            headers: {
                                "X-Requested-With": "XMLHttpRequest",
                                Accept: "application/json"
                            },
                            body: new FormData(o)
                        };
                        await fetch("/cart/add", y).then(g => g.json()).then(g => {
                            const C = document.querySelector(Za);
                            document.dispatchEvent(new CustomEvent("easify:added",{
                                bubbles: !0,
                                detail: {
                                    cart: g
                                }
                            })),
                            window.prepareDataForDisplayWidgetByRule ? window.prepareDataForDisplayWidgetByRule() : C ? C.dispatchEvent(new Event("click",{
                                bubbles: !0
                            })) : window.location.href = "/cart"
                        }
                        ).catch(g => {}
                        )
                    } else if (zi.includes(gt) && ga === "page") {
                        const y = {
                            method: "POST",
                            headers: {
                                "X-Requested-With": "XMLHttpRequest",
                                Accept: "application/json"
                            },
                            body: new FormData(o)
                        };
                        try {
                            const C = await (await fetch("/cart/add", y)).json();
                            if (C.status >= 400) {
                                alert(C.description);
                                return
                            }
                            await fetch("/cart.js", {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }),
                            window.location.href = `${Do}cart`
                        } catch {}
                    }
                    setTimeout(async () => {
                        await v_()
                    }
                    , 500),
                    setTimeout(async () => {
                        Cm(),
                        await Cd()
                    }
                    , 2e3)
                }
            }
            return await wr(),
            await Aa(),
            setTimeout(async () => {
                await hr(),
                await Jn(),
                await ui(),
                await gm(o)
            }
            , 1e3),
            s
        } catch {}
    }
    async function gm(t) {
        const i = t.querySelectorAll('input[name^="properties[_"]')
          , a = /^properties\[_.+?_price-tpo\]$/;
        i.forEach(r => {
            a.test(r.name) && r.remove()
        }
        )
    }
    function Qp(t, o) {
        return `${t}`
    }
    function Gp(t, o) {
        let i = !1;
        return t && t.length && (i = t.some(a => a.properties._one_time_per_cart === o)),
        i
    }
    function Kp(t) {
        return Object.entries(t).reduce( (o, [i,a]) => (i.startsWith("_") || (o[`_${i}`] = a),
        o), {})
    }
    function Xp(t, o) {
        if (!jf)
            return;
        const i = new FormData(o);
        Array.from(o.elements).filter(r => !r.closest(".tpo_option-set-wrapper") && !r.disabled && r.name && r.name.includes("properties")).forEach(r => {
            const c = r.name.match(/\[(.*?)\]/);
            if (!c)
                return;
            const d = c[1]
              , n = i.get(r.name);
            n && typeof n != "object" && (t.properties[d] = n)
        }
        )
    }
    function bm(t) {
        t.isParsed || (t.options = t.options.map(o => ({
            ...o,
            additional_price: o.additional_price * ht,
            option_types: o.option_types.map(i => {
                let a = {}
                  , {variant_id: r, additional_price: c} = i;
                return r && Mi.forEach(d => {
                    d.variants.forEach(n => {
                        `${n.id}` === r && (a = {
                            ...d,
                            variants: [{
                                ...n
                            }]
                        })
                    }
                    )
                }
                ),
                a.variants ? c = a.variants[0].price / 100 : c *= ht,
                {
                    ...i,
                    additional_price: c
                }
            }
            )
        })),
        t.isParsed = !0)
    }
    function Kn(t) {
        const o = Lt?.textAddToCartCustom;
        if (o && !window.preOrderProduct) {
            const i = t.querySelector("span");
            i ? i.textContent = o : t.textContent = o
        }
    }
    function bl(t, o, i, a, r) {
        if (delete i.dataset.isRenderOptionSet,
        Qu && !window.upcartShouldSkipAddToCartInterceptor && (window.upcartShouldSkipAddToCartInterceptor = !0),
        !t)
            return "";
        if (bm(t),
        B === "1a3849-55.myshopify.com" && i.parentNode) {
            const _ = i.cloneNode(!0);
            i.parentNode.insertBefore(_, i),
            i.parentNode.removeChild(i),
            _.classList.add("tpo-btn-add_to_cart"),
            i = _
        }
        i.classList.add("tpo_add-to-cart"),
        typeof BoosterTheme < "u" && i.removeAttribute("onclick"),
        Kn(i);
        const {title: c, options: d=[]} = t
          , n = self.crypto.randomUUID();
        B === "398859-36.myshopify.com" && Hr && d?.length > 0 && (ae = []);
        const f = di ? d.map(_ => {
            if (typeof _.date_time_values == "string" && (_.date_time_values = _.date_time_values.length ? JSON.parse(_.date_time_values || "[]") : []),
            _.conditions_serialized) {
                const m = typeof _.conditions_serialized != "string" ? _.conditions_serialized : JSON.parse(_.conditions_serialized);
                return ae = [...ae, {
                    id: _.id,
                    ...m
                }],
                m.conditionalField ? {
                    ..._,
                    conditions_serialized: m
                } : {
                    ..._,
                    conditions_serialized: {}
                }
            }
            return ae = [...ae, {
                id: _.id
            }],
            {
                ..._,
                conditions_serialized: {}
            }
        }
        ) : d.map(_ => {
            const m = `${n}`
              , S = `${n},${_.id}`
              , v = `${n}-${_.id}`;
            if (typeof _.date_time_values == "string" && (_.date_time_values = _.date_time_values.length ? JSON.parse(_.date_time_values || "[]") : []),
            _.conditions_serialized) {
                const y = typeof _.conditions_serialized != "string" ? _.conditions_serialized : JSON.parse(_.conditions_serialized);
                return y.conditionOptions = y.conditionOptions.map(g => ({
                    ...g,
                    id: `${n},${g.id}`
                })),
                ae = [...ae, {
                    id: S,
                    idOther: v,
                    ...y
                }],
                y.conditionalField ? {
                    ..._,
                    id: S,
                    idOther: v,
                    option_set_id: m,
                    conditions_serialized: y
                } : {
                    ..._,
                    id: S,
                    idOther: v,
                    option_set_id: m,
                    conditions_serialized: {}
                }
            }
            return ae = [...ae, {
                id: S,
                idOther: v
            }],
            {
                ..._,
                id: S,
                idOther: v,
                option_set_id: m,
                conditions_serialized: {}
            }
        }
        );
        f.length && (ne = [...f]),
        t && o && o.removeAttribute("novalidate"),
        o?.addEventListener("submit", function() {
            r ? dt(ke(o, a), o) : ke(o, a)
        });
        let p = document.createElement("div");
        if (p.classList.add("tpo_option-set-container"),
        Hi?.optionsSpacing && p.style.setProperty("--options-spacing", `${Hi.optionsSpacing}px`),
        ul && ul?.customCss) {
            const _ = document.createElement("style");
            _.innerHTML = ul?.customCss,
            p.prepend(_)
        }
        if (Ho) {
            const {appTheme: _, appMode: m} = Ho || {}
              , S = document.querySelector(".tpo_option-set-wrapper");
            S?.setAttribute("data-tpo-theme", _ ?? "classic"),
            S?.setAttribute("data-tpo-mode", m ?? "light"),
            document.body.setAttribute("data-tpo-theme", _ ?? ""),
            document.body.setAttribute("data-tpo-mode", m ?? ""),
            document.body.setAttribute("data-tpo-custom-style", ""),
            m && m === "dark" && document.body.setAttribute("data-tpo-dark-mode", "")
        }
        const s = [...new Set(Object.values(JSON.parse(bp)).map(_ => _.fontFamily).filter(_ => _))];
        if (s && s.length > 0) {
            const _ = document.createElement("div");
            _.id = "list-unique-fonts";
            for (const m of s) {
                const S = document.createElement("link");
                S.rel = "stylesheet",
                S.href = "https://fonts.googleapis.com/css2?family=" + m.replaceAll(" ", "+"),
                _.appendChild(S)
            }
            p.prepend(_)
        }
        Object.assign(p, {
            id: `tpo_option-set-container${n !== void 0 ? `-${n}` : ""}`
        });
        let l = f.map(_ => Yp(_, f, o, i, a, void 0, n, r, f));
        p.append(...l);
        const b = wm()
          , h = vm();
        let u = o?.attributes.id?.value || null;
        if (b.setAttribute("form", u),
        h.setAttribute("form", u),
        p.append(b),
        p.append(h),
        zt) {
            const _ = Sm();
            _.setAttribute("form", u),
            p.append(_)
        }
        Gn(o, t);
        let x = y_(f);
        return x && x.length > 0 && !di && (h_(f, p),
        __(f, p, i)),
        r && i.addEventListener("click", async function(_) {
            if (i.type = "button",
            ke(o, a)) {
                i.dataset.tpoValidate = !0;
                let m = _.target.innerHTML;
                B !== "oppastore-rashmi.myshopify.com" && (_.target.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div><div class="loading-overlay__spinner loading__spinner hidden"></div>'),
                _.target.disabled = !0;
                let S = !1;
                try {
                    let v = ir?.items || []
                      , y = o;
                    o?.tagName !== "FORM" && (y = o.querySelector(Ai) || o.querySelector("form")),
                    S = await gl(t, y, i, null, null, null, v),
                    document.dispatchEvent(new CustomEvent("tpo_product_added"))
                } catch {} finally {
                    B !== "oppastore-rashmi.myshopify.com" && (_.target.innerHTML = m),
                    _.target.disabled = !1
                }
                setTimeout(async () => {
                    await ui(),
                    await Gn(o, t),
                    await easifyHandleUpdateCartWithAddonProduct(),
                    await Aa(),
                    await wr(),
                    hr()
                }
                , 1e3),
                S && _.stopImmediatePropagation()
            } else
                _.stopPropagation(),
                i.dataset.tpoValidate = !1,
                setTimeout( () => {
                    const S = Array.from(document.querySelectorAll(".tpo_error-message:not(:empty)"));
                    for (let v = S.length - 1; v >= 0; v--) {
                        const y = S[v]
                          , g = y.parentElement.parentElement.parentElement
                          , C = g.parentElement.parentElement;
                        g.classList.contains("tpo_option-group_child-wrapper") ? C.classList.contains("tpo_hidden") || (g.parentElement.classList.contains("show") || g.parentElement.classList.add("show"),
                        g.hidden = !1,
                        y.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "center"
                        })) : y.parentElement.parentElement.classList.contains("tpo_hidden") || y.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "center"
                        })
                    }
                }
                , 0),
                rs(o) || Bl(dl)
        }),
        i.dataset.isRenderOptionSet = "true",
        p
    }
    function Yp(t, o, i, a, r, c=!1, d, n, f=[]) {
        const p = d
          , s = o;
        let l = i?.attributes.id?.value || null;
        s?.length && (At[t.option_set_id] && At[t.option_set_id].length ? At[t.option_set_id].length < s.length && (At = {
            ...At,
            [t.option_set_id]: [...s]
        }) : At = {
            ...At,
            [t.option_set_id]: [...s]
        });
        const {hidden_label: b, is_required: h, option_types: u=[], placeholder: x="", title: _, type: m, help_text: S="", info_text: v="", option_identifier: y, min_value: g, max_value: C, multi_select: w, conditions_serialized: $, additional_price: L, show_price_position: P, metadata: k="{}", id: A, date_time_type: R="", date_time_values: Q="[]", is_in_group: I=0, price_type: F, label_position: ee="hover", button_price_position: K="hover", swatch_shape: H="", is_change_image: T=!1, show_selected_values: E=!1, image_size: q="small", image_color: j=0, column_number: N, show_selected_on_label: U, show_selected_inside_on_label: O, quantity_selector: M, swatches_slider: z="", is_change_label: X=!1, one_time_charge: J="{}", live_preview_transform: te="{}", idOther: ue} = t
          , me = JSON.parse(k || "{}")
          , Me = me.useDimensionDropdownPricing || !1
          , Te = me?.minFileQty || 1
          , we = v?.replace(/'/g, "&apos;")
          , Ce = z ? JSON.parse(z) : null
          , Le = Ce && Ce?.enable
          , je = te && typeof te == "string" ? JSON.parse(te) : te
          , Ae = je && je?.quantity_selector === "MULTIPLE"
          , Z = M ? JSON.parse(M) : {
            enable: !1,
            configs: {
                showTotalSelected: !1,
                hasLimitations: !1,
                minValue: 1,
                maxValue: 1,
                limitTotalSelected: 0,
                isUseCustomIncrement: !1,
                customIncrementValue: 1,
                isUseMinMaxSelected: !1,
                minValueTotal: 1,
                maxValueTotal: 1,
                isShowNewTotalSelected: !1
            }
        }
          , Ue = t.column_width || 100;
        if (I && !c)
            return "";
        const ft = (fe, et, $t, vt, Tt= (yi, Rt) => Rt) => {
            const Rt = JSON.parse(k || "{}").type_letter;
            fe.value = Tt(Rt, $t?.default_value || ""),
            $t?.default_value && fe.dispatchEvent(new Event("blur")),
            window.addEventListener("reloadValueOnTextField", Ht => {
                const Ci = Ht.detail.formElement
                  , ki = Ci.querySelector(`#${et}-${$t.option_id}`);
                ki.value = Tt(Rt, vt || ""),
                ki.dispatchEvent(new Event("input")),
                Ci.querySelectorAll(".tpo_error-message.tpo_undefined").forEach(Pt => {
                    Pt.textContent = "",
                    Pt.removeAttribute("data-error")
                }
                )
            }
            )
        }
        ;
        let le = document.createElement("div");
        $.action === "SHOW" ? (Object.assign(le, {
            id: `${A},${m}`,
            className: `tpo_option-container tpo_hidden tpo_flex-${Ue} tpo_option-container-${ue}-${m}`
        }),
        Fi(A, "hide", w),
        rt = [...rt, `${A},${m}`]) : Object.assign(le, {
            id: `${A},${m}`,
            className: `tpo_option-container tpo_flex-${Ue} tpo_option-container-${ue}-${m}`
        }),
        De = [...De, `${A},${m}`];
        let at = document.createElement("div");
        Object.assign(at, {
            className: "tpo_option-label",
            innerHTML: `
                <div 
                    class='tpo_option-label-container ${b ? "tpo_hidden" : ""}'
                    style='margin-bottom: ${Hi.optionLabelValueSpacing}px;'
                >   
                    <span 
                        class='form__label tpo_${bi.fontStyle}' 
                        style='
                            font-size: ${bi.fontSize}px; 
                            color: ${V.optionLabelColor ?? bi.fontColor}; 
                            ${bi?.fontFamily ? `font-family: ${bi?.fontFamily};` : ""}
                        '
                    >
                        ${_}
                    </span>
                    <span class='tpo_option-required-indicator'> ${h ? "*" : ""}</span>
                    <div class='tpo_option-tooltip ${Pi ? "tpo_compatible_style_theme" : ""} ${we ? "" : "tpo_hidden"}' style='margin-bottom: ${Hi.optionLabelValueSpacing}px'>
                        <span 
                            style='
                                font-size: ${Wt.fontSize}px; 
                                ${Wt?.fontFamily ? `font-family: ${Wt?.fontFamily};` : ""}
                            '
                            class='tpo_option-tooltip-icon tpo_ ${Wt.fontStyle}'
                        >
                            ${Lo ? `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.99992 1.83334C4.59416 1.83334 1.83325 4.59425 1.83325 8C1.83325 11.4058 4.59416 14.1667 7.99992 14.1667C11.4057 14.1667 14.1666 11.4058 14.1666 8C14.1666 4.59425 11.4057 1.83334 7.99992 1.83334ZM0.833252 8C0.833252 4.04196 4.04188 0.833336 7.99992 0.833336C11.958 0.833336 15.1666 4.04196 15.1666 8C15.1666 11.958 11.958 15.1667 7.99992 15.1667C4.04188 15.1667 0.833252 11.958 0.833252 8ZM7.99992 5.16667C7.53968 5.16667 7.16659 5.53977 7.16659 6C7.16659 6.27614 6.94273 6.5 6.66659 6.5C6.39044 6.5 6.16659 6.27614 6.16659 6C6.16659 4.98748 6.9874 4.16667 7.99992 4.16667C9.01244 4.16667 9.83325 4.98748 9.83325 6C9.83325 6.36423 9.72652 6.70505 9.54247 6.99109C9.42718 7.17025 9.2924 7.3413 9.16812 7.49576C9.14539 7.524 9.12305 7.55165 9.1011 7.57882C8.99798 7.70646 8.90331 7.82363 8.81583 7.94385C8.60011 8.24033 8.49992 8.46313 8.49992 8.66667V9C8.49992 9.27614 8.27606 9.5 7.99992 9.5C7.72378 9.5 7.49992 9.27614 7.49992 9V8.66667C7.49992 8.13383 7.76153 7.69318 8.00723 7.3555C8.11104 7.21282 8.2248 7.0721 8.32825 6.94414C8.34897 6.91851 8.36928 6.89338 8.38901 6.86886C8.51248 6.71542 8.61757 6.58044 8.70152 6.44997C8.78486 6.32046 8.83325 6.16665 8.83325 6C8.83325 5.53977 8.46016 5.16667 7.99992 5.16667ZM7.99992 10.1667C8.27606 10.1667 8.49992 10.3905 8.49992 10.6667V11.3333C8.49992 11.6095 8.27606 11.8333 7.99992 11.8333C7.72378 11.8333 7.49992 11.6095 7.49992 11.3333V10.6667C7.49992 10.3905 7.72378 10.1667 7.99992 10.1667Z"
                                              fill="white" />
                                    </svg>` : `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="16px" height="16px">
                                        <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 24 14 A 2 2 0 0 0 24 18 A 2 2 0 0 0 24 14 z M 23.976562 20.978516 A 1.50015 1.50015 0 0 0 22.5 22.5 L 22.5 33.5 A 1.50015 1.50015 0 1 0 25.5 33.5 L 25.5 22.5 A 1.50015 1.50015 0 0 0 23.976562 20.978516 z"/>
                                    </svg>`}
                        </span>
                        <div class='tpo_option-tooltip-content tpo_ ${Wt.fontStyle}' style='
                              font-size: ${Wt.fontSize}px;
                              ${Wt?.fontFamily ? `font-family: ${Wt?.fontFamily};` : ""};
                              ${Wt.fontStyle}
                        '>
                              ${v || ""}
                        </div>
                    </div>
                </div>`
        });
        const bt = fe => fe === "text-box" ? "tpo_option-label text-box" : "tpo_option-label";
        let oe = document.createElement("div");
        Object.assign(oe, {
            className: bt(t.type),
            innerHTML: `
        <div 
            class='tpo_option-label-container ${b ? "tpo_hidden" : ""}'
            style='margin-bottom: ${Hi.optionLabelValueSpacing}px;'
        >
            <span 
                class='form__label tpo_${bi.fontStyle}' 
                style='
                    font-size: ${bi.fontSize}px;
                    color: ${V.optionLabelColor ?? bi.fontColor};
                    ${bi?.fontFamily ? `font-family: ${bi?.fontFamily};` : ""}
                '
            >
                ${_}
            </span>
            <span class='tpo_option-required-indicator'> ${h ? "*" : ""}</span>
            <div class='tpo_option-tooltip ${Pi ? "tpo_compatible_style_theme" : ""} ${we ? "" : "tpo_hidden"}' style='margin-bottom: ${Hi.optionLabelValueSpacing}px' >
                 <span 
                      style='
                            font-size: ${Wt.fontSize}px;
                            ${Wt?.fontFamily ? `font-family: ${Wt?.fontFamily};` : ""}
                      ' 
                      class='tpo_option-tooltip-icon tpo_ ${Wt.fontStyle}'
                 >
                      ${Lo ? `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M7.99992 1.83334C4.59416 1.83334 1.83325 4.59425 1.83325 8C1.83325 11.4058 4.59416 14.1667 7.99992 14.1667C11.4057 14.1667 14.1666 11.4058 14.1666 8C14.1666 4.59425 11.4057 1.83334 7.99992 1.83334ZM0.833252 8C0.833252 4.04196 4.04188 0.833336 7.99992 0.833336C11.958 0.833336 15.1666 4.04196 15.1666 8C15.1666 11.958 11.958 15.1667 7.99992 15.1667C4.04188 15.1667 0.833252 11.958 0.833252 8ZM7.99992 5.16667C7.53968 5.16667 7.16659 5.53977 7.16659 6C7.16659 6.27614 6.94273 6.5 6.66659 6.5C6.39044 6.5 6.16659 6.27614 6.16659 6C6.16659 4.98748 6.9874 4.16667 7.99992 4.16667C9.01244 4.16667 9.83325 4.98748 9.83325 6C9.83325 6.36423 9.72652 6.70505 9.54247 6.99109C9.42718 7.17025 9.2924 7.3413 9.16812 7.49576C9.14539 7.524 9.12305 7.55165 9.1011 7.57882C8.99798 7.70646 8.90331 7.82363 8.81583 7.94385C8.60011 8.24033 8.49992 8.46313 8.49992 8.66667V9C8.49992 9.27614 8.27606 9.5 7.99992 9.5C7.72378 9.5 7.49992 9.27614 7.49992 9V8.66667C7.49992 8.13383 7.76153 7.69318 8.00723 7.3555C8.11104 7.21282 8.2248 7.0721 8.32825 6.94414C8.34897 6.91851 8.36928 6.89338 8.38901 6.86886C8.51248 6.71542 8.61757 6.58044 8.70152 6.44997C8.78486 6.32046 8.83325 6.16665 8.83325 6C8.83325 5.53977 8.46016 5.16667 7.99992 5.16667ZM7.99992 10.1667C8.27606 10.1667 8.49992 10.3905 8.49992 10.6667V11.3333C8.49992 11.6095 8.27606 11.8333 7.99992 11.8333C7.72378 11.8333 7.49992 11.6095 7.49992 11.3333V10.6667C7.49992 10.3905 7.72378 10.1667 7.99992 10.1667Z"
                                          fill="white" />
                            </svg>` : `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="16px" height="16px">
                                <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 24 14 A 2 2 0 0 0 24 18 A 2 2 0 0 0 24 14 z M 23.976562 20.978516 A 1.50015 1.50015 0 0 0 22.5 22.5 L 22.5 33.5 A 1.50015 1.50015 0 1 0 25.5 33.5 L 25.5 22.5 A 1.50015 1.50015 0 0 0 23.976562 20.978516 z"/>
                            </svg>`}
                 </span>
                 <div class='tpo_option-tooltip-content tpo_ ${Wt.fontStyle}' style='
                      font-size: ${Wt.fontSize}px;
                      ${Wt?.fontFamily ? `font-family: ${Wt?.fontFamily};` : ""}
                 '>
                      ${v || ""}
                 </div>
            </div>
        </div>
        `
        });
        let Ve, Ne, pe = "";
        P !== 1 && _e(st, u);
        let lt = document.createElement("input")
          , St = h ? x ? `${x} *` : Re["Please select"] && Re["Please select"][xt] || "Please select" : x || Re["Please select"] && Re["Please select"][xt] || "Please select"
          , {useUrl: _t=!1, separateAddOnProduct: it=!1} = JSON.parse(k || "{}");
        Object.assign(lt, {
            className: `tpo_option-input tpo_${tt.fontStyle} ${Pi ? "tpo_compatible_dropdown_theme" : ""}`,
            disabled: !1,
            placeholder: St,
            type: "text",
            name: _t ? "" : `properties[${it ? "_" : ""}${y}]`,
            ariaLabel: y
        }),
        l && lt.setAttribute("form", l),
        lt.style.fontSize = `${tt.fontSize}px`,
        tt?.fontFamily && (lt.style.fontFamily = `${tt.fontFamily}, san-serif`),
        lt.style.color = V?.optionValueColor ?? tt.fontColor;
        const Be = document.createElement("span");
        Be.style = `color: ${V?.selectedOptionValueColor ?? dr?.fontColor}; ${dr?.fontFamily ? `font-family: ${dr?.fontFamily};` : ""} font-size: ${dr.fontSize}px;`;
        const Ge = oe.querySelector(".tpo_option-label-container")
          , ct = Ge?.querySelector(".tpo_option-required-indicator");
        Object.assign(Be, {
            className: `tpo_selected_values_span ${dr?.fontStyle ? `tpo_${dr.fontStyle}` : ""}`
        }),
        ct ? ct.after(Be) : Ge && Ge.append(Be);
        let Y = document.createElement("div")
          , Se = document.createElement("div");
        Object.assign(Se, {
            className: `tpo_option-help-text tpo_${cr.fontStyle}`,
            innerHTML: `
                    <span>${S}</span>
                `
        }),
        Se.style.fontSize = `${cr.fontSize}px`,
        Se.style.color = V.helpTextColor ?? cr.fontColor,
        cr?.fontFamily && (Se.style.fontFamily = cr.fontFamily);
        let ie = document.createElement("div");
        Object.assign(ie, {
            className: `tpo_error-message tpo_${li.fontStyle}`,
            innerHTML: ""
        }),
        ie.style.fontSize = `${li.fontSize}px`,
        ie.style.color = V.errorMessageColor ?? li.fontColor,
        li?.fontFamily && (ie.style.fontFamily = li.fontFamily);
        function _e(fe, et) {
            if (!Array.isArray(et) || et.length < 1)
                return;
            let $t = et[0].additional_price || 0
              , vt = !1;
            for (const yi of et)
                if (yi.additional_price !== $t) {
                    if (yi.additional_price === null) {
                        $t = 0;
                        continue
                    }
                    vt = !0,
                    yi.additional_price < $t && ($t = yi.additional_price || 0)
                }
            let Tt = PriceFormatter.formatMoney(parseFloat($t * 100), !0);
            !vt && !$t || !Tt || (oe.firstElementChild.firstElementChild.innerHTML += `
                <span>(+${vt ? Re.From && Re.From[xt] || "from" : ""} ${Tt})</span>
            `,
            at.firstElementChild.firstElementChild.innerHTML += `
                <span>(+${vt ? Re.From && Re.From[xt] || "from" : ""} ${Tt})</span>
            `)
        }
        function Oe(fe) {
            le.contains(ie) || oe.append(Se, ie);
            let et = me.except_number
              , $t = me.except_special_characters
              , vt = me.except_spaces
              , Tt = me.except_letters
              , yi = /\d/
              , Rt = /\s/
              , Ht = /[^a-zA-Z0-9\s\u0600-\u06FF\u00C0-\u1EF9\u0590-\u05FF]/
              , Ci = / \[ \+(.*) \]/
              , ki = /\p{L}/gu
              , ri = fe.match(Ci)
              , Pt = fe.trim();
            return fe = ri ? fe.replace(Ci, "") : fe,
            !fe && !h ? (oe.removeAttribute("data-error"),
            ie.innerHTML = "",
            !0) : fe && Pt.length === 0 && h ? (oe.setAttribute("data-error", ""),
            ie.innerHTML = To ? ze(To, "") : "This is a required field",
            !1) : (oe.setAttribute("data-error", ""),
            fe.length < 1 && h ? (ie.innerHTML = To ? ze(To, "") : "This is a required field",
            !1) : fe.length && et && yi.test(fe) ? (ie.innerHTML = fp ? ze(fp, "") : Re["Numbers are not allowed"]?.[xt] || "Numbers are not allowed",
            !1) : fe.length && Tt && ki.test(fe) ? (ie.innerHTML = hp ? ze(hp, "") : Re["Letters are not allowed"]?.[xt] || "Letters are not allowed",
            !1) : fe.length && vt && Rt.test(fe) ? (ie.innerHTML = mp ? ze(mp, "") : Re["Spaces are not allowed"]?.[xt] || "Spaces are not allowed",
            !1) : fe.length && $t && Ht.test(fe) ? (ie.innerHTML = _p ? ze(_p, "") : Re["Special characters are not allowed"]?.[xt] || "Special characters are not allowed",
            !1) : g && fe.length < g ? (ie.innerHTML = dp ? ze(dp, g) : `Please type at least ${g} characters`,
            !1) : C && fe.length > C ? (ie.innerHTML = up ? ze(up, C) : `Please type at maximum ${C} characters`,
            !1) : (oe.removeAttribute("data-error"),
            ie.innerHTML = "",
            !0))
        }
        function He(fe) {
            le.contains(ie) || oe.append(Se, ie);
            let et = /^[\+\-]?\d*\.?\d+$/;
            fe = fe.match(/\[ \+(.*)\]/) ? fe.replace(/\[ \+(.*)\]/, "") : fe;
            const vt = fe.trim().match(et);
            fe = vt ? vt[0] : fe;
            let Tt = et.test(fe);
            if (!fe && (ie.innerHTML = "",
            oe.removeAttribute("data-error"),
            !h))
                return fe;
            if (oe.setAttribute("data-error", ""),
            Tt)
                fe = parseFloat(fe || 0);
            else if (fe)
                return fe = fe ? parseFloat(fe) : "",
                ie.innerHTML = lr ? ze(lr, "") : "This input value is not numeric!",
                !1;
            return `${fe}`.length < 1 && h ? (ie.innerHTML = To ? ze(To, "") : "This is a required field",
            !1) : g && fe < g ? (ie.innerHTML = rr ? ze(rr, g) : `Please enter a minimum value of ${g}`,
            !1) : C && fe > C ? (ie.innerHTML = nr ? ze(nr, C) : `Please enter a maximum value of ${C}`,
            !1) : (oe.removeAttribute("data-error"),
            ie.innerHTML = "",
            fe)
        }
        function Xe(fe) {
            let et = /^\d+(\.\d+)?$/;
            fe = fe.match(/\[ \+(.*)\]/) ? fe.replace(/\[ \+(.*)\]/, "") : fe;
            const vt = fe.trim().match(et);
            fe = vt ? vt[0] : fe;
            let Tt = et.test(fe);
            if (!fe && (ie.innerHTML = "",
            oe.removeAttribute("data-error"),
            !h))
                return fe;
            if (oe.setAttribute("data-error", ""),
            Tt)
                fe = parseFloat(fe || 0);
            else if (fe)
                return fe = fe ? parseFloat(fe) : "",
                ie.innerHTML = lr ? ze(lr, "") : "This input value is not numeric!",
                !1;
            return fe === NaN && h || fe < 1 && h ? (ie.innerHTML = To ? ze(To, "") : "This is a required field",
            !1) : g && fe < g ? (ie.innerHTML = rr ? ze(rr, g) : `Please enter a minimum value of ${g}`,
            !1) : C && fe > C ? (ie.innerHTML = nr ? ze(nr, C) : `Please enter a maximum value of ${C}`,
            !1) : (oe.removeAttribute("data-error"),
            ie.innerHTML = "",
            fe)
        }
        function ut(fe) {
            let et = fe ? fe.split(/[.,\s]+/).length : 0;
            return !h && !g && !C ? (ie.innerHTML = "",
            fe) : w && g && et < g ? (ie.innerHTML = lo ? ze(lo, g) : `Please select at least ${g} date`,
            !1) : w && C && et > C ? (ie.innerHTML = co ? ze(co, C) : `Please select at maximum ${C} dates`,
            !1) : h && et < 1 ? (ie.innerHTML = ei ? ze(ei, "") : "This is a required option",
            !1) : (ie.innerHTML = "",
            fe)
        }
        function Nt(fe) {
            let et = fe ? fe.split(/[.,\s]+/).length : 0;
            return h && h && et < 1 ? (ie.innerHTML = ei ? ze(ei, "") : "This is a required option",
            fe || !1) : (ie.innerHTML = "",
            fe)
        }
        function We(fe, et, $t) {
            if ($t) {
                let vt = PriceFormatter.formatMoney(parseFloat($t * 100), !0)
                  , Tt = et.toString();
                Tt.endsWith("]") || (Tt = Tt + "]");
                let yi = /\[ \+(.*) \]/
                  , Rt = Tt.match(yi);
                et && (Rt ? fe.value = et.toString().replace(Rt[0], `[ +${vt} ]`) : fe.value = `${et} [ +${vt} ]`)
            } else
                et === !0 ? fe.value = "" : fe.value = et
        }
        function de(fe, et, $t, vt, Tt, yi, Rt, Ht) {
            const Ci = ri => {
                let Pt = ri.toString();
                if (Pt.endsWith("]")) {
                    const Ui = Pt.indexOf("[");
                    Pt = Pt.slice(0, Ui - 1)
                }
                return Pt.trim()
            }
              , ki = ri => {
                let Pt = ri;
                return Rt && (Pt = Pt.replaceAll(" ", "")),
                Ht?.enabled && Ht.characters && (Pt = sa(Pt, Ht.characters)),
                Pt
            }
            ;
            switch (Tt) {
            case "one":
                if (!fe || $t <= 0)
                    et.innerHTML = "";
                else {
                    const ls = Ci(vt);
                    if (ki(ls).length === 0) {
                        et.innerHTML = "";
                        return
                    }
                    const cs = PriceFormatter.formatMoney(parseFloat($t * 100), !1);
                    et.innerHTML = `(+${cs})`
                }
                break;
            case "per_letter":
                if (!fe || $t <= 0) {
                    et.innerHTML = "";
                    return
                }
                const ri = Ci(vt)
                  , Pt = ki(ri);
                if (Pt.length === 0) {
                    et.innerHTML = "";
                    return
                }
                const Ui = PriceFormatter.formatMoney(parseFloat(Pt.length * $t * 100), !1);
                et.innerHTML = `(+${Ui})`;
                break;
            case "quantity_letter":
                if (!fe || JSON.stringify(yi) === JSON.stringify({})) {
                    et.innerHTML = "";
                    return
                }
                const No = Ci(vt)
                  , Ri = ki(No);
                if (Ri.length === 0) {
                    et.innerHTML = "";
                    return
                }
                const ni = Ie(Ri.length, yi);
                if (!ni || ni <= 0) {
                    et.innerHTML = "";
                    return
                }
                const ro = PriceFormatter.formatMoney(parseFloat(ni * 100), !1);
                et.innerHTML = `(+${ro})`;
                break
            }
        }
        function qe(fe, et, $t, vt, Tt, yi, Rt) {
            const Ht = Ri => {
                let ni = Ri.toString();
                if (ni.endsWith("]")) {
                    const ro = ni.indexOf("[");
                    ni = ni.slice(0, ro - 1)
                }
                return ni.trim()
            }
              , Ci = Ri => {
                let ni = Ri;
                return yi && (ni = ni.replaceAll(" ", "")),
                Rt?.enabled && Rt.characters && (ni = sa(ni, Rt.characters)),
                ni
            }
              , ki = (Ri, ni) => {
                if (ni <= 0) {
                    fe.value = Ri;
                    return
                }
                const ro = PriceFormatter.formatMoney(ni, !1);
                fe.value = `${Ri} [ +${ro} ]`
            }
              , ri = Ht(et);
            if (vt !== "quantity_letter") {
                if (!$t) {
                    fe.value = ri;
                    return
                }
                let Ri = 0;
                if (vt === "one")
                    Ci(ri).length > 0 && (Ri = parseFloat($t * 100));
                else if (vt === "per_letter") {
                    const ni = Ci(ri);
                    Ri = parseFloat(ni.length * $t * 100)
                }
                ki(ri, Ri);
                return
            }
            if (JSON.stringify(Tt) === JSON.stringify({})) {
                fe.value = ri;
                return
            }
            const Pt = Ci(ri);
            if (Pt.length === 0) {
                fe.value = ri;
                return
            }
            const Ui = Ie(Pt.length, Tt);
            if (!Ui || Ui <= 0) {
                fe.value = ri;
                return
            }
            const No = parseFloat(Ui * 100);
            ki(ri, No)
        }
        function Ie(fe, et) {
            let $t = 0;
            if (et && et.length)
                for (let vt = 0; vt < et.length; vt++) {
                    let Tt = et[vt];
                    Tt.max ? fe >= Tt.min && fe <= Tt.max && ($t = Tt.value) : fe >= Tt.min && ($t = Tt.value)
                }
            return parseFloat($t.toFixed(2))
        }
        function Qe(fe, et, $t, vt, Tt="", yi=!1) {
            if ($t) {
                let Rt = ""
                  , Ht = et.toString();
                if (Ht && Ht.endsWith("]")) {
                    const Pt = Ht.indexOf("[");
                    Ht = Ht.slice(0, Pt - 1).trim()
                }
                if (vt === "one" || vt === "product_add_ons" || vt === "one_formula" || vt === "one_with_new_price") {
                    let Pt = rd({
                        value: Ht,
                        price: $t,
                        formula: Tt,
                        useFormula: yi,
                        priceType: vt
                    });
                    Rt = PriceFormatter.formatMoney(parseFloat(Pt), !1)
                } else
                    Rt = PriceFormatter.formatMoney(parseFloat($t * 100), !1);
                let Ci = et.toString();
                Ci.endsWith("]") || (Ci = Ci + "]");
                let ki = /\[ \+(.*) \]/
                  , ri = Ci.match(ki);
                et && (ri ? fe.value = `${Ht} [ +${Rt} ]` : fe.value = `${Ht} [ +${Rt} ]`)
            } else {
                let Rt = et.toString();
                if (Rt && Rt.endsWith("]")) {
                    const Ht = Rt.indexOf("[");
                    Rt = Rt.slice(0, Ht - 1).trim()
                }
                fe.value = Rt
            }
        }
        i.dispatchEvent(new Event("change"));
        function Mt(fe, et) {
            switch (fe) {
            case "lowercase":
                return et.toLowerCase();
            case "uppercase":
                return et.toUpperCase();
            case "capitalize_each_word":
                return et.toLowerCase().replace(/(^|\s)([a-zA-Z\u00C0-\u1EF9])/g, $t => $t.toUpperCase());
            case "sentence_case":
                return et.charAt(0).toUpperCase() + et.slice(1).toLowerCase();
            case "none":
            default:
                return et
            }
        }
        function Jt(fe) {
            Ct(s, `${A},${m}`, m, fe)
        }
        function Bt(fe) {
            Ct(s, `${A},${m}`, m, fe)
        }
        switch (m) {
        case "dropdown":
            let ri = function(D, G, re) {
                if (!(!U && !O))
                    if (j === 1) {
                        if (!G[0] || re === 3) {
                            vt.innerHTML = "",
                            Tt.innerHTML = "";
                            return
                        }
                        let be = re === 2 && G[1] ? `<span style='background-color: ${G[1]}'></span>` : ""
                          , he = `<label class='tpo_shape_${H}'><div>
                                <span style='background-color: ${G[0]}'></span>
                                ${be}
                                </div>
                            </label>`;
                        vt.innerHTML = he,
                        Tt.innerHTML = he
                    } else
                        j === 0 && (vt.src = D,
                        Tt.src = D)
            }
              , ni = function(D, G) {
                Io && (lt.dataset.printBox = JSON.stringify([{
                    printBoxName: D,
                    printBoxValue: G
                }]))
            }
              , ro = function(D=0, G="", re=0) {
                let be = 0;
                if ((!G || re === 1) && lt.value) {
                    let Je = lt.value.includes("[") ? lt.value.split("[") : lt.value.split("|");
                    const ot = u.find(nt => `${nt.label} ` === Je[0]);
                    G = ot?.label || "",
                    be = ot?.additional_price
                }
                const Ee = le.querySelector(".tpo_quantity-selector_wrapper").querySelector("input").value;
                if (lt.value && Ee > 0)
                    if (D) {
                        let Je = PriceFormatter.formatMoney(parseFloat(D * 100), !0);
                        lt.value = `${G} [ +${Je} ] | ${Ee}`
                    } else if (be) {
                        let Je = PriceFormatter.formatMoney(parseFloat(Number(be) * Number(Ee) * 100), !0);
                        D = parseFloat(Number(be) * Number(Ee)),
                        lt.value = `${G} [ +${Je} ] | ${Ee}`
                    } else
                        lt.value = `${G} | ${Ee}`;
                else
                    Ee <= 0 && (lt.value = "");
                const Pe = Z.configs;
                pe && Si(le, 0, Pe, Ne),
                yt(st, No, D),
                dt(ke(i, r), i)
            }
              , ls = function(D) {
                const G = lt.closest(".tpo_option-input-inner");
                if (!G)
                    return;
                const re = G.querySelector(".tpo_badge_in_input");
                re && re.remove();
                const be = So(D);
                be && (be.classList.add("tpo_badge_in_input"),
                G.appendChild(be))
            }
              , Gl = function(D, G, re, be, he, Ee, Pe) {
                ri(be === Dt || be === wo ? "" : be, Ee, Pe),
                Ct(s, `${A},${m}`, m, re, null, null, D),
                oi(w === 0 && !Ae ? A : re, he || be, !0),
                lt.value = D,
                E && Fl(Be, lt.value);
                const Je = u.find(ot => ot.id === re);
                if (Je && ls(Je.metadata, Je.label),
                ps(D),
                We(lt, D, G),
                yt(st, No, G),
                n ? dt(ke(i, r), i) : ke(i, r),
                Z.enable) {
                    ro(G, D, No),
                    cs(G, D);
                    const ot = le.querySelector(".tpo_quantity-selector_wrapper");
                    if (Vp(D ? "enable" : "disable", ot),
                    pe) {
                        const nt = Z.configs;
                        Si(le, 0, nt, Ne)
                    }
                }
            }
              , cs = function(D, G) {
                const re = le.querySelector(".tpo_quantity-selector_wrapper")
                  , be = re.querySelector("input").value
                  , he = re.querySelector("input");
                if (he && he.dispatchEvent(new Event("change")),
                be)
                    if (D) {
                        const Ee = D * Number(be);
                        ro(Ee, G)
                    } else
                        ro(0, G);
                else if (re.querySelector("input").value = 1,
                D) {
                    const Ee = D * 1;
                    ro(Ee, G)
                } else
                    ro(0, G)
            }
              , Dd = function(D, G) {
                Ct(s, `${A},${m}`, m, D, null, null, G)
            }
              , jd = function() {
                Y.hidden = !Y.hidden,
                Pt.classList.toggle("show")
            }
              , Kl = function() {
                Y.hidden = !0,
                Pt.classList.remove("show"),
                ps(lt.value)
            }
              , ps = function(D) {
                return le.contains(ie) || at.append(Se, ie),
                h ? D.length < 1 ? (ie.innerHTML = ei ? ze(ei, "") : "This is a required option",
                !1) : (ie.innerHTML = "",
                !0) : !0
            };
            var kt = ri
              , wt = ni
              , Et = ro
              , Ot = ls
              , Xt = Gl
              , xi = cs
              , fi = Dd
              , ai = jd
              , ye = Kl
              , xe = ps;
            lt.classList.add("tpo_option-dropdown"),
            lt.autocomplete = "off",
            lt.onkeydown = function() {
                return !1
            }
            ,
            lt.readOnly = !0,
            lt.dataset.required = h,
            lt.style.borderColor = V.dropdownMenu_border ?? Bn.borderColor,
            lt.style.backgroundColor = V.dropdownMenu_background ?? Bn.background;
            let fe;
            const et = at.querySelector(".tpo_option-label-container")
              , $t = et?.querySelector(".tpo_option-required-indicator");
            $t ? $t.after(Be) : et && et.append(Be),
            a.type = "button",
            a.addEventListener("click", function() {
                ps(lt.value)
            }),
            at.classList.add("tpo_dropdown"),
            Object.assign(Y, {
                className: `tpo_option-type-dropdown-wrapper has-scroll ${t.is_search_dropdown ? "has-search" : ""}`,
                hidden: !0
            }),
            Y.style.setProperty("--dropdownMenu-background", V.dropdownMenu_background || Bn.background || "");
            let vt = document.createElement("div");
            j === 1 ? Object.assign(vt, {
                className: "tpo_color-swatches-wrapper"
            }) : j === 0 && (vt = document.createElement("img"),
            Object.assign(vt, {
                className: `tpo_dropdown-image-wrapper tpo_image_shape_${H || "square"}`,
                src: ""
            }));
            let Tt = document.createElement("div");
            j === 1 ? Object.assign(Tt, {
                className: "tpo_color-swatches-wrapper"
            }) : j === 0 && (Tt = document.createElement("img"),
            Object.assign(Tt, {
                className: `tpo_dropdown-image-wrapper tpo_image_shape_${H || "square"}`,
                src: ""
            }));
            let yi = [...u]
              , Rt = po ? "#FFFFFFF2" : "#C0C0C0"
              , Ht = document.createElement("div");
            Object.assign(Ht, {
                className: `tpo_dropdown-search-wrapper ${t.is_search_dropdown ? "" : "hidden"}`,
                innerHTML: `
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <path style="fill: ${Rt} !important;" fill-rule="evenodd" d="M1.042 9.583a8.542 8.542 0 1 1 15.007 5.582l2.726 2.726a.625.625 0 0 1-.884.884l-2.726-2.726A8.542 8.542 0 0 1 1.042 9.583Zm8.541-7.291a7.292 7.292 0 1 0 0 14.583 7.292 7.292 0 0 0 0-14.583Z" clip-rule="evenodd"/>
                        </svg>
                    `
            });
            const Ci = V.inputText_enteredValue ?? pt.fontColor ?? (po ? "#FFFFFFF2" : "#000000");
            Ht.style.setProperty("--color-input-text", Ci);
            let ki = document.createElement("input");
            Object.assign(ki, {
                className: "tpo_dropdown-search-input",
                placeholder: Re["Type to search options"]?.[xt] || "Type to search options",
                oninput: D => {
                    const G = D.target.value.trim();
                    if (Ht && (G ? Ht.classList.add("active") : Ht.classList.remove("active")),
                    !G)
                        yi = [...u];
                    else {
                        const be = G.toLowerCase();
                        yi = [...u].filter(he => {
                            const Ee = he.label.toLowerCase();
                            let Pe = 0;
                            for (let Je = 0; Je < Ee.length; Je++)
                                if (Ee[Je] === be[Pe] && Pe++,
                                Pe === be.length)
                                    return !0;
                            return !1
                        }
                        )
                    }
                    const re = new CustomEvent("searchInputDropdown",{
                        detail: {
                            optionTypesBySearch: yi,
                            id: `${ue}-${m}`,
                            option: t,
                            optionTypeWrapper: Y
                        }
                    });
                    window.dispatchEvent(re)
                }
            }),
            ki.addEventListener("keydown", function(D) {
                (D.key === "Enter" || D.keyCode === 13) && (D.preventDefault(),
                D.stopPropagation())
            }),
            ki.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
            ki.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
            t.is_search_dropdown && Ht.append(ki),
            Y.append(Ht),
            t.is_search_dropdown && Ht.append(ki),
            Y.append(Ht);
            let Pt = document.createElement("div");
            Object.assign(Pt, {
                className: "tpo_option-input-wrapper tpo_option-input-wrapper-dropdown"
            });
            let Ui = document.createElement("div");
            Object.assign(Ui, {
                className: "tpo_option-input-inner",
                innerHTML: `
                        <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16' id='IconChangeColor'> <path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' id='mainIconPathAttribute' stroke-width='0' stroke='#ff0000'></path></svg>
                    `,
                onclick: D => {
                    document.querySelectorAll(".tpo_option-type-dropdown-wrapper").forEach(G => {
                        G !== Y && (G.hidden = !0)
                    }
                    ),
                    document.querySelectorAll(".tpo_option-input-wrapper-dropdown").forEach(G => {
                        G !== Pt && G.classList.remove("show")
                    }
                    ),
                    jd()
                }
            }),
            Ui.style.setProperty("--active-dropdown-border", V.dropdownMenu_border || ""),
            Ui.style.setProperty("--dropdownMenu-background", V.dropdownMenu_background ?? (Bn.background || "")),
            Ui.style.setProperty("--dropdown-border-radius", `${Oi.dropdownBorderRadius}px`);
            let No = document.createElement("span");
            Object.assign(No, {
                className: "tpo_additional-price absolute active"
            }),
            Ao(J, No, u);
            let Ri = document.createElement("div");
            if (Object.assign(Ri, {
                className: "tpo_option-type-selection tpo_option-type-selection--empty hidden",
                innerHTML: Re["No results found"] && Re["No results found"][xt] || "No results found"
            }),
            le.append(at),
            Ui.append(lt),
            Pt.append(Ui),
            Z.enable && (Z.configs.showTotalSelected ? pe = "exact_count" : Z.configs.isShowNewTotalSelected ? Z.configs.isUseMinMaxSelected ? pe = "min_max_count" : pe = "only_total" : Z.configs.isUseMinMaxSelected && (pe = "min_max_not_count")),
            Z.enable && pe) {
                let {totalQuantitySelectorElementWrapperRender: D, errorTotalElementRender: G} = vr(Z, sr, pe);
                Ve = D,
                Ne = G
            }
            if (Z.enable) {
                const D = Z.configs
                  , G = Z.enable
                  , {quantitySelectorContainer: re} = G ? u_(D, L, ro, A, pr) : {
                    quantitySelectorContainer: null
                };
                fe = re
            }
            document.addEventListener("click", function(D) {
                const G = !D.target.closest(".tpo_dropdown_image_input_wrapper ") && !D.target.classList.contains("tpo_option_type_tooltip_wrapper")
                  , re = Pt.classList.contains("show");
                G && re && Kl()
            });
            let $r = document.createElement("div");
            if (Object.assign($r, {
                className: `tpo_dropdown_image_input_wrapper ${Z.enable ? "dropdown_qty_selector" : ""}`
            }),
            Me) {
                const {dimensionId: D, formula: G, tablePricing: re} = Ed(t, f);
                D && (t.dimensionId = D),
                G && (t.dimensionFormula = G),
                re && (t.tablePricing = re)
            }
            at.append($r),
            fe && $r.append(fe);
            let G_ = u.map( (D, G) => Am(i, r, D, Gl, Kl, P, Dd, T, n, ri, t, ni, Me, lt, G, H));
            Y.append(...G_),
            Y.append(Ri),
            Pt.append(Ui, Y, No),
            Ve && at.append(Ve),
            Ne && Ve && at.append(Ne),
            fe ? $r.insertBefore(Pt, fe) : $r.append(Pt),
            U && j !== 2 && $r.prepend(vt),
            O && Ui.prepend(Tt),
            at.append(Se),
            le.contains(ie) || at.append(ie);
            break;
        case "radio-buttons":
            let Xl = function() {
                if (le.contains(ie) || oe.append(Se, ie),
                !h)
                    return !0;
                let D = !!la.value
                  , G = Array.from(document.querySelectorAll(`input[name='properties[${y}]']`));
                for (const re of G)
                    if (re.checked) {
                        D = !0;
                        break
                    }
                return D ? (ie.innerHTML = "",
                !0) : (ie.innerHTML = ei ? ze(ei, "") : "This is a required option",
                !1)
            }
              , Hd = function(D) {
                Ct(s, `${A},${m}`, m, D)
            };
            var Ye = Xl
              , Ze = Hd;
            Object.assign(Y, {
                className: `tpo_radio-buttons-wrapper ${N && N !== 1 ? `tpo-grid-${N}` : ""}`
            }),
            a.type = "button",
            a.addEventListener("click", function() {
                Xl()
            });
            let la = document.createElement("input");
            Object.assign(la, {
                className: "tpo_hidden-checkbox",
                value: "",
                name: `properties[${it ? "_" : ""}${y}]`,
                ariaLabel: y
            }),
            le.append(oe),
            la.dataset.required = h,
            l && la.setAttribute("form", l);
            let ds = document.createElement("span");
            if (Object.assign(ds, {
                className: "tpo_additional-price absolute active"
            }),
            Ao(J, ds, u),
            Me) {
                const {dimensionId: D, formula: G, tablePricing: re} = Ed(t, f);
                D && (t.dimensionId = D),
                G && (t.dimensionFormula = G),
                re && (t.tablePricing = re)
            }
            let Bd = u.map( (D, G) => qm(i, r, D, y, h, G, Xl, la, ds, We, P, Hd, T, p, n, q, ee, t, H, Y, Z, oa, le, ie, Me, Ae));
            Y.append(...Bd, la, ds),
            oe.append(Y, Se),
            le.contains(ie) || oe.append(ie),
            le.append(oe);
            const K_ = Bd.map(D => typeof D != "string" ? D.querySelector(".tpo_radio-button") : null);
            la.addEventListener("change", function() {
                Sr(la, K_)
            });
            break;
        case "switch":
            let Rd = function(D) {
                Ct(s, `${A},${m}`, m, D)
            };
            var Ut = Rd;
            const Yl = JSON.parse(k || "{}");
            Object.assign(Y, {
                className: "tpo_option-input-wrapper switch"
            });
            let us = document.createElement("span");
            Object.assign(us, {
                className: "tpo_additional-price absolute"
            });
            let fs = document.createElement("input");
            Object.assign(fs, {
                className: "tpo_hidden-checkbox",
                name: `properties[${y}]`,
                value: "",
                ariaLabel: y
            }),
            l && fs.setAttribute("form", l);
            let on;
            Yl && Yl?.switchImageUrl && (le.classList.add("tpo_switch-image"),
            b && le.classList.add("tpo_switch-label_hidden-with_image"),
            on = document.createElement("img"),
            Object.assign(on, {
                className: `tpo_switch-image_image-content ${`tpo_shape_${H || "radius"}`}`,
                src: `${Yl?.switchImageUrl}"`
            }));
            let Wd = t?.option_types[0]?.additional_price
              , Ud = L;
            Wd && (Ud = Wd),
            yt(st, us, Ud);
            let X_ = Nm({
                formElement: i,
                quantityInput: r,
                option: t,
                isRequired: h,
                additionalPriceSwitch: us,
                addToCartElement: a,
                handleAddPriceToProperties: We,
                handleChangeValuesSwitch: Rd,
                inputForSwitchValues: fs,
                renderForProductPage: n,
                switchImageElement: on
            });
            Y.append(fs, X_, us),
            oe.append(Y, Se, ie),
            on && !b ? le.append(on, oe) : le.append(oe);
            break;
        case "range":
            let Zl = function(D, G=!1) {
                return le.contains(ie) || oe.append(Se, ie),
                h && (D === "" || parseFloat(D) === 0) ? (G || (ie.innerHTML = ei ? ze(ei, "") : "This is a required option"),
                !1) : (G || (ie.innerHTML = ""),
                !0)
            }
              , Vd = function(D) {
                Ct(s, `${A},${m}`, m, D)
            };
            var Di = Zl
              , qo = Vd;
            Object.assign(Y, {
                className: "tpo_option-range-wrapper"
            });
            let Tr = document.createElement("span");
            Object.assign(Tr, {
                className: "tpo_additional-price tpo_range-additional-price"
            }),
            F === "one" && yt(st, Tr, L);
            let zd = Dm(t, i, l, r, Zl, Tr, We, L, a, Vd);
            const Ro = oe.querySelector(".tpo_option-label-container")
              , Jd = Ro?.querySelector(".form__label")
              , Qd = Ro?.querySelector(".tpo_option-tooltip")
              , Gd = Ro?.querySelector(".tpo_option-required-indicator");
            Y.append(zd),
            Ro ? (Jd && Ro.append(Jd),
            Gd && Ro.append(Gd),
            Be && (Be.style.marginBottom = "6px",
            Ro.append(Be)),
            Tr && Ro.append(Tr),
            Qd && Ro.append(Qd)) : Y.append(Tr),
            oe.append(Y, Se),
            a.addEventListener("click", function() {
                const D = zd.querySelector(".tpo_range-input-hidden");
                D && Zl(D.value)
            }),
            le.contains(ie) || oe.append(ie),
            le.append(oe);
            break;
        case "text-box":
            const Y_ = t?.default_value || "";
            Object.assign(Y, {
                className: "tpo_option-input-wrapper"
            });
            let an = document.createElement("span");
            Object.assign(an, {
                className: "tpo_additional-price absolute"
            });
            let ec = document.createElement("span");
            Object.assign(ec, {
                className: "tpo_character-count absolute"
            }),
            F === "one" && yt(st, an, L);
            let rn = Mm(t, i, l, r, Oe, an, We, L, a, Jt, n, k, de, qe, u[0], ec, Mt);
            if (ft(rn, "text-box", t, Y_, Mt),
            t?.default_value) {
                const D = rn.value;
                Jt(D);
                const G = Oe(D);
                G !== !1 && G !== "" && (We(rn, D, L),
                an.classList.add("active"))
            }
            Y.append(rn, an),
            Y.prepend(rn, ec),
            oe.append(Y, Se),
            le.contains(ie) || oe.append(ie),
            le.append(oe);
            break;
        case "text-area":
            const Z_ = t?.default_value || "";
            Object.assign(Y, {
                className: "tpo_option-input-wrapper tpo_text-area"
            });
            let nn = document.createElement("span");
            Object.assign(nn, {
                className: "tpo_additional-price absolute"
            });
            let tc = document.createElement("span");
            Object.assign(tc, {
                className: "tpo_text-area-character-count absolute"
            }),
            yt(st, nn, L);
            let ms = Im(t, i, l, r, Oe, nn, We, L, a, Bt, n, tc);
            if (ft(ms, "text-area", t, Z_),
            t?.default_value) {
                const D = t.default_value;
                Bt(D);
                const G = Oe(D);
                G !== !1 && G !== "" && (We(ms, D, L),
                nn.classList.add("active"))
            }
            Y.append(ms, nn),
            Y.prepend(ms, tc),
            oe.append(Y, Se),
            le.contains(ie) || oe.append(ie),
            le.append(oe);
            break;
        case "text-number":
            let oc = function(D) {
                Ct(s, `${A},${m}`, m, D)
            };
            var ss = oc;
            const eh = t?.default_value || "";
            Object.assign(Y, {
                className: "tpo_option-input-wrapper"
            });
            let sn = document.createElement("span");
            Object.assign(sn, {
                className: "tpo_additional-price absolute"
            }),
            yt(st, sn, L);
            let ic = Fm(t, i, l, r, He, sn, We, L, a, oc, n);
            if (ft(ic, "text-number", t, eh),
            t?.default_value) {
                const D = t.default_value;
                oc(D);
                const G = Oe(D);
                G !== !1 && G !== "" && (We(ic, D, L),
                sn.classList.add("active"))
            }
            Y.append(ic, sn),
            oe.append(Y, Se),
            le.contains(ie) || oe.append(ie),
            le.append(oe);
            break;
        case "checkbox":
            let ac = function() {
                if (!h && !g && !C)
                    return !0;
                const D = Kd.length;
                return w && g && D < g ? (ie.innerHTML = lo ? ze(lo, g) : `Please select at least ${g} options`,
                !1) : w && C && D > C ? (ie.innerHTML = co ? ze(co, C) : `Please select at maximum ${C} options`,
                !1) : h && D < 1 ? (ie.innerHTML = ei ? ze(ei, "") : "This is a required option",
                !1) : (ie.innerHTML = "",
                !0)
            }
              , Yd = function(D) {
                Ct(s, `${A},${m}`, m, Xd)
            };
            var Co = ac
              , tn = Yd;
            Object.assign(Y, {
                className: `tpo_radio-buttons-wrapper ${N && N !== 1 ? `tpo-grid-${N}` : ""}`
            }),
            oe.querySelector(".tpo_option-required-indicator").innerHTML = `
                    ${!h && !(g && w) ? "" : "*"}
                `;
            let Kd = []
              , Xd = []
              , th = {
                price: 0
            }
              , _s = document.createElement("span");
            Object.assign(_s, {
                className: "tpo_additional-price absolute active"
            }),
            Ao(J, _s, u);
            let ca = document.createElement("input");
            if (Object.assign(ca, {
                className: "tpo_hidden-checkbox",
                name: `properties[${it ? "_" : ""}${y}]`,
                value: "",
                ariaLabel: y
            }),
            Z.enable && (Z.configs.showTotalSelected ? pe = "exact_count" : Z.configs.isShowNewTotalSelected ? Z.configs.isUseMinMaxSelected ? pe = "min_max_count" : pe = "only_total" : Z.configs.isUseMinMaxSelected && (pe = "min_max_not_count")),
            Z.enable && pe) {
                let {totalQuantitySelectorElementWrapperRender: D, errorTotalElementRender: G} = vr(Z, sr, pe);
                Ve = D,
                Ne = G
            }
            Ve && oe.append(Ve),
            Ne && Ve && oe.append(Ne),
            le.append(oe),
            ca.dataset.required = h || w && g,
            l && ca.setAttribute("form", l),
            ca.dataset.required = h || g && w;
            let Zd = u.map( (D, G) => {
                let re = D.label;
                const be = D.additional_price || null;
                if (be) {
                    let he = PriceFormatter.formatMoney(parseFloat(be * 100), !0);
                    re = `${D.label} [ +${he} ]`
                }
                return jm(i, r, D, y, G, Kd, ca, ac, th, _s, We, P, re, Yd, Xd, T, n, q, ee, t, H, Y, Z, oa, le, ie, p, pe, Ne)
            }
            );
            Y.append(...Zd, ca, _s),
            Ve ? (oe.insertBefore(Y, Ve),
            le.contains(ie) || oe.insertBefore(ie, Ve)) : (oe.append(Y),
            Ne ? oe.append(Ne, ie) : oe.append(ie)),
            oe.append(Se),
            a.type = "button",
            a.addEventListener("click", function() {
                ac()
            }),
            Z.enable && u.some(G => G.is_default) && Si(le, 0, Z.configs, Ne);
            const ih = Zd.map(D => typeof D != "string" ? D.querySelector(".tpo_radio-button") : null);
            ca.addEventListener("change", function() {
                Sr(ca, ih)
            });
            break;
        case "color-swatches":
            let rc = function() {
                if (le.contains(ie) || oe.append(Se, ie),
                !h && !g && !C)
                    return !0;
                const D = eu.length;
                return w && g && D < g ? (ie.innerHTML = lo ? ze(lo, g) : `Please select at least ${g} options`,
                !1) : w && C && D > C ? (ie.innerHTML = co ? ze(co, C) : `Please select at maximum ${C} options`,
                !1) : h && D < 1 ? (ie.innerHTML = ei ? ze(ei, "") : "This is a required option",
                !1) : (ie.innerHTML = "",
                !0)
            }
              , ou = function(D) {
                E && Fl(Be, tu),
                w ? Ct(s, `${A},${m}`, m, iu) : Ct(s, `${A},${m}`, m, D)
            };
            var Ql = rc
              , Qy = ou;
            to("link", "stylesheet", ef),
            Object.assign(Y, {
                className: `tpo_option-type-color-swatches-wrapper ${N && N !== 1 && ee === "always" ? `tpo-grid-${N}` : ""}`
            }),
            oe.querySelector(".tpo_option-required-indicator").innerHTML = `
                    ${!h && !(g && w) ? "" : "*"}
                `;
            let eu = []
              , tu = []
              , iu = []
              , oh = {
                price: 0
            }
              , ln = document.createElement("span");
            Object.assign(ln, {
                className: "tpo_additional-price absolute active"
            }),
            Ao(J, ln, u);
            let pa = document.createElement("input");
            if (Object.assign(pa, {
                className: "tpo_hidden-checkbox",
                name: _t ? "" : `properties[${it ? "_" : ""}${y}]`,
                value: "",
                ariaLabel: y
            }),
            Z.enable && (Z.configs.showTotalSelected ? pe = "exact_count" : Z.configs.isShowNewTotalSelected ? Z.configs.isUseMinMaxSelected ? pe = "min_max_count" : pe = "only_total" : Z.configs.isUseMinMaxSelected && (pe = "min_max_not_count")),
            Z.enable && pe) {
                let {totalQuantitySelectorElementWrapperRender: D, errorTotalElementRender: G} = vr(Z, sr, pe);
                Ve = D,
                Ne = G
            }
            Ve && oe.append(Ve),
            Ne && Ve && oe.append(Ne),
            le.append(oe),
            pa.dataset.required = h || w && g,
            l && pa.setAttribute("form", l),
            a.type = "button",
            a.addEventListener("click", function() {
                rc()
            });
            let nc = u.map( (D, G) => xl(i, r, D, y, w, H, Le, G, eu, pa, rc, oh, ln, We, P, iu, ou, ee, K, T, p, n, tu, Y, Z, oa, t, le, ie, pe, Ne, Ae));
            if (Le && Ce?.configs && window.TPO_Swiper) {
                const {sliderStyle: D, navigationPosition: G, navigationPositionAlign: re, showIndicators: be} = Ce?.configs || {};
                D === 3 && Y.classList.add("using_swatches_slider_type_3"),
                G === "above" && Y.classList.add("using_above_navigation"),
                Y.classList.add("using_swatches_slider");
                let he = document.createElement("div");
                he.setAttribute("data-swiperId", t.option_id);
                for (const [nt,Qt] of Object.entries(Ce?.configs))
                    he.setAttribute(`data-${nt}`, Qt);
                Object.assign(he, {
                    className: `swiper tpo-swiper swiper-${t.option_id} ${D !== 3 && G}-swatches swiper-style-${D}`
                });
                let Ee = document.createElement("div");
                Object.assign(Ee, {
                    className: "swiper-wrapper"
                }),
                Ee.append(...nc),
                he.append(Ee);
                let Pe = document.createElement("div");
                Object.assign(Pe, {
                    className: `tpo-swiper-navigation swiper-navigation swiper-navigation-${re}`
                });
                let Je = document.createElement("div");
                Object.assign(Je, {
                    className: "tpo-swiper-button-prev swiper-button-prev",
                    innerHTML: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87993 0.483276C7.25729 0.785159 7.31847 1.33579 7.01658 1.71314L2.7872 6.99987L7.01658 12.2866C7.31847 12.664 7.25729 13.2146 6.87993 13.5165C6.50258 13.8183 5.95195 13.7572 5.65006 13.3798L0.983396 7.54648C0.727743 7.22691 0.727743 6.77283 0.983396 6.45326L5.65006 0.619928C5.95195 0.242574 6.50258 0.181393 6.87993 0.483276Z" fill="#1E1E1E"/>
                            </svg>`
                });
                let ot = document.createElement("div");
                if (Object.assign(ot, {
                    className: "tpo-swiper-button-next swiper-button-next",
                    innerHTML: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.12005 0.483276C1.4974 0.181393 2.04804 0.242574 2.34992 0.619928L7.01659 6.45326C7.27224 6.77283 7.27224 7.22691 7.01659 7.54648L2.34992 13.3798C2.04804 13.7572 1.4974 13.8183 1.12005 13.5165C0.742696 13.2146 0.681515 12.664 0.983398 12.2866L5.21278 6.99987L0.983398 1.71314C0.681515 1.33579 0.742696 0.785159 1.12005 0.483276Z" fill="#1E1E1E"/>
                            </svg>`
                }),
                Pe.append(Je, ot),
                he.append(Pe),
                be) {
                    let nt = document.createElement("div");
                    Object.assign(nt, {
                        className: "tpo-swiper-pagination swiper-pagination tpo-swiper-pagination--color-swatches"
                    }),
                    he.append(nt)
                }
                Y.append(he, pa, ln)
            } else
                Y.append(...nc, pa, ln);
            Ve ? (oe.insertBefore(Y, Ve),
            le.contains(ie) || oe.insertBefore(ie, Ve)) : (oe.append(Y),
            Ne ? oe.append(Ne, ie) : oe.append(ie)),
            oe.append(Se);
            const ah = nc.map(D => typeof D != "string" ? D.querySelector(".tpo_color-swatches-input") : null);
            pa.addEventListener("change", function() {
                Sr(pa, ah)
            }),
            t.option_types.some(D => D.is_default) && pe && Si(le, 0, Z.configs, Ne);
            break;
        case "image-swatches":
            let sc = function() {
                if (le.contains(ie) || oe.append(Se, ie),
                !h && !g && !C)
                    return !0;
                const D = au.length;
                return w && g && D < g ? (ie.innerHTML = lo ? ze(lo, g) : `Please select at least ${g} options`,
                !1) : w && C && D > C ? (ie.innerHTML = co ? ze(co, C) : `Please select at maximum ${C} options`,
                !1) : h && D < 1 ? (ie.innerHTML = ei ? ze(ei, "") : "This is a required option",
                !1) : (ie.innerHTML = "",
                !0)
            }
              , su = function(D) {
                E && Fl(Be, ru),
                w ? Ct(s, `${A},${m}`, m, nu) : Ct(s, `${A},${m}`, m, D)
            };
            var Gy = sc
              , Ky = su;
            to("link", "stylesheet", ef),
            Object.assign(Y, {
                className: `tpo_option-type-image-swatches-wrapper ${N && N !== 1 && ee === "always" ? `tpo-grid-${N}` : ""}`
            }),
            oe.querySelector(".tpo_option-required-indicator").innerHTML = `
                    ${!h && !(g && w) ? "" : "*"}
                `;
            let au = []
              , ru = []
              , nu = []
              , rh = {
                price: 0
            }
              , cn = document.createElement("span");
            Object.assign(cn, {
                className: "tpo_additional-price absolute active"
            }),
            Ao(J, cn, u);
            let da = document.createElement("input");
            if (Object.assign(da, {
                className: "tpo_hidden-checkbox",
                name: _t ? "" : `properties[${it ? "_" : ""}${y}]`,
                value: "",
                ariaLabel: y
            }),
            Z.enable && (Z.configs.showTotalSelected ? pe = "exact_count" : Z.configs.isShowNewTotalSelected ? Z.configs.isUseMinMaxSelected ? pe = "min_max_count" : pe = "only_total" : Z.configs.isUseMinMaxSelected && (pe = "min_max_not_count")),
            Z.enable && pe) {
                let {totalQuantitySelectorElementWrapperRender: D, errorTotalElementRender: G} = vr(Z, sr, pe);
                Ve = D,
                Ne = G
            }
            Ve && oe.append(Ve),
            Ne && Ve && oe.append(Ne),
            le.append(oe),
            da.dataset.required = h || w && g,
            l && da.setAttribute("form", l),
            a.type = "button",
            a.addEventListener("click", function() {
                sc()
            });
            let lc = u.map( (D, G) => xl(i, r, D, y, w, H, Le, G, au, da, sc, rh, cn, We, P, nu, su, ee, K, T, p, n, ru, Y, Z, oa, t, le, ie, pe, Ne, Ae));
            if (Le && Ce?.configs && window.TPO_Swiper) {
                const {sliderStyle: D, navigationPosition: G, navigationPositionAlign: re, showIndicators: be} = Ce?.configs || {};
                D === 3 && Y.classList.add("using_swatches_slider_type_3"),
                G === "above" && Y.classList.add("using_above_navigation"),
                Y.classList.add("using_swatches_slider");
                let he = document.createElement("div");
                he.setAttribute("data-swiperId", t.option_id);
                for (const [nt,Qt] of Object.entries(Ce?.configs))
                    he.setAttribute(`data-${nt}`, Qt);
                Object.assign(he, {
                    className: `swiper tpo-swiper swiper-${t.option_id} ${D !== 3 && G}-swatches swiper-style-${D}`
                });
                let Ee = document.createElement("div");
                Object.assign(Ee, {
                    className: "swiper-wrapper"
                }),
                Ee.append(...lc),
                he.append(Ee);
                let Pe = document.createElement("div");
                Object.assign(Pe, {
                    className: `tpo-swiper-navigation swiper-navigation swiper-navigation-${re}`
                });
                let Je = document.createElement("div");
                Object.assign(Je, {
                    className: "tpo-swiper-button-prev swiper-button-prev",
                    innerHTML: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87993 0.483276C7.25729 0.785159 7.31847 1.33579 7.01658 1.71314L2.7872 6.99987L7.01658 12.2866C7.31847 12.664 7.25729 13.2146 6.87993 13.5165C6.50258 13.8183 5.95195 13.7572 5.65006 13.3798L0.983396 7.54648C0.727743 7.22691 0.727743 6.77283 0.983396 6.45326L5.65006 0.619928C5.95195 0.242574 6.50258 0.181393 6.87993 0.483276Z" fill="#1E1E1E"/>
                            </svg>`
                });
                let ot = document.createElement("div");
                if (Object.assign(ot, {
                    className: "tpo-swiper-button-next swiper-button-next",
                    innerHTML: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.12005 0.483276C1.4974 0.181393 2.04804 0.242574 2.34992 0.619928L7.01659 6.45326C7.27224 6.77283 7.27224 7.22691 7.01659 7.54648L2.34992 13.3798C2.04804 13.7572 1.4974 13.8183 1.12005 13.5165C0.742696 13.2146 0.681515 12.664 0.983398 12.2866L5.21278 6.99987L0.983398 1.71314C0.681515 1.33579 0.742696 0.785159 1.12005 0.483276Z" fill="#1E1E1E"/>
                            </svg>`
                }),
                Pe.append(Je, ot),
                he.append(Pe),
                be) {
                    let nt = document.createElement("div");
                    Object.assign(nt, {
                        className: "tpo-swiper-pagination swiper-pagination tpo-swiper-pagination--image-swatches"
                    }),
                    he.append(nt)
                }
                Y.append(he, da, cn)
            } else
                Y.append(...lc, da, cn);
            Ve ? (oe.insertBefore(Y, Ve),
            le.contains(ie) || oe.insertBefore(ie, Ve)) : (oe.append(Y),
            Ne ? oe.append(Ne, ie) : oe.append(ie)),
            oe.append(Se);
            const nh = lc.map(D => typeof D != "string" ? D.querySelector(".tpo_color-swatches-input") : null);
            da.addEventListener("change", function() {
                Sr(da, nh)
            }),
            t.option_types.some(D => D.is_default) && pe && Si(le, 0, Z.configs, Ne);
            break;
        case "buttons":
            let pu = function(D) {
                w ? Ct(s, `${A},${m}`, m, cu) : Ct(s, `${A},${m}`, m, D)
            }
              , cc = function() {
                if (!h && !g && !C)
                    return !0;
                const D = lu.length;
                return w && g && D < g ? (ie.innerHTML = lo ? ze(lo, g) : `Please select at least ${g} options`,
                !1) : w && C && D > C ? (ie.innerHTML = co ? ze(co, C) : `Please select at maximum ${C} options`,
                !1) : h && D < 1 ? (ie.innerHTML = ei ? ze(ei, "") : "This is a required option",
                !1) : (ie.innerHTML = "",
                !0)
            };
            var Xy = pu
              , Yy = cc;
            Object.assign(Y, {
                className: "tpo_option-type-buttons-wrapper tpo_option-type-color-swatches-wrapper"
            }),
            oe.querySelector(".tpo_option-required-indicator").innerHTML = `
                    ${!h && !(g && w) ? "" : "*"}
                `;
            let lu = []
              , cu = []
              , sh = {
                price: 0
            }
              , hs = document.createElement("span");
            Object.assign(hs, {
                className: "tpo_additional-price absolute active"
            }),
            Ao(J, hs, u);
            let Da = document.createElement("input");
            if (Object.assign(Da, {
                className: "tpo_hidden-checkbox",
                name: _t ? "" : `properties[${it ? "_" : ""}${y}]`,
                value: "",
                ariaLabel: y
            }),
            Z.enable && (Z.configs.showTotalSelected ? pe = "exact_count" : Z.configs.isShowNewTotalSelected ? Z.configs.isUseMinMaxSelected ? pe = "min_max_count" : pe = "only_total" : Z.configs.isUseMinMaxSelected && (pe = "min_max_not_count")),
            Z.enable && pe) {
                let {totalQuantitySelectorElementWrapperRender: D, errorTotalElementRender: G} = vr(Z, sr, pe);
                Ve = D,
                Ne = G
            }
            Ve && oe.append(Ve),
            Ne && Ve && oe.append(Ne),
            le.append(oe),
            Da.dataset.required = h || w && g,
            l && Da.setAttribute("form", l),
            a.type = "button",
            a.addEventListener("click", function() {
                cc()
            });
            let du = u.map( (D, G) => xl(i, r, D, y, w, H, Le, G, lu, Da, cc, sh, hs, We, P, cu, pu, ee, K, T, p, n, null, Y, Z, oa, t, le, ie, pe, Ne, Ae));
            Y.append(...du, Da, hs),
            Ve ? (oe.insertBefore(Y, Ve),
            le.contains(ie) || oe.insertBefore(ie, Ve)) : (oe.append(Y),
            Ne ? oe.append(Ne, ie) : oe.append(ie)),
            oe.append(Se);
            const lh = du.map(D => typeof D != "string" ? D.querySelector(".tpo_buttons-input") : null);
            Da.addEventListener("change", function() {
                Sr(Da, lh)
            }),
            t.option_types.some(D => D.is_default) && pe && Si(le, 0, Z.configs, Ne);
            break;
        case "heading":
            const ys = JSON.parse(k || "{}");
            if (!ys.content)
                break;
            const ch = ys.headingType || "h1"
              , ph = ys.content
              , dh = ys.color || "";
            let pc = document.createElement(ch);
            Object.assign(pc, {
                className: "tpo_option-heading",
                textContent: ph
            }),
            pc.style.setProperty("--active-heading-color", dh),
            le.append(pc);
            break;
        case "divider":
            const uu = JSON.parse(k || "{}")
              , fu = uu.dividerType || "solid"
              , uh = uu.color || "#000000";
            let gs = document.createElement("hr");
            Object.assign(gs, {
                className: "tpo_option-divider"
            }),
            gs.style.borderTop = `1px ${fu} ${uh}`,
            fu === "double" && (gs.style.borderWidth = "3px"),
            le.append(gs);
            break;
        case "paragraph":
            to("link", "stylesheet", Zu);
            const fh = JSON.parse(k || "{}").content || "";
            let mu = document.createElement("div");
            Object.assign(mu, {
                className: "tpo_option-paragraph ql-editor",
                innerHTML: fh
            }),
            le.append(mu);
            break;
        case "html":
            const mh = JSON.parse(k || "{}").content || "";
            let _u = document.createElement("div");
            Object.assign(_u, {
                className: "tpo_option-html",
                innerHTML: mh
            }),
            le.append(_u);
            break;
        case "file-upload":
            let yu = function(D, G=[]) {
                const re = he => {
                    ie.innerHTML = he
                }
                ;
                let be = me.maxFileQty > 10 ? Qo ? me.maxFileQty : 10 : me.maxFileQty || 1;
                if (re(""),
                G?.length > 0)
                    return re(G.join("")),
                    D ? D >= Te ? !0 : (dt(!1, i),
                    !1) : h ? (dt(!1, i),
                    !1) : !0;
                if (h && !D)
                    return dt(!1, i),
                    re(ei ? ze(ei, "") : "This is a required option"),
                    !1;
                if (i.dispatchEvent(new Event("change")),
                D)
                    return D < Te ? (dt(!1, i),
                    Te < be ? re(Ap ? ze(Ap, Te) : `You must upload at least ${Te} file(s)`) : re(Pp ? ze(Pp, Te) : `You must upload ${Te} file(s)`),
                    !1) : (re(""),
                    !0);
                {
                    const he = i.querySelectorAll(".tpo_error-message") || [];
                    return Array.from(he).every(Pe => Pe.innerHTML === "") ? !0 : (dt(!1, i),
                    !1)
                }
            };
            var Zy = yu;
            Object.assign(Y, {
                className: "tpo_file-upload"
            }),
            Y.style.height = `${Kt.fileUploadHeight}px`;
            let bs = document.createElement("span");
            Object.assign(bs, {
                className: "tpo_additional-price absolute"
            });
            let ws = document.createElement("div");
            ws.style.backgroundColor = V?.fileUploadButton_background ?? "",
            Object.assign(ws, {
                className: "tpo-file-placeholder",
                innerHTML: `<div class="tpo-stack tpo-stack--vertical">
                            <div class="tpo-stack__item">
                              <div style="color: ${V.fileUploadButton_text}; font-size: ${Dn.fontSize}px; ${Dn?.fontFamily ? `font-family: ${Dn.fontFamily};` : ""}" class="tpo-dropzone__action tpo_ ${Dn.fontStyle}">${t?.placeholder || Re["Add files"] && Re["Add files"][xt] || "Add files"}</div>
                            </div>
                        </div>`
            }),
            yt(st, bs, L);
            let {fileUploadElement: _h, fileListElement: hu} = Hm(t, i, r, yu, bs, We, L, a, Bt, n, Y, ws);
            Y.append(_h, ws, bs),
            oe.append(Y, Se),
            le.contains(ie) || oe.append(ie);
            let gu = me.defaultValueUploaded || {};
            hu && Object.keys(gu).some(D => gu[D]) && oe.append(hu),
            le.append(oe);
            break;
        case "modal":
            to("link", "stylesheet", Zu);
            const Yi = JSON.parse(k || "{}")
              , hh = Yi.content || ""
              , yh = Yi.contentHTML || ""
              , gh = Yi.modalWidth || 300
              , bu = Yi.modalTitle || ""
              , bh = parseInt(Yi.modalType) || 0
              , wu = Yi.imageUrl
              , vu = Yi.fontSize
              , Su = Yi.fontColor;
            Yi.fontWeight;
            const wh = Yi.fontBold
              , vh = Yi.fontItalic
              , Sh = Yi.fontUnderline
              , xh = Yi.imageSize;
            Yi.fontStyle;
            const vs = zi.includes(gt);
            let gi;
            vs ? gi = document.createElement("dialog") : gi = document.createElement("div"),
            Object.assign(gi, {
                className: `${po ? "in-dark-mode" : ""} tpo_modal-background`
            });
            let Ss = document.createElement("div");
            Object.assign(Ss, {
                className: "tpo_modal-container",
                innerHTML: `
                        <div class='tpo_modal-heading ${bu ? "" : "tpo_hidden"}'>
                            <h3>${bu}</h3>
                        </div>
                        <div class='tpo_modal-content ql-editor'>
                            ${bh === 1 ? yh : hh}
                        </div>
                    `
            }),
            Ss.style.width = `${gh}px`;
            let xu = document.createElement("div");
            Object.assign(xu, {
                className: "tpo_open-modal-button-wrapper",
                innerHTML: `
                            ${wu ? `<img src="${wu}" class="tpo-icon-${xh}" alt=''/>` : ""}
                            <span class="tpo_open-modal-button" 
                                style="${vu ? `font-size: ${vu}px;` : ""} ${wh ? "font-weight: 600;" : ""} ${vh ? "font-style: italic;" : ""}
                        ${Sh ? "text-decoration: underline;" : ""}${Su ? `--modal-font-color: ${Su};` : ""} ">
                                ${_ || y}
                            </span>
                        `,
                onclick: function() {
                    vs ? gi && typeof gi.showModal == "function" && (gi.showModal(),
                    gi.style.display = "block") : gi.style.display = "block"
                }
            });
            let Cu = document.createElement("span");
            Object.assign(Cu, {
                className: "tpo_close-popup-button",
                innerHTML: "&times;",
                onclick: function() {
                    vs ? gi && typeof gi.close == "function" && (gi.close(),
                    gi.style.display = "none") : gi.style.display = "none"
                }
            }),
            window.addEventListener("click", function(D) {
                D.target === gi && (vs ? gi && typeof gi.close == "function" && (gi.close(),
                gi.style.display = "none") : gi.style.display = "none")
            }),
            Ss.append(Cu),
            gi.append(Ss),
            le.append(xu),
            document.body.append(gi);
            break;
        case "product-list":
            let fc = function() {
                if (!Z.enable)
                    return !0;
                const {isUseMinMaxSelected: D=!1, minValueTotal: G=1, maxValueTotal: re=1, limitTotalSelected: be=0, showTotalSelected: he=!1, hasLimitations: Ee=!1, minValue: Pe=1, maxValue: Je=1} = Z.configs;
                if (Ee && (!Qi || !Qi.length || !Qi.every(Qt => {
                    if (!Qt || !Qt.quantity)
                        return !1;
                    const eo = Number(Qt.quantity);
                    return eo >= Pe && eo <= Je
                }
                )))
                    return !1;
                let ot = 0;
                return Qi && Qi.length && Qi.forEach(nt => {
                    nt && nt.quantity && (ot += Number(nt.quantity))
                }
                ),
                he ? ot == be : D ? ot >= G && ot <= re : !0
            }
              , un = function() {
                if (!fc()) {
                    if (fa.disabled = !0,
                    fa.classList.add("disabled"),
                    w) {
                        ie.innerHTML = "";
                        const be = pi.querySelector(".tpo_modal-footer-wrapper .tpo_modal-footer-content")?.querySelector(".tpo_error-message-modal");
                        be && (be.innerHTML = "")
                    }
                    return
                }
                const G = w ? ma() : !0;
                if (w && !G) {
                    fa.disabled = !0,
                    fa.classList.add("disabled");
                    return
                }
                fa.disabled = !1,
                fa.classList.remove("disabled")
            }
              , yc = function() {
                Es ? pi && typeof pi.showModal == "function" && (pi.showModal(),
                pi.style.display = "block") : pi.style.display = "block",
                Ts.value = "",
                Qi = [...Gi],
                Sl(i, r, u, y, w, H, Ba, Zi, ma, Vo, _o, We, P, Mo, Y, Ha, Pr, !0, Lr, d, t, n, Z, oa, le, ie, p, Qi, Vi, pe, Ne, un, Or, Ae),
                mi && (Si(Vi, 0, Z.configs, Ne, Vi),
                un())
            }
              , Ls = function(D, G, re) {
                const be = D?.includes(",") ? D.split(",")[1] : D
                  , he = window.Konva?.stages?.[0]?.findOne(`#group_qty_${be}`);
                if (G > re)
                    if (he)
                        for (let Ee = G - 1; Ee >= re; Ee--)
                            if (Ee === 0) {
                                const Pe = he.getChildren().find(Je => Je.getAttr("qtyAttr") === 1);
                                Pe && Pe.hide(),
                                he.setAttrs({
                                    currentQty: 0
                                })
                            } else {
                                const Pe = he.getChildren().find(Je => Je.getAttr("qtyAttr") === Ee + 1);
                                if (Pe)
                                    if (Pe?.attrs.baseNode)
                                        Pe.hide();
                                    else {
                                        const {xPosition: Je, yPosition: ot, xSpacing: nt, ySpacing: Qt} = he.getAttrs();
                                        he.setAttrs({
                                            currentQty: Ee,
                                            xPosition: Je - nt,
                                            yPosition: ot - Qt
                                        }),
                                        Pe.destroy()
                                    }
                            }
                    else {
                        const Ee = window.Konva?.stages?.[0]?.find(`#${D}`);
                        if (Ee && Ee.length > re)
                            for (let Pe = re; Pe < Ee.length; Pe++)
                                Pe === 0 ? Ee[0].hide() : Ee[Pe].destroy()
                    }
                else if (G < re)
                    if (he)
                        for (let Ee = G + 1; Ee <= re; Ee++)
                            if (Ee === 1) {
                                const Pe = he.getChildren().find(Je => Je.getAttr("qtyAttr") === 1);
                                Pe && Pe.show(),
                                he.setAttrs({
                                    currentQty: 1
                                })
                            } else {
                                const Pe = he.getChildren()[0];
                                if (Pe) {
                                    const {xPosition: Je, yPosition: ot, xSpacing: nt, ySpacing: Qt} = he.getAttrs()
                                      , eo = Pe.clone({
                                        qtyAttr: Ee,
                                        x: Je + nt,
                                        y: ot + Qt,
                                        baseNode: !1
                                    });
                                    he.setAttrs({
                                        currentQty: Ee,
                                        xPosition: Je + nt,
                                        yPosition: ot + Qt
                                    }),
                                    he.add(eo)
                                }
                            }
                    else {
                        const Ee = u.find(nt => nt.id === D)
                          , Pe = Ee?.image_canvas_url || Ee?.image_url
                          , Je = re - G
                          , ot = window.Konva?.stages?.[0]?.find(`#${D}`);
                        for (let nt = 0; nt < Je; nt++)
                            G + nt === 0 && ot && ot.length > 0 ? ot[0].show() : oi(D, Pe, !0)
                    }
                else
                    re === -1 && he.getChildren().filter(Pe => Pe.getAttr("qtyAttr") !== 1).forEach(Pe => {
                        if (Pe?.attrs?.baseNode)
                            Pe.hide();
                        else {
                            const {xPosition: Je, yPosition: ot, xSpacing: nt, ySpacing: Qt} = he.getAttrs();
                            he.setAttrs({
                                currentQty: 1,
                                xPosition: Je - nt,
                                yPosition: ot - Qt
                            }),
                            Pe.destroy()
                        }
                    }
                    )
            }
              , Os = function() {
                Es ? pi && typeof pi.close == "function" && (pi.close(),
                pi.style.display = "none") : pi.style.display = "none",
                Ae && (u.forEach(G => {
                    const re = G.id
                      , be = Qi.find(he => he.typeId === re);
                    if (be) {
                        const he = Number(be.quantity)
                          , Ee = Gi.find(Je => Je.typeId === re)
                          , Pe = Ee ? Number(Ee.quantity) : 0;
                        he !== Pe && Ls(re, he, Pe)
                    } else
                        Ls(re, -1, -1)
                }
                ),
                Gi.forEach(G => {
                    const re = G.typeId;
                    if (!Qi.find(Ee => Ee.typeId === re)) {
                        const Ee = Number(G.quantity);
                        Ls(re, 0, Ee)
                    }
                    const be = re?.includes(",") ? re.split(",")[1] : re;
                    (window.Konva.stages[0]?.find(`#${be}`)).forEach(Ee => {
                        const Pe = new Image;
                        Pe.src = Ee?.attrs?._tpo_image_url || Dt,
                        Pe.crossOrigin = "Anonymous",
                        Ee?.show(),
                        Ee?.opacity(1),
                        Ee?.image(Pe)
                    }
                    )
                }
                )),
                Mo = [...ua],
                Lr = [...Ba],
                Zi.value = Ba.join(", "),
                Vo = [...ks],
                Qi = [...Gi],
                ks.length ? (fo.price = ks.reduce(function(G, re) {
                    return G + re.price
                }, 0),
                yt(st, _o, xo(fo.price) ? fo.price.toFixed(2) : fo.price)) : yt(st, _o, 0),
                n ? dt(ke(i, r), i) : ke(i, r);
                const D = window.Konva?.stages[0]?.find(`.product-list-${A.split(",")[1]}`);
                if (w === 0)
                    if (Mo && Ba.length > 0) {
                        const G = u.find(he => he.id === Mo[0])
                          , {image_canvas_url: re, image_url: be} = G || {};
                        oi(A, re || be, !0)
                    } else
                        D?.[0]?.hide();
                else
                    mi && ma(),
                    Ae || D?.forEach(G => {
                        const re = G.id();
                        Mo.includes(re) ? G.show() : G.hide()
                    }
                    );
                setTimeout( () => {
                    Zi.dispatchEvent(new Event("change"))
                }
                , 0)
            }
              , Or = function() {
                if (Vi && Z.enable && Z.configs.hasLimitations && Array.from(Vi.querySelectorAll(".tpo_quantity-selector_wrapper")).some(he => he.classList.contains("tpo-error_validate")))
                    return;
                if (Es ? pi && typeof pi.close == "function" && (pi.close(),
                pi.style.display = "none") : pi.style.display = "none",
                ua = [...Mo],
                Ba = [...Lr],
                Zi.value = Lr.join(", "),
                ks = [...Vo],
                Z.enable) {
                    if (Gi = [...Qi],
                    io.length) {
                        const re = io.findIndex(be => be.idValue === A);
                        re > -1 ? io[re].value = [...Gi] : re === -1 && io.push({
                            idValue: A,
                            value: [...Gi]
                        })
                    } else
                        io.push({
                            idValue: A,
                            value: [...Gi]
                        });
                    const G = Gi.map(re => re.label);
                    Zi.value = G.join(", ")
                }
                Pr(),
                Z.enable ? Vo.length ? (fo.price = Vo.reduce(function(G, re, be) {
                    const he = Gi[be].quantity;
                    return G + re.price * Number(he)
                }, 0),
                yt(st, _o, xo(fo.price) ? fo.price.toFixed(2) : fo.price)) : yt(st, _o, 0) : Vo.length ? (fo.price = Vo.reduce(function(G, re) {
                    return G + re.price
                }, 0),
                yt(st, _o, xo(fo.price) ? fo.price.toFixed(2) : fo.price)) : yt(st, _o, 0),
                n ? dt(ke(i, r), i) : ke(i, r),
                setTimeout( () => {
                    Zi.dispatchEvent(new Event("change"))
                }
                , 0);
                const D = Mo;
                u.forEach(G => {
                    if (!D.includes(G.id)) {
                        const re = G.id?.includes(",") ? G.id.split(",")[1] : G.id
                          , be = window.Konva?.stages?.[0]?.findOne(`#group_qty_${re}`);
                        be && be.getChildren().filter(Ee => Ee.getAttr("qtyAttr") !== 1).forEach(Ee => {
                            if (Ee?.attrs.baseNode)
                                Ee.hide();
                            else {
                                const {xPosition: Pe, yPosition: Je, xSpacing: ot, ySpacing: nt} = be.getAttrs();
                                be.setAttrs({
                                    currentQty: 1,
                                    xPosition: Pe - ot,
                                    yPosition: Je - nt
                                }),
                                Ee.destroy()
                            }
                        }
                        )
                    }
                }
                )
            }
              , Pu = function(D) {
                const G = D.target.value;
                let re = u.filter(be => be?.label.toLowerCase().indexOf(G.toLowerCase()) !== -1);
                if (Qi = [...Gi],
                mi) {
                    const be = document.getElementById(`wrap-product-list-${t.id}${d !== void 0 ? `-${d}` : ""}`);
                    if (re.length === 0) {
                        be && (be.innerHTML = `<div class="tpo_no-results">${Re["No results found"]?.[xt] || "No results found"}</div>`);
                        return
                    }
                }
                Sl(i, r, re, y, w, H, Ba, Zi, ma, Vo, _o, We, P, Mo, Y, Ha, Pr, !0, Lr, d, t, n, Z, oa, le, ie, p, Qi, Vi, pe, Ne, un, Or, Ae)
            }
              , Pr = function(D) {
                if (document.getElementById(`${A},${m}`) && ma(),
                Z && Z.enable) {
                    if (mo) {
                        for (; mo.firstChild; )
                            mo.removeChild(mo.firstChild);
                        const G = Gi.map(re => {
                            if (re) {
                                let be = u.find(Pe => Pe.id === re.typeId)
                                  , he = document.createElement("span");
                                he.className = "selected_prd_list-tag selected_prd_list-tag-lg";
                                const Ee = document.createElement("span");
                                if (Ee.className = "selected_prd_list-tag-label",
                                Ee.textContent = re.label,
                                he.appendChild(Ee),
                                re.metadata) {
                                    const Pe = So(re.metadata);
                                    Pe && he.appendChild(Pe)
                                }
                                if (dn && be?.image_url) {
                                    const Pe = document.createElement("img");
                                    Pe.src = be.image_url,
                                    Pe.alt = be.label,
                                    Pe.className = "selected_prd_list-tag-image",
                                    he.prepend(Pe)
                                }
                                return he
                            }
                        }
                        );
                        mo.append(...G)
                    }
                    pe && Si(le, 0, Z.configs, Ne, Vi)
                } else if (mo) {
                    for (; mo.firstChild; )
                        mo.removeChild(mo.firstChild);
                    const G = ua.map(re => {
                        if (re) {
                            let be = u.find(Je => Je.id === re)
                              , he = document.createElement("span");
                            if (he.className = "selected_prd_list-tag selected_prd_list-tag-lg",
                            dn)
                                switch (H) {
                                case "circle":
                                    he.classList.add("swatch-circle");
                                    break;
                                case "square":
                                    he.classList.add("swatch-square");
                                    break;
                                case "radius":
                                    he.classList.add("swatch-radius");
                                    break
                                }
                            if (dn && be?.image_url) {
                                const Je = document.createElement("img");
                                Je.src = be.image_url,
                                Je.alt = be.label,
                                Je.className = "selected_prd_list-tag-image",
                                he.append(Je)
                            }
                            const Ee = document.createElement("span");
                            Ee.textContent = be.label,
                            Ee.className = "selected_prd_list-tag-label",
                            he.append(Ee);
                            const Pe = So(be?.metadata);
                            return Pe && he.appendChild(Pe),
                            he
                        }
                    }
                    );
                    mo.append(...G)
                }
                if (mi) {
                    const G = no.querySelector("#list-selected-option")
                      , re = no.querySelector(".tpo-image-select-value.style-1")
                      , be = no.querySelector(".tpo-image-select-value-wrapper")
                      , he = no.querySelector(".tpo_popup-modal-button-label")
                      , Ee = pn && xs && xs !== "default_id_image";
                    let Pe = []
                      , Je = ""
                      , ot = null;
                    if (Z && Z.enable) {
                        if (Pe = Gi.map(nt => {
                            if (!nt?.label)
                                return null;
                            const eo = nt.label.split(" [ ")[0].split(" | ")
                              , bn = eo[0]
                              , Jo = eo[1] ? parseInt(eo[1]) : nt.quantity;
                            return Jo > 1 ? `${bn} (${Jo})` : bn
                        }
                        ).filter(Boolean),
                        Gi.length > 0) {
                            const nt = Gi[0]?.typeId;
                            ot = u.find(Qt => Qt.id === nt),
                            Je = ot?.image_url || ot?.metadata?.url || ""
                        }
                    } else
                        Pe = ua.map(nt => u.find(eo => eo.id === nt)?.label).filter(Boolean),
                        ua.length > 0 && (ot = u.find(nt => nt.id === ua[0]),
                        Je = ot?.image_url || ot?.metadata?.url || "");
                    if (Pe.length === 0)
                        G.textContent = "",
                        he.textContent = Cs,
                        re && (Ee ? (re.src = pn,
                        be.style.display = "") : be.style.display = "none");
                    else if (G.textContent = Pe.join(", "),
                    he.textContent = Cs + ": ",
                    re) {
                        const nt = t?.image_color ?? 0
                          , Qt = (ot?.color_code || ",").split(",")
                          , eo = ot?.number_color ?? 1
                          , bn = nt === 1 ? Na({
                            imageOrColor: nt,
                            numberColor: eo,
                            swatchShape: "radius",
                            colorCodes: Qt,
                            imageUrl: ot?.image_url,
                            onlyReturnColor: !1
                        }) : null;
                        if (bn && dn) {
                            const Jo = document.createElement("div");
                            Jo.innerHTML = bn;
                            const ya = Jo.firstElementChild;
                            ya.className = "tpo-image-select-value style-1 tpo_color-swatches-wrapper",
                            re.replaceWith(ya),
                            be.style.display = ""
                        } else {
                            let Jo = re;
                            if (re.tagName !== "IMG") {
                                const ya = document.createElement("img");
                                ya.className = "tpo-image-select-value style-1",
                                ya.width = 80,
                                ya.height = 80,
                                re.replaceWith(ya),
                                Jo = ya
                            }
                            nt == 0 && dn && Je && Je !== Dt ? (Jo.src = Je,
                            be.style.display = "") : Ee ? (Jo.src = pn,
                            be.style.display = "") : be.style.display = "none"
                        }
                    }
                }
                Ct(s, `${A},${m}`, m, ua)
            }
              , ma = function() {
                const D = fc();
                !le.contains(ie) && !mi && oe.append(Se, ie);
                const G = pi.querySelector(".tpo_modal-footer-wrapper .tpo_modal-footer-content");
                let re;
                if (D && mi && w && (re = G?.querySelector(".tpo_error-message-modal"),
                re || (re = ie.cloneNode(!0),
                re.className = "tpo_error-message tpo_error-message-modal",
                G?.append(re))),
                !h && !g && !C)
                    return !0;
                const be = mi ? Mo.length : ua.length;
                if (w && g && be < g) {
                    const he = lo ? ze(lo, g) : `Please select at least ${g} options`;
                    return ie.innerHTML = he,
                    mi && re && (re.innerHTML = he),
                    !1
                }
                if (w && C && be > C) {
                    const he = co ? ze(co, C) : `Please select at maximum ${C} options`;
                    return ie.innerHTML = he,
                    mi && re && (re.innerHTML = he),
                    !1
                }
                return h && be < 1 ? (ie.innerHTML = ei ? ze(ei, "") : "This is a required option",
                !1) : (ie.innerHTML = "",
                mi && re && (re.innerHTML = ""),
                !0)
            };
            var eg = fc
              , tg = un
              , ig = yc
              , og = Ls
              , ag = Os
              , rg = Or
              , ng = Pu
              , sg = Pr
              , lg = ma;
            const ja = JSON.parse(k || "{}")
              , ku = me.button_style || "style-2"
              , mi = ku === "style-1"
              , pn = ja.buttonImageUrl || ""
              , xs = ja.buttonImageId || ""
              , dn = ja.show_selected_inside_on_label || !1
              , Eu = ja.modalTitle || ""
              , Cs = ja.buttonText || "Select your options"
              , Ch = ja.isHideModalFilter !== void 0 ? ja.isHideModalFilter : !1
              , $u = me.popup_mode || "popup";
            let Ba = []
              , Lr = []
              , ua = []
              , Mo = []
              , ks = []
              , Vo = []
              , fo = {
                price: 0
            }
              , Qi = []
              , Gi = []
              , Tu = 0;
            Array.isArray(u) && Array.isArray(Mi) && (Tu = u.reduce( (D, G) => {
                const {variant_id: re} = G || {};
                let be = null;
                if (re)
                    for (const Ee of Mi) {
                        if (!Array.isArray(Ee.variants))
                            continue;
                        const Pe = Ee.variants.find(Je => `${Je.id}` == `${re}`);
                        if (Pe) {
                            be = {
                                ...Ee,
                                variants: [{
                                    ...Pe
                                }]
                            };
                            break
                        }
                    }
                let he = be?.variants !== void 0 ? be.variants[0].available : !0;
                return !be?.variants && re && (he = !1),
                he ? D + 1 : D
            }
            , 0));
            const Es = zi.includes(gt);
            let pi;
            Es ? pi = document.createElement("dialog") : pi = document.createElement("div"),
            Object.assign(pi, {
                className: `${po ? "in-dark-mode" : ""} tpo_modal-background`
            }),
            oe.querySelector(".tpo_option-required-indicator").innerHTML = `
                    ${!h && !(g && w) ? "" : "*"}
                `;
            let Vi = document.createElement("div");
            Object.assign(Vi, {
                className: `tpo_modal-container tpo_modal--${$u} tpo_option-display--${ku}`,
                innerHTML: `
                        <div class='tpo_modal-heading ${!mi && !Eu ? "tpo_hidden" : ""}'>
                            <h3 ${mi ? 'style="display: block;"' : ""}>${Eu}</h3>
                            ${mi ? `
                                <button class="tpo_modal-close-btn" type="button" aria-label="Close modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19 4.99988L5 18.9999M5 4.99988L19 18.9999" stroke="${po ? "#fff" : "#1E1E1E"}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            ` : ""}
                        </div>
                    `
            });
            const Lu = Vi.querySelector(".tpo_modal-close-btn");
            Lu && Lu.addEventListener("click", Os),
            $u === "popup" && (Vi.style.width = `${mi ? 540 : 500}px`);
            let mo = document.createElement("div");
            Object.assign(mo, {
                className: "list_tag-wrap_element",
                id: "list_tag-wrap_element"
            });
            let dc = S;
            typeof S == "string" && S.includes("{{total}}") && (dc = S.replace(/\{\{total\}\}/g, Tu)),
            Se.innerHTML = `<span>${dc}</span>`,
            V.productListHelpTextColor && (Se.style.color = V.productListHelpTextColor);
            let no = document.createElement("button")
              , kh = "";
            if (mi) {
                const G = pn && xs && xs !== "default_id_image" ? pn : "";
                Object.assign(no, {
                    className: "tpo_popup-modal-button style-1",
                    type: "button",
                    innerHTML: `
                            <div class="tpo-image-select-value-wrapper" style="${G ? "" : "display: none;"}">
                                <img class="tpo-image-select-value style-1" src="${G}" alt="" width="80" height="80"/>
                            </div>
                            <div class="tpo_popup-modal-button-text">
                                <div class="tpo_popup-modal-button-text-content">
                                    <span class="tpo_popup-modal-button-label">${Cs}</span><span class="tpo_selected-option" id="list-selected-option">${kh}</span>
                                </div>
                                ${S ? `<span class="tpo_option-help-text">${dc}</span>` : ""}
                            </div>
                            <div class="tpo_popup-modal-button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M0.75 12.75L6.04289 7.45711C6.37623 7.12377 6.54289 6.95711 6.54289 6.75C6.54289 6.54289 6.37623 6.37623 6.04289 6.04289L0.75 0.75" stroke="${V.productListIconColor ?? "#757575"}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        `,
                    onclick: yc
                }),
                no.style.setProperty("--product-list-button-text-color", V.productListButtonTextColor ?? ""),
                no.style.setProperty("--product-list-selected-option-text-color", V.productListSelectedOptionTextColor ?? V.selectedOptionValueColor ?? ""),
                no.style.setProperty("--product-list-help-text-color", V.productListHelpTextColor ?? V.helpTextColor ?? cr.fontColor),
                no.style.setProperty("--product-list-icon-color", V.productListIconColor ?? "#757575"),
                no.style.setProperty("--product-list-button-bg-color", V.productListBackgroundColor ?? ""),
                no.style.setProperty("--product-list-button-border-color", V.productListBorderColor ?? "")
            } else
                Object.assign(no, {
                    className: "tpo_popup-modal-button",
                    type: "button",
                    textContent: Cs,
                    onclick: yc
                });
            let $s = document.createElement("div");
            Object.assign($s, {
                className: "tpo_modal-footer-wrapper"
            });
            let uc = document.createElement("div");
            Object.assign(uc, {
                className: "tpo_modal-footer-group tpo_modal-footer-content-wrapper"
            });
            let Ou = document.createElement("button");
            Object.assign(Ou, {
                className: "button-modal",
                innerHTML: Re.Cancel && Re.Cancel[xt] || "Cancel",
                onclick: Os
            });
            let fa = document.createElement("button");
            Object.assign(fa, {
                className: "button-modal primary",
                innerHTML: Re.Confirm && Re.Confirm[xt] || "Confirm",
                onclick: Or
            });
            let mc = document.createElement("div");
            Object.assign(mc, {
                className: "tpo_modal-footer-group"
            }),
            mc.append(Ou, fa);
            let fn = document.createElement("div");
            Object.assign(fn, {
                className: "tpo_modal-footer-content"
            }),
            uc.append(fn, mc),
            $s.append(uc),
            window.addEventListener("click", function(D) {
                D.target === pi && Os()
            });
            let _o = document.createElement("span");
            Object.assign(_o, {
                className: "tpo_additional-price absolute active product-list"
            }),
            Ao(J, _o, u);
            let Zi = document.createElement("input");
            if (Object.assign(Zi, {
                className: "tpo_hidden-checkbox",
                type: "text",
                name: `properties[${it ? "_" : ""}${y}]`,
                id: `product-list-input${d !== void 0 ? `-${d}` : ""}`,
                value: "",
                ariaLabel: y
            }),
            Z.enable && (Z.configs.showTotalSelected ? pe = "exact_count" : Z.configs.isShowNewTotalSelected ? Z.configs.isUseMinMaxSelected ? pe = "min_max_count" : pe = "only_total" : Z.configs.isUseMinMaxSelected && (pe = "min_max_not_count")),
            Z.enable && pe) {
                let {totalQuantitySelectorElementWrapperRender: D, errorTotalElementRender: G} = vr(Z, sr, pe);
                Ve = D,
                Ne = G
            }
            mi && Ve && fn.append(Ve),
            !mi && Ve && oe.append(Ve),
            le.append(oe),
            Zi.dataset.required = h || w && g,
            l && Zi.setAttribute("form", l);
            let Ha = document.createElement("div");
            Object.assign(Ha, {
                className: "tpo_modal-content"
            });
            let _c = document.createElement("div");
            _c.classList.add("tpo_modal-filter-wrapper");
            let hc = document.createElement("div");
            Object.assign(hc, {
                className: "tpo_option-input-wrapper-filter",
                innerHTML: `
                    <svg alt="Search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style="transform: scale(1);"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
                `
            });
            let Ts = document.createElement("input");
            Object.assign(Ts, {
                className: "tpo_option-input tpo_text-box tpo_modal-content_filter",
                placeholder: Re["Search options"]?.[xt] || "Search options",
                ariaLabel: y
            }),
            Ts.addEventListener("input", Pu),
            hc.append(Ts),
            _c.append(hc),
            Ch || Ha.append(_c),
            Sl(i, r, u, y, w, H, Ba, Zi, ma, Vo, _o, We, P, Mo, Y, Ha, Pr, !1, Lr, d, t, n, Z, oa, le, ie, p, Qi, Vi, pe, Ne, un, Or, Ae),
            a.type = "button",
            a.addEventListener("click", function() {
                ma()
            }),
            Or(),
            Ha.append(Y),
            Vi.append(Ha),
            mi ? (w || Z.enable) && Vi.append($s) : Vi.append($s),
            pi.append(Vi),
            oe.append(no, _o, Zi, ...mi ? [] : [mo]),
            Ve && (mi ? fn.prepend(Ve) : oe.append(Ve)),
            Ne && (mi ? fn.append(Ne) : oe.append(Ne)),
            mi || oe.append(Se),
            le.contains(ie) || oe.append(ie),
            document.body.append(pi),
            le.append(oe),
            Zi.addEventListener("change", function() {
                const D = Vi.querySelectorAll(".tpo_radio-button");
                Sr(Zi, D)
            }),
            t.option_types.some(D => D.is_default) && Pr();
            break;
        case "spacer":
            const Eh = JSON.parse(k || "{}").spacerHeight || 0;
            let gc = document.createElement("div");
            gc.style.height = `${Eh}px`,
            gc.innerHTML = "<span/>",
            le.append(gc);
            break;
        case "date-picker":
            let Au = function(D) {
                Ct(s, `${A},${m}`, m, D)
            };
            var cg = Au;
            const bc = k && JSON.parse(k).default_value || "";
            to("link", "stylesheet", Dc),
            Object.assign(Y, {
                className: "tpo_option-input-wrapper",
                innerHTML: Lo ? '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.66667 1.04175C7.01184 1.04175 7.29167 1.32157 7.29167 1.66675V2.29175H12.7083V1.66675C12.7083 1.32157 12.9882 1.04175 13.3333 1.04175C13.6785 1.04175 13.9583 1.32157 13.9583 1.66675V2.29175H14.1667C16.3528 2.29175 18.125 4.06395 18.125 6.25008V15.0001C18.125 17.1862 16.3528 18.9584 14.1667 18.9584H5.83333C3.64721 18.9584 1.875 17.1862 1.875 15.0001V6.25008C1.875 4.06395 3.64721 2.29175 5.83333 2.29175H6.04167V1.66675C6.04167 1.32157 6.32149 1.04175 6.66667 1.04175ZM6.04167 3.54175H5.83333C4.33756 3.54175 3.125 4.75431 3.125 6.25008V6.87508H16.875V6.25008C16.875 4.75431 15.6624 3.54175 14.1667 3.54175H13.9583V4.16675C13.9583 4.51193 13.6785 4.79175 13.3333 4.79175C12.9882 4.79175 12.7083 4.51193 12.7083 4.16675V3.54175H7.29167V4.16675C7.29167 4.51193 7.01184 4.79175 6.66667 4.79175C6.32149 4.79175 6.04167 4.51193 6.04167 4.16675V3.54175ZM16.875 8.12508H3.125V15.0001C3.125 16.4959 4.33756 17.7084 5.83333 17.7084H14.1667C15.6624 17.7084 16.875 16.4959 16.875 15.0001V8.12508Z" fill="#757575"/></svg>' : '<svg viewBox="0 0 20 20" class="Icon_Icon__Dm3QW" style="width: 20px; height: 20px;"><path fill-rule="evenodd" d="M17.5 2h-2.5v-1a1 1 0 1 0-2 0v1h-7v-1a1 1 0 0 0-2 0v1h-1.5c-.8 0-1.5.7-1.5 1.5v15c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-15c0-.8-.7-1.5-1.5-1.5zm-14.5 16h14v-10h-14v10z"></path></svg>'
            });
            let Ps = document.createElement("span");
            Object.assign(Ps, {
                className: "tpo_additional-price absolute"
            });
            const $h = [];
            yt(st, Ps, L);
            let wc = Pm(t, i, r, ut, Ps, We, L, a, Au, $h, n, bc);
            bc && (wc.value = bc,
            wc.dispatchEvent(new Event("change"))),
            Y.append(wc, Ps),
            oe.append(Y, Se, ie),
            le.append(oe);
            break;
        case "date-range":
            let qu = function(D) {
                Ct(s, `${A},${m}`, m, D)
            };
            var pg = qu;
            const vc = k ? JSON.parse(k).default_value || [] : [];
            to("link", "stylesheet", Dc),
            Object.assign(Y, {
                className: "tpo_option-input-wrapper",
                innerHTML: Lo ? `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.875 6.25008C1.875 4.06395 3.64721 2.29175 5.83333 2.29175H14.1667C16.3528 2.29175 18.125 4.06395 18.125 6.25008V15.0001C18.125 17.1862 16.3528 18.9584 14.1667 18.9584H5.83333C3.64721 18.9584 1.875 17.1862 1.875 15.0001V6.25008ZM5.83333 3.54175C4.33756 3.54175 3.125 4.75431 3.125 6.25008V15.0001C3.125 16.4959 4.33756 17.7084 5.83333 17.7084H14.1667C15.6624 17.7084 16.875 16.4959 16.875 15.0001V6.25008C16.875 4.75431 15.6624 3.54175 14.1667 3.54175H5.83333Z" fill="#757575"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.875 7.50008C1.875 7.1549 2.15482 6.87508 2.5 6.87508H17.5C17.8452 6.87508 18.125 7.1549 18.125 7.50008C18.125 7.84526 17.8452 8.12508 17.5 8.12508H2.5C2.15482 8.12508 1.875 7.84526 1.875 7.50008Z" fill="#757575"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.66667 1.04175C7.01184 1.04175 7.29167 1.32157 7.29167 1.66675V4.16675C7.29167 4.51193 7.01184 4.79175 6.66667 4.79175C6.32149 4.79175 6.04167 4.51193 6.04167 4.16675V1.66675C6.04167 1.32157 6.32149 1.04175 6.66667 1.04175Z" fill="#757575"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 1.04175C13.6785 1.04175 13.9583 1.32157 13.9583 1.66675V4.16675C13.9583 4.51193 13.6785 4.79175 13.3333 4.79175C12.9882 4.79175 12.7083 4.51193 12.7083 4.16675V1.66675C12.7083 1.32157 12.9882 1.04175 13.3333 1.04175Z" fill="#757575"/>
<path d="M10.8333 12.5001C10.8333 12.9603 10.4602 13.3334 10 13.3334C9.53976 13.3334 9.16667 12.9603 9.16667 12.5001C9.16667 12.0398 9.53976 11.6667 10 11.6667C10.4602 11.6667 10.8333 12.0398 10.8333 12.5001Z" fill="#757575"/>
<path d="M14.1667 12.5001C14.1667 12.9603 13.7936 13.3334 13.3333 13.3334C12.8731 13.3334 12.5 12.9603 12.5 12.5001C12.5 12.0398 12.8731 11.6667 13.3333 11.6667C13.7936 11.6667 14.1667 12.0398 14.1667 12.5001Z" fill="#757575"/>
<path d="M7.5 12.5001C7.5 12.9603 7.1269 13.3334 6.66667 13.3334C6.20643 13.3334 5.83333 12.9603 5.83333 12.5001C5.83333 12.0398 6.20643 11.6667 6.66667 11.6667C7.1269 11.6667 7.5 12.0398 7.5 12.5001Z" fill="#757575"/>
</svg>
` : '<svg viewBox="0 0 20 20" class="Icon_Icon__Dm3QW" style="width: 20px; height: 20px;"><path fill-rule="evenodd" d="M15 2h2.5c.8 0 1.5.7 1.5 1.5v15c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5v-15c0-.8.7-1.5 1.5-1.5h1.5v-1a1 1 0 0 1 2 0v1h7v-1a1 1 0 1 1 2 0v1zm2 16h-14v-10h14v10zm-4.707-7.707-3.293 3.293-1.293-1.293a1.001 1.001 0 0 0-1.707.707 1 1 0 0 0 .293.707l2 2a.997.997 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414z"></path></svg>'
            });
            let As = document.createElement("span");
            Object.assign(As, {
                className: "tpo_additional-price absolute"
            });
            const Th = [];
            yt(st, As, L);
            let Sc = Om(t, i, r, Nt, As, We, L, a, qu, Th, n, vc);
            vc.length && (Sc.value = vc.join(" to "),
            Sc.dispatchEvent(new Event("change"))),
            Y.append(Sc, As),
            oe.append(Y, Se, ie),
            le.append(oe);
            break;
        case "time-picker":
            let Nu = function(D) {
                Ct(s, `${A},${m}`, m, D)
            };
            var dg = Nu;
            const qs = k ? JSON.parse(k).default_value || {} : {};
            to("link", "stylesheet", Dc),
            Object.assign(Y, {
                className: "tpo_option-input-wrapper",
                innerHTML: Lo ? '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 2.29163C5.74279 2.29163 2.29166 5.74276 2.29166 9.99996C2.29166 14.2572 5.74279 17.7083 9.99999 17.7083C14.2572 17.7083 17.7083 14.2572 17.7083 9.99996C17.7083 5.74276 14.2572 2.29163 9.99999 2.29163ZM1.04166 9.99996C1.04166 5.05241 5.05244 1.04163 9.99999 1.04163C14.9475 1.04163 18.9583 5.05241 18.9583 9.99996C18.9583 14.9475 14.9475 18.9583 9.99999 18.9583C5.05244 18.9583 1.04166 14.9475 1.04166 9.99996ZM9.99999 5.20829C10.3452 5.20829 10.625 5.48811 10.625 5.83329V9.54949L12.6976 10.2404C13.0251 10.3495 13.2021 10.7035 13.0929 11.0309C12.9838 11.3584 12.6298 11.5354 12.3023 11.4262L9.80235 10.5929C9.54713 10.5078 9.37499 10.269 9.37499 9.99996V5.83329C9.37499 5.48811 9.65481 5.20829 9.99999 5.20829Z" fill="#757575"/></svg>' : '<svg viewBox="0 0 20 20" class="Icon_Icon__Dm3QW" style="width: 20px; height: 20px;"><path d="M10 20c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm1-15a1 1 0 1 0-2 0v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414l-2.707-2.707v-4.586z"></path></svg>'
            });
            let Ns = document.createElement("span");
            Object.assign(Ns, {
                className: "tpo_additional-price absolute"
            });
            const Lh = [];
            yt(st, Ns, L);
            let xc = Lm(t, i, r, Nt, Ns, We, L, a, Nu, Lh, n, qs);
            qs && qs.string_value && (xc.value = qs.string_value,
            xc.dispatchEvent(new Event("change"))),
            Y.append(xc, Ns),
            oe.append(Y, Se, ie),
            le.append(oe);
            break;
        case "group":
            let Iu = function() {
                JSON.parse(k || "{}").autoCollapseInactiveGroups && document.querySelectorAll(".tpo_option-group_wrapper").forEach(re => {
                    if (re === oe)
                        return;
                    re.classList.remove("show");
                    const be = re.querySelector(".tpo_option-group_child-wrapper");
                    be && (be.hidden = !0)
                }
                ),
                Y.hidden = !Y.hidden,
                oe.classList.toggle("show")
            };
            var ug = Iu;
            const Mu = h
              , Oh = JSON.parse(k || "{}").childOptions || []
              , Cc = [];
            Oh.forEach(D => {
                const G = di ? D : `${d},${D}`
                  , re = o.find(be => be.id === G);
                re && Cc.push(re)
            }
            );
            const Ph = Cc.map(D => Yp(D, Cc, i, a, r, c = !0, "", n, o));
            Object.assign(oe, {
                className: `tpo_option-group_wrapper ${Mu ? "show" : ""}`,
                innerHTML: `
                    <div 
                        class='tpo_option-label-container ${b ? "tpo_hidden" : ""}'
                        style='margin-bottom: ${Hi.optionLabelValueSpacing}px;'
                    >
                        <span 
                            class='form__label tpo_${bi.fontStyle}' 
                            style='
                                font-size: ${bi.fontSize}px;
                                color: ${V.optionLabelColor ?? bi.fontColor};
                                ${bi?.fontFamily ? `font-family: ${bi?.fontFamily};` : ""}
                            '
                        >
                            ${_}
                        </span>
                        <div class='tpo_option-tooltip ${Pi ? "tpo_compatible_style_theme" : ""} ${we ? "" : "tpo_hidden"}' style='margin-bottom: ${Hi.optionLabelValueSpacing}px'>
                             <span 
                                style='
                                    font-size: ${Wt.fontSize}px;
                                    ${Wt?.fontFamily ? `font-family: ${Wt?.fontFamily};` : ""}
                                ' 
                                class='tpo_option-tooltip-icon tpo_ ${Wt.fontStyle}'
                             >
                                ${Lo ? `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.99992 1.83334C4.59416 1.83334 1.83325 4.59425 1.83325 8C1.83325 11.4058 4.59416 14.1667 7.99992 14.1667C11.4057 14.1667 14.1666 11.4058 14.1666 8C14.1666 4.59425 11.4057 1.83334 7.99992 1.83334ZM0.833252 8C0.833252 4.04196 4.04188 0.833336 7.99992 0.833336C11.958 0.833336 15.1666 4.04196 15.1666 8C15.1666 11.958 11.958 15.1667 7.99992 15.1667C4.04188 15.1667 0.833252 11.958 0.833252 8ZM7.99992 5.16667C7.53968 5.16667 7.16659 5.53977 7.16659 6C7.16659 6.27614 6.94273 6.5 6.66659 6.5C6.39044 6.5 6.16659 6.27614 6.16659 6C6.16659 4.98748 6.9874 4.16667 7.99992 4.16667C9.01244 4.16667 9.83325 4.98748 9.83325 6C9.83325 6.36423 9.72652 6.70505 9.54247 6.99109C9.42718 7.17025 9.2924 7.3413 9.16812 7.49576C9.14539 7.524 9.12305 7.55165 9.1011 7.57882C8.99798 7.70646 8.90331 7.82363 8.81583 7.94385C8.60011 8.24033 8.49992 8.46313 8.49992 8.66667V9C8.49992 9.27614 8.27606 9.5 7.99992 9.5C7.72378 9.5 7.49992 9.27614 7.49992 9V8.66667C7.49992 8.13383 7.76153 7.69318 8.00723 7.3555C8.11104 7.21282 8.2248 7.0721 8.32825 6.94414C8.34897 6.91851 8.36928 6.89338 8.38901 6.86886C8.51248 6.71542 8.61757 6.58044 8.70152 6.44997C8.78486 6.32046 8.83325 6.16665 8.83325 6C8.83325 5.53977 8.46016 5.16667 7.99992 5.16667ZM7.99992 10.1667C8.27606 10.1667 8.49992 10.3905 8.49992 10.6667V11.3333C8.49992 11.6095 8.27606 11.8333 7.99992 11.8333C7.72378 11.8333 7.49992 11.6095 7.49992 11.3333V10.6667C7.49992 10.3905 7.72378 10.1667 7.99992 10.1667Z"
                                              fill="white" />
                                        </svg>` : `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="16px" height="16px">
                                            <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 24 14 A 2 2 0 0 0 24 18 A 2 2 0 0 0 24 14 z M 23.976562 20.978516 A 1.50015 1.50015 0 0 0 22.5 22.5 L 22.5 33.5 A 1.50015 1.50015 0 1 0 25.5 33.5 L 25.5 22.5 A 1.50015 1.50015 0 0 0 23.976562 20.978516 z"/>
                                        </svg>`}
                             </span>
                             <div class='tpo_option-tooltip-content tpo_ ${Wt.fontStyle}' style='
                              font-size: ${Wt.fontSize}px;
                              ${Wt?.fontFamily ? `font-family: ${Wt?.fontFamily};` : ""}
                               '>
                                  ${v || ""}
                               </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16' id='IconChangeColor'> <path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' id='mainIconPathAttribute' stroke-width='0' stroke='#ff0000'></path></svg>
                    </div>
                    `
            }),
            oe.firstElementChild.onclick = function() {
                Iu()
            }
            ,
            Object.assign(Y, {
                className: "tpo_option-group_child-wrapper",
                hidden: !Mu
            }),
            Y.append(...Ph),
            oe.append(Y, Se),
            le.append(oe);
            break;
        case "color-picker":
            const Fu = k ? JSON.parse(k) : {};
            if (!Object.keys(Fu).length)
                return "";
            const {enableColorPreview: Ah, textBoxIdentifier: qh, textBoxIdentifierV2: Nh, default_value: Du=""} = Fu;
            Object.assign(Y, {
                className: "tpo_color-picker-wrapper"
            });
            let Ms = document.createElement("span");
            Object.assign(Ms, {
                className: "tpo_additional-price absolute active"
            }),
            Ao(J, Ms, u);
            let Ar = document.createElement("input");
            Object.assign(Ar, {
                className: "tpo_hidden",
                value: "#000000",
                name: `properties[${y}]`
            }),
            l && Ar.setAttribute("form", l);
            let Wa = document.createElement("input");
            Object.assign(Wa, {
                className: "tpo_color-picker_input",
                type: "color"
            }),
            Wa.addEventListener("input", function(D) {
                let G = D.target.value;
                Wi(A, "name", G, !0, "COLOR"),
                Ho?.appTheme !== "modern" ? qr.firstElementChild.style.fill = G : (qr.classList.add("has-value"),
                qr.firstElementChild.style.setProperty("--color-picker-value", G)),
                mn.textContent = G,
                Ar.value = G,
                mn.textContent = G,
                yt(st, Ms, L),
                We(Ar, Ar.value, L),
                n ? dt(ke(i, r), i) : ke(i, r),
                Ah && !le.classList.contains("tpo_hidden") && (Xn(le, qh, G),
                wl(le, Nh, G))
            });
            let mn = document.createElement("span");
            mn.classList.add("tpo_color-picker_value"),
            mn.textContent = Re["Choose color"] && Re["Choose color"][xt] || "Choose color";
            let qr = document.createElement("span");
            Object.assign(qr, {
                className: "tpo_color-picker_icon",
                innerHTML: Lo ? `<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_276_291)">
                                <rect width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect y="8" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect y="16" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="8" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="4" y="4" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="4" y="12" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="4" y="20" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="8" y="8" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="8" y="16" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="16" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="12" y="4" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="12" y="12" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="12" y="20" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="16" y="8" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="16" y="16" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="24" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="28" y="4" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="28" y="12" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="28" y="20" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="20" y="4" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="20" y="12" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="20" y="20" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="24" y="8" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="24" y="16" width="4" height="4" fill="#0C0C0D" fill-opacity="0.2"/>
                                <rect x="4" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect y="4" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect y="12" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect y="20" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="4" y="8" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="4" y="16" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="12" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="8" y="4" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="8" y="12" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="8" y="20" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="12" y="8" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="12" y="16" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="20" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="16" y="4" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="16" y="12" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="16" y="20" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="20" y="8" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="20" y="16" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="28" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="24" y="4" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="24" y="12" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="24" y="20" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="28" y="8" width="4" height="4" fill="white" fill-opacity="0.2"/>
                                <rect x="28" y="16" width="4" height="4" fill="white" fill-opacity="0.2"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_276_291">
                                    <rect width="32" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>` : `
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            xmlns="http://www.w3.org/2000/svg"
                            fill=""
                            stroke={'#e8e8e8'}
                        >
                            <path
                                d="M12 0.75C5.7875 0.75 0.75 5.7875 0.75 12C0.75 18.2125 5.7875 23.25 12 23.25C13.0375 23.25 13.875 22.4125 13.875 21.375C13.875 20.8875 13.6875 20.45 13.3875 20.1125C13.1 19.7875 12.9125 19.35 12.9125 18.875C12.9125 17.8375 13.75 17 14.7875 17H17C20.45 17 23.25 14.2 23.25 10.75C23.25 5.225 18.2125 0.75 12 0.75ZM5.125 12C4.0875 12 3.25 11.1625 3.25 10.125C3.25 9.0875 4.0875 8.25 5.125 8.25C6.1625 8.25 7 9.0875 7 10.125C7 11.1625 6.1625 12 5.125 12ZM8.875 7C7.8375 7 7 6.1625 7 5.125C7 4.0875 7.8375 3.25 8.875 3.25C9.9125 3.25 10.75 4.0875 10.75 5.125C10.75 6.1625 9.9125 7 8.875 7ZM15.125 7C14.0875 7 13.25 6.1625 13.25 5.125C13.25 4.0875 14.0875 3.25 15.125 3.25C16.1625 3.25 17 4.0875 17 5.125C17 6.1625 16.1625 7 15.125 7ZM18.875 12C17.8375 12 17 11.1625 17 10.125C17 9.0875 17.8375 8.25 18.875 8.25C19.9125 8.25 20.75 9.0875 20.75 10.125C20.75 11.1625 19.9125 12 18.875 12Z"
                                fill=""
                            />
                        </svg>
                    `
            });
            let kc = document.createElement("label");
            Object.assign(kc, {
                className: "tpo_color-picker_label"
            }),
            Du && (Wa.value = Du,
            setTimeout( () => {
                Wa.dispatchEvent(new Event("input"))
            }
            , 0)),
            x_() && (Wa.style.visibility = "initial",
            Wa.style.position = "relative",
            qr.style.display = "none"),
            kc.append(qr, Wa, mn),
            Y.append(kc, Ar, Ms),
            oe.append(Y, Se),
            le.append(oe);
            break;
        case "quantity":
            let ju = function(D) {
                Ct(s, `${A},${m}`, m, D)
            };
            var fg = ju;
            const Mh = k && JSON.parse(k).default_value || "";
            Object.assign(Y, {
                className: "tpo_option-input-wrapper"
            });
            let Is = document.createElement("span");
            Object.assign(Is, {
                className: "tpo_additional-price absolute"
            }),
            F === "all" && yt(st, Is, L);
            let Ih = Tm(t, i, l, r, Xe, Is, We, L, a, ju, Qe, Rm, n, u[0], Mh);
            Y.append(Ih, Is),
            oe.append(Y, Se, ie),
            le.append(oe);
            break;
        case "dimension":
            let Ru = function() {
                [Ei.firstElementChild, $i.firstElementChild, Ti.firstElementChild].forEach( (D, G) => {
                    const re = D.parentElement.parentElement?.lastElementChild || document.createElement("div");
                    Oc(Uu[G], D.value, re, D),
                    dt(ke(i, r), i)
                }
                )
            }
              , Oc = function(D, G, re, be) {
                G.length || (G = 0,
                be.removeAttribute("data-error"));
                const {min: he, max: Ee} = D;
                return G = parseFloat(G),
                be.setAttribute("data-error", ""),
                he.length && G < Number(he) ? (re.innerHTML = rr ? ze(rr, he) : `Please enter a minimum value of ${he}`,
                !1) : Ee.length && G > Number(Ee) ? (re.innerHTML = nr ? ze(nr, Ee) : `Please enter a maximum value of ${Ee}`,
                !1) : (be.removeAttribute("data-error"),
                re.innerHTML = "",
                !0)
            }
              , Pc = function() {
                const D = ad({
                    xValue: Ei.firstElementChild.value,
                    yValue: $i.firstElementChild.value,
                    zValue: Ti.firstElementChild.value,
                    tablePricing: Rh
                })
                  , {valid: G, tablePrice: re} = D
                  , be = od({
                    xValue: Ei.firstElementChild.value,
                    yValue: $i.firstElementChild.value,
                    zValue: Ti.firstElementChild.value,
                    formula: Fh,
                    price: L,
                    tablePrice: re
                });
                gn.dataset.tablePriceValid = Number(G),
                gn.value = be ? `[ +${PriceFormatter.formatMoney(parseFloat(be), !1)} ]` : "",
                yt(st, Bs, be / 100),
                n ? dt(ke(i, r), i) : ke(i, r),
                me.useDimensionDropdownPricing && Lc && Lc.length && k_(Lc, le)
            };
            var mg = Ru
              , _g = Oc
              , hg = Pc;
            if (!Object.keys(me).length)
                return "";
            const {labelX: Ec="", labelY: $c="", labelZ: Tc="", suffixX: Ua="", suffixY: Ra="", suffixZ: Va="", valueX: Bu="", valueY: Hu="", valueZ: Wu="", formula: Fh="x * y * {{price}}", minX: Dh="", minY: jh="", minZ: Bh="", maxX: Hh="", maxY: Wh="", maxZ: Uh="", linkedDropdowns: Lc=[], tablePricing: Rh={}} = me;
            Object.assign(Y, {
                className: "tpo_dimension_wrapper"
            });
            let Fs = document.createElement("label");
            Object.assign(Fs, {
                className: "tpo_dimension_label",
                innerHTML: `
                        <span class="form__label">${Ec}</span>
                    `
            });
            let Ei = document.createElement("div");
            Object.assign(Ei, {
                className: "tpo_dimension_input-wrapper",
                innerHTML: `
                        <input type="text" data-tpo-dimension="x" form="${l}" name="properties[${y}-${Ec || "width"}]" value="${Bu}" id="${m}-x-${t.option_id}"
                        class="tpo_option-input tpo_text-box tpo_dimension_input ${Ua ? "with_suffix" : ""} tpo_${pt.fontStyle}"/>
                        <span class="${Ua ? "" : "tpo_hidden"}">${Ua}</span>
                    `
            }),
            Ei.firstElementChild.style.fontSize = `${pt.fontSize}px`,
            pt?.fontFamily && (Ei.firstElementChild.style.fontFamily = pt.fontFamily),
            Ei.firstElementChild.style.color = V.inputText_enteredValue ?? pt.fontColor,
            Ei.firstElementChild.style.backgroundColor = V.inputBackground_unselected ?? jt.background,
            Ei.firstElementChild.style.borderColor = V.inputBorder_unselected ?? jt.borderColor,
            Ei.firstElementChild.style.borderRadius = `${Oi.inputBorderRadius}px`,
            Ei.firstElementChild.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
            Ei.firstElementChild.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
            Ei.firstElementChild.style.setProperty("--active-input-background", V.inputBackground_selected || "");
            let _n = document.createElement("div");
            Object.assign(_n, {
                className: `tpo_error-message tpo_${li.fontStyle}`,
                innerHTML: ""
            }),
            _n.style.fontSize = `${li.fontSize}px`,
            _n.style.color = V.errorMessageColor ?? li.fontColor,
            li?.fontFamily && (_n.style.fontFamily = li.fontFamily),
            (Ec.length || Bu.length || Ua.length) && (Fs.append(Ei),
            Fs.append(_n));
            let Ds = document.createElement("label");
            Object.assign(Ds, {
                className: "tpo_dimension_label",
                innerHTML: `
                        <span class="form__label">${$c}</span>
                    `
            });
            let $i = document.createElement("div");
            Object.assign($i, {
                className: "tpo_dimension_input-wrapper",
                innerHTML: `
                        <input type="text" data-tpo-dimension="y" form="${l}" name="properties[${y}-${$c || "length"}]" value="${Hu}" id="${m}-y-${t.option_id}"
                        class="tpo_option-input tpo_text-box tpo_dimension_input ${Ra ? "with_suffix" : ""} tpo_${pt.fontStyle}"/>
                        <span class="${Ra ? "" : "tpo_hidden"}">${Ra}</span>
                    `
            }),
            $i.firstElementChild.style.fontSize = `${pt.fontSize}px`,
            pt?.fontFamily && ($i.firstElementChild.style.fontFamily = pt.fontFamily),
            $i.firstElementChild.style.color = V.inputText_enteredValue ?? pt.fontColor,
            $i.firstElementChild.style.backgroundColor = V.inputBackground_unselected ?? jt.background,
            $i.firstElementChild.style.borderRadius = `${Oi.inputBorderRadius}px`,
            $i.firstElementChild.style.borderColor = V.inputBorder_unselected ?? jt.borderColor,
            $i.firstElementChild.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
            $i.firstElementChild.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
            $i.firstElementChild.style.setProperty("--active-input-background", V.inputBackground_selected || "");
            let hn = document.createElement("div");
            Object.assign(hn, {
                className: `tpo_error-message tpo_${li.fontStyle}`,
                innerHTML: ""
            }),
            hn.style.fontSize = `${li.fontSize}px`,
            hn.style.color = V.errorMessageColor ?? li.fontColor,
            li?.fontFamily && (hn.style.fontFamily = li.fontFamily),
            ($c.length || Hu.length || Ra.length) && (Ds.append($i),
            Ds.append(hn));
            let js = document.createElement("label");
            Object.assign(js, {
                className: "tpo_dimension_label",
                innerHTML: `
                        <span class="form__label">${Tc}</span>
                    `
            });
            let Ti = document.createElement("div");
            Object.assign(Ti, {
                className: "tpo_dimension_input-wrapper",
                innerHTML: `
                        <input type="text" data-tpo-dimension="z" form="${l}" name="properties[${y}-${Tc || "height"}]" value="${Wu}" id="${m}-z-${t.option_id}"
                        class="tpo_option-input tpo_text-box tpo_dimension_input ${Va ? "with_suffix" : ""} tpo_${pt.fontStyle}"/>
                        <span class="${Va ? "" : "tpo_hidden"}">${Va}</span>
                    `
            }),
            Ti.firstElementChild.style.fontSize = `${pt.fontSize}px`,
            pt?.fontFamily && (Ti.firstElementChild.style.fontFamily = pt.fontFamily),
            Ti.firstElementChild.style.color = V.inputText_enteredValue ?? pt.fontColor,
            Ti.firstElementChild.style.backgroundColor = V.inputBackground_unselected ?? jt.background,
            Ti.firstElementChild.style.borderColor = V.inputBorder_unselected ?? jt.borderColor,
            Ti.firstElementChild.style.borderRadius = `${Oi.inputBorderRadius}px`,
            Ti.firstElementChild.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
            Ti.firstElementChild.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
            Ti.firstElementChild.style.setProperty("--active-input-background", V.inputBackground_selected || "");
            let yn = document.createElement("div");
            Object.assign(yn, {
                className: `tpo_error-message tpo_${li.fontStyle}`,
                innerHTML: ""
            }),
            yn.style.fontSize = `${li.fontSize}px`,
            yn.style.color = V.errorMessageColor ?? li.fontColor,
            li?.fontFamily && (yn.style.fontFamily = li.fontFamily),
            (Tc.length || Wu.length || Va.length) && (js.append(Ti),
            js.append(yn)),
            a.type = "button",
            a.addEventListener("click", function() {
                le.classList.contains("tpo_hidden") || (Ei.firstElementChild.value.length && (Ei.firstElementChild.value.includes(Ua) || (Ei.firstElementChild.value += ` ${Ua}`,
                setTimeout( () => {
                    Ei.firstElementChild.value = Ei.firstElementChild.value.replace(` ${Ua}`, "")
                }
                , 0))),
                $i.firstElementChild.value.length && ($i.firstElementChild.value.includes(Ra) || ($i.firstElementChild.value += ` ${Ra}`,
                setTimeout( () => {
                    $i.firstElementChild.value = $i.firstElementChild.value.replace(` ${Ra}`, "")
                }
                , 0))),
                Ti.firstElementChild.value.length && (Ti.firstElementChild.value.includes(Va) || (Ti.firstElementChild.value += ` ${Va}`,
                setTimeout( () => {
                    Ti.firstElementChild.value = Ti.firstElementChild.value.replace(` ${Va}`, "")
                }
                , 0))))
            });
            const Uu = [{
                min: Dh,
                max: Hh
            }, {
                min: jh,
                max: Wh
            }, {
                min: Bh,
                max: Uh
            }];
            [Ei.firstElementChild, $i.firstElementChild, Ti.firstElementChild].forEach( (D, G) => {
                const re = D.parentElement.parentElement?.lastElementChild || document.createElement("div");
                D.addEventListener("input", function(be) {
                    let he = be.target.value;
                    he = he.replace(/e/g, ""),
                    /^\d*\.?(?!\.)\d*$/.test(he) || (he = he.replace(/[^\d\.]/g, "")),
                    be.target.value = he,
                    Oc(Uu[G], he, re, D) && (Pc(),
                    dt(ke(i, r), i))
                })
            }
            );
            let Bs = document.createElement("span");
            Object.assign(Bs, {
                className: "tpo_additional-price absolute active"
            }),
            Ao(J, Bs);
            const gn = document.createElement("input");
            Object.assign(gn, {
                className: "tpo_dimension_price_input tpo_hidden",
                type: "hidden",
                name: `properties[${y}]`
            }),
            l && gn.setAttribute("form", l),
            setTimeout( () => {
                Pc()
            }
            , 500),
            a.type = "button",
            a.addEventListener("click", function() {
                le.classList.contains("tpo_hidden") || Ru()
            }),
            Y.append(Fs, Ds, js, gn, Bs),
            oe.append(Y, Se),
            le.append(oe);
            break;
        case "font-picker":
            let _a = function() {
                if (!h)
                    return !0;
                const D = Ir.length;
                return h && D < 1 ? (ie.innerHTML = ei ? ze(ei, "") : "This is a required option",
                !1) : (ie.innerHTML = "",
                !0)
            };
            var yg = _a;
            const Nr = k ? JSON.parse(k) : {
                displayFontSwatches: 0,
                enableFontPreview: 0,
                enableSearch: 0,
                fontSelection: 0,
                textBoxIdentifier: "",
                textBoxIdentifierV2: [],
                selectedFonts: [],
                customFonts: [],
                printBoxName: "",
                printBoxValue: "",
                defaultFont: ""
            };
            if (!Object.keys(Nr).length)
                return "";
            let {displayFontSwatches: Vu, enableFontPreview: Hs, enableSearch: Ac, fontSelection: Vh, selectedFonts: zh=[], textBoxIdentifier: Ws, textBoxIdentifierV2: Us=[], customFonts: qc=[], defaultFont: Mr=""} = Nr;
            const Jh = Nr.printBoxName ? Nr.printBoxName : ""
              , Qh = Nr.printBoxValue ? Nr.printBoxValue : "";
            qc = qc.filter(D => Mp.findIndex(re => re.name === D.name) > -1);
            const zu = [...zh, ...qc].map(D => D.url ? {
                ...D,
                custom: !0
            } : {
                name: D,
                url: "",
                custom: !1
            });
            Object.assign(Y, {
                className: Vu ? "tpo_option-type-font-picker-swatches" : "tpo_option-type-font-picker-dropdown"
            }),
            Oi?.inputBorderRadius && Y.style.setProperty("--input-border-radius", `${Oi.inputBorderRadius}px`),
            Y.style.setProperty("--placeholder-input-text", V.inputText_placeholder ?? ""),
            Y.style.setProperty("--entered-input-text", V.inputText_enteredValue ?? pt.fontColor ?? ""),
            Y.style.setProperty("--initial-input-border", V.inputBorder_unselected || jt.borderColor || ""),
            Y.style.setProperty("--initial-input-background", V.inputBackground_unselected || ""),
            Y.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
            Y.style.setProperty("--active-input-background", V.inputBackground_selected || "");
            let Ir = []
              , zo = document.createElement("span");
            Object.assign(zo, {
                className: "tpo_additional-price absolute active"
            }),
            Ao(J, zo, u);
            let ho = document.createElement("input");
            Object.assign(ho, {
                className: "tpo_hidden-checkbox",
                name: `properties[${y}]`,
                value: "",
                ariaLabel: y
            }),
            ho.dataset.required = h,
            Io && (ho.dataset.printBox = JSON.stringify([{
                printBoxName: Jh,
                printBoxValue: Qh
            }])),
            l && ho.setAttribute("form", l);
            let ha;
            if (Vu)
                ha = zu.map( (D, G) => km(i, r, D, Hs, Ws, Us, y, H, G, Ir, ho, _a, zo, L, p, Y, le, Mr)),
                Y.append(...ha, ho, zo);
            else if (Vh === 1) {
                let Pe = function(ot) {
                    let nt = 0;
                    Array.from(be.children).forEach(Qt => {
                        const eo = Qt.querySelector("span");
                        Ac && (eo?.textContent.toLowerCase().includes(ot.toLowerCase()) ? (Qt.classList.remove("tpo_hidden"),
                        nt++) : Qt.classList.add("tpo_hidden"))
                    }
                    ),
                    nt ? Ee.classList.add("tpo_hidden") : Ee.classList.remove("tpo_hidden")
                }
                  , Je = function(ot) {
                    G.classList.toggle("show")
                };
                var gg = Pe
                  , bg = Je;
                let D = document.createElement("div");
                Object.assign(D, {
                    className: "tpo_font-picker-dropdown-wrapper",
                    innerHTML: `
                            <div class="tpo_font-picker-label" name="properties[${y}]">
                                <span>${x || Re["Select a font"] && Re["Select a font"][xt] || "Select a font"}</span>
                                <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16' id='IconChangeColor'> <path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' id='mainIconPathAttribute' stroke-width='0' stroke='#ff0000'></path></svg>                           
                            </div>
                            <div class="tpo_font-picker-option-wrapper">
                                <div class="tpo_font-picker-option-search">
                                    <div>
                                        <svg class="${Ac ? "" : "tpo_hidden"}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0415 9.58332C1.0415 4.86589 4.86574 1.04166 9.58317 1.04166C14.3006 1.04166 18.1248 4.86589 18.1248 9.58332C18.1248 11.7171 17.3424 13.6681 16.0489 15.1652L18.7751 17.8914C19.0192 18.1355 19.0192 18.5312 18.7751 18.7753C18.531 19.0193 18.1353 19.0193 17.8912 18.7753L15.165 16.049C13.668 17.3426 11.7169 18.125 9.58317 18.125C4.86574 18.125 1.0415 14.3008 1.0415 9.58332ZM9.58317 2.29166C5.55609 2.29166 2.2915 5.55625 2.2915 9.58332C2.2915 13.6104 5.55609 16.875 9.58317 16.875C13.6102 16.875 16.8748 13.6104 16.8748 9.58332C16.8748 5.55625 13.6102 2.29166 9.58317 2.29166Z" fill="#757575"/>
                                        </svg>
                                        <input type="text" placeholder="${Re["Search for a font"] && Re["Search for a font"][xt] || "Search for a font"}" />
                                    </div>
                                </div>
                                <ul></ul>
                            </div>
                        `
                });
                let G = D.querySelector(".tpo_font-picker-label");
                G.style.borderColor = V.dropdownMenu_border,
                G.onclick = Je;
                let re = D.querySelector(".tpo_font-picker-option-wrapper")
                  , be = re.querySelector("ul")
                  , he = re.firstElementChild;
                Ac || he.classList.add("tpo_hidden");
                const Ee = document.createElement("div");
                Object.assign(Ee, {
                    className: "tpo_font-picker-element tpo_option-type-selection tpo_option-type-selection--empty tpo_hidden",
                    innerHTML: Re["No results found"] && Re["No results found"][xt] || "No results found"
                }),
                he.oninput = function(ot) {
                    const nt = ot.target.value;
                    Pe(nt)
                }
                ,
                document.addEventListener("click", function(ot) {
                    const nt = !D.contains(ot.target)
                      , Qt = G.classList.contains("show");
                    nt && Qt && (Je(),
                    _a())
                }),
                ha = zu.map( (ot, nt) => vl(i, r, ot, Hs, Ws, Us, y, Ir, ho, _a, zo, L, le, G, Mr)),
                be.append(...ha),
                be.append(Ee),
                Y.append(D, ho, zo)
            } else {
                let he = function() {
                    D.classList.toggle("show")
                };
                var wg = he;
                let D = document.createElement("div");
                Object.assign(D, {
                    className: "tpo_font-picker-google-wrapper",
                    innerHTML: `
                            <input type="text" placeholder="${x || "Search for a font"}" name="disabled-properties[${y}]" aria-label="${y}" />
                            ${Lo ? `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M1.04169 9.58342C1.04169 4.86598 4.86592 1.04175 9.58335 1.04175C14.3008 1.04175 18.125 4.86598 18.125 9.58342C18.125 11.7172 17.3426 13.6682 16.0491 15.1653L18.7753 17.8915C19.0194 18.1356 19.0194 18.5313 18.7753 18.7754C18.5312 19.0194 18.1355 19.0194 17.8914 18.7754L15.1652 16.0491C13.6681 17.3427 11.7171 18.1251 9.58335 18.1251C4.86592 18.1251 1.04169 14.3008 1.04169 9.58342ZM9.58335 2.29175C5.55628 2.29175 2.29169 5.55634 2.29169 9.58342C2.29169 13.6105 5.55628 16.8751 9.58335 16.8751C13.6104 16.8751 16.875 13.6105 16.875 9.58342C16.875 5.55634 13.6104 2.29175 9.58335 2.29175Z"
                                      fill="#757575" />
                            </svg>` : `<svg alt="Search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style="transform: scale(1);">
                                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                            </svg>`}
                            
                            <ul></ul>
                        `
                }),
                D.style.borderColor = V.dropdownMenu_border;
                let G = D.firstElementChild
                  , re = D.querySelector("ul");
                G.oninput = function(Pe) {
                    ho.value = "",
                    Ir.pop();
                    const Je = Pe.target.value;
                    if (Je.trim().length < 2) {
                        re.innerHTML = "";
                        return
                    }
                    Ee(Je)
                }
                ,
                D.onclick = function(Pe) {
                    G.value.trim().length < 2 && (re.innerHTML = ""),
                    !(D.classList.contains("show") && G.value.trim().length) && he()
                }
                ,
                ha = [].map( (Pe, Je) => vl(i, r, Pe, Hs, Ws, Us, y, Ir, ho, _a, zo, L, le, D, Mr)),
                re.append(...ha);
                const Ee = yr(async Pe => {
                    let Je = [];
                    try {
                        $e.length || ($e = [...await (await fetch(Ry, {
                            method: "GET"
                        })).json()]),
                        Je = $e.filter(ot => ot.toLowerCase().includes(Pe.toLowerCase())).map(ot => ({
                            name: ot,
                            url: "",
                            custom: !1
                        }))
                    } catch {} finally {
                        ha = Je.map( (ot, nt) => vl(i, r, ot, Hs, Ws, Us, y, Ir, ho, _a, zo, L, le, D, Mr)),
                        re.innerHTML = "",
                        re.append(...ha)
                    }
                }
                , 300);
                !n && Mr && (G.value = Mr,
                G.dispatchEvent(new Event("input"))),
                document.addEventListener("click", function(Pe) {
                    const Je = !D.contains(Pe.target)
                      , ot = D.classList.contains("show");
                    Je && ot && (he(),
                    _a())
                }),
                Y.append(D, ho, zo)
            }
            a.type = "button",
            a.addEventListener("click", function() {
                _a()
            }),
            oe.append(Y, Se, ie),
            le.append(oe);
            break
        }
        return le
    }
    function Xn(t, o, i) {
        const a = t?.parentElement;
        if (!a)
            return;
        const r = a.querySelector(`[name*="properties[${o}]"]`);
        r && (r.style.color = `${i || ""}`)
    }
    function wl(t, o, i) {
        Array.isArray(o) && o.length && o.forEach(a => {
            Xn(t, a, i)
        }
        )
    }
    function wm() {
        if (!$o)
            return document.createElement("div");
        const t = document.createElement("input");
        return Object.assign(t, {
            name: "properties[_tpo_active_currency]",
            value: Ga,
            type: "hidden"
        }),
        t
    }
    function vm() {
        if (!$o)
            return document.createElement("div");
        const t = document.createElement("input");
        return Object.assign(t, {
            name: "properties[_tpo_currency_rate]",
            value: ht,
            type: "hidden"
        }),
        t
    }
    function Zp(t, o, i) {
        if (o === "no")
            return;
        let a = i.querySelector('[name="properties[_tpo_wholesale]"]');
        a || (a = document.createElement("input"),
        a.type = "hidden",
        a.id = "_tpo_wholesale",
        a.name = "properties[_tpo_wholesale]",
        a.value = Hp(t),
        i.appendChild(a))
    }
    function Sm() {
        const t = document.createElement("input");
        return Object.assign(t, {
            id: "easify-mark-input",
            name: "properties[_tpo_add_by]",
            value: "easify",
            type: "hidden",
            disabled: !0
        }),
        t
    }
    function xm() {
        const t = document.querySelector("#easify-mark-input");
        t && (t.disabled = !1)
    }
    function ed(t) {
        t._tpo_add_by = "easify"
    }
    function Cm() {
        const t = document.querySelector("#easify-mark-input");
        t && (t.disabled = !0)
    }
    function yr(t, o) {
        let i = null;
        return (...a) => {
            window.clearTimeout(i),
            i = window.setTimeout( () => {
                t.apply(null, a)
            }
            , o)
        }
    }
    function So(t, o=ti[0] || {}) {
        if (!t || !o)
            return null;
        let i = {};
        try {
            i = typeof t == "string" ? JSON.parse(t) : t
        } catch {
            return null
        }
        let a = [];
        if (o?.additional_data) {
            const d = o.additional_data;
            a = (typeof d == "string" ? JSON.parse(d) : d)?.sharedBadgeLibrary || []
        }
        let r;
        if (i?.badgeSetting?.badge?.type)
            r = i?.badgeSetting?.badge;
        else {
            const d = a.find(n => n?.id === i?.badgeSetting?.badge);
            d && (r = d)
        }
        if (!r)
            return null;
        const c = document.createElement("span");
        if (c.className = "tpo_badge",
        Object.assign(c.style, {
            backgroundColor: r.background || "#FFC004",
            color: r.colorText || "#000000"
        }),
        r.iconSrc)
            if ((!r?.id || String(r.iconKey).startsWith("user:")) && !r?.isIconColored) {
                const d = document.createElement("img");
                d.classList.add("tpo_badge-img"),
                d.src = r.iconSrc,
                Object.assign(d.style, {
                    width: "12px",
                    height: "12px"
                }),
                c.appendChild(d)
            } else
                fetch(r.iconSrc).then(d => d.text()).then(d => {
                    const n = document.createElement("span");
                    n.innerHTML = d;
                    const f = n.querySelector("svg");
                    f && (f.classList.add("tpo_badge-svg"),
                    f.querySelectorAll("path").forEach(p => {
                        p.removeAttribute("fill"),
                        r?.colorIcon && (p.style.fill = r.colorIcon)
                    }
                    )),
                    c.insertBefore(f, c.firstChild)
                }
                );
        if (r.text) {
            const d = document.createElement("span");
            d.className = `tpo_badge-content tpo_${jn.fontStyle}`,
            d.style.fontSize = `${jn.fontSize}px`,
            d.style.fontFamily = jn.fontFamily ? jn.fontFamily : "",
            d.textContent = r.text,
            c.appendChild(d)
        }
        return c
    }
    function km(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u, x, _, m) {
        i && !i.url && td([i.name], _);
        let S = document.createElement("input")
          , v = document.createElement("label");
        Object.assign(S, {
            className: "tpo_buttons-input",
            type: "radio",
            value: i.name,
            name: `${u},${d}`,
            id: `${d}-${f}`
        });
        let y = document.createElement("div");
        Object.assign(y, {
            className: "tpo_buttons-wrapper"
        }),
        v.classList.add(`tpo_shape_${n}`),
        v.classList.add(`tpo_${tt.fontStyle}`),
        v.textContent = i.name,
        v.style.backgroundColor = V.buttonBackground_unselected ?? vo.background,
        v.style.borderColor = V.buttonBorder_unselected ?? vo.borderColor,
        v.style.color = V.optionValueColor ?? tt.fontColor,
        v.style.fontFamily = i.name,
        v.style.setProperty("--active-color", fr(V.selectedOptionValueColor ?? vo.activeTextColor) || ""),
        v.style.setProperty("--active-background", fr(V.buttonBackground_selected ?? vo.activeBackground) || ""),
        v.style.setProperty("--active-border", fr(V.buttonBorder_selected ?? vo.activeBorderColor) || ""),
        v.append(S);
        function g(C) {
            if (S.checked && S.classList.contains("tpo_checked"))
                S.checked = !1,
                Wi(_.getAttribute("id"), "name", "", !0, "FONT"),
                v.classList.remove("tpo_is_checked_buttons"),
                S.classList.remove("tpo_checked"),
                s.value = "",
                p.pop(),
                l(),
                yt(st, b, 0),
                dt(ke(t, o), t),
                a && (La(_, r, {}),
                Qr(_, c, {}));
            else {
                S.checked = !0,
                Wi(_.getAttribute("id"), "name", i, !0, "FONT");
                const w = x.querySelectorAll(".tpo_is_checked_buttons");
                if (w && w.length && w.forEach($ => {
                    $.classList.remove("tpo_is_checked_buttons")
                }
                ),
                v.classList.add("tpo_is_checked_buttons"),
                S.classList.add("tpo_checked"),
                p[0] = i.name,
                h) {
                    let $ = PriceFormatter.formatMoney(parseFloat(h * 100), !0);
                    p[0] = `${i.name} [ +${$} ]`,
                    s.value = `${S.value} [ +${$} ]`
                } else
                    p[0] = i.name,
                    s.value = S.value;
                l(),
                yt(st, b, h),
                dt(ke(t, o), t),
                a && !_.classList.contains("tpo_hidden") && (La(_, r, i),
                Qr(_, c, i))
            }
        }
        return v.addEventListener("click", C => {
            C.preventDefault()
        }
        ),
        v.addEventListener("pointerup", g),
        y.append(v),
        m === i.name && setTimeout( () => {
            g()
        }
        , 200),
        y
    }
    function vl(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u) {
        i && !i.url && td([i.name], b);
        const x = document.createElement("div");
        return Object.assign(x, {
            className: "tpo_font-picker-element",
            innerHTML: `<span>${i.name}</span>`,
            onclick: function(_) {
                if (_.stopPropagation(),
                l) {
                    let m = PriceFormatter.formatMoney(parseFloat(l * 100), !0);
                    n[0] = `${i.name} [ +${m} ]`,
                    f.value = `${i.name} [ +${m} ]`
                } else
                    n[0] = i.name,
                    f.value = i.name;
                p(),
                yt(st, s, l),
                dt(ke(t, o), t),
                a && !b.classList.contains("tpo_hidden") && (La(b, r, i),
                Qr(b, c, i)),
                La(b, d, i),
                Wi(b.getAttribute("id"), "name", i, !0, "FONT"),
                h.firstElementChild.textContent = i.name,
                h.firstElementChild.value = i.name,
                h.classList.remove("show")
            }
        }),
        x.style.fontFamily = i.name,
        u === i.name && setTimeout( () => {
            x.click()
        }
        , 200),
        x
    }
    function td(t, o) {
        if (!t || !t.length)
            return;
        let i = "https://fonts.googleapis.com/css?family="
          , a = "";
        t.forEach(c => {
            if (!c)
                return;
            let d = c.replaceAll(" ", "+");
            a += `${d}|`
        }
        );
        const r = i + a;
        return to("link", "stylesheet", r, o)
    }
    function La(t, o, i) {
        const r = t?.parentElement?.querySelector(`[name*="properties[${o}]"]`);
        r && (i?.name ? r.style.cssText = `${r.style.cssText} font-family: ${i?.name};` : r.style.removeProperty("font-family"))
    }
    function Qr(t, o, i) {
        Array.isArray(o) && o.length && o.forEach(a => {
            La(t, a, i)
        }
        )
    }
    function Sl(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u, x, _, m, S, v, y, g, C, w, $, L, P, k, A, R, Q, I, F, ee) {
        const K = y.id
          , H = JSON.parse(y.metadata || "{}")
          , E = (H.option_display_popup || "show-option-list") === "show-option-swatches"
          , j = (H.button_style || "style-2") === "style-1"
          , N = H.popup_mode || "popup";
        let U = i.map( (M, z) => {
            let X = !1
              , J = M.label;
            const te = M.additional_price || null;
            if (te) {
                let ue = PriceFormatter.formatMoney(parseFloat(te * 100), !0);
                J = `${M.label} [ +${ue} ]`
            }
            return m && h.find(ue => ue === M.id) && (X = !0),
            E ? $m(t, o, M, a, z, d, n, f, p, s, l, b, J, h, _, m, X, r, S, g, y, c, C, w, $, L, P, k, A, R, Q, j, I, N, F) : Em(t, o, M, a, z, d, n, f, p, s, l, b, J, h, _, m, X, r, S, g, y, c, C, w, $, L, P, k, A, R, Q, j, I, N, F, ee)
        }
        );
        const O = document.getElementById(`wrap-product-list-${K}${v !== void 0 ? `-${v}` : ""}`);
        if (E || (O?.style.setProperty("--radio-border", V?.radioBorder_unselected ?? ""),
        O?.style.setProperty("--active-radio-border", V?.radioBorder_selected ?? ""),
        O?.style.setProperty("--radio-background", V?.radioBackground_unselected ?? ""),
        O?.style.setProperty("--active-radio-background", V?.radioBackground_selected ?? ""),
        O?.style.setProperty("--radio-checkMark", V?.radioCheckmark_unselected ?? ""),
        O?.style.setProperty("--active-radio-checkMark", V?.radioCheckmark_selected ?? "")),
        O) {
            for (; O.firstChild; )
                O.removeChild(O.firstChild);
            O.className = E ? `wrap-product-list-image-swatches tpo_option-type-image-swatches-wrapper ${Pi ? "tpo_compatible_product-list-theme" : ""}` : `wrap-product-list ${j ? "product-list-style-1" : ""} ${Pi ? "tpo_compatible_product-list-theme" : ""}`,
            O.append(...U)
        } else {
            let M = document.createElement("div");
            Object.assign(M, {
                className: E ? `wrap-product-list-image-swatches tpo_option-type-image-swatches-wrapper ${Pi ? "tpo_compatible_product-list-theme" : ""}` : `wrap-product-list ${j ? "product-list-style-1" : ""} ${Pi ? "tpo_compatible_product-list-theme" : ""}`,
                id: `wrap-product-list-${K}${v !== void 0 ? `-${v}` : ""}`
            }),
            M.append(...U),
            u.append(M)
        }
    }
    function Em(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u, x, _, m, S, v, y, g, C, w, $, L, P, k, A, R, Q, I, F, ee, K, H) {
        let {label: T, is_default: E, additional_price: q=null, id: j, image_url: N, number_color: U, color_code: O="", image_canvas_url: M, image_id: z, product_id: X, variant_id: J, metadata: te="{}"} = i || {};
        O || (O = ",");
        const ue = O?.split(",")
          , me = y?.image_color ?? 0
          , Me = JSON.parse(te || "{}")
          , Te = Me.printBoxName ? Me.printBoxName : ""
          , we = Me.printBoxValue ? Me.printBoxValue : ""
          , Ce = Me.url || "";
        let Le = Ce.startsWith("/") || Ce.startsWith("http") ? Ce : `https://${Ce}`;
        Me.description;
        const je = Me.tooltip || "";
        gr(je);
        const Ae = C.configs
          , Z = C.enable;
        let Ue = {};
        const ft = y.id;
        let le = "";
        if (k && k.length) {
            const de = k.find(qe => qe.typeId === j);
            de && (le = de.quantity)
        }
        const at = y.is_change_label
          , bt = JSON.parse(y.metadata || "{}");
        let {useUrl: oe=!1, linkDisplay: Ve="separate", linkLabel: Ne, separateAddOnProduct: pe=!1} = bt;
        Ne || (Ne = "View"),
        Le = Fa(oe, Le);
        const lt = oe && Ve === "separate"
          , St = oe && Ve === "clickable_label";
        if (J && Mi.forEach(de => {
            de.variants.forEach(qe => {
                `${qe.id}` === J && (Ue = {
                    ...de,
                    variants: [{
                        ...qe
                    }]
                })
            }
            )
        }
        ),
        Ue.variants) {
            at || (i.label = Ue.variants[0].title === "Default Title" ? Ue.variants[0].name : Ue.variants[0].title,
            T = i.label),
            q = Ue.variants[0].price / 100;
            let de = PriceFormatter.formatMoney(parseFloat(q * 100), !0);
            q && (b = `${T} [ +${de} ]`)
        }
        let _t = Ue?.variants !== void 0 ? Ue.variants[0].available : !0;
        !Ue.variants && J && (_t = !1);
        let it = Re["SOLD OUT"] && Re["SOLD OUT"][xt] || "SOLD OUT";
        if (!_t && !i.label.includes(` - ${it}`) && !di && (i.label = `${T} <span class="tpo_sold_out_hyphen">- </span><span class="tpo_sold_out_text">${it}</span>`,
        T = i.label),
        Lt?.outStockOptions === "hide" && !_t)
            return "";
        let Be = document.createElement("span");
        Object.assign(Be, {
            className: `tpo_additional-price ${l !== 0 ? "" : "tpo_hidden"}`
        });
        const {quantitySelectorWrapper: Ge, errorMessageElement: ct} = Z ? w(Ae, q, Xe, j, ft, pr, le, ut) : {
            quantitySelectorWrapper: null,
            errorMessageElement: null
        };
        let Y = document.createElement("label");
        if (_t && E && !x) {
            if (m === 1)
                Ft === -1 && (Ft = y.option_set_id),
                Z ? (Ge.classList.remove("swatches-not-avaliable"),
                Ge.querySelector("input").disabled = !1,
                He()) : f.push({
                    id: j,
                    price: q
                }),
                S.push(b),
                h.push(j);
            else {
                if (Z) {
                    const de = Y.querySelectorAll(".tpo_quantity-selector_wrapper");
                    de && de.length && de.forEach(qe => {
                        qe.classList.add("swatches-not-avaliable")
                    }
                    ),
                    Ge.classList.remove("swatches-not-avaliable"),
                    Ge.querySelector("input").disabled = !1,
                    He()
                } else {
                    let de = T;
                    if (q) {
                        let qe = PriceFormatter.formatMoney(parseFloat(q * 100), !0);
                        de = `${T} [ +${qe} ]`
                    }
                    S[0] = de,
                    f[0] = {
                        id: j,
                        price: q
                    }
                }
                h[0] = j
            }
            u(j),
            t.tagName === "FORM" && setTimeout(function() {
                v ? dt(ke(t, o), t) : ke(t, o)
            }, 500)
        }
        let Se = document.createElement("input");
        m === 1 ? (Y.style.setProperty("--checkbox-border", V?.checkboxBorder_unselected ?? ""),
        Y.style.setProperty("--active-checkbox-border", V?.checkboxBorder_selected ?? ""),
        Y.style.setProperty("--checkbox-background", V?.checkboxBackground_unselected ?? ""),
        Y.style.setProperty("--active-checkbox-background", V?.checkboxBackground_selected ?? ""),
        Y.style.setProperty("--active-checkbox-checkMark", V?.checkboxCheckmark_selected ?? ""),
        Object.assign(Se, {
            className: `${I ? "tpo_color-swatches-input tpo_image-swatches-input" : "tpo_radio-button"}`,
            type: "checkbox",
            checked: h.find(de => de === j) || _,
            disabled: !di && !_t,
            value: b,
            onchange: Nt
        }),
        Se.dataset.checked = h.find(de => de === j) || _) : (Object.assign(Se, {
            className: `${I ? "tpo_color-swatches-input tpo_image-swatches-input" : "tpo_radio-button"} ${Pi ? "tpo_compatible_radio-theme" : ""}`,
            type: "radio",
            value: T,
            checked: (h.find(de => de === j) || _) && _t,
            disabled: !di && !_t,
            name: `${a}`,
            onclick: Nt
        }),
        Se.dataset.checked = (h.find(de => de === j) || _) && _t),
        J && (Se.dataset.productId = X,
        Se.dataset.variantId = J),
        Io && (Se.dataset.printBoxName = Te,
        Se.dataset.printBoxValue = we);
        let ie = document.createElement("div");
        Object.assign(ie, {
            className: "container_wrapper"
        }),
        ie.append(Y);
        let _e = "";
        at ? _e = T : _e = Ue.variants ? Ue.variants[0].title === "Default Title" ? Ue.variants[0].name : Ue.variants[0].title : T;
        let Oe = Na({
            imageOrColor: me,
            numberColor: U,
            swatchShape: g,
            colorCodes: ue,
            imageUrl: N,
            onlyReturnColor: !0
        });
        if (I) {
            const de = window.innerWidth < 768;
            let qe = 86;
            ee == "full-screen" && !de && (qe = 250);
            const Ie = bt?.customSwatchSizeEnabled === !0
              , Qe = Ie ? bt?.customSwatchWidth ?? qe : Kt.imageSwatchWidth ?? wi.swatchWidth ?? qe
              , Mt = Ie ? bt?.customSwatchHeight ?? qe : Kt.imageSwatchHeight ?? wi.swatchHeight ?? qe
              , Jt = `${Qe}px`
              , Bt = `${Mt}px`;
            Y.style.setProperty("--swatch-width", Jt),
            Y.style.setProperty("--swatch-height", Bt)
        }
        if (Object.assign(Y, {
            className: "tpo_product_list-wraper",
            innerHTML: `${J ? `<div class="product_list-option_value ${!di && !_t ? "out_stock_label" : ""}">
                        ${Oe !== null ? Oe || (Ue.image || N && N !== Dt && N !== wo ? `<div ${I ? "" : 'style="height: 46px;"'} class="product_list-image_product ${Pi ? "tpo_compatible-product-list-image" : ""} tpo_image_shape_${g || "square"}">
                                <img ${I ? "" : 'width="46px;" height="46px;"'} src="${Ma(Ue, N)}" />
                            </div>` : "") : ""}
                        <div class="product_list-detail_product">
                            <div
                                class="tpo_ ${tt.fontStyle} tpo_url_wrapper"
                                style="color: ${V.optionValueColor ?? tt.fontColor}; font-size: ${tt.fontSize}px; ${tt?.fontFamily ? `font-family: ${tt?.fontFamily};` : ""}"
                            >
                                ${lt ? `<span class="tpo_option_type_label">${_e} </span> <a class="tpo_url_value tpo_view_more" href="${Le}" target="_blank">${Ne}</a>` : St ? `<span class="tpo_option_type_label"><a class="tpo_url_value" href="${Le}" target="_blank">${_e}</a> </span>` : `<span class="tpo_option_type_label">${_e} </span>`}
                            </div>
                        </div>
                        
                    </div>` : `<div class="product_list-option_value">
                ${Oe !== null ? Oe || (N && N !== Dt && N !== wo ? `<div ${I ? "" : 'style="height: 46px;"'} class="product_list-image_product ${Pi ? "tpo_compatible_image" : ""} tpo_image_shape_${g || "square"}">
                        <img ${I ? "" : 'width="46px;" height="46px;"'} src="${Ma(Ue, N)}" />
                    </div>` : "") : ""}
                <div class="product_list-detail_product">
                    <div
                        class="tpo_ ${tt.fontStyle} tpo_url_wrapper"
                        style="color: ${V.optionValueColor ?? tt.fontColor}; 
                        font-size: ${tt.fontSize}px; 
                        ${tt?.fontFamily ? `font-family: ${tt?.fontFamily};` : ""}"
                    >
                        ${lt ? `<span class="tpo_option_type_label">${_e} </span> <a class="tpo_url_value tpo_view_more" href="${Le}" target="_blank">${Ne}</a>` : St ? `<span class="tpo_option_type_label"><a class="tpo_url_value" href="${Le}" target="_blank">${_e}</a> </span>` : `<span class="tpo_option_type_label">${_e} </span>`}
                    </div>
                </div>
            </div>`}
            
        `
        }),
        Ge) {
            const de = document.createElement("div");
            Object.assign(de, {
                className: "tpo-quantity_always-show"
            }),
            de.append(Ge, ct),
            ie.append(de)
        }
        function He() {
            const de = Ge.querySelector("input").value
              , qe = Ge.querySelector("input");
            if (qe && qe.dispatchEvent(new Event("change")),
            de)
                if (q) {
                    const Ie = q * Number(de);
                    Xe(Ie, de)
                } else
                    Xe(0, de);
            else if (Ge.querySelector("input").value = 1,
            q) {
                const Ie = q * 1;
                Xe(Ie, 1)
            } else
                Xe(0, 1)
        }
        function Xe(de, qe) {
            const Ie = JSON.parse(i.metadata || "{}");
            if (m === 0)
                if (de) {
                    let Qe = PriceFormatter.formatMoney(parseFloat(de * 100), !0);
                    k[0] = {
                        typeId: j,
                        label: `${T} [ +${Qe} ] | ${qe}`,
                        quantity: qe,
                        metadata: Ie
                    }
                } else
                    k[0] = {
                        typeId: j,
                        label: `${T} | ${qe}`,
                        quantity: qe,
                        metadata: Ie
                    };
            else if (de)
                if (!k.find(Qe => Qe.typeId === j))
                    PriceFormatter.formatMoney(parseFloat(de * 100), !0),
                    k.push({
                        typeId: j,
                        label: T,
                        quantity: qe,
                        metadata: Ie
                    });
                else {
                    const Qe = k.findIndex(Bt => Bt.typeId === j)
                      , Mt = k[Qe].label.lastIndexOf("|");
                    k[Qe].label.slice(Mt + 1).trim();
                    let Jt = PriceFormatter.formatMoney(parseFloat(de * 100), !0);
                    k[Qe].label = `${T} [ +${Jt} ] | ${qe}`,
                    k[Qe].quantity = qe,
                    k[Qe].metadata = Ie
                }
            else if (!k.find(Qe => Qe.typeId === j) || !k.length)
                k.push({
                    typeId: j,
                    label: `${T} | ${qe}`,
                    quantity: qe,
                    metadata: Ie
                });
            else {
                const Qe = k.findIndex(Mt => Mt.typeId === j);
                k[Qe].label = `${T} | ${qe}`,
                k[Qe].quantity = qe,
                k[Qe].metadata = Ie
            }
            I && (Si(A, 0, C.configs, Q, A),
            F())
        }
        function ut() {
            Se.checked = !1,
            Nt({
                target: {
                    checked: !1,
                    midEvent: !0
                }
            })
        }
        function Nt(de) {
            if (m === 1)
                if (de.target.checked) {
                    if (h.push(j),
                    oi(j, M || N, !0),
                    I && Y.classList.add("tpo_is_checked_list"),
                    Z && (Ge.classList.remove("swatches-not-avaliable"),
                    Ge.querySelector("input").disabled = !1,
                    He()),
                    q) {
                        let qe = PriceFormatter.formatMoney(parseFloat(q * 100), !0);
                        S.push(`${T} [ +${qe} ]`)
                    } else
                        S.push(T);
                    f.push({
                        id: j,
                        price: q
                    }),
                    de.target.dataset.checked = "true"
                } else {
                    let qe = T;
                    if (oi(j, M || N, !1),
                    I && Y.classList.remove("tpo_is_checked_list"),
                    q) {
                        let Qe = PriceFormatter.formatMoney(parseFloat(q * 100), !0);
                        qe = `${T} [ +${Qe} ]`
                    }
                    const Ie = S.indexOf(qe);
                    if (Ie > -1 && (S.splice(Ie, 1),
                    h.splice(Ie, 1),
                    f.splice(Ie, 1)),
                    Ge) {
                        const Qe = k.findIndex(Mt => Mt.typeId === j);
                        k.splice(Qe, 1),
                        Ge.classList.add("swatches-not-avaliable"),
                        Ge.querySelector("input").disabled = !0,
                        Ge.classList.remove("tpo-error_validate"),
                        ct.innerHTML = ""
                    }
                    de.target && de.target.dataset ? de.target.dataset.checked = "false" : de.target && (de.target.checked = !1)
                }
            else {
                const qe = de.target.value;
                let Ie = T;
                if (q) {
                    let Qe = PriceFormatter.formatMoney(parseFloat(q * 100), !0);
                    Ie = `${qe} [ +${Qe} ]`
                }
                if (Ie !== S[0] && !de.target.midEvent) {
                    if (de.target.checked) {
                        const Qe = h[0];
                        Qe && Qe !== j && H && oi(Qe, M || N, !1);
                        const Mt = de.target.closest(".container_wrapper");
                        if (Mt) {
                            const Bt = Mt.querySelector(".tpo_quantity-selector_input")
                              , kt = Bt ? Bt.value : null;
                            Bt && (kt && kt === "0" ? Bt.value = "1" : Bt.value = kt)
                        }
                        oi(H ? j : ft, M || N, !0),
                        I && (A.querySelectorAll(".tpo_product_list-wraper").forEach(Bt => {
                            Bt.classList.remove("tpo_is_checked_list")
                        }
                        ),
                        Y.classList.add("tpo_is_checked_list")),
                        h[0] = j,
                        S[0] = Ie,
                        f[0] = {
                            id: j,
                            price: q
                        };
                        const Jt = A.querySelectorAll(".tpo_quantity-selector_wrapper");
                        Jt && Jt.length && Jt.forEach(Bt => {
                            Bt.classList.add("swatches-not-avaliable"),
                            Bt.classList.remove("tpo-error_validate");
                            const kt = Bt.parentElement.querySelector(".tpo_error-message");
                            kt && (kt.innerHTML = "")
                        }
                        ),
                        Z && (Ge.classList.remove("swatches-not-avaliable"),
                        Ge.querySelector("input").disabled = !1,
                        He())
                    }
                    de.target.dataset.checked = "true"
                } else
                    de.target.checked = !1,
                    oi(H ? j : ft, M || N, !1),
                    I && Y.classList.remove("tpo_is_checked_list"),
                    S.pop(),
                    h.pop(),
                    f.pop(),
                    Ge && (k.pop(),
                    Ge.classList.add("swatches-not-avaliable"),
                    Ge.querySelector("input").disabled = !0,
                    Ge.classList.remove("tpo-error_validate"),
                    ct.innerHTML = ""),
                    de.target && de.target.dataset ? de.target.dataset.checked = "false" : de.target && (de.target.checked = !1);
                !Z && I && K()
            }
            I && (Si(A, 0, C.configs, Q, A),
            F())
        }
        k && k.length && k.find(qe => qe.typeId === j) && (Ge.classList.remove("swatches-not-avaliable"),
        Ge.querySelector("input").disabled = !1),
        I && (_ || h.find(de => de === j)) && Y.classList.add("tpo_is_checked_list"),
        yt(st, Be, q),
        Y.firstElementChild.prepend(Se),
        Y.querySelector(".tpo_option_type_label")?.append(Be);
        const We = So(i.metadata);
        if (We) {
            const de = Y.querySelector(".tpo_option_type_label");
            de ? de.appendChild(We) : Y.prepend(We)
        }
        return ie
    }
    function $m(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u, x, _, m, S, v, y, g, C, w, $, L, P, k, A, R, Q, I, F, ee, K) {
        let {label: H, is_default: T, additional_price: E=null, id: q, image_url: j, number_color: N, color_code: U="", image_canvas_url: O, image_id: M, product_id: z, variant_id: X, metadata: J="{}"} = i || {};
        U || (U = ",");
        const te = U?.split(",")
          , ue = y?.image_color ?? 0
          , me = JSON.parse(J || "{}")
          , Me = me.printBoxName ? me.printBoxName : ""
          , Te = me.printBoxValue ? me.printBoxValue : ""
          , we = me.url || "";
        let Ce = we.startsWith("/") || we.startsWith("http") ? we : `https://${we}`;
        me.description;
        const Le = me.tooltip || "";
        gr(Le);
        const je = C.configs
          , Ae = C.enable;
        let Z = {};
        const Ue = y.id;
        let ft = "";
        if (k && k.length) {
            const ye = k.find(xe => xe.typeId === q);
            ye && (ft = ye.quantity)
        }
        const le = y.is_change_label
          , at = JSON.parse(y.metadata || "{}");
        let {useUrl: bt=!1, linkDisplay: oe="separate", linkLabel: Ve, separateAddOnProduct: Ne=!1} = at;
        Ve || (Ve = "View"),
        Ce = Fa(bt, Ce);
        const pe = bt && oe === "separate"
          , lt = bt && oe === "clickable_label";
        if (X && Mi.forEach(ye => {
            ye.variants.forEach(xe => {
                `${xe.id}` === X && (Z = {
                    ...ye,
                    variants: [{
                        ...xe
                    }]
                })
            }
            )
        }
        ),
        Z.variants) {
            le || (i.label = Z.variants[0].title === "Default Title" ? Z.variants[0].name : Z.variants[0].title,
            H = i.label),
            E = Z.variants[0].price / 100;
            let ye = PriceFormatter.formatMoney(parseFloat(E * 100), !0);
            E && (b = `${H} [ +${ye} ]`)
        }
        let St = Z?.variants !== void 0 ? Z.variants[0].available : !0;
        !Z.variants && X && (St = !1);
        let _t = Re["SOLD OUT"] && Re["SOLD OUT"][xt] || "SOLD OUT";
        if (!St && !i.label.includes(` - ${_t}`) && !di && (i.label = `${H} <span class="tpo_sold_out_hyphen">- </span><span class="tpo_sold_out_text">${_t}</span>`,
        H = i.label),
        Lt?.outStockOptions === "hide" && !St)
            return "";
        let it = document.createElement("span");
        Object.assign(it, {
            className: `tpo_additional-price ${l !== 0 ? "" : "tpo_hidden"}`
        });
        const {quantitySelectorWrapper: Be, errorMessageElement: Ge} = Ae ? w(je, E, Xt, q, Ue, pr, ft, xi) : {
            quantitySelectorWrapper: null,
            errorMessageElement: null
        };
        let ct = document.createElement("label");
        if (St && T && !x) {
            if (m === 1)
                Ft === -1 && (Ft = y.option_set_id),
                Ae ? (Be.classList.remove("swatches-not-avaliable"),
                Be.querySelector("input").disabled = !1,
                Ot()) : f.push({
                    id: q,
                    price: E
                }),
                S.push(b),
                h.push(q);
            else {
                if (Ae) {
                    const ye = ct.querySelectorAll(".tpo_quantity-selector_wrapper");
                    ye && ye.length && ye.forEach(xe => {
                        xe.classList.add("swatches-not-avaliable")
                    }
                    ),
                    Be.classList.remove("swatches-not-avaliable"),
                    Be.querySelector("input").disabled = !1,
                    Ot()
                } else {
                    let ye = H;
                    if (E) {
                        let xe = PriceFormatter.formatMoney(parseFloat(E * 100), !0);
                        ye = `${H} [ +${xe} ]`
                    }
                    S[0] = ye,
                    f[0] = {
                        id: q,
                        price: E
                    }
                }
                h[0] = q
            }
            u(q),
            t.tagName === "FORM" && setTimeout(function() {
                v ? dt(ke(t, o), t) : ke(t, o)
            }, 500)
        }
        let Y = document.createElement("input");
        m === 1 ? (ct.style.setProperty("--checkbox-border", V?.checkboxBorder_unselected ?? ""),
        ct.style.setProperty("--active-checkbox-border", V?.checkboxBorder_selected ?? ""),
        ct.style.setProperty("--checkbox-background", V?.checkboxBackground_unselected ?? ""),
        ct.style.setProperty("--active-checkbox-background", V?.checkboxBackground_selected ?? ""),
        ct.style.setProperty("--active-checkbox-checkMark", V?.checkboxCheckmark_selected ?? ""),
        Object.assign(Y, {
            className: "tpo_color-swatches-input tpo_image-swatches-input",
            type: "checkbox",
            checked: h.find(ye => ye === q) || _,
            disabled: !di && !St,
            value: b,
            onchange: fi
        }),
        Y.dataset.checked = h.find(ye => ye === q) || _) : (Object.assign(Y, {
            className: `tpo_color-swatches-input tpo_image-swatches-input ${Pi ? "tpo_compatible_radio-theme" : ""}`,
            type: "radio",
            value: H,
            checked: (h.find(ye => ye === q) || _) && St,
            disabled: !di && !St,
            name: `${a}`,
            onclick: fi
        }),
        Y.dataset.checked = (h.find(ye => ye === q) || _) && St),
        X && (Y.dataset.productId = z,
        Y.dataset.variantId = X),
        Io && (Y.dataset.printBoxName = Me,
        Y.dataset.printBoxValue = Te);
        let Se = document.createElement("div");
        Object.assign(Se, {
            className: `tpo_swatches-label_position under below_value tpo_image-swatch-always ${St ? "" : "swatches-not-avaliable"}`
        });
        let ie = "";
        le ? ie = H : ie = Z.variants ? Z.variants[0].title === "Default Title" ? Z.variants[0].name : Z.variants[0].title : H;
        let _e = Na({
            imageOrColor: ue,
            numberColor: N,
            swatchShape: g,
            colorCodes: te,
            imageUrl: j,
            onlyReturnColor: !0
        });
        ue === 1 && N === 3 && (_e = `<div class='tpo_color-swatches-wrapper'>
                <label class='tpo_shape_${g}'>
                    <div><span style='
                background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
                    linear-gradient(-45deg, #ccc 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #ccc 75%),
                    linear-gradient(-45deg, transparent 75%, #ccc 75%);
                background-size: 16px 16px;
                background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
            '></span></div>
                </label>
            </div>`);
        const Oe = Ma(Z, j)
          , He = X && Z.image || j && j !== Dt && j !== wo;
        at?.swatchShape,
        ct.classList.add(`tpo_shape_${g || "square"}`),
        ct.style.borderColor = V.imageSwatchesBorder_unselected ?? wi.borderColor;
        const Xe = window.innerWidth < 768;
        let ut = 86;
        ee == "full-screen" && !Xe && (ut = 250);
        const Nt = at?.customSwatchSizeEnabled === !0
          , We = at?.customSwatchWidth
          , de = at?.customSwatchHeight
          , qe = Nt ? We ?? ut : Kt.imageSwatchWidth ?? wi.swatchWidth ?? ut
          , Ie = Nt ? de ?? ut : Kt.imageSwatchHeight ?? wi.swatchHeight ?? ut;
        ct.style.width = qe ? `${qe}px` : `${Kt.imageSwatchSize ?? wi.swatchSize ?? ut}px`,
        ct.style.height = Ie ? `${Ie}px` : `${Kt.imageSwatchSize ?? wi.swatchSize ?? ut}px`;
        const Qe = qe ? `${qe}px` : `${Kt.imageSwatchSize ?? wi.swatchSize ?? ut}px`
          , Mt = Ie ? `${Ie}px` : `${Kt.imageSwatchSize ?? wi.swatchSize ?? ut}px`;
        ct.style.setProperty("--swatch-width", Qe),
        ct.style.setProperty("--swatch-height", Mt),
        ct.style.setProperty("--active-imageSwatches-border", V.imageSwatchesBorder_selected || wi.activeBorderColor || "");
        const Jt = qe ? `${qe}px` : `${Kt.imageSwatchSize ?? wi.swatchSize ?? ut}px`
          , Bt = Ie ? `${Ie}px` : `${Kt.imageSwatchSize ?? wi.swatchSize ?? ut}px`
          , kt = Jt || Bt ? "object-fit: cover;" : "";
        if (_e !== null && _e)
            ct.innerHTML = _e;
        else if (He && Oe) {
            const ye = Fd(Oe, 500);
            ct.innerHTML = `
                <div><img class="tpo_image-swatch-img" src="${ye || Dt}" loading="lazy" alt="${ie}" style="width: ${Jt}; height: ${Bt}; ${kt}"/></div>
            `
        } else
            ct.innerHTML = `
                <div><img class="tpo_image-swatch-img" src="${Dt}" loading="lazy" alt="${ie}" style="width: ${Jt}; height: ${Bt}; ${kt}"/></div>
            `;
        let wt = document.createElement("div");
        wt.style.color = V.optionValueColor ?? tt.fontColor,
        wt.style.setProperty("--swatch-option-color", V.optionValueColor ?? tt.fontColor ?? ""),
        wt.style.fontSize = `${tt.fontSize}px`,
        tt?.fontFamily && (wt.style.fontFamily = tt.fontFamily);
        let Et = PriceFormatter.formatMoney(parseFloat(E * 100), !0);
        if (Object.assign(wt, {
            className: `tpo_option_type_label_wrapper ${tt.fontStyle ? `tpo_${tt.fontStyle}` : ""} ${St ? "" : "out_stock_label"}`,
            innerHTML: `
                <span class="tpo_option_type_label_and_price tpo-swatch-option-label">
                    <span class="tpo_option_type_label">
                        <span class="tpo_option_label">
                           ${lt ? `<a class="tpo_url_value" href="${Ce}" target="_blank">${ie}</a>` : ie}
                        </span>
                        <span class="tpo_additional-price">
                            ${E && l !== 0 ? `<span>${Et}</span>` : ""}
                        </span>
                        ${pe ? `<a class="tpo_url_value tpo_view_more" href="${Ce}" target="_blank">${Ve}</a>` : ""}
                    </span>
                </span>
            `
        }),
        Se.append(ct, wt),
        Be) {
            const ye = document.createElement("div");
            Object.assign(ye, {
                className: "tpo-quantity_always-show"
            }),
            ye.append(Be, Ge),
            Se.append(ye)
        }
        function Ot() {
            const ye = Be.querySelector("input").value
              , xe = Be.querySelector("input");
            if (xe && xe.dispatchEvent(new Event("change")),
            ye)
                if (E) {
                    const Ye = E * Number(ye);
                    Xt(Ye, ye)
                } else
                    Xt(0, ye);
            else if (Be.querySelector("input").value = 1,
            E) {
                const Ye = E * 1;
                Xt(Ye, 1)
            } else
                Xt(0, 1)
        }
        function Xt(ye, xe) {
            const Ye = JSON.parse(i.metadata || "{}");
            if (m === 0)
                if (ye) {
                    let Ze = PriceFormatter.formatMoney(parseFloat(ye * 100), !0);
                    k[0] = {
                        typeId: q,
                        label: `${H} [ +${Ze} ] | ${xe}`,
                        quantity: xe,
                        metadata: Ye
                    }
                } else
                    k[0] = {
                        typeId: q,
                        label: `${H} | ${xe}`,
                        quantity: xe,
                        metadata: Ye
                    };
            else if (ye)
                if (!k.find(Ze => Ze.typeId === q))
                    PriceFormatter.formatMoney(parseFloat(ye * 100), !0),
                    k.push({
                        typeId: q,
                        label: H,
                        quantity: xe,
                        metadata: Ye
                    });
                else {
                    const Ze = k.findIndex(qo => qo.typeId === q)
                      , Ut = k[Ze].label.lastIndexOf("|");
                    k[Ze].label.slice(Ut + 1).trim();
                    let Di = PriceFormatter.formatMoney(parseFloat(ye * 100), !0);
                    k[Ze].label = `${H} [ +${Di} ] | ${xe}`,
                    k[Ze].quantity = xe,
                    k[Ze].metadata = Ye
                }
            else if (!k.find(Ze => Ze.typeId === q) || !k.length)
                k.push({
                    typeId: q,
                    label: `${H} | ${xe}`,
                    quantity: xe,
                    metadata: Ye
                });
            else {
                const Ze = k.findIndex(Ut => Ut.typeId === q);
                k[Ze].label = `${H} | ${xe}`,
                k[Ze].quantity = xe,
                k[Ze].metadata = Ye
            }
            I && (Si(A, 0, C.configs, Q, A),
            F())
        }
        function xi() {
            Y.checked = !1,
            fi({
                target: {
                    checked: !1,
                    midEvent: !0
                }
            })
        }
        function fi(ye) {
            if (m === 1)
                if (ye.target.checked) {
                    if (h.push(q),
                    oi(q, O || j, !0),
                    ct.classList.add("tpo_is_checked_swatches"),
                    Ae && (Be.classList.remove("swatches-not-avaliable"),
                    Be.querySelector("input").disabled = !1,
                    Ot()),
                    E) {
                        let xe = PriceFormatter.formatMoney(parseFloat(E * 100), !0);
                        S.push(`${H} [ +${xe} ]`)
                    } else
                        S.push(H);
                    f.push({
                        id: q,
                        price: E
                    }),
                    ye.target.dataset.checked = "true"
                } else {
                    let xe = H;
                    if (oi(q, O || j, !1),
                    ct.classList.remove("tpo_is_checked_swatches"),
                    E) {
                        let Ze = PriceFormatter.formatMoney(parseFloat(E * 100), !0);
                        xe = `${H} [ +${Ze} ]`
                    }
                    const Ye = S.indexOf(xe);
                    if (Ye > -1 && (S.splice(Ye, 1),
                    h.splice(Ye, 1),
                    f.splice(Ye, 1)),
                    Be) {
                        const Ze = k.findIndex(Ut => Ut.typeId === q);
                        k.splice(Ze, 1),
                        Be.classList.add("swatches-not-avaliable"),
                        Be.querySelector("input").disabled = !0,
                        Be.classList.remove("tpo-error_validate"),
                        Ge.innerHTML = ""
                    }
                    ye.target && ye.target.dataset ? ye.target.dataset.checked = "false" : ye.target && (ye.target.checked = !1)
                }
            else {
                const xe = ye.target.value;
                let Ye = H;
                if (E) {
                    let Ze = PriceFormatter.formatMoney(parseFloat(E * 100), !0);
                    Ye = `${xe} [ +${Ze} ]`
                }
                if (Ye !== S[0] && !ye.target.midEvent) {
                    if (ye.target.checked) {
                        oi(Ue, O || j, !0),
                        h[0] = q,
                        S[0] = Ye,
                        f[0] = {
                            id: q,
                            price: E
                        },
                        A.querySelectorAll(".tpo_option-type-image-swatches-wrapper label").forEach(Ut => {
                            Ut.classList.remove("tpo_is_checked_swatches")
                        }
                        ),
                        ct.classList.add("tpo_is_checked_swatches");
                        const Ze = A.querySelectorAll(".tpo_quantity-selector_wrapper");
                        Ze && Ze.length && Ze.forEach(Ut => {
                            Ut.classList.add("swatches-not-avaliable"),
                            Ut.classList.remove("tpo-error_validate");
                            const Di = Ut.parentElement.querySelector(".tpo_error-message");
                            Di && (Di.innerHTML = "")
                        }
                        ),
                        Ae && (Be.classList.remove("swatches-not-avaliable"),
                        Be.querySelector("input").disabled = !1,
                        Ot())
                    }
                    ye.target.dataset.checked = "true"
                } else
                    ye.target.checked = !1,
                    oi(Ue, O || j, !1),
                    ct.classList.remove("tpo_is_checked_swatches"),
                    S.pop(),
                    h.pop(),
                    f.pop(),
                    Be && (k.pop(),
                    Be.classList.add("swatches-not-avaliable"),
                    Be.querySelector("input").disabled = !0,
                    Be.classList.remove("tpo-error_validate"),
                    Ge.innerHTML = ""),
                    ye.target && ye.target.dataset ? ye.target.dataset.checked = "false" : ye.target && (ye.target.checked = !1);
                Ae || K()
            }
            I && (Si(A, 0, C.configs, Q, A),
            F())
        }
        k && k.length && k.find(xe => xe.typeId === q) && (Be.classList.remove("swatches-not-avaliable"),
        Be.querySelector("input").disabled = !1),
        (_ || h.find(ye => ye === q)) && ct.classList.add("tpo_is_checked_swatches"),
        ct.append(Y);
        const ai = So(i.metadata);
        if (ai) {
            const ye = Se.querySelector(".tpo_swatches-label_position label");
            ye ? ye.appendChild(ai) : wt.prepend(ai)
        }
        return Se
    }
    function Tm(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u) {
        const {is_required: x, placeholder: _, type: m, option_id: S, option_identifier: v, option_label: y, price_type: g, metadata: C} = t;
        let {label: w="", additional_price: $=null, product_id: L, variant_id: P} = h || {};
        const k = JSON.parse(C || "{}").formula
          , A = JSON.parse(C || "{}").useFormula || !1
          , R = JSON.parse(C || "{}").separateAddOnProduct || !1
          , Q = !!["all_with_new_price", "one_with_new_price", "one_formula"].find(T => T === g);
        let I = {};
        (P && g === "product_add_ons" || Q && g !== "one_formula" && P) && Mi.forEach(T => {
            T.variants.forEach(E => {
                `${E.id}` === P && (I = {
                    ...T,
                    variants: [{
                        ...E
                    }]
                },
                h.label = E?.title === "Default Title" ? E?.name : E?.title,
                w = h.label)
            }
            )
        }
        );
        const F = I?.variants !== void 0 ? I.variants[0].available : !0;
        I?.variants && g !== "one_formula" && (n = I.variants[0].price / 100);
        let ee = Re["SOLD OUT"] && Re["SOLD OUT"][xt] || "SOLD OUT";
        F || (h.label = `${w} <span class="tpo_sold_out_hyphen">- </span><span class="tpo_sold_out_text">${ee}</span>`,
        w = h.label);
        let K = document.createElement("input");
        K.addEventListener("input", function(T) {
            p(T.target.value);
            let E = r(T.target.value);
            l(E !== !1 && E !== "" ? st : !1, c, n, T.target.value, g, k, A),
            T.target.value ? c.classList.add("active") : c.classList.remove("active"),
            b ? dt(ke(o, a), o) : ke(o, a)
        }),
        g === "one" || g === "product_add_ons" || g === "one_with_new_price" || g === "one_formula" ? K.addEventListener("blur", function() {
            let T = r(K.value);
            T !== !1 && T !== "" ? (l(st, c, n, K.value, g, k, A),
            T && (P && (K.value = Math.ceil(K.value)),
            s(K, K.value, n, g, k, A))) : l(!1, c, n, K.value, g, k, A)
        }) : K.addEventListener("blur", function() {
            let T = r(K.value);
            T !== !1 && T !== "" && ke(o, a) ? (l(st, c, n, K.value, g, k, A),
            T && (P && (K.value = Math.ceil(K.value)),
            s(K, K.value, n, g, k, A))) : l(!1, c, n, K.value, g, k, A)
        }),
        K.addEventListener("focus", function() {
            let T = / \[ \+(.*) \]/
              , E = K.value.match(T);
            K.value = E ? K.value.replace(T, "") : K.value
        }),
        Object.assign(K, {
            className: `tpo_option-input tpo_quantity tpo_${pt.fontStyle}`,
            name: `properties[${R ? "_" : ""}${v}]`,
            id: `${m}-${S}`,
            placeholder: _,
            type: "text",
            readOnly: !F,
            autocomplete: "off",
            ariaLabel: v
        }),
        K.dataset.required = x,
        i && K.setAttribute("form", i),
        K.style.fontSize = `${pt.fontSize}px`,
        pt?.fontFamily && (K.style.fontFamily = pt.fontFamily),
        K.style.color = V.inputText_enteredValue ?? pt.fontColor,
        K.style.backgroundColor = V.inputBackground_unselected ?? jt.background,
        K.style.borderColor = V.inputBorder_unselected ?? jt.borderColor,
        K.style.borderRadius = `${Oi.inputBorderRadius}px`,
        K.style.width = `${Kt.quantitySelectorWidth}px`,
        K.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
        K.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
        K.style.setProperty("--active-input-background", V.inputBackground_selected || "");
        let H = document.createElement("div");
        return Object.assign(H, {
            className: "tpo_quantity-container",
            innerHTML: `
            <span class='form__label'>${y || w}</span>
        `
        }),
        H.appendChild(K),
        f.type = "button",
        g === "one" || g === "product_add_ons" ? f.addEventListener("click", function() {
            let T = r(K.value);
            T !== !1 && T !== "" && ke(o, a) ? (l(st, c, n, K.value, g, k, A),
            T && s(K, K.value, n, g, k, A)) : l(!1, c, n, K.value, g, k, A)
        }) : f.addEventListener("click", function() {
            let T = r(K.value);
            T !== !1 && T !== "" && ke(o, a) ? (l(st, c, n, K.value, g, k, A),
            T && s(K, K.value, n, g, k, A)) : l(!1, c, n, K.value, g, k, A)
        }),
        u && (K.value = u,
        K.dispatchEvent(new Event("input"))),
        H
    }
    function Lm(t, o, i, a, r, c, d, n, f, p, s, l) {
        const {is_required: b, placeholder: h, type: u, option_identifier: x, option_id: _, date_time_type: m="24h"} = t;
        let S = document.createElement("input");
        const v = `time-picker-${_}`;
        S.setAttribute("id", v);
        let y = {
            disableMobile: "true",
            enableTime: !0,
            noCalendar: !0
        };
        m === "12h" && (y.time_24hr = !1,
        y.dateFormat = "G:i K"),
        m === "24h" && (y.time_24hr = !0,
        y.dateFormat = "H:i"),
        l && l.default_hour && (y.defaultHour = l.default_hour),
        l && l.default_minute && (y.defaultMinute = l.default_minute),
        el(y),
        typeof flatpickr == "function" && flatpickr(S, y),
        S.addEventListener("change", function(C) {
            const w = C.target.value;
            f(w),
            a(w),
            w ? r.classList.add("active") : r.classList.remove("active"),
            s ? dt(ke(o, i), o) : ke(o, i)
        }),
        Object.assign(S, {
            className: `tpo_option-input tpo_text-box time_picker-container tpo_${pt.fontStyle}`,
            type: "text",
            name: `properties[${x}]`,
            id: `${u}-${_}`,
            placeholder: h || "Select a time",
            ariaLabel: x
        }),
        S.dataset.required = b;
        let g = o?.attributes.id?.value || null;
        return g && S.setAttribute("form", g),
        S.style.fontSize = `${pt.fontSize}px`,
        pt?.fontFamily && (S.style.fontFamily = pt.fontFamily),
        S.style.color = V.inputText_enteredValue ?? pt.fontColor,
        S.style.backgroundColor = V.inputBackground_unselected ?? jt.background,
        S.style.borderColor = V.inputBorder_unselected ?? jt.borderColor,
        S.style.borderRadius = `${Oi.inputBorderRadius}px`,
        S.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
        S.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
        S.style.setProperty("--active-input-background", V.inputBackground_selected || ""),
        n.type = "button",
        n.addEventListener("click", function() {
            let C = a(S.value);
            C !== !1 && C !== "" && ke(o, i) && c(S, C, d)
        }),
        S
    }
    function Om(t, o, i, a, r, c, d, n, f, p, s, l) {
        const {is_required: b, placeholder: h, type: u, option_identifier: x, option_id: _, date_time_type: m="all", date_time_values: S="[]", metadata: v} = t
          , g = JSON.parse(v || "{}")?.formatDateRange;
        let C = document.createElement("input");
        const w = `date-picker-${_}`;
        C.setAttribute("id", w);
        let $ = []
          , L = [];
        switch (m) {
        case "all":
            break;
        case "except_date":
            L = [...S];
            break;
        case "except_weekday":
            let A = S.map(R => {
                switch (R) {
                case "Monday":
                    return 1;
                case "Tuesday":
                    return 2;
                case "Wednesday":
                    return 3;
                case "Thursday":
                    return 4;
                case "Friday":
                    return 5;
                case "Saturday":
                    return 6;
                case "Sunday":
                    return 0
                }
            }
            );
            L = [function(R) {
                const Q = R.getDay();
                return A.includes(Q)
            }
            ];
            break;
        case "specific_period":
            $ = [{
                from: S[0],
                to: S[1]
            }];
            break
        }
        const P = {
            mode: "range",
            disableMobile: "true",
            dateFormat: "Y-m-d",
            defaultDate: l
        };
        $.length && (P.enable = $),
        g && (P.dateFormat = g),
        L.length && (P.disable = L),
        el(P),
        typeof flatpickr == "function" && flatpickr(C, P),
        C.addEventListener("change", function(A) {
            const R = A.target.value;
            f(R),
            a(R),
            R ? r.classList.add("active") : r.classList.remove("active"),
            s ? dt(ke(o, i), o) : ke(o, i)
        }),
        Object.assign(C, {
            className: `tpo_option-input tpo_text-box tpo_${pt.fontStyle}`,
            type: "text",
            name: `properties[${x}]`,
            id: `${u}-${_}`,
            placeholder: h,
            ariaLabel: x
        }),
        C.dataset.required = b;
        let k = o?.attributes.id?.value || null;
        return k && C.setAttribute("form", k),
        C.style.fontSize = `${pt.fontSize}px`,
        pt?.fontFamily && (C.style.fontFamily = pt.fontFamily),
        C.style.color = V.inputText_enteredValue ?? pt.fontColor,
        C.style.backgroundColor = V.inputBackground_unselected ?? jt.background,
        C.style.borderColor = V.inputBorder_unselected ?? jt.borderColor,
        C.style.borderRadius = `${Oi.inputBorderRadius}px`,
        C.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
        C.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
        C.style.setProperty("--active-input-background", V.inputBackground_selected || ""),
        n.type = "button",
        n.addEventListener("click", function() {
            let A = a(C.value);
            A && ke(o, i) && c(C, A, d)
        }),
        C
    }
    function Pm(t, o, i, a, r, c, d, n, f, p, s, l) {
        const {is_required: b, placeholder: h, type: u, option_identifier: x, multi_select: _, option_id: m, date_time_type: S="all", date_time_values: v="[]", metadata: y} = t;
        let g = document.createElement("input");
        const C = `date-picker-${m}`;
        g.setAttribute("id", C);
        let w = JSON.parse(y || "{}");
        const $ = w?.dataCutOffTime
          , L = $?.enable
          , P = $?.configs || {}
          , k = P?.sameDay
          , A = P?.nextDay
          , R = w?.formatDatePicker;
        let Q = k && k.enable ? k?.data.map( (O={}) => {
            let M;
            switch (O?.key) {
            case "Monday":
                return M = 1,
                {
                    ...O,
                    key: M
                };
            case "Tuesday":
                return M = 2,
                {
                    ...O,
                    key: M
                };
            case "Wednesday":
                return M = 3,
                {
                    ...O,
                    key: M
                };
            case "Thursday":
                return M = 4,
                {
                    ...O,
                    key: M
                };
            case "Friday":
                return M = 5,
                {
                    ...O,
                    key: M
                };
            case "Saturday":
                return M = 6,
                {
                    ...O,
                    key: M
                };
            case "Sunday":
                return M = 0,
                {
                    ...O,
                    key: M
                }
            }
        }
        ) : []
          , I = A && A.enable ? A?.data.map( (O={}) => {
            let M;
            switch (O?.key) {
            case "Monday":
                return M = 1,
                {
                    ...O,
                    key: M
                };
            case "Tuesday":
                return M = 2,
                {
                    ...O,
                    key: M
                };
            case "Wednesday":
                return M = 3,
                {
                    ...O,
                    key: M
                };
            case "Thursday":
                return M = 4,
                {
                    ...O,
                    key: M
                };
            case "Friday":
                return M = 5,
                {
                    ...O,
                    key: M
                };
            case "Saturday":
                return M = 6,
                {
                    ...O,
                    key: M
                };
            case "Sunday":
                return M = 0,
                {
                    ...O,
                    key: M
                }
            }
        }
        ) : []
          , F = []
          , ee = [];
        switch (S) {
        case "all":
            break;
        case "except_date":
            ee = [...v];
            break;
        case "except_weekday":
            let O = v.map(M => {
                switch (M) {
                case "Monday":
                    return 1;
                case "Tuesday":
                    return 2;
                case "Wednesday":
                    return 3;
                case "Thursday":
                    return 4;
                case "Friday":
                    return 5;
                case "Saturday":
                    return 6;
                case "Sunday":
                    return 0
                }
            }
            );
            ee = [function(M) {
                const z = M.getDay();
                return O.includes(z)
            }
            ];
            break;
        case "specific_date":
            F = [...v];
            break;
        case "specific_period":
            F = [{
                from: v[0],
                to: v[1]
            }];
            break
        }
        const K = {
            mode: "single",
            disableMobile: "true",
            dateFormat: "Y-m-d",
            defaultDate: l
        };
        w && !S && (w.allDays || (ee = [function(O) {
            O.setHours(0);
            const M = O.getDay()
              , z = O.getFullYear()
              , X = String(O.getMonth() + 1).padStart(2, "0")
              , J = String(O.getDate()).padStart(2, "0")
              , te = `${z}-${X}-${J}`;
            let ue = new Date;
            ue.setHours(0);
            let me = String(ue.getDate()).padStart(2, "0")
              , Me = !1
              , Te = !1
              , we = !1
              , Ce = !1
              , Le = !1
              , je = !1;
            if (w.disableSpecificDays && w.disableSpecificDaysValue && (Me = w.disableSpecificDaysValue.includes(te)),
            w.disableDaysOfTheWeek && w.disableDaysOfTheWeekValue && w.disableDaysOfTheWeekValue.length && w.disableDaysOfTheWeekValue.map(Z => {
                switch (Z) {
                case "Monday":
                    return 1;
                case "Tuesday":
                    return 2;
                case "Wednesday":
                    return 3;
                case "Thursday":
                    return 4;
                case "Friday":
                    return 5;
                case "Saturday":
                    return 6;
                case "Sunday":
                    return 0
                }
            }
            ).includes(M) && (Te = !0),
            w.disablePastDays && (w.disablePastDaysIncludeToday ? new Date(O.toDateString()) <= new Date(ue.toDateString()) && (Le = !0) : new Date(O.toDateString()) < new Date(ue.toDateString()) && (Le = !0)),
            w.disableDatesBefore && w.disableDatesBeforeValue) {
                let Ae = new Date(w.disableDatesBeforeValue);
                Ae.setHours(0),
                new Date(Ae.toDateString()) > new Date(O.toDateString()) && (Ce = !0)
            }
            if (w.disableDatesAfter && w.disableDatesAfterValue) {
                let Ae = new Date(w.disableDatesAfterValue);
                Ae.setHours(0),
                new Date(O.toDateString()) > new Date(Ae.toDateString()) && (we = !0)
            }
            if (w.enableDatesAfterXDaysFromToday) {
                let Ae = parseInt(w?.enableXDaysValue || 0)
                  , Z = new Date;
                Z.setDate(Z.getDate() + Ae),
                Z.setHours(0),
                new Date(O.toDateString()) < new Date(Z.toDateString()) && (Me = !0)
            }
            if (w.enableSpecificDays && w.enableSpecificDaysValue) {
                if (w.enableSpecificDaysValue.includes(te))
                    return !1;
                Me = !0
            }
            if (w.enableSpecificPeriod && w.enableSpecificPeriodValue)
                if (w.enableSpecificPeriodValue.length)
                    for (let Ae = 0; Ae < w.enableSpecificPeriodValue.length; Ae++) {
                        let Z = new Date(w.enableSpecificPeriodValue[Ae][0])
                          , Ue = new Date(w.enableSpecificPeriodValue[Ae][1]);
                        if (Z.setHours(0),
                        Ue.setHours(0),
                        new Date(O.toDateString()) >= new Date(Z.toDateString()) && new Date(Ue.toDateString()) >= new Date(O.toDateString()))
                            return !1;
                        Me = !0
                    }
                else
                    Me = !0;
            if (L) {
                let Ae = new Date(ue);
                if (Ae.setDate(Ae.getDate() + 2),
                new Date(O.toDateString()) < new Date(ue.toDateString()))
                    Le = !0;
                else if (!(new Date(O.toDateString()) >= new Date(Ae.toDateString()))) {
                    if (k && k.enable) {
                        const Z = Q.find(Ue => Ue?.key === M);
                        if (Z && me === J) {
                            let ft = Z.value.match(/(\d{2}):(\d{2}):(\d{2}) GMT([+-]\d{4})/);
                            if (ft) {
                                let le = parseInt(ft[1])
                                  , at = parseInt(ft[2])
                                  , bt = parseInt(ft[3])
                                  , oe = parseInt(ft[4].substring(0, 3)) * 60
                                  , Ve = new Date;
                                Ve.setUTCHours(le, at - oe, bt, 0);
                                let Ne = new Date;
                                if (Rs) {
                                    const {DateTime: pe} = luxon;
                                    Ve = pe.now().setZone(Rs).set({
                                        hour: le,
                                        minute: at,
                                        second: bt
                                    }),
                                    Ne.getTime() > Ve.ts && (je = !0)
                                } else
                                    Ne > Ve && (je = !0)
                            }
                        }
                    }
                    if (A && A.enable) {
                        let Z = new Date(ue);
                        Z.setDate(Z.getDate() + 1);
                        let Ue = String(Z.getDate()).padStart(2, "0");
                        const ft = I.find(le => le?.key === ue.getDay());
                        if (ft && Ue === J) {
                            let at = ft.value.match(/(\d{2}):(\d{2}):(\d{2}) GMT([+-]\d{4})/);
                            if (at) {
                                let bt = parseInt(at[1])
                                  , oe = parseInt(at[2])
                                  , Ve = parseInt(at[3])
                                  , Ne = parseInt(at[4].substring(0, 3)) * 60
                                  , pe = new Date;
                                pe.setUTCHours(bt, oe - Ne, Ve, 0);
                                let lt = new Date;
                                if (Rs) {
                                    const {DateTime: St} = luxon;
                                    pe = St.now().setZone(Rs).set({
                                        hour: bt,
                                        minute: oe,
                                        second: Ve
                                    }),
                                    lt.getTime() > pe.ts && (je = !0)
                                } else
                                    lt > pe && (je = !0)
                            }
                        }
                    }
                }
            }
            return je || Le || Me || Te || we || Ce
        }
        ])),
        _ && (K.mode = "multiple"),
        F.length && (K.enable = F),
        ee.length && (K.disable = ee);
        const H = ["honey-bug.myshopify.com"]
          , T = ["63d5ca-ae.myshopify.com"]
          , E = ["4e8e97-2.myshopify.com", "pinkylab-6384.myshopify.com", "cb5770-2.myshopify.com"]
          , q = ["38732f-2.myshopify.com", "0ea73a-c1.myshopify.com", "crystycrystals.myshopify.com", "236e7d-f6.myshopify.com", "308b83.myshopify.com", "dandys-topsoil.myshopify.com", "prints-by-mi.myshopify.com", "ideen-fra-feen.myshopify.com"]
          , j = ["hoa-test-store.myshopify.com", "quality-growers-floral-company.myshopify.com"]
          , N = ["tigren-demo.myshopify.com", "island-to-east-side.myshopify.com"];
        E.includes(B) ? K.minDate = "today" : H.includes(B) ? K.minDate = new Date(new Date().getTime() + 14400 * 60 * 1e3) : T.includes(B) ? K.minDate = new Date(new Date().getTime() + 1440 * 60 * 1e3) : B === "067099-3.myshopify.com" && (K.minDate = new Date(new Date().getTime() + 312 * 60 * 60 * 1e3)),
        R && (K.dateFormat = R),
        q.includes(B) ? (K.dateFormat = "d-m-Y",
        K.enable && (K.enable = K.enable.map(O => typeof O == "string" ? O?.split("-").reverse().join("-") : {
            from: O?.from?.split("-").reverse().join("-"),
            to: O?.to?.split("-").reverse().join("-")
        }))) : j.includes(B) ? K.dateFormat = "m-d-Y" : N.includes(B) && (K.dateFormat = "m.d.y"),
        el(K),
        typeof flatpickr == "function" && (["nellys-grannys.myshopify.com", "rrtvtp-1i.myshopify.com"].includes(B) && (flatpickr.l10ns.default.firstDayOfWeek = 1),
        flatpickr(g, K)),
        g.addEventListener("change", function(O) {
            const M = O.target.value;
            f(M),
            a(M),
            M ? r.classList.add("active") : r.classList.remove("active"),
            s ? dt(ke(o, i), o) : ke(o, i)
        }),
        Object.assign(g, {
            className: `tpo_option-input tpo_text-box tpo_${pt.fontStyle}`,
            type: "text",
            name: `properties[${x}]`,
            id: `${u}-${m}`,
            placeholder: h || "Select a date",
            ariaLabel: x
        }),
        g.dataset.required = b;
        let U = o?.attributes.id?.value || null;
        return U && g.setAttribute("form", U),
        g.style.fontSize = `${pt.fontSize}px`,
        pt?.fontFamily && (g.style.fontFamily = pt.fontFamily),
        g.style.color = V.inputText_enteredValue ?? pt.fontColor,
        g.style.backgroundColor = V.inputBackground_unselected ?? jt.background,
        g.style.borderColor = V.inputBorder_unselected ?? jt.borderColor,
        g.style.borderRadius = `${Oi.inputBorderRadius}px`,
        g.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
        g.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
        g.style.setProperty("--active-input-background", V.inputBackground_selected || ""),
        n.type = "button",
        n.addEventListener("click", function() {
            let O = a(g.value);
            O && ke(o, i) && c(g, O, d)
        }),
        g
    }
    function Am(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u, x, _, m, S, v) {
        b && (i.additional_price = 0,
        i.variant_id = "");
        let {label: y, is_default: g, additional_price: C=null, id: w, number_color: $, color_code: L="", image_url: P, image_canvas_url: k, image_id: A, product_id: R, variant_id: Q, metadata: I="{}"} = i || {};
        L || (L = ",");
        const F = L?.split(",")
          , ee = s?.image_color ?? 0
          , K = JSON.parse(I || "{}")
          , H = K.printBoxName ? K.printBoxName : ""
          , T = K.printBoxValue ? K.printBoxValue : ""
          , E = K.url || "";
        let q = E.startsWith("/") || E.startsWith("http") ? E : `https://${E}`;
        const j = K.description || ""
          , N = K.tooltip || ""
          , U = gr(N);
        let O = {};
        const M = s.is_change_label
          , z = JSON.parse(s.metadata || "{}");
        let {useUrl: X=!1, openLinkBehavior: J="", separateAddOnProduct: te=!1, descriptionPosition: ue="below_value"} = z;
        const me = J === "new_tab" ? "_blank" : "_self";
        q = Fa(X, q),
        Q && Mi.forEach(Z => {
            Z.variants.forEach(Ue => {
                `${Ue.id}` === Q && (O = {
                    ...Z,
                    variants: [{
                        ...Ue
                    }]
                },
                M || (i.label = Ue?.title === "Default Title" ? Ue?.name : Ue?.title,
                y = i.label))
            }
            )
        }
        );
        const Me = O?.variants !== void 0 ? O.variants[0].available : !0;
        O?.variants && (C = O.variants[0].price / 100);
        let Te = Re["SOLD OUT"] && Re["SOLD OUT"][xt] || "SOLD OUT";
        if (Me || (i.label = `${y} <span class="tpo_sold_out_hyphen">- </span><span class="tpo_sold_out_text">${Te}</span>`,
        y = i.label),
        Lt?.outStockOptions === "hide" && !Me)
            return "";
        let we = Dl(X, q);
        if (g && Me || we) {
            if (b) {
                const Z = parseFloat(K.dimensionPrice || 0) * ht;
                a(y, xr(s, h, Z), w, P, k, F, $)
            } else
                a(y, C, w, P, k, F, $);
            h.dataset.selectedIndex = u,
            Q && (h.dataset.productId = R,
            h.dataset.variantId = Q),
            l(H, T),
            n && oo(y),
            d(w, y),
            t.tagName === "FORM" && setTimeout(function() {
                f ? dt(ke(t, o), t) : ke(t, o)
            }, 500)
        }
        let Ce = document.createElement("span");
        Object.assign(Ce, {
            className: `tpo_additional-price ${c !== 0 ? "" : "tpo_hidden"}`
        });
        let Le, je = Na({
            imageOrColor: ee,
            numberColor: $,
            swatchShape: x,
            colorCodes: F,
            imageUrl: P,
            product: O,
            label: y
        });
        X ? (Le = document.createElement("a"),
        Object.assign(Le, {
            id: `tpo_option-type-selection-${w}`,
            className: `tpo_option-type-selection ${ue} tpo_image_shape_${x || "square"} tpo_${tt.fontStyle}`,
            innerHTML: `
                ${je || ""}
                <div class='tpo_option_type_label_wrapper'>
                    <span class='tpo_option_type_label'>${y}</span>
                    ${j ? Xi(j, "below_value").outerHTML : ""}
                </div>
                ${j ? Xi(j, "below_image").outerHTML : ""}
                `,
            href: q,
            target: me
        })) : (Le = document.createElement("button"),
        Object.assign(Le, {
            id: `tpo_option-type-selection-${w}`,
            className: `tpo_option-type-selection ${ue} tpo_image_shape_${x || "square"} tpo_${tt.fontStyle} ${Me ? "" : "not-avaliable out_stock_label"} ${ee === 1 ? "tpo_color" : ""}`,
            innerHTML: `
                 ${je || ""}
                <div class='tpo_option_type_label_wrapper'>
                    <span class='tpo_option_type_label'>${y}</span>
                     ${j ? Xi(j, "below_value").outerHTML : ""}
                </div>
                ${j ? Xi(j, "below_image").outerHTML : ""}
                `,
            type: "button",
            onclick: Z => {
                if (Me) {
                    if (Z.stopPropagation(),
                    b) {
                        const Ue = parseFloat(K.dimensionPrice || 0) * ht;
                        a(y, xr(s, h, Ue), w, P, k, F, $)
                    } else
                        a(y, C, w, P, k, F, $);
                    h.dataset.selectedIndex = u,
                    Q ? (h.dataset.productId = R,
                    h.dataset.variantId = Q) : (h.dataset.productId = "",
                    h.dataset.variantId = ""),
                    l(H, T),
                    n && oo(y),
                    d(w, y),
                    r()
                } else
                    Z.preventDefault()
            }
        })),
        Le.style.fontSize = `${tt.fontSize}px`,
        Le.style.color = V.optionValueColor ?? tt.fontColor,
        tt?.fontFamily && (Le.style.fontFamily = `${tt.fontFamily}`),
        b ? (setTimeout( () => {
            const Z = parseFloat(K.dimensionPrice || 0) * ht
              , Ue = xr(s, h, Z);
            yt(st, Ce, Ue)
        }
        , 500),
        Le.addEventListener("updateDimensionPricing", function() {
            const Z = h.dataset.selectedIndex
              , Ue = parseFloat(K.dimensionPrice || 0) * ht
              , ft = xr(s, h, Ue);
            yt(st, Ce, ft),
            Z !== void 0 && parseInt(Z) === u && a(y, ft, w, P, k, F, $)
        })) : yt(st, Ce, C),
        Le.querySelector(".tpo_option_type_label_wrapper").append(Ce, U),
        window.addEventListener("searchInputDropdown", Z => {
            const {optionTypesBySearch: Ue, id: ft, option: le, optionTypeWrapper: at} = Z.detail
              , bt = `${le.idOther}-${le.type}`
              , oe = at.querySelector(".tpo_option-type-selection--empty");
            if (bt !== ft)
                return;
            Ue.find(Ne => Ne.id === w) ? Array.from(document.querySelectorAll(`.tpo_option-container-${bt} #tpo_option-type-selection-${w}`)).forEach(Ne => Ne.style.display = "flex") : Array.from(document.querySelectorAll(`.tpo_option-container-${bt} #tpo_option-type-selection-${w}`)).forEach(Ne => Ne.style.display = "none"),
            Ue.length ? oe.classList.add("hidden") : oe.classList.remove("hidden")
        }
        );
        const Ae = So(i.metadata);
        if (Ae) {
            const Z = Le.querySelector(".tpo_option_type_label_wrapper");
            Z && Z.appendChild(Ae)
        }
        return Le
    }
    function qm(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u, x, _, m, S, v, y, g, C, w, $, L) {
        $ && (i.additional_price = 0,
        i.variant_id = "");
        let {label: P, is_default: k, additional_price: A=null, id: R, number_color: Q, color_code: I="", product_id: F, variant_id: ee, image_url: K, image_canvas_url: H, metadata: T="{}"} = i || {};
        I || (I = ",");
        const E = I?.split(",")
          , q = m?.image_color ?? 0
          , j = JSON.parse(T || "{}")
          , N = j.printBoxName ? j.printBoxName : ""
          , U = j.printBoxValue ? j.printBoxValue : ""
          , O = j.url || "";
        let M = O.startsWith("/") || O.startsWith("http") ? O : `https://${O}`;
        const X = (m.metadata ? JSON.parse(m?.metadata || "{}") : {}).disallowUnselecting || !1
          , J = j.description || ""
          , te = j.tooltip || ""
          , ue = gr(te);
        let me = {};
        const Me = m.is_change_label
          , Te = m.id
          , we = JSON.parse(m.metadata || "{}");
        let {useUrl: Ce=!1, linkDisplay: Le="separate", linkLabel: je, separateAddOnProduct: Ae=!1, descriptionPosition: Z="below_value"} = we;
        je || (je = "View"),
        M = Fa(Ce, M);
        const Ue = Ce && Le === "separate"
          , ft = Ce && Le === "clickable_label";
        let le = document.createElement("input");
        ee && Mi.forEach(He => {
            He.variants.forEach(Xe => {
                `${Xe.id}` === ee && (me = {
                    ...He,
                    variants: [{
                        ...Xe
                    }]
                },
                Me || (i.label = Xe?.title === "Default Title" ? Xe?.name : Xe?.title,
                P = i.label))
            }
            )
        }
        ),
        K = Ma(me, K);
        const at = i?.label;
        let bt = bd(x, K, at);
        bt = Na({
            imageOrColor: q,
            numberColor: Q,
            swatchShape: S,
            colorCodes: E,
            imageUrl: K,
            imgElement: bt
        }),
        bt === null && (bt = "");
        const oe = me?.variants !== void 0 ? me.variants[0].available : !0;
        me?.variants && (A = me.variants[0].price / 100);
        const Ve = y.configs
          , Ne = y.enable
          , {quantitySelectorWrapper: pe, errorMessageElement: lt} = Ne ? g(Ve, A, ct, R, Te, pr, "", Oe) : {
            quantitySelectorWrapper: null,
            errorMessageElement: null
        };
        if (k && oe) {
            if (n.dataset.selectedIndex = c,
            Ne) {
                const He = v.querySelectorAll(".tpo_quantity-selector_wrapper");
                He && He.length && He.forEach(Xe => {
                    Xe.classList.add("swatches-not-avaliable")
                }
                ),
                pe.classList.remove("swatches-not-avaliable"),
                pe.querySelector("input").disabled = !1,
                Ge()
            } else
                $ ? setTimeout( () => {
                    Se()
                }
                , 500) : (p(n, P, A),
                yt(st, f, A));
            l(R),
            t.tagName === "FORM" && setTimeout(function() {
                u ? dt(ke(t, o), t) : ke(t, o)
            }, 500),
            setTimeout( () => {
                n.dispatchEvent(new Event("change"))
            }
            , 0)
        }
        let St = Re["SOLD OUT"] && Re["SOLD OUT"][xt] || "SOLD OUT";
        if (oe || (i.label = `${P} <span class="tpo_sold_out_hyphen">- </span><span class="tpo_sold_out_text">${St}</span>`,
        P = i.label),
        Lt?.outStockOptions === "hide" && !oe)
            return "";
        let _t = document.createElement("span");
        Object.assign(_t, {
            className: `tpo_additional-price ${s !== 0 ? "" : "tpo_hidden"}`
        }),
        Object.assign(le, {
            className: `tpo_radio-button ${Pi ? "tpo_compatible_radio-theme" : ""} ${k && oe ? "tpo_checked" : ""}`,
            value: P,
            disabled: !oe,
            type: "radio",
            checked: k && oe,
            name: `${h},${a}`,
            id: `${a}-${c}`
        }),
        ea && le.setAttribute("form", ea),
        ee && (le.dataset.productId = F,
        le.dataset.variantId = ee),
        Io && (le.dataset.printBoxName = N,
        le.dataset.printBoxValue = U);
        let it = document.createElement("div");
        Object.assign(it, {
            className: `container-wrap-selection ${oe ? "" : "out_stock_label"} ${_ === "hover" ? "" : bt ? "tpo_label_under_price" : ""}`
        });
        let Be = document.createElement("div");
        if (Be.style.setProperty("--radio-border", V?.radioBorder_unselected ?? ""),
        Be.style.setProperty("--active-radio-border", V?.radioBorder_selected ?? ""),
        Be.style.setProperty("--radio-background", V?.radioBackground_unselected ?? ""),
        Be.style.setProperty("--active-radio-background", V?.radioBackground_selected ?? ""),
        Be.style.setProperty("--radio-checkMark", V?.radioCheckmark_unselected ?? ""),
        Be.style.setProperty("--active-radio-checkMark", V?.radioCheckmark_selected ?? ""),
        Object.assign(Be, {
            className: `tpo_radio-button-wrapper ${Z} ${J ? "has-description" : ""}`,
            innerHTML: `
            <label 
                class='tpo_${tt.fontStyle} tpo_image_shape_${S || "square"} ${_ === "hover" ? "" : bt ? "tpo_label_under_option_type" : ""}' style='color: ${V.optionValueColor ?? tt.fontColor}; font-size: ${tt.fontSize}px; ${tt?.fontFamily ? `font-family: ${tt?.fontFamily};` : ""}'>
                ${_ === "hover" ? `<div class="tpo_next_option_type ${bt ? "has-image" : "no-image"}">
                          ${bt} 
                              <div class="tpo_url_wrapper tpo_option_type_label_wrapper">${Ue ? `<span class="tpo_option_type_label">${P} </span> <a class="tpo_url_value tpo_view_more" href="${M}" target="_blank">${je}</a>` : ft ? `<span class="tpo_option_type_label"><a class="tpo_url_value" href="${M}" target="_blank">${P}</a> </span>` : `<span class="tpo_option_type_label">${P} </span>`}${J ? Xi(J, "below_value").outerHTML : ""}</div></div>` : `<div class="tpo_under_option_type"><div><span class="tpo_url_wrapper">${Ue ? `<span class="tpo_option_type_label">${P} </span> <a class="tpo_url_value tpo_view_more" href="${M}" target="_blank">${je}</a>` : ft ? `<span class="tpo_option_type_label"><a class="tpo_url_value" href="${M}" target="_blank">${P}</a> </span>` : `<span class="tpo_option_type_label">${P} </span>`}
                                    ${J ? Xi(J, "below_value").outerHTML : ""}
                          </span> ${bt}</div></div>`}
                ${J ? Xi(J, "under-radio below_image").outerHTML : ""}
            </label>
        `
        }),
        pe) {
            const He = document.createElement("div");
            Object.assign(He, {
                className: "tpo-quantity_always-show"
            }),
            He.append(pe),
            Be.append(He)
        }
        setTimeout( () => {
            const He = So(i.metadata);
            if (!He)
                return;
            const Xe = Be.querySelector(".tpo_option_type_label");
            if (!Xe) {
                Be.prepend(He);
                return
            }
            const ut = Xe.querySelector(".tpo_additional-price");
            ut ? ut.insertAdjacentElement("afterend", He) : Xe.appendChild(He)
        }
        , 50),
        Be.firstElementChild.prepend(le);
        function Ge() {
            const He = pe.querySelector("input").value
              , Xe = pe.querySelector("input");
            if (Xe && Xe.dispatchEvent(new Event("change")),
            He)
                if (A) {
                    const ut = A * Number(He);
                    ct(ut, He)
                } else
                    ct(0, He);
            else if (pe.querySelector("input").value = 1,
            A) {
                const ut = A * 1;
                ct(ut, 1)
            } else
                ct(0, 1)
        }
        function ct(He, Xe) {
            if (He) {
                let ut = PriceFormatter.formatMoney(parseFloat(He * 100), !0);
                n.value = `${P} [ +${ut} ] | ${Xe}`
            } else
                n.value = `${P} | ${Xe}`;
            yt(st, f, He),
            Ve.showTotalSelected && Si(C, Xe, Ve),
            dt(ke(t, o), t)
        }
        function Y(He) {
            if (!(le.checked && le.classList.contains("tpo_checked") && X) && He.target.tagName !== "A") {
                if (le.checked && le.classList.contains("tpo_checked")) {
                    if (le.checked = !1,
                    le.classList.remove("tpo_checked"),
                    oi(L ? R : Te, H || K, !1),
                    n.value = "",
                    d(),
                    b && oo(""),
                    l(""),
                    yt(st, f, 0),
                    pe) {
                        pe.classList.add("swatches-not-avaliable"),
                        pe.querySelector("input").disabled = !0,
                        pe.classList.remove("tpo-error_validate"),
                        lt.innerHTML = "",
                        Ve.showTotalSelected && Si(C, 0, Ve);
                        const Xe = C.querySelector(".tpo_quantity_selector_total-selected");
                        d() && Xe && Xe.classList.remove("tpo-quantity-error")
                    }
                    n.dataset.selectedIndex = ""
                } else {
                    le.checked = !0,
                    le.classList.add("tpo_checked");
                    const Xe = pe?.querySelector(".tpo_quantity-selector_input");
                    if (Xe?.value === "0" && m?.option_types?.forEach(Nt => {
                        Nt.id !== R && (window.Konva.stages[0]?.find(`#${Nt.id}`)).forEach(de => {
                            de.hide(),
                            de.opacity(0)
                        }
                        )
                    }
                    ),
                    Xe?.value !== "0" && oi(L ? R : Te, H || K, !0),
                    !Ne)
                        if (A) {
                            let Nt = PriceFormatter.formatMoney(parseFloat(A * 100), !0);
                            n.value = `${P} [ +${Nt} ]`
                        } else
                            n.value = `${P}`;
                    b && oo(P);
                    const ut = v.querySelectorAll(".tpo_quantity-selector_wrapper");
                    ut && ut.length && ut.forEach(Nt => {
                        Nt.classList.add("swatches-not-avaliable"),
                        Nt.classList.remove("tpo-error_validate");
                        const We = Nt.closest(".container-wrap-selection").querySelector(".tpo_error-message");
                        We && (We.innerHTML = "")
                    }
                    ),
                    Ne && (pe.classList.remove("swatches-not-avaliable"),
                    pe.querySelector("input").disabled = !1,
                    Ge()),
                    Ne || yt(st, f, A),
                    l(R),
                    b && oo(P),
                    d(),
                    n.dataset.selectedIndex = c
                }
                $ && Se(),
                u ? dt(ke(t, o), t) : ke(t, o),
                n.dispatchEvent(new Event("change"))
            }
        }
        function Se() {
            const He = n.dataset.selectedIndex;
            He !== void 0 && parseInt(He) === c && ie()
        }
        function ie() {
            const He = parseFloat(j.dimensionPrice || 0) * ht
              , Xe = xr(m, n, He);
            p(n, P, Xe),
            yt(st, f, Xe)
        }
        function _e() {
            const He = parseFloat(j.dimensionPrice || 0) * ht
              , Xe = xr(m, n, He);
            yt(st, _t, Xe)
        }
        function Oe() {
            let He = new CustomEvent("pointerup",{
                bubbles: !0
            });
            Be.firstElementChild.dispatchEvent(He)
        }
        return oe && (Be.firstElementChild.addEventListener("click", He => {
            He.target.tagName !== "A" && He.preventDefault()
        }
        ),
        Be.firstElementChild.addEventListener("pointerup", Y)),
        $ ? it.addEventListener("updateDimensionPricing", function() {
            Se(),
            _e()
        }) : yt(st, _t, A),
        pe ? it.append(Be, lt) : it.append(Be),
        it.querySelector(".tpo_option_type_label")?.append(_t, ue),
        it
    }
    function Nm(t) {
        const {formElement: o, quantityInput: i, option: a, isRequired: r, additionalPriceSwitch: c, addToCartElement: d, handleAddPriceToProperties: n, handleChangeValuesSwitch: f, inputForSwitchValues: p, renderForProductPage: s, switchImageElement: l} = t
          , {id: b, type: h, option_id: u, switch_label: x, additional_price: _, option_identifier: m, switch_value: S, metadata: v="{}", option_types: y} = a;
        let {additional_price: g=null} = y?.[0] || {}
          , C = _;
        g && (C = g);
        const w = JSON.parse(v || "{}")
          , $ = w.printBoxName ? w.printBoxName : ""
          , L = w.printBoxValue ? w.printBoxValue : ""
          , P = w.printBoxNoValue ? w.printBoxNoValue : ""
          , k = w?.image_canvas_url || w?.switchImageUrl || Dt;
        function A(K) {
            Io && (K ? p.dataset.printBox = JSON.stringify([{
                printBoxName: $,
                printBoxValue: L
            }]) : p.dataset.printBox = JSON.stringify([{
                printBoxName: $,
                printBoxValue: P
            }]))
        }
        let R = document.createElement("label");
        R.classList.add("tpo_switch");
        let Q = document.createElement("input");
        S && (p.value = x,
        c.classList.add("active"),
        n(p, x, C),
        s ? dt(ke(o, i), o) : ke(o, i)),
        f(!!S),
        A(S),
        Object.assign(Q, {
            className: "checkbox",
            type: "checkbox",
            id: `${h}-${u}`,
            checked: S,
            value: x,
            onchange: function(K) {
                K.target.checked ? (f(!0),
                oi(b, k, !0),
                A(!0),
                c.classList.add("active"),
                n(p, x, C)) : (f(!1),
                oi(b, k, !1),
                A(!1),
                c.classList.remove("active"),
                p.value = ""),
                s ? dt(ke(o, i), o) : ke(o, i)
            }
        }),
        Q.dataset.required = r,
        ea && Q.setAttribute("form", ea);
        let I = document.createElement("span");
        I.classList.add("tpo_slider", "round"),
        I.style.backgroundColor = V?.switchBackground_unselected ?? Np?.background,
        I.style.setProperty("--active-switch-background", V?.switchBackground_selected ?? Np?.activeBackground ?? ""),
        R.append(Q, I);
        let F = PriceFormatter.formatMoney(parseFloat(C * 100), !0)
          , ee = document.createElement("div");
        return Object.assign(ee, {
            className: `tpo_switch-container tpo_${tt.fontStyle}`,
            innerHTML: `
            <label class='form__label' for='${h}-${u}' style='color: ${V.optionValueColor ?? tt.fontColor}; ${tt?.fontFamily ? `font-family: ${tt?.fontFamily};` : ""} font-size: ${tt.fontSize}px'>${x} ${C ? `<span>(+${F})</span>` : ""}</label>
        `
        }),
        d.type = "button",
        l && a.hidden_label && ee.insertBefore(l, ee.firstChild),
        ee.insertBefore(R, ee.firstChild),
        ee
    }
    function Mm(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u, x, _) {
        const {type: m, is_required: S, option_id: v, id: y, option_identifier: g, placeholder: C="", min_value: w, max_value: $, price_type: L, live_preview_transform: P} = t
          , A = JSON.parse(l || "{}").type_letter;
        let {label: R="", additional_price: Q=null, product_id: I, variant_id: F} = u || {};
        const ee = JSON.parse(l || "{}")
          , K = ee.printBoxName ? ee.printBoxName : ""
          , H = ee.printBoxValue ? ee.printBoxValue : ""
          , T = ee.character_count ? parseInt(ee.character_count) : 0;
        let E = $ || (T === 1 ? 200 : $);
        function q(X) {
            Io && (z.dataset.printBox = JSON.stringify([{
                printBoxName: K,
                printBoxValue: ze(H, X)
            }]))
        }
        let j = {};
        F && Mi.forEach(X => {
            X.variants.forEach(J => {
                `${J.id}` === F && (j = {
                    ...X,
                    variants: [{
                        ...J
                    }]
                },
                u.label = J?.title === "Default Title" ? J?.name : J?.title,
                R = u.label)
            }
            )
        }
        ),
        j?.variants && (n = j.variants[0].price / 100);
        const N = l ? JSON.parse(l)?.rangesPrice || [] : [];
        JSON.parse(u?.metadata || "{}").hasOwnProperty("min_text_length") && (N.length = 0),
        t.option_types.forEach(X => {
            const J = JSON.parse(X.metadata || "{}");
            J.hasOwnProperty("min_text_length") && J.hasOwnProperty("max_text_length") && N.push({
                min: J.min_text_length,
                max: J.max_text_length,
                value: X.additional_price
            })
        }
        );
        const O = ee.priceNotSpace ? ee.priceNotSpace : !1
          , M = {
            enabled: !!ee?.noChargesSpecialChars?.enabled,
            characters: ee?.noChargesSpecialChars?.characters || ""
        };
        let z = document.createElement("input");
        if (z.addEventListener("input", function(X) {
            if (A && (z.value = _(A, X.target.value),
            X.target.value = z.value),
            JSON.parse(l || "{}")?.stop_typing_at_max_limit && E && X.target.value.length > E && (z.value = X.target.value.substring(0, E),
            X.target.value = z.value),
            p(X.target.value),
            Wi(y, "id", X.target.value, !0, "TEXT"),
            T === 1) {
                let ue = X.target.value.length;
                x.innerHTML = `
                <span class="tpo-count">${ue}</span>
                <span class="tpo-max-character">/${E}</span>`
            }
            let te = r(z.value);
            b(te !== !1 && te !== "" ? st : !1, c, n, X.target.value, L, N, O, M),
            X.target.value ? c.classList.add("active") : c.classList.remove("active"),
            s ? dt(ke(o, a), o) : ke(o, a),
            q(z.value)
        }),
        z.addEventListener("blur", function() {
            let X = r(z.value);
            X !== !1 && X !== "" ? (b(st, c, n, z.value, L, N, O, M),
            X && h(z, z.value, n, L, N, O, M)) : b(!1, c, n, z.value, L, N, O, M)
        }),
        z.addEventListener("focus", function() {
            let X = / [\[(] \+(.*) [)\]]/
              , J = z.value.match(X);
            z.value = J ? z.value.replace(X, "") : z.value
        }),
        z.addEventListener("keypress", function(X) {
            X.key === "Enter" && X.preventDefault()
        }),
        Object.assign(z, {
            className: `tpo_option-input tpo_text-box tpo_${pt.fontStyle}`,
            type: "text",
            name: `properties[${g}]`,
            id: `${m}-${v}`,
            placeholder: C,
            value: _(A, t?.default_value || ""),
            ariaLabel: g
        }),
        z.dataset.required = S,
        i && z.setAttribute("form", i),
        z.style.fontSize = `${pt.fontSize}px`,
        pt?.fontFamily && z.style.setProperty("--entered-input-fontFamily", `${pt.fontFamily}` || ""),
        z.style.setProperty("--entered-input-text", V.inputText_enteredValue || pt.fontColor || ""),
        z.style.backgroundColor = V.inputBackground_unselected ?? jt.background,
        z.style.borderColor = V.inputBorder_unselected ?? jt.borderColor,
        z.style.borderRadius = `${Oi.inputBorderRadius}px`,
        z.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
        z.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
        z.style.setProperty("--active-input-background", V.inputBackground_selected || ""),
        T === 1) {
            let X = t?.default_value?.length || 0;
            window.addEventListener("reloadValueOnTextField", J => {
                X = z.value.length
            }
            ),
            x.innerHTML = `
                <span class="tpo-count">${X}</span>
                <span class="tpo-max-character">/${E}</span>`,
            z.style.paddingRight = "75px"
        }
        return f.type = "button",
        f.addEventListener("click", function() {
            let X = r(z.value);
            X !== !1 && X !== "" && ke(o, a) ? (b(st, c, n, z.value, L, N, O, M),
            X && h(z, z.value, n, L, N, O, M)) : b(!1, c, n, z.value, L, N, O, M)
        }),
        q(z.value),
        z
    }
    function Im({is_required: t, placeholder: o, type: i, option_id: a, option_identifier: r, ...c}, d, n, f, p, s, l, b, h, u, x, _) {
        let m = document.createElement("textarea");
        const S = JSON.parse(c.metadata || "{}")
          , v = S.character_count ? parseInt(S.character_count) : 0;
        let y = c.max_value ? c.max_value : v === 1 ? 1e3 : c.max_value;
        if (m.addEventListener("input", function(g) {
            S?.stop_typing_at_max_limit && y && g.target.value.length > y && (m.value = g.target.value.substring(0, y),
            g.target.value = m.value),
            u(g.target.value),
            p(g.target.value);
            const w = p(g.target.value);
            if (Wi(c.id, "id", g.target.value, w, "TEXT"),
            v === 1) {
                let $ = g.target.value.length;
                _.innerHTML = `
                <span class="tpo-count">${$}</span>
                <span class="tpo-max-character">/${y}</span>`
            }
            g.target.value ? s.classList.add("active") : s.classList.remove("active"),
            x ? dt(ke(d, f), d) : ke(d, f)
        }),
        m.addEventListener("blur", function() {
            p(m.value) && l(m, m.value, b)
        }),
        m.addEventListener("focus", function() {
            let g = / [\[(] \+(.*) [)\]]/
              , C = m.value.match(g);
            m.value = C ? m.value.replace(g, "") : m.value
        }),
        Object.assign(m, {
            className: `tpo_option-input tpo_text-box tpo_${pt.fontStyle}`,
            rows: 3,
            name: `properties[${r}]`,
            id: `${i}-${a}`,
            placeholder: o,
            value: c?.default_value || "",
            ariaLabel: r
        }),
        m.placeholder = m.placeholder.replace(/\\n/g, `
`),
        m.dataset.required = t,
        n && m.setAttribute("form", n),
        m.style.fontSize = `${pt.fontSize}px`,
        pt?.fontFamily && m.style.setProperty("--entered-input-fontFamily", `${pt.fontFamily}` || ""),
        m.style.setProperty("--entered-input-text", V.inputText_enteredValue || pt.fontColor || ""),
        m.style.backgroundColor = V.inputBackground_unselected ?? jt.background,
        m.style.borderColor = V.inputBorder_unselected ?? jt.borderColor,
        m.style.borderRadius = `${Oi.inputBorderRadius}px`,
        m.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
        m.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
        m.style.setProperty("--active-input-background", V.inputBackground_selected || ""),
        v === 1) {
            let g = c?.default_value?.length || 0;
            window.addEventListener("reloadValueOnTextField", C => {
                g = m.value.length
            }
            ),
            _.innerHTML = `
                <span class="tpo-count">${g}</span>
                <span class="tpo-max-character">/${y}</span>`,
            m.style.paddingRight = "80px"
        }
        return h.type = "button",
        h.addEventListener("click", function() {
            p(m.value) && ke(d, f) && l(m, m.value, b)
        }),
        m
    }
    function Fm({is_required: t, placeholder: o, type: i, option_id: a, option_identifier: r, default_value: c, ...d}, n, f, p, s, l, b, h, u, x, _) {
        let m = document.createElement("input");
        return m.addEventListener("input", function(S) {
            x(S.target.value),
            s(S.target.value);
            const v = s(S.target.value);
            Wi(d.id, "id", S.target.value, v, "TEXT"),
            S.target.value ? l.classList.add("active") : l.classList.remove("active"),
            _ ? dt(ke(n, p), n) : ke(n, p)
        }),
        m.addEventListener("blur", function() {
            s(m.value) && b(m, m.value, h)
        }),
        m.addEventListener("focus", function() {
            let S = / [\[(] \+(.*) [)\]]/
              , v = m.value.match(S);
            m.value = v ? m.value.replace(S, "") : m.value
        }),
        Object.assign(m, {
            className: `tpo_option-input tpo_text-box tpo_${pt.fontStyle}`,
            name: `properties[${r}]`,
            id: `${i}-${a}`,
            placeholder: o,
            type: "text",
            value: d?.default_value || "",
            ariaLabel: r
        }),
        m.dataset.required = t,
        f && m.setAttribute("form", f),
        m.style.fontSize = `${pt.fontSize}px`,
        pt?.fontFamily && m.style.setProperty("--entered-input-fontFamily", `${pt.fontFamily}` || ""),
        m.style.setProperty("--entered-input-text", V.inputText_enteredValue || pt.fontColor || ""),
        m.style.backgroundColor = V.inputBackground_unselected ?? jt.background,
        m.style.borderColor = V.inputBorder_unselected ?? jt.borderColor,
        m.style.borderRadius = `${Oi.inputBorderRadius}px`,
        m.style.setProperty("--active-input-border", V.inputBorder_selected || jt.activeBorderColor || ""),
        m.style.setProperty("--placeholder-input-text", V.inputText_placeholder || ""),
        m.style.setProperty("--active-input-background", V.inputBackground_selected || ""),
        u.type = "button",
        u.addEventListener("click", function() {
            let S = s(m.value);
            S !== !1 && S !== "" && ke(n, p) && b(m, m.value, h)
        }),
        m
    }
    function Dm(t, o, i, a, r, c, d, n, f, p, s) {
        const {is_required: l, type: b, option_id: h, id: u, option_identifier: x, metadata: _="{}", option_types: m, default_value: S} = t
          , v = JSON.parse(_);
        let {min: y=0, max: g=10, step: C=1, incrementValue: w, defaultValue: $=y, measurementUnit: L="", sliderStyle: P="style1", displaySliderMarks: k=!0, markInterval: A, showValueLabelsBelowMarks: R=!0, pricingLogic: Q="single", displaySelectedValue: I=[], priceDisplay: F=[], separateAddOnProduct: ee=!1, thumbIcon: K="default", customThumbIconUrl: H="", displayQuantityBox: T=!1} = v;
        const E = parseFloat(A);
        isNaN(E) || E === 0 ? k = !1 : A = E,
        (isNaN(parseFloat($)) || $ === null || $ === void 0 || $ < y) && ($ = y);
        let q = null
          , j = !1;
        if ((w === null || w < C) && (w = C),
        S) {
            let kt = S.toString();
            kt = kt.replace(/\[.*?\]/g, "").replace(/\(.*?\)/g, "").trim();
            const wt = parseFloat(kt);
            isNaN(wt) || ($ = wt < y ? y : wt)
        }
        const N = w > 0 ? w : C;
        if (N > 0) {
            let kt = Math.ceil(y / N) * N
              , wt = N.toString().split(".")[1]?.length || 0;
            if (kt = parseFloat(kt.toFixed(wt)),
            $ === y && y % N !== 0 && Math.abs(y % N - N) > jr)
                $ = kt;
            else {
                let Et = Math.round($ / N) * N;
                Et < y && qi.approxLte(Et, y) && (Et += N),
                Et = parseFloat(Et.toFixed(wt)),
                Et >= y && Et <= g && ($ = Et)
            }
        }
        let U = x;
        ee && (U = `_${x}`);
        const O = document.createElement("div");
        O.className = `tpo_range-container tpo_range-${P}`;
        const M = document.createElement("style");
        let z = `
            [id="tpo_slider_${u}"] .noUi-tooltip {
                display: none !important;
            }
            [id="tpo_slider_${u}"] .noUi-handle:hover .noUi-tooltip,
            [id="tpo_slider_${u}"] .noUi-handle.noUi-active .noUi-tooltip {
                display: flex !important;
                align-items: center;
                justify-content: center;
            }
        `
          , X = !1;
        if (window.TPOConfigs?.settings?.designSetting)
            try {
                JSON.parse(window.TPOConfigs.settings.designSetting)?.designStyle?.appMode === "dark" && (X = !0)
            } catch {}
        else
            window.TPOConfigs?.settings?.designStyle?.appMode === "dark" && (X = !0);
        const J = typeof po < "u" && po || document.body.dataset.tpoMode === "dark" || X;
        let te = "#FFFFFF"
          , ue = "#D9D9D9"
          , me = "#000000"
          , Me = "#D9D9D9"
          , Te = "#000000"
          , we = "#E6E6E6"
          , Ce = "#000000"
          , Le = "#D9D9D9";
        P === "style2" ? (Me = "#FFFFFF",
        Le = "#FFFFFF") : P === "style3" && (Ce = "#A8A8A8",
        Le = "#A8A8A8"),
        J && (te = "#FFFFFF",
        ue = "#FFFFFF",
        me = "#FFFFFF",
        Me = "#333333",
        Te = "#FFFFFF",
        we = "#333333",
        Ce = "#FFFFFF",
        Le = "#333333",
        P === "style2" ? (Me = "#1E1E1E",
        Le = "#1E1E1E") : P === "style3" && (te = "#000000",
        Ce = "#A8A8A8",
        Le = "#616161"));
        let je = V[`rangeSlider_${P}_thumb_color`] || te
          , Ae = V[`rangeSlider_${P}_thumb_border`] || ue
          , Z = V[`rangeSlider_${P}_track_inactive`] || Me
          , Ue = V[`rangeSlider_${P}_track_active`] || me
          , ft = V[`rangeSlider_${P}_track_activeStart`] || "#4D9FFF"
          , le = V[`rangeSlider_${P}_track_activeEnd`] || "#0062D1"
          , at = (V[`rangeSlider_${P}_track_isGradient`] ?? 1) === 1
          , bt = V[`rangeSlider_${P}_tooltip_text`] || Te;
        V[`rangeSlider_${P}_tooltip_background`];
        let oe = V[`rangeSlider_${P}_mark_active`] || Ce
          , Ve = V[`rangeSlider_${P}_mark_inactive`] || Le
          , Ne = 22
          , pe = 4;
        P === "style2" && (Ne = 18,
        pe = 10),
        P === "style3" && (Ne = 12,
        pe = 12);
        let lt = Kt[`rangeSlider_${P}_thumb_height`]
          , St = Kt[`rangeSlider_${P}_track_height`]
          , _t = lt ? parseInt(lt) : Ne
          , it = St ? parseInt(St) : pe
          , Be = _t
          , Ge = "50%"
          , ct = !1;
        const ie = J ? 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none"><rect width="24" height="18" rx="2" fill="%23FFFFFF"/><rect x="0.4" y="0.4" width="23.2" height="17.2" rx="1.6" stroke="%234D4D4D" stroke-width="0.8"/><line x1="10.5" y1="4" x2="10.5" y2="14" stroke="%23666666"/><line x1="13.5" y1="4" x2="13.5" y2="14" stroke="%23666666"/></svg>' : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none"><rect width="24" height="18" rx="2" fill="white"/><rect x="0.4" y="0.4" width="23.2" height="17.2" rx="1.6" stroke="%23D9D9D9" stroke-width="0.8"/><line x1="10.5" y1="4" x2="10.5" y2="14" stroke="%23E6E6E6"/><line x1="13.5" y1="4" x2="13.5" y2="14" stroke="%23E6E6E6"/></svg>'
          , _e = V.hasOwnProperty(`rangeSlider_${P}_thumb_color`)
          , Oe = P === "style2" && (K === "default" || K === "custom" && !H) && !_e
          , He = lt != null && !isNaN(parseInt(lt));
        P === "style2" && (Ge = "4px",
        Oe ? He ? Be = _t * (24 / 18) : (Be = 24,
        _t = 18) : (Be = _t * (24 / 18),
        ct = !0));
        let Xe = je
          , ut = "none"
          , Nt = `1px solid ${Ae}`
          , We = "0 3px 6px -3px #BBB"
          , de = Ge;
        Oe && !_e && (Xe = "transparent",
        ut = `url('${ie}')`,
        Nt = "none",
        We = "0 3px 6px -3px #BBB",
        de = "0"),
        P === "style3" && (Nt = `1px solid ${Ue}`,
        We = "0 3px 6px -3px #BBB"),
        z += `
            [id="tpo_slider_${u}"].noUi-target {
                padding: ${P === "style3" ? `0 ${Be / 2}px` : "0"} !important;
                box-sizing: border-box !important;
                height: ${it}px !important;
                background: ${Z} !important;
                border-radius: ${P === "style3" ? "20px" : "4px"} !important;
                border: none !important;
                box-shadow: ${P === "style2" ? `0 0 0 1px ${J ? "#424242" : "#d9d9d9"}` : "none"} !important;
                z-index: 0 !important;
            }

            [id="tpo_slider_ ${u}"] .noUi-base {
                height: 100% !important;
                border-radius: ${P === "style3" ? "20px" : "4px"} !important;
            }

            [id="tpo_slider_ ${u}"] .noUi-connects {
                height: 100% !important;
                border-radius: ${P === "style3" ? "20px" : "4px"} !important;
                ${P === "style3" ? "overflow: visible !important;" : ""}
            }

            [id="tpo_slider_ ${u}"] .noUi-connect {
                background: ${at ? `linear-gradient(90deg, ${ft}, ${le})` : Ue} !important;
                box-shadow: ${P === "style2" ? `0 0 0 1px ${Ue}` : "none"} !important;
                border-radius: ${P === "style3" ? "20px" : "4px"} !important;
                z-index: 1 !important;
                ${P === "style3" ? `
                transform: none !important;
                left: -${Be / 2}px !important;
                width: calc(var(--active-percent, 0%) + ${Be}px) !important;
                opacity: var(--active-opacity, 1) !important;
                ` : ""}
            }

            [id="tpo_slider_ ${u}"] .noUi-handle {
                width: ${Be}px !important;
                height: ${_t}px !important;
                background-color: ${Xe} !important;
                background-image: ${ut} !important;
                background-size: contain !important;
                background-repeat: no-repeat !important;
                background-position: center !important;
                border: ${Nt} !important;
                box-shadow: ${We} !important;
                right: -${Be / 2}px !important;
                top: 50% !important;
                margin-top: -${_t / 2}px !important;
                z-index: 3 !important;
                border-radius: ${de} !important;
                box-sizing: border-box !important;
            }

            [id="tpo_slider_ ${u}"] .noUi-handle:before,
            [id="tpo_slider_ ${u}"] .noUi-handle:after {
                display: ${ct && K === "default" ? "block" : "none"} !important;
            }

            [id="tpo_slider_ ${u}"] .noUi-tooltip {
                background-color: transparent !important;
                color: ${bt} !important;
                border: none !important;
                border-radius: 4px !important;
                white-space: nowrap !important;
            }

            /* Marks (Pips) */
            [id="tpo_slider_ ${u}"] .noUi-pips {
                z-index: 2 !important;
                padding: ${P === "style3" ? "0" : "2px 0"} !important;
                top: 100% !important;
                height: auto !important;
                ${P === "style3" ? `
                left: ${Be / 2}px !important;
                width: calc(100% - ${Be}px) !important;
                ` : ""}
            }

            [id="tpo_slider_ ${u}"] .noUi-marker-large,
            [id="tpo_slider_ ${u}"] .noUi-marker-sub {
                width: ${P === "style3" ? Math.min(it - 7, _t - 2) : it + 4}px !important;
                height: ${P === "style3" ? Math.min(it - 7, _t - 2) : it + 4}px !important;
                background-color: ${Ve} !important;
                top: -${(it + (P === "style3" ? Math.min(it - 7, _t - 2) : it + 4)) / 2}px !important;
                z-index: 2 !important;
                border-radius: 50% !important;
                border: none !important;
            } 

            ${P === "style3" ? `
            [id="tpo_slider_${u}"] .noUi-marker[style*="left: 0%"],
            [id="tpo_slider_${u}"] .noUi-marker[style*="left: 100%"] {
                display: none !important;
            }
            ` : ""}

            [id="tpo_slider_ ${u}"] .noUi-marker-large.tpo-pip-active,
            [id="tpo_slider_ ${u}"] .noUi-marker-sub.tpo-pip-active {
                background-color: ${oe} !important;
                z-index: 3 !important;
            }

        `;
        const qe = {
            heart: "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/heart-thumb.svg?v=1769505589",
            rectangle: "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/rectangle-thumb.svg?v=1769505589",
            fabric: "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/Fabric_1.svg?v=1772421368",
            scale: "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/scale-thumb.svg?v=1769505589",
            cart: "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/cart-thumb.svg?v=1769505589",
            meat_1: "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/Meat_1.svg?v=1772421369",
            meat_2: "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/Meat_2_1.svg?v=1772421370"
        };
        if (K !== "default" && (qe[K] || K === "custom" && H)) {
            const kt = K === "custom" ? H.replace(/'/g, "%27") : qe[K];
            z += `
                [id="tpo_slider_${u}"] .noUi-handle {
                    background-image: url('${kt}') !important;
                    background-size: contain !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    background-color: transparent !important;
                    border: none !important;
                    box-shadow: none !important;
                    border-radius: 0 !important;
                    filter: 
                        drop-shadow(1px 0 0 white) 
                        drop-shadow(-1px 0 0 white) 
                        drop-shadow(0 1px 0 white) 
                        drop-shadow(0 -1px 0 white)
                        !important;
                    overflow: visible !important;
                    z-index: 3 !important;
                }
                [id="tpo_slider_${u}"] .noUi-handle:before,
                [id="tpo_slider_${u}"] .noUi-handle:after {
                    display: none !important;
                }
            `
        }
        M.innerHTML = z,
        O.appendChild(M);
        const Ie = document.createElement("div");
        if (Ie.id = `tpo_slider_${u}`,
        T) {
            const kt = document.createElement("div");
            kt.className = "tpo_range-slider-wrapper",
            Ie.classList.add("tpo_range-slider-element--with-qty"),
            kt.appendChild(Ie);
            const wt = document.createElement("div");
            if (wt.className = "tpo_range-qty-box-container",
            q = document.createElement("input"),
            q.type = "text",
            q.className = "tpo_range-qty-input",
            L) {
                q.classList.add("tpo_range-qty-input--with-unit");
                const Et = document.createElement("span");
                Et.textContent = L.length > 4 ? L.substring(0, 4) : L,
                Et.className = "tpo_range-qty-unit",
                wt.appendChild(q),
                wt.appendChild(Et)
            } else
                q.classList.add("tpo_range-qty-input--center"),
                wt.appendChild(q);
            wt.onclick = () => q.focus(),
            q.addEventListener("change", Et => {
                let Ot = parseFloat(Et.target.value);
                const Xt = parseFloat(y) || 0
                  , xi = parseFloat(g) || 100
                  , fi = parseFloat(C) || 1
                  , ai = parseFloat(w) || 1;
                isNaN(Ot) && (Ot = Xt),
                Ot < 0 && (Ot = Math.abs(Ot)),
                Ot < Xt && (Ot = Xt),
                Ot > xi && (Ot = xi);
                const ye = ai > 0 ? ai : fi;
                if (ye > 0) {
                    let xe = Xt + Math.round((Ot - Xt) / ye) * ye;
                    xe < Xt && (xe = Xt),
                    xe > xi && (xe = xi),
                    Ot = xe
                }
                Et.target.value = Ot,
                Ie.noUiSlider && Ie.noUiSlider.set(Ot)
            }
            ),
            kt.appendChild(wt),
            O.appendChild(kt)
        } else
            Ie.classList.add("tpo_range-slider-element--full"),
            O.appendChild(Ie);
        const Qe = document.createElement("input");
        Object.assign(Qe, {
            type: "hidden",
            className: "tpo_range-input-hidden",
            value: $,
            name: `properties[${U}]`,
            ariaLabel: x
        }),
        Qe.dataset.required = l,
        i && Qe.setAttribute("form", i),
        O.appendChild(Qe);
        const Mt = kt => {
            let wt = 0;
            const Et = Number(parseFloat(kt).toFixed(8));
            if (Q === "tiered") {
                const Ot = m.find(Xt => {
                    const xi = JSON.parse(Xt.metadata || "{}");
                    return Et >= (xi.min_value || 0) && Et <= (xi.max_value || 1 / 0)
                }
                );
                if (Ot) {
                    const Xt = parseFloat(Ot.additional_price || 0);
                    C > 0 ? wt = Math.floor(Number((Et / C).toFixed(8))) * Xt : wt = Xt * Et
                }
            } else if (m.length > 0) {
                const Ot = parseFloat(m[0].additional_price || 0);
                (Q === "single" || si === "bundle" || Vt === "expand") && C > 0 ? wt = Math.floor(Number((Et / C).toFixed(8))) * Ot : wt = Ot * Et
            }
            return wt
        }
          , Jt = (kt, wt=!1) => {
            const Et = Number(parseFloat(kt[0]).toFixed(8))
              , Ot = Mt(Et);
            wt && (j = !0),
            r && r(Et, !j),
            q && (q.value = Et);
            const xi = c?.parentElement?.parentElement?.querySelector(".tpo_selected_values_span");
            if (xi) {
                let ai = "";
                if (I.includes("label")) {
                    const ye = Math.round(Et / C) * C
                      , xe = C.toString().split(".")[1]?.length || 0
                      , Ye = Number(ye.toFixed(xe)).toString();
                    ai += `<span style="color: ${J ? "#FFFFFF" : "#121212"};">&nbsp;${Ye}${L ? ` ${L}` : ""}</span>`
                }
                xi.innerHTML = ai
            }
            if (Ot > 0) {
                let ai = PriceFormatter.formatMoney(Ot * 100, !0);
                c && (c.textContent = `(+${ai})`,
                c.classList.add("active"),
                F.includes("label") ? c.style.display = "" : c.style.display = "none")
            } else
                c && (c.classList.remove("active"),
                c.style.display = "none");
            const fi = L ? `${Et} ${L}` : Et;
            Et === 0 ? Qe.value = "" : Ot > 0 || Ot === 0 && m.length > 0 ? d(Qe, fi, Ot) : d(Qe, fi, 0),
            p(Et),
            typeof window.easifyHandleUpdateTotalAdditionalPrice == "function" && window.easifyHandleUpdateTotalAdditionalPrice()
        }
          , Bt = () => {
            if (typeof noUiSlider > "u") {
                setTimeout(Bt, 100);
                return
            }
            Ie.noUiSlider && Ie.noUiSlider.destroy();
            let kt = !0
              , wt = []
              , Et = w > 0 ? w : C;
            if (Et > 0) {
                wt.push(y);
                const xe = Ye => {
                    if (!(Ye > 0))
                        return;
                    let Ze = Math.ceil(y / Ye) * Ye;
                    for (Ze = qi.formatDisplayValue(Ze),
                    (Ze < y || qi.approxEqual(Ze, y)) && (Ze += Ye); qi.approxLte(Ze, g); ) {
                        const Ut = qi.formatDisplayValue(Ze);
                        Ut <= g && wt.push(Ut),
                        Ze += Ye
                    }
                }
                ;
                xe(Et),
                A > 0 && xe(A),
                wt.push(g),
                wt.sort( (Ye, Ze) => Ye - Ze),
                wt = wt.filter( (Ye, Ze, Ut) => Ze === 0 || !qi.approxEqual(Ye, Ut[Ze - 1]))
            } else
                wt = [y, g];
            k ? Ie.classList.remove("tpo-hide-intermediate-marks") : Ie.classList.add("tpo-hide-intermediate-marks");
            let Ot = {
                mode: "values",
                values: wt,
                density: 4,
                filter: function(xe, Ye) {
                    return xe === y || xe === g ? 1 : A > 0 ? qi.isMultipleOf(xe, A) ? 1 : 2 : 1
                },
                format: {
                    to: function(xe) {
                        let Ye = !1
                          , Ze = xe === y || xe === g;
                        !Ze && A > 0 && (Ze = qi.isMultipleOf(xe, A)),
                        Ze && (k ? Ye = xe === y || xe === g || R : Ye = xe === y || xe === g);
                        const Ut = qi.formatDisplayValue(xe);
                        let qo = `<span style="color: ${J ? "#FFFFFF" : "#121212"};">${Ut}${!T && xe === y && L ? ` ${L}` : ""}</span>`;
                        Ye || (qo = `<div class="tpo-pip-hidden-wrapper tpo-pip-hidden">${qo}</div>`);
                        const ss = Mt(xe);
                        if (ss > 0 && F.includes("labels") && Ye) {
                            const Co = PriceFormatter.formatMoney(ss * 100, !0);
                            qo += `<span class="tpo-pip-price" style="color: #A1A1A1;">+${Co}</span>`
                        }
                        return qo
                    }
                }
            }
              , Xt = !1;
            (I.includes("tooltip") || I.includes("track")) && (Xt = {
                to: function(xe) {
                    const Ye = w > 0 ? w : C
                      , Ze = qi.robustSnap(xe, Ye, y, g);
                    let Ut = `<span ${I.includes("track") ? 'class="display-selected-track"' : ""} style="color: ${bt};">${Ze}${L ? ` ${L}` : ""}</span>`;
                    const Di = Mt(Ze);
                    if (Di > 0 && F.includes("value")) {
                        const qo = PriceFormatter.formatMoney(Di * 100, !0);
                        Ut += ` <span style="color: #A1A1A1; margin-left: 4px;">(+${qo})</span>`
                    }
                    return Ut
                }
            });
            let xi = {
                min: y,
                max: g
            };
            const fi = w > 0 ? w : C;
            if (fi > 0) {
                let xe = Math.ceil(y / fi) * fi;
                if (xe = qi.formatDisplayValue(xe),
                xe > y && xe < g) {
                    const Ye = (xe - y) / (g - y) * 100;
                    if (Ye > 0 && Ye < 100) {
                        const Ze = Ye.toFixed(4) + "%";
                        xi = {
                            min: [y, xe - y],
                            [Ze]: [xe, fi],
                            max: [g]
                        }
                    }
                }
            }
            noUiSlider.create(Ie, {
                start: [$],
                connect: "lower",
                animate: !0,
                animationDuration: 300,
                ...Object.keys(xi).length === 2 ? {
                    step: fi
                } : {},
                range: xi,
                tooltips: Xt,
                pips: Ot
            });
            const ai = w > 0 ? w : C
              , ye = function(xe) {
                const Ye = Number(parseFloat(xe[0]).toFixed(8))
                  , Ze = qi.robustSnap(Ye, ai, y, g);
                qi.approxEqual(Ye, Ze) || Ie.noUiSlider.set(Ze)
            };
            Ie.noUiSlider.on("change", ye),
            Ie.noUiSlider.on("update", function(xe) {
                const Ye = parseFloat(xe[0])
                  , Ze = w > 0 ? w : C
                  , Ut = qi.robustSnap(Ye, Ze, y, g);
                Jt([Ut], !kt),
                kt = !1;
                const Di = (Ye - y) / (g - y) * 100;
                P === "style3" && (Ie.style.setProperty("--active-percent", `${Di}%`),
                Ie.style.setProperty("--active-opacity", Di === 0 ? "0" : "1")),
                Ie.querySelectorAll(".noUi-marker-large").forEach(Co => {
                    const tn = Co.style.left;
                    parseFloat(tn) <= Di ? Co.classList.add("tpo-pip-active") : Co.classList.remove("tpo-pip-active")
                }
                ),
                Ie.querySelectorAll(".noUi-value").forEach(Co => {
                    Co.classList.remove("tpo-track-active-label");
                    const tn = Co.querySelector(".tpo-pip-hidden-wrapper");
                    tn && tn.classList.add("tpo-pip-hidden");
                    const Ql = parseFloat(Co.getAttribute("data-value"));
                    qi.approxEqual(Ql, Ut) && Co.classList.add("tpo-track-active-label")
                }
                )
            }),
            setTimeout( () => {
                Jt([$])
            }
            , 0)
        }
        ;
        return Bt(),
        O
    }
    function jm(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u, x, _, m, S, v, y, g, C, w, $, L, P, k, A) {
        let {label: R, is_default: Q, additional_price: I=null, id: F, number_color: ee, color_code: K="", product_id: H, variant_id: T, image_url: E, image_canvas_url: q, metadata: j="{}"} = i || {};
        K || (K = ",");
        const N = K?.split(",")
          , U = v?.image_color ?? 0
          , O = JSON.parse(j || "{}")
          , M = O.printBoxName ? O.printBoxName : ""
          , z = O.printBoxValue ? O.printBoxValue : ""
          , X = O.url || "";
        let J = X.startsWith("/") || X.startsWith("http") ? X : `https://${X}`;
        const te = O.description || ""
          , ue = O.tooltip || ""
          , me = gr(ue);
        let Me = {};
        const Te = v.id
          , we = v.is_change_label
          , Ce = JSON.parse(v.metadata || "{}");
        let {useUrl: Le=!1, linkDisplay: je="separate", linkLabel: Ae, separateAddOnProduct: Z=!1, descriptionPosition: Ue="below_value"} = Ce;
        Ae || (Ae = "View"),
        J = Fa(Le, J);
        const ft = Le && je === "separate"
          , le = Le && je === "clickable_label";
        T && Mi.forEach(_e => {
            _e.variants.forEach(Oe => {
                `${Oe.id}` === T && (Me = {
                    ..._e,
                    variants: [{
                        ...Oe
                    }]
                },
                we || (i.label = Oe?.title === "Default Title" ? Oe?.name : Oe?.title,
                R = i.label))
            }
            )
        }
        );
        const at = Me?.variants !== void 0 ? Me.variants[0].available : !0
          , bt = i?.label;
        E = Ma(Me, E);
        let oe = bd(m, E, bt);
        oe = Na({
            imageOrColor: U,
            numberColor: ee,
            swatchShape: y,
            colorCodes: N,
            imageUrl: E,
            imgElement: oe
        }),
        oe === null && (oe = ""),
        Me?.variants && (I = Me.variants[0].price / 100);
        const Ve = C.configs
          , Ne = C.enable
          , {quantitySelectorWrapper: pe, errorMessageElement: lt} = Ne ? w(Ve, I, ie, F, Te, pr, "", ct) : {
            quantitySelectorWrapper: null,
            errorMessageElement: null
        };
        let St = document.createElement("input");
        St.style.setProperty("--checkbox-checkMark", V?.checkboxCheckmark_unselected),
        St.style.setProperty("--active-checkbox-checkMark", V?.checkboxCheckmark_selected),
        Object.assign(St, {
            className: "tpo_radio-button tpo-checkbox-button",
            type: "checkbox",
            disabled: !at,
            checked: Q && at,
            id: `${a}-${r}`,
            value: b,
            onchange: Y
        }),
        T && (St.dataset.productId = H,
        St.dataset.variantId = T);
        let _t = Re["SOLD OUT"] && Re["SOLD OUT"][xt] || "SOLD OUT";
        if (at || (i.label = `${R} <span class="tpo_sold_out_hyphen">- </span><span class="tpo_sold_out_text">${_t}</span>`,
        R = i.label),
        Lt?.outStockOptions === "hide" && !at)
            return "";
        let it = document.createElement("span");
        Object.assign(it, {
            className: `tpo_additional-price ${l !== 0 ? "" : "tpo_hidden"}`
        }),
        Q && (u.push(F),
        x && oo(R),
        h(F)),
        Io && (St.dataset.printBoxName = M,
        St.dataset.printBoxValue = z);
        let Be = document.createElement("div");
        Object.assign(Be, {
            className: `container-wrap-selection ${at ? "" : "out_stock_label"} ${S === "hover" ? "" : oe ? "tpo_label_under_price" : ""}`
        });
        let Ge = document.createElement("div");
        Ge.style.setProperty("--checkbox-border", V?.checkboxBorder_unselected ?? ""),
        Ge.style.setProperty("--active-checkbox-border", V?.checkboxBorder_selected ?? ""),
        Ge.style.setProperty("--checkbox-background", V?.checkboxBackground_unselected ?? ""),
        Ge.style.setProperty("--active-checkbox-background", V?.checkboxBackground_selected ?? ""),
        Ge.style.setProperty("--checkbox-checkMark", V?.checkboxCheckmark_unselected ?? ""),
        Ge.style.setProperty("--active-checkbox-checkMark", V?.checkboxCheckmark_selected ?? ""),
        Object.assign(Ge, {
            className: `tpo_radio-button-wrapper ${Ue} ${te ? "has-description" : ""}`,
            innerHTML: `
            <label
                class='tpo_${tt.fontStyle} tpo_image_shape_${y} ${S === "hover" ? "" : oe ? "tpo_label_under_option_type" : ""}' style='color: ${V.optionValueColor ?? tt.fontColor}; ${tt?.fontFamily ? `font-family: ${tt?.fontFamily};` : ""} font-size: ${tt.fontSize}px'>
                ${S === "hover" ? `<div class="tpo_next_option_type ${oe ? "has-image" : "no-image"}">
                                ${oe} 
                                <div class="tpo_url_wrapper tpo_option_type_label_wrapper">${ft ? `<span class="tpo_option_type_label">${R} </span> <a class="tpo_url_value tpo_view_more" href="${J}" target="_blank">${Ae}</a>` : le ? `<span class="tpo_option_type_label"><a class="tpo_url_value" href="${J}" target="_blank">${R}</a> </span>` : `<span class="tpo_option_type_label">${R} </span>`}
                                    ${te ? Xi(te, "below_value").outerHTML : ""}
                          </div></div>` : `<div class="tpo_under_option_type"><div><span class="tpo_url_wrapper">${ft ? `<span class="tpo_option_type_label">${R} </span> <a class="tpo_url_value tpo_view_more" href="${J}" target="_blank">${Ae}</a>` : le ? `<span class="tpo_option_type_label"><a class="tpo_url_value" href="${J}" target="_blank">${R}</a> </span>` : `<span class="tpo_option_type_label">${R} </span>`}${te ? Xi(te, "below_value").outerHTML : ""}</span> ${oe}</div></div>`}${te ? Xi(te, "under-checkbox below_image").outerHTML : ""}
            </label>
        `
        });
        function ct() {
            St.checked = !1,
            Y({
                target: {
                    checked: !1
                }
            })
        }
        function Y(_e) {
            if (_e.target.checked) {
                if (Ne && (pe.classList.remove("swatches-not-avaliable"),
                pe.querySelector("input").disabled = !1),
                Ne)
                    Se();
                else {
                    if (I) {
                        let Oe = PriceFormatter.formatMoney(parseFloat(I * 100), !0);
                        c.push(`${R} [ +${Oe} ]`)
                    } else
                        c.push(R);
                    f.price += I,
                    yt(st, p, xo(f.price) ? f.price.toFixed(2) : f.price),
                    d.value = c.join(", ")
                }
                u.push(F),
                x && oo(R),
                h(F),
                pe?.querySelector("input")?.value !== "0" && oi(F, q || E, !0),
                n(),
                _e.target.dataset.checked = "true",
                _ ? dt(ke(t, o), t) : ke(t, o)
            } else {
                pe && (pe.classList.add("swatches-not-avaliable"),
                pe.querySelector("input").disabled = !0,
                pe.classList.remove("tpo-error_validate"),
                lt.innerHTML = "");
                let Oe = R;
                if (Ne) {
                    const Xe = pe.querySelector("input").value;
                    if (I) {
                        const ut = Number(Xe) * I;
                        let Nt = PriceFormatter.formatMoney(parseFloat(ut * 100), !0);
                        Oe = `${R} [ +${Nt} ] | ${Xe}`,
                        f.price -= ut
                    } else
                        Oe = `${R} | ${Xe}`;
                    k && Si($, 0, Ve, A)
                } else {
                    if (I) {
                        let Xe = PriceFormatter.formatMoney(parseFloat(I * 100), !0);
                        Oe = `${R} [ +${Xe} ]`
                    }
                    f.price -= I
                }
                const He = c.indexOf(Oe);
                if (He > -1 && (c.splice(He, 1),
                u.splice(He, 1)),
                x && oo(R),
                yt(st, p, xo(f.price) ? f.price.toFixed(2) : f.price),
                d.value = c.join(", "),
                n(),
                h(F),
                _e.target.dataset && (_e.target.dataset.checked = "false"),
                oi(F, q || E, !1),
                pe) {
                    const Xe = $.querySelector(".tpo_quantity_selector_total-selected");
                    n() && Xe && Xe.innerHTML === "0" && (Xe.classList.remove("tpo-quantity-error"),
                    Number(Xe.textContent) !== 0 && Xe.classList.add("tpo-quantity-success"))
                }
                _ ? dt(ke(t, o), t) : ke(t, o)
            }
            h(F),
            yt(st, p, xo(f.price) ? f.price.toFixed(2) : f.price),
            d.value = c.join(", "),
            n(),
            _ ? dt(ke(t, o), t) : ke(t, o),
            d.dispatchEvent(new Event("change"))
        }
        if (pe) {
            const _e = document.createElement("div");
            Object.assign(_e, {
                className: "tpo-quantity_always-show"
            }),
            _e.append(pe),
            Ge.append(_e)
        }
        setTimeout( () => {
            const _e = So(i.metadata);
            if (!_e)
                return;
            const Oe = Ge.querySelector(".tpo_option_type_label");
            if (!Oe) {
                Ge.prepend(_e);
                return
            }
            const He = Oe.querySelector(".tpo_additional-price");
            He ? He.insertAdjacentElement("afterend", _e) : Oe.appendChild(_e)
        }
        , 50);
        function Se() {
            const _e = pe.querySelector("input").value
              , Oe = pe.querySelector("input");
            if (Oe && Oe.dispatchEvent(new Event("change")),
            _e)
                if (I) {
                    const He = I * Number(_e);
                    ie(He, _e)
                } else
                    ie(0, _e);
            else if (pe.querySelector("input").value = 1,
            I) {
                const He = I * 1;
                ie(He, 1)
            } else
                ie(0, 1)
        }
        function ie(_e, Oe) {
            const He = _e ? `${R} [ +` : `${R} |`;
            if (_e) {
                const Xe = c.find(ut => ut.includes(He) && ut.split("[")[0].trim() === He.split("[")[0].trim());
                if (Xe) {
                    const ut = c.indexOf(Xe)
                      , Nt = c[ut].lastIndexOf("|")
                      , We = c[ut].slice(Nt + 1).trim();
                    let de = PriceFormatter.formatMoney(parseFloat(_e * 100), !0);
                    c[ut] = `${R} [ +${de} ] | ${Oe}`;
                    const qe = Number(_e) / Number(Oe)
                      , Ie = Math.abs(Number(We) - Number(Oe));
                    Number(We) < Number(Oe) && (f.price += Ie * qe),
                    Number(We) > Number(Oe) && (f.price -= Ie * qe)
                } else {
                    let ut = PriceFormatter.formatMoney(parseFloat(_e * 100), !0);
                    c.push(`${R} [ +${ut} ] | ${Oe}`),
                    f.price += _e
                }
            } else {
                const Xe = c.find(ut => ut.includes(He) && ut.split("|")[0].trim() === He.split("|")[0].trim());
                if (!Xe)
                    c.push(`${R} | ${Oe}`);
                else {
                    const ut = c.indexOf(Xe);
                    c[ut] = `${R} | ${Oe}`
                }
            }
            yt(st, p, xo(f.price) ? f.price.toFixed(2) : f.price),
            d.value = c.join(", "),
            k && Si($, 0, Ve, A),
            dt(ke(t, o), t)
        }
        if (Q && at) {
            if (Ne) {
                const _e = g.querySelectorAll(".tpo_quantity-selector_wrapper");
                _e && _e.length && _e.forEach(Oe => {
                    Oe.classList.add("swatches-not-avaliable")
                }
                ),
                pe.classList.remove("swatches-not-avaliable"),
                pe.querySelector("input").disabled = !1,
                Se()
            } else {
                if (I) {
                    let _e = PriceFormatter.formatMoney(parseFloat(I * 100), !0);
                    c.push(`${R} [ +${_e} ]`)
                } else
                    c.push(R);
                f.price += I,
                d.value = c.join(", ")
            }
            St.dataset.checked = "true",
            yt(st, p, f.price.toFixed(2)),
            t.tagName === "FORM" && setTimeout(function() {
                _ ? dt(ke(t, o), t) : ke(t, o)
            }, 500),
            setTimeout( () => {
                d.dispatchEvent(new Event("change"))
            }
            , 0)
        }
        return yt(st, it, I),
        Ge.firstElementChild.prepend(St),
        pe ? Be.append(Ge, lt) : Be.append(Ge),
        Be.querySelector(".tpo_option_type_label")?.append(it, me),
        Be
    }
    function id(t, o, i, a="top_center", r, c) {
        if (!(i instanceof Element) || !o || !t)
            return;
        i.className = i.className.replace(/\btpo-badge-position-\S+/g, ""),
        t.classList.add("tpo-swatch-wrapper"),
        o.classList.add("tpo-swatch-label"),
        i.classList.add(`tpo-badge-position-${a}`);
        const n = [...t.querySelectorAll(".tpo_option_type_description"), ...o.querySelectorAll(".tpo_option_type_description")].find(l => (l.classList.contains("image-swatches-description") || l.classList.contains("color-swatches-description")) && l.classList.contains("below_swatch") && l.textContent.trim())
          , f = t.classList.contains("under") && t.classList.contains("tpo_color-swatch-always")
          , p = t.classList.contains("under") && t.classList.contains("tpo_image-swatch-always");
        if (n && (r === "under" || c === "hover") || f || p) {
            const l = o.querySelector(".tpo_image-wrapper") ?? t.querySelector(".tpo_image-wrapper");
            if (l) {
                l.appendChild(i);
                return
            }
            o.appendChild(i);
            return
        }
        switch (a) {
        case "below_swatch":
        case "outside_below_left":
        case "outside_below_right":
            {
                r === "under" || c === "hover" ? o.insertAdjacentElement("afterend", i) : o.appendChild(i);
                break
            }
        case "outside_top_center":
        case "outside_top_left":
        case "outside_top_right":
            {
                r === "under" || c === "hover" ? o.insertAdjacentElement("beforebegin", i) : r === "next_to" ? o.insertAdjacentElement("afterbegin", i) : o.insertAdjacentElement("beforebegin", i);
                break
            }
        case "after_label":
            const l = o?.querySelector(".tpo_option_type_label") ?? t.querySelector(".tpo_option_type_label") ?? t.querySelector(".tpo_option_type_label_wrapper") ?? t.querySelector(".tpo_option_label") ?? t;
            if (l) {
                const b = document.createElement("span");
                b.className = "tpo_badge-wrapper tpo-badge-position-after_label",
                b.appendChild(i),
                l.appendChild(b)
            }
            break;
        default:
            o.appendChild(i);
            break
        }
        if (new Set(["top_center", "bottom_center", "overlay_top_center", "overlay_center", "overlay_bottom_center"]).has(a)) {
            const l = () => {
                if (!i || !o)
                    return;
                const b = i.offsetWidth
                  , h = o.offsetWidth;
                if (!b || !h)
                    return;
                let u = null;
                if (t && t.closest && (u = t.closest(".tpo_option-type-image-swatches-wrapper") || t.closest(".tpo_option-type-color-swatches-wrapper")),
                !u)
                    return;
                const x = window.getComputedStyle(u)
                  , _ = parseFloat(x.columnGap) || parseFloat(x.gap) || 0
                  , m = Math.max(0, b - h) + 20;
                m > _ && (u.style.columnGap = `${m}px`,
                u.style.gap = `${m}px`)
            }
            ;
            typeof requestAnimationFrame == "function" ? requestAnimationFrame(l) : setTimeout(l, 0)
        }
    }
    function xl(t, o, i, a, r, c, d, n, f, p, s, l, b, h, u, x, _, m, S, v, y, g, C, w, $, L, P, k, A, R, Q, I) {
        const F = r ? 1 : 0
          , ee = P.type
          , K = P?.image_color ?? 0;
        let {label: H="", number_color: T, color_code: E="", image_url: q="", image_canvas_url: j="", additional_price: N=null, id: U, product_id: O, variant_id: M, is_default: z, metadata: X="{}"} = i || {};
        T || (T = 1),
        E || (E = ",");
        const J = E?.split(",")
          , te = JSON.parse(X || "{}")
          , ue = P.metadata ? JSON.parse(P?.metadata || "{}") : {}
          , me = ue.disallowUnselecting || !1
          , Me = ue?.swatchShape || "radius"
          , Te = te.printBoxName ? te.printBoxName : ""
          , we = te.printBoxValue ? te.printBoxValue : ""
          , Ce = te.url || "";
        let Le = Ce.startsWith("/") || Ce.startsWith("http") ? Ce : `https://${Ce}`
          , je = Na({
            imageOrColor: K,
            numberColor: T,
            swatchShape: Me,
            colorCodes: J,
            imageUrl: q,
            onlyReturnColor: !0
        })
          , Ae = {};
        const Z = P.id
          , Ue = P.is_change_label
          , ft = P.swatch_position || "next_to"
          , le = JSON.parse(P.metadata || "{}");
        let {useUrl: at=!1, openLinkBehavior: bt="", separateAddOnProduct: oe=!1, descriptionPosition: Ve="below_value"} = le;
        const Ne = bt === "new_tab" ? "_blank" : "_self";
        Le = Fa(at, Le);
        const pe = te.description || ""
          , lt = te.tooltip || ""
          , St = gr(lt)
          , _t = Xi(pe, `${ee}-description below_swatch`);
        M && Mi.forEach(We => {
            We.variants.forEach(de => {
                `${de.id}` === M && (Ae = {
                    ...We,
                    variants: [{
                        ...de
                    }]
                },
                Ue || (i.label = de?.title === "Default Title" ? de?.name : de?.title,
                H = i.label))
            }
            )
        }
        );
        const it = Ae?.variants !== void 0 ? Ae.variants[0].available : !0;
        q = Ma(Ae, q),
        Ae?.variants && (N = Ae.variants[0].price / 100);
        let Be = Re["SOLD OUT"] && Re["SOLD OUT"][xt] || "SOLD OUT";
        if (it || (i.label = `${H} <span class="tpo_sold_out_hyphen">- </span><span class="tpo_sold_out_text">${Be}</span>`,
        H = i.label),
        Lt?.outStockOptions === "hide" && !it)
            return "";
        const Ge = $.configs
          , ct = $.enable;
        let Y = document.createElement("input");
        const {quantitySelectorWrapper: Se, errorMessageElement: ie} = ct ? L(Ge, N, Nt, U, Z, pr, "", Xe, F) : {
            quantitySelectorWrapper: null,
            errorMessageElement: null
        };
        let _e = document.createElement(at ? "article" : "label");
        if (z = z || Dl(at, Le),
        F === 1)
            switch (ee) {
            case "image-swatches":
                Object.assign(Y, {
                    className: "tpo_color-swatches-input tpo_image-swatches-input",
                    type: "checkbox",
                    disabled: !it,
                    value: H,
                    checked: z && it,
                    id: `${a}-${n}`
                });
                break;
            case "color-swatches":
                Object.assign(Y, {
                    className: "tpo_color-swatches-input",
                    type: "checkbox",
                    disabled: !it,
                    value: H,
                    id: `${a}-${n}`,
                    checked: z && it
                });
                break;
            case "buttons":
                Object.assign(Y, {
                    className: "tpo_buttons-input",
                    type: "checkbox",
                    disabled: !it,
                    value: H,
                    id: `${a}-${n}`,
                    checked: z && it
                });
                break
            }
        else
            switch (ee) {
            case "image-swatches":
                Object.assign(Y, {
                    className: "tpo_color-swatches-input tpo_image-swatches-input",
                    type: "radio",
                    checked: z && it,
                    disabled: !it,
                    value: H,
                    name: `${y},${a}`,
                    id: `${a}-${n}`
                });
                break;
            case "color-swatches":
                Object.assign(Y, {
                    className: `tpo_color-swatches-input ${z && it ? "tpo_checked" : ""}`,
                    disabled: !it,
                    type: "radio",
                    checked: z,
                    value: H,
                    name: `${y},${a}`,
                    id: `${a}-${n}`
                });
                break;
            case "buttons":
                Object.assign(Y, {
                    className: `tpo_buttons-input ${z && it ? "tpo_checked" : ""}`,
                    type: "radio",
                    disabled: !it,
                    value: H,
                    checked: z,
                    name: `${y},${a}`,
                    id: `${a}-${n}`
                });
                break
            }
        M && (Y.dataset.productId = O,
        Y.dataset.variantId = M),
        Io && (Y.dataset.printBoxName = Te,
        Y.dataset.printBoxValue = we);
        let Oe;
        switch (ee) {
        case "image-swatches":
            switch (at ? (Oe = document.createElement("a"),
            Object.assign(Oe, {
                className: m === "hover" ? `tpo_image-swatches-wrapper ${d ? "swiper-slide" : ""}` : `tpo_swatches-label_position ${ft} ${d ? "swiper-slide" : ""}`,
                href: Le,
                target: Ne
            })) : (Oe = document.createElement("div"),
            Object.assign(Oe, {
                className: m === "hover" ? `tpo_image-swatches-wrapper ${d ? "swiper-slide" : ""} ${it ? "" : "swatches-not-avaliable"}` : `tpo_swatches-label_position ${d ? "swiper-slide" : ""} ${it ? "" : "swatches-not-avaliable"} ${ft}`
            })),
            Oe.classList.add(Ve),
            m) {
            case "hover":
                Oe.classList.add("tpo_image-swatch-hover");
                break;
            case "always":
                Oe.classList.add("tpo_image-swatch-always");
                break;
            case "hide":
                Oe.classList.add("tpo_image-swatch-hidden");
                break
            }
            break;
        case "color-swatches":
            switch (at ? (Oe = document.createElement("a"),
            Object.assign(Oe, {
                className: m === "hover" ? `tpo_color-swatches-wrapper ${d ? "swiper-slide" : ""} ${ct ? "tpo_qty_selector" : ""} ${it ? "" : "swatches-not-avaliable"}` : `tpo_color-swatches-label_position ${d ? "swiper-slide" : ""} ${it ? "" : "swatches-not-avaliable"} ${ft}`,
                href: Le,
                target: Ne
            })) : (Oe = document.createElement("div"),
            Object.assign(Oe, {
                className: m === "hover" ? `tpo_color-swatches-wrapper ${d ? "swiper-slide" : ""} ${ct ? "tpo_qty_selector" : ""} ${it ? "" : "swatches-not-avaliable"}` : `tpo_color-swatches-label_position ${d ? "swiper-slide" : ""} ${it ? "" : "swatches-not-avaliable"} ${ft}`
            })),
            Oe.classList.add(Ve),
            m) {
            case "hover":
                Oe.classList.add("tpo_color-swatch-hover");
                break;
            case "always":
                Oe.classList.add("tpo_color-swatch-always");
                break;
            case "hide":
                Oe.classList.add("tpo_color-swatch-hidden");
                break
            }
            break;
        case "buttons":
            at ? (Oe = document.createElement("a"),
            Object.assign(Oe, {
                className: "tpo_buttons-wrapper",
                href: Le,
                target: Ne
            })) : (Oe = document.createElement("div"),
            Object.assign(Oe, {
                className: `tpo_buttons-wrapper  ${it ? "" : "swatches-not-avaliable"} ${it ? "" : "out_stock_label"}`
            }));
            break
        }
        let He = PriceFormatter.formatMoney(parseFloat(N * 100), !0);
        switch (ee) {
        case "image-swatches":
            const We = Fd(q, 500);
            V?.imageSwatchesHoverBackground && Oe.style.setProperty("--image-swatches-hover-background", V?.imageSwatchesHoverBackground),
            _e.classList.add(`tpo_shape_${c || "square"}`),
            _e.style.borderColor = V.imageSwatchesBorder_unselected ?? wi.borderColor;
            const de = 86
              , qe = le?.customSwatchSizeEnabled === !0
              , Ie = le?.customSwatchWidth
              , Qe = le?.customSwatchHeight
              , Mt = qe ? Ie ?? de : Kt.imageSwatchWidth ?? wi.swatchWidth
              , Jt = qe ? Qe ?? de : Kt.imageSwatchHeight ?? wi.swatchHeight;
            _e.style.width = Mt ? `${Mt}px` : `${Kt.imageSwatchSize ?? wi.swatchSize}px`,
            _e.style.height = Jt ? `${Jt}px` : `${Kt.imageSwatchSize ?? wi.swatchSize}px`,
            _e.style.setProperty("--active-imageSwatches-border", V.imageSwatchesBorder_selected || wi.activeBorderColor || "");
            const Bt = Mt ? `${Mt}px` : `${Kt.imageSwatchSize ?? wi.swatchSize}px`
              , kt = Jt ? `${Jt}px` : `${Kt.imageSwatchSize ?? wi.swatchSize}px`
              , wt = Bt || kt ? "object-fit: cover;" : "";
            if (_e.innerHTML = `
                    <div class="tpo_image-wrapper"><img class="tpo_image-swatch-img" src="${We || Dt}" loading="lazy" alt="${We || Dt}" style="width: ${Bt}; height: ${kt}; ${wt}"/></div>
                `,
            m === "hover") {
                let ye = document.createElement("div")
                  , xe = PriceFormatter.formatMoney(parseFloat(N * 100), !0);
                Object.assign(ye, {
                    className: "tpo_image-swatches-tooltip",
                    innerHTML: ` ${It ? "" : `<div class="tpo_image-swatches-tooltip_image-container">
                                    <img class="tpo_image-swatch-img" src="${We || Dt}" loading="lazy" alt="${We || Dt}"/>
                                    </div>`}
                                        <div class="tpo_option_type_label_wrapper tpo_image-swatch-option">
                                            <span class="tpo_option_type_label_and_price tpo-swatch-option-label">
                                                <span class="tpo_option_type_label">
                                                    <span class="tpo_option_label">
                                                        ${H}
                                                    </span>
                                                    <span>
                                                        ${N && u !== 0 ? `<span class="tpo_additional-price">${ft === "under" ? xe : "(" + xe + ")"}</span>` : ""}
                                                    </span>
                                                </span>
                                            </span>
                                            ${pe ? Xi(pe, "on_tooltip").outerHTML : ""}
                                    </div>
                                    `,
                    style: It ? "max-width: 80px" : ""
                }),
                Se ? Oe.append(_e, _t, Se, ye, ie) : Oe.append(_e, ye, _t)
            } else {
                let ye = document.createElement("div");
                Object.assign(ye, {
                    className: "tpo_image-swatches-tooltip",
                    innerHTML: `
                <div class="tpo_image-swatches-tooltip_image-container">
                    <img class="tpo_image-swatch-img" src="${We || Dt}" loading="lazy" alt="${q || Dt}"/>
                    ${pe ? Xi(pe, "on_tooltip").outerHTML : ""}
                </div>
                `
                });
                let xe = "";
                if (m !== "hide") {
                    xe = document.createElement("div"),
                    xe.style.color = V.optionValueColor ?? tt.fontColor,
                    xe.style.setProperty("--swatch-option-color", V.optionValueColor ?? tt.fontColor ?? ""),
                    xe.style.fontSize = `${tt.fontSize}px`,
                    tt?.fontFamily && (xe.style.fontFamily = tt.fontFamily),
                    xe.classList.add(`tpo_${tt.fontStyle}`);
                    let Ze = PriceFormatter.formatMoney(parseFloat(N * 100), !0);
                    Object.assign(xe, {
                        className: `tpo_option_type_label_wrapper tpo_${tt.fontStyle} ${it ? "" : "out_stock_label"}`,
                        innerHTML: `
                            <span class="tpo_option_type_label_and_price tpo-swatch-option-label">
                                <span class="tpo_option_type_label">
                                    <span class="tpo_option_label">
                                        ${H}
                                    </span>
                                    <span class="tpo_additional-price"> 
                                        ${N && u !== 0 ? `<span>${ft === "under" ? Ze : "(" + Ze + ")"}</span>` : ""}
                                    </span>
                                </span>
                            </span>
                        `
                    })
                }
                _e.append(ye);
                const Ye = document.createElement("div");
                Object.assign(Ye, {
                    className: "tpo-quantity_always-show"
                }),
                Ye.append(Se, ie),
                Se ? Oe.append(_e, xe, Ye, _t) : Oe.append(_e, xe, _t)
            }
            _e.append(Y);
            const Et = So(i.metadata);
            if (Et instanceof Element) {
                let ye = "top_center";
                try {
                    ye = (typeof P.metadata == "string" ? JSON.parse(P.metadata) : P.metadata).badgePosition || "top_center"
                } catch {}
                const xe = _e.parentElement
                  , Ye = _e
                  , Ze = P.swatch_position || "next_to"
                  , Ut = P.label_position || "hover";
                id(xe, Ye, Et, ye, Ze, Ut)
            }
            break;
        case "color-swatches":
            F === 1 ? Object.assign(Y, {
                className: "tpo_color-swatches-input"
            }) : Object.assign(Y, {
                className: `tpo_color-swatches-input ${z && it ? "tpo_checked" : ""}`
            }),
            _e.classList.add(`tpo_shape_${c || "circle"}`),
            _e.style.borderColor = V.colorSwatchesBorder_unselected ?? Hn.borderColor,
            _e.style.width = `${Kt.colorSwatchSize ?? Hn.swatchSize}px`,
            _e.style.height = `${Kt.colorSwatchSize ?? Hn.swatchSize}px`,
            _e.style.setProperty("--active-colorSwatches-border", V.colorSwatchesBorder_selected || Hn.activeBorderColor || "");
            let Ot = document.createElement("div");
            for (let ye = 0; ye < T; ye++)
                Ot.innerHTML += `
                 <span  class="color-span-${T === 1 ? "single" : ye}" style='background-color: ${J[ye] || "#F2F2F2"}' />
            `;
            if (_e.append(Ot),
            m === "hover") {
                let ye = document.createElement("div");
                Object.assign(ye, {
                    className: "tpo_color-swatches-tooltip",
                    innerHTML: `
                            <span class="tpo-swatch-option-label">
                                ${H}
                            </span>
                            ${N && u !== 0 ? `<span class="tpo_additional-price">${ft === "under" ? He : "(" + He + ")"}</span>` : ""}
                            </span>
                            ${pe ? Xi(pe, "on_tooltip").outerHTML : ""}
                        `,
                    style: It ? "max-width: 80px" : "abc"
                }),
                Se ? Oe.append(_e, _t, Se, ye, ie) : Oe.append(_e, ye, _t)
            } else {
                let ye = "";
                m !== "hide" && (ye = document.createElement("span"),
                ye.style.setProperty("--swatch-option-color", V.optionValueColor ?? tt.fontColor ?? ""),
                ye.style.fontSize = `${tt.fontSize}px`,
                tt?.fontFamily && (ye.style.fontFamily = tt.fontFamily),
                ye.classList.add(`tpo_${tt.fontStyle}`),
                Object.assign(ye, {
                    innerHTML: `<span class="tpo_option_type_label_and_price tpo-swatch-option-label"><span class="tpo_option_type_label">
                                        <span class="tpo_option_label">
                                                        ${H}
                                                    </span><span class="tpo_additional-price"> ${N && u !== 0 ? `${ft === "under" ? He : "(" + He + ")"}` : ""}</span></span></span>`,
                    className: `tpo_option_type_label_wrapper tpo_${tt.fontStyle} ${it ? "" : "out_stock_label"}`
                }));
                const xe = document.createElement("div");
                Object.assign(xe, {
                    className: "tpo-quantity_always-show"
                }),
                xe.append(Se, ie),
                Se ? Oe.append(_e, ye, xe, _t) : Oe.append(_e, ye, _t)
            }
            _e.append(Y);
            const Xt = So(i.metadata);
            if (Xt instanceof Element) {
                let ye = "top_center";
                try {
                    ye = (typeof P.metadata == "string" ? JSON.parse(P.metadata) : P.metadata).badgePosition || "top_center"
                } catch {}
                const xe = _e.parentElement
                  , Ye = _e
                  , Ze = P.swatch_position || "next_to"
                  , Ut = P.label_position || "hover";
                id(xe, Ye, Xt, ye, Ze, Ut)
            }
            break;
        case "buttons":
            _e.classList.add(`tpo_shape_${c}`),
            _e.classList.add(`price_position_${S}`);
            const xi = Bm(je, q, N, S, u);
            xi && ey && _e.classList.add(xi),
            _e.classList.add(`tpo_${tt.fontStyle}`),
            _e.style.fontSize = `${tt.fontSize}px`,
            _e.textContent = H,
            _e.style.color = V.buttonText_unselected ?? vo.textColor,
            _e.style.backgroundColor = V.buttonBackground_unselected ?? vo.background,
            _e.style.borderColor = V.buttonBorder_unselected ?? vo.borderColor,
            _e.style.setProperty("--active-color", fr(V.buttonText_selected ?? vo.activeTextColor) || ""),
            _e.style.setProperty("--active-background", fr(V.buttonBackground_selected ?? vo.activeBackground) || ""),
            _e.style.setProperty("--active-border", fr(V.buttonBorder_selected ?? vo.activeBorderColor) || "");
            let fi = ""
              , ai = "";
            q && q !== Dt && je === "" && (ai = document.createElement("div"),
            Object.assign(ai, {
                className: "tpo_image-swatches-tooltip",
                innerHTML: `<div class="tpo_image-swatches-tooltip_image-container">
                                        <img class="tpo_image-swatch-img" src="${q}" loading="lazy" alt="${q || Dt}"/>
                                    </div>`
            })),
            S && S !== "hover" ? (ai && je === "" && (fi = document.createElement("div"),
            Object.assign(fi, {
                className: `${ai ? "tpo_buttons-tooltip tpo_buttons-tooltip_with-image" : "tpo_buttons-tooltip"}`,
                innerHTML: ai.innerHTML
            })),
            _e.innerHTML = `<div class="tpo_button-wrapper_with-image">
                            ${je !== null ? je || (q ? `
                        <div><img class="tpo_image-swatch-img  tpo_shape_${Me}" src="${q || Dt}" loading="lazy" alt="${q || Dt}"/></div>
                    ` : "") : ""}
                        <span class="tpo_button_option_value">
                            ${H}
                            <span>${N && u !== 0 ? `<span class="tpo_additional-price">${S === "below" ? He : "(" + He + ")"}</span>` : ""}</span>
                        </span>
                    </div>`) : (fi = document.createElement("div"),
            Object.assign(fi, {
                className: `${ai && je === "" ? "tpo_buttons-tooltip tpo_buttons-tooltip_with-image" : "tpo_buttons-tooltip"}`,
                innerHTML: ai && je === "" ? `${ai.innerHTML} <div class="tpo_option_type_label_wrapper tpo_image-swatch-option">
                                            <span class="tpo_option_type_label_and_price tpo-swatch-option-label">
                                                <span class="tpo_option_type_label">
                                                    <span>
                                                        ${N && u !== 0 ? `<span class="tpo_additional-price ">${He}</span>` : ""}
                                                    </span>
                                                </span>
                                            </span>
                                    </div> ` : N && u !== 0 ? `${He}` : ""
            }),
            _e.innerHTML = `<div class="tpo_button-wrapper_with-image">
                        ${je !== null ? je || (ai ? `
                    <div><img class="tpo_image-swatch-img tpo_shape_${Me}" src="${q || Dt}" loading="lazy" alt="${q || Dt}"/></div>
                ` : "") : ""}
                        <span class="tpo_button_option_value">
                            ${H}
                        </span>
                    </div>`),
            Se ? Oe.append(_e, Se, fi, ie) : Oe.append(_e, fi),
            _e.append(Y),
            setTimeout( () => {
                const ye = So(i.metadata);
                if (!ye)
                    return;
                const xe = _e.querySelector(".tpo_button_option_value");
                if (!xe) {
                    _e.prepend(ye);
                    return
                }
                const Ye = xe.querySelector(".tpo_additional-price");
                Ye ? Ye.insertAdjacentElement("afterend", ye) : xe.appendChild(ye)
            }
            , 50);
            break
        }
        function Xe(We) {
            if (!(Y.checked && Y.classList.contains("tpo_checked") && me)) {
                if (Y.checked && Y.classList.contains("tpo_checked"))
                    if (Y.checked = !1,
                    (P.type === "color-swatches" || P.type === "image-swatches") && Wi(Z, "name", "", !0, "COLOR"),
                    oi(F === 0 && !I ? Z : U, j || q, !1),
                    _e.classList.remove("tpo_is_checked_swatches"),
                    Y.classList.remove("tpo_checked"),
                    F === 0) {
                        if (C && C.pop(),
                        p.value = "",
                        _(""),
                        v && oo(""),
                        f.pop(),
                        s(),
                        yt(st, b, 0),
                        Se) {
                            Se.classList.add("swatches-not-avaliable"),
                            Se.querySelector("input").disabled = !0,
                            Se.classList.remove("tpo-error_validate"),
                            ie.innerHTML = "",
                            R && Si(k, 0, Ge, Q);
                            const de = k.querySelector(".tpo_quantity_selector_total-selected");
                            s() && de && (de.classList.remove("tpo-quantity-error"),
                            Number(de.textContent) !== 0 && de.classList.add("tpo-quantity-success"))
                        }
                        g ? dt(ke(t, o), t) : ke(t, o)
                    } else {
                        Se && (Se.classList.add("swatches-not-avaliable"),
                        Se.querySelector("input").disabled = !0,
                        Se.classList.remove("tpo-error_validate"),
                        ie.innerHTML = "");
                        let de = H;
                        if (ct) {
                            const Ie = Se.querySelector("input").value;
                            if (N) {
                                const Qe = Number(Ie) * N;
                                let Mt = PriceFormatter.formatMoney(parseFloat(Qe * 100), !0);
                                de = `${H} [ +${Mt} ] | ${Ie}`,
                                l.price -= Qe
                            } else
                                de = `${H} | ${Ie}`;
                            R && Si(k, 0, Ge, Q)
                        } else {
                            if (N) {
                                let Ie = PriceFormatter.formatMoney(parseFloat(N * 100), !0);
                                de = `${H} [ +${Ie} ]`
                            }
                            l.price -= N
                        }
                        const qe = f.indexOf(de);
                        if (qe > -1 && (C && C.splice(qe, 1),
                        f.splice(qe, 1),
                        x.splice(qe, 1)),
                        v && oo(H),
                        yt(st, b, xo(l.price) ? l.price.toFixed(2) : l.price),
                        p.value = f.join(", "),
                        s(),
                        _(U),
                        Se) {
                            const Ie = k.querySelector(".tpo_quantity_selector_total-selected");
                            s() && Ie && Ie.innerHTML === "0" && (Ie.classList.remove("tpo-quantity-error"),
                            Number(Ie.textContent) !== 0 && Ie.classList.add("tpo-quantity-success"))
                        }
                        g ? dt(ke(t, o), t) : ke(t, o)
                    }
                else {
                    Y.checked = !0,
                    (P.type === "color-swatches" || P.type === "image-swatches") && Wi(Z, "name", E, !0, "COLOR");
                    const de = Se?.querySelector(".tpo_quantity-selector_input");
                    if (de?.value === "0" && F === 0 && P.option_types.forEach(qe => {
                        qe.id !== U && (window.Konva.stages[0]?.find(`#${qe.id}`)).forEach(Qe => {
                            Qe.hide(),
                            Qe.opacity(0)
                        }
                        )
                    }
                    ),
                    de?.value !== "0" && oi(F === 0 && !I ? Z : U, j || q, !0),
                    Y.classList.add("tpo_checked"),
                    F === 0) {
                        if (!ct)
                            if (N) {
                                let Qe = PriceFormatter.formatMoney(parseFloat(N * 100), !0);
                                f[0] = `${H} [ +${Qe} ]`,
                                p.value = `${Y.value} [ +${Qe} ]`
                            } else
                                f[0] = H,
                                p.value = Y.value;
                        C && (C[0] = H),
                        v && oo(H);
                        const qe = w.querySelectorAll(".tpo_is_checked_swatches")
                          , Ie = w.querySelectorAll(".tpo_quantity-selector_wrapper");
                        qe && qe.length && qe.forEach(Qe => {
                            Qe.classList.remove("tpo_is_checked_swatches")
                        }
                        ),
                        Ie && Ie.length && Ie.forEach(Qe => {
                            Qe.classList.add("swatches-not-avaliable"),
                            Qe.classList.remove("tpo-error_validate");
                            const Mt = Qe.parentElement.querySelector(".tpo_error-message");
                            Mt && (Mt.innerHTML = "")
                        }
                        ),
                        _e.classList.add("tpo_is_checked_swatches"),
                        ct && (Se.classList.remove("swatches-not-avaliable"),
                        Se.querySelector("input").disabled = !1,
                        ut()),
                        ct || yt(st, b, N),
                        _(U),
                        s(),
                        g ? dt(ke(t, o), t) : ke(t, o)
                    } else {
                        if (ct && (Se.classList.remove("swatches-not-avaliable"),
                        Se.querySelector("input").disabled = !1),
                        ct)
                            ut();
                        else {
                            if (N) {
                                let qe = PriceFormatter.formatMoney(parseFloat(N * 100), !0);
                                f.push(`${H} [ +${qe} ]`)
                            } else
                                f.push(H);
                            l.price += N,
                            yt(st, b, xo(l.price) ? l.price.toFixed(2) : l.price),
                            p.value = f.join(", ")
                        }
                        _e.classList.add("tpo_is_checked_swatches"),
                        x.push(U),
                        C && C.push(H),
                        v && oo(H),
                        _(U),
                        s(),
                        g ? dt(ke(t, o), t) : ke(t, o)
                    }
                }
                p.dispatchEvent(new Event("change"))
            }
        }
        function ut() {
            const We = Se.querySelector("input").value
              , de = Se.querySelector("input");
            if (de && de.dispatchEvent(new Event("change")),
            We)
                if (N) {
                    const qe = N * Number(We);
                    Nt(qe, We)
                } else
                    Nt(0, We);
            else if (Ge.isUseCustomIncrement && Number(Ge.customIncrementValue) > 1)
                if (Se.querySelector("input").value = Ge.customIncrementValue,
                N) {
                    const qe = N * Ge.customIncrementValue;
                    Nt(qe, Ge.customIncrementValue)
                } else
                    Nt(0, Ge.customIncrementValue);
            else if (Se.querySelector("input").value = 1,
            N) {
                const qe = N * 1;
                Nt(qe, 1)
            } else
                Nt(0, 1)
        }
        function Nt(We, de) {
            if (F === 0) {
                if (We) {
                    let qe = PriceFormatter.formatMoney(parseFloat(We * 100), !0);
                    f[0] = `${H} [ +${qe} ] | ${de}`,
                    p.value = `${Y.value} [ +${qe} ] | ${de}`
                } else
                    f[0] = `${H} | ${de}`,
                    p.value = `${Y.value} | ${de}`;
                l.price = N,
                yt(st, b, We),
                R && Si(k, de, Ge, Q),
                dt(ke(t, o), t)
            } else {
                const qe = We ? `${H} [ +` : `${H} |`;
                if (We) {
                    const Ie = f.find(Qe => Qe.includes(qe) && Qe.split("[")[0].trim() === qe.split("[")[0].trim());
                    if (Ie) {
                        const Qe = f.indexOf(Ie)
                          , Mt = f[Qe].lastIndexOf("|")
                          , Jt = f[Qe].slice(Mt + 1).trim();
                        let Bt = PriceFormatter.formatMoney(parseFloat(We * 100), !0);
                        f[Qe] = `${H} [ +${Bt} ] | ${de}`;
                        const kt = Number(We) / Number(de)
                          , wt = Math.abs(Number(Jt) - Number(de));
                        Number(Jt) < Number(de) && (l.price += wt * kt),
                        Number(Jt) > Number(de) && (l.price -= wt * kt)
                    } else {
                        let Qe = PriceFormatter.formatMoney(parseFloat(We * 100), !0);
                        f.push(`${H} [ +${Qe} ] | ${de}`),
                        l.price += We
                    }
                } else if (!f.find(Ie => Ie.startsWith(qe)))
                    f.push(`${H} | ${de}`);
                else {
                    const Ie = f.findIndex(Qe => {
                        const Mt = Qe.split("|");
                        return Mt.length === 0 ? !1 : Mt[0].trim() === qe.split("|")[0].trim()
                    }
                    );
                    f[Ie] = `${H} | ${de}`
                }
                yt(st, b, xo(l.price) ? l.price.toFixed(2) : l.price),
                p.value = f.join(", "),
                R && Si(k, 0, Ge, Q),
                dt(ke(t, o), t)
            }
        }
        if (it) {
            if (z) {
                if (Y.classList.add("tpo_checked"),
                F === 1) {
                    if (Ft === -1 && (Ft = P.option_set_id),
                    ct)
                        Se.classList.remove("swatches-not-avaliable"),
                        Se.querySelector("input").disabled = !1,
                        ut();
                    else {
                        if (N) {
                            let We = PriceFormatter.formatMoney(parseFloat(N * 100), !0);
                            f.push(`${H} [ +${We} ]`)
                        } else
                            f.push(H);
                        l.price += N
                    }
                    C && C.push(H),
                    x.push(U)
                } else {
                    if (ct) {
                        const We = w.querySelectorAll(".tpo_quantity-selector_wrapper");
                        We && We.length && We.forEach(de => {
                            de.classList.add("swatches-not-avaliable")
                        }
                        ),
                        Se.classList.remove("swatches-not-avaliable"),
                        Se.querySelector("input").disabled = !1,
                        ut()
                    } else {
                        if (N) {
                            let We = PriceFormatter.formatMoney(parseFloat(N * 100), !0);
                            f[0] = `${H} [ +${We} ]`,
                            p.value = `${Y.value} [ +${We} ]`
                        } else
                            f[0] = H,
                            p.value = Y.value;
                        C && (C[0] = H),
                        l.price = N
                    }
                    x[0] = U
                }
                v && oo(H),
                _(U),
                yt(st, b, xo(l.price) ? l.price.toFixed(2) : l.price),
                _e.classList.add("tpo_is_checked_swatches"),
                p.value = f.join(", "),
                setTimeout( () => {
                    p.dispatchEvent(new Event("change"))
                }
                , 0),
                s(),
                g ? dt(ke(t, o), t) : ke(t, o)
            }
            _e.addEventListener("click", We => {
                at || We.preventDefault()
            }
            ),
            _e.addEventListener("pointerup", Xe)
        }
        return Oe.querySelector(".tpo_option_type_label")?.append(St),
        Oe
    }
    function Bm(t, o, i, a, r) {
        let c = "tpo_button_with";
        return t === null ? c += "_none" : t ? c += "_color" : o && o !== Dt && (c += "_image"),
        a !== "below" || r === 0 || i && (c += "_price"),
        c
    }
    function Hm({is_required: t, placeholder: o, type: i, option_id: a, option_identifier: r, file_extension: c, file_restriction_type: d, label: n, metadata: f, ...p}, s, l, b, h, u, x, _, m, S, v, y) {
        let g = JSON.parse(f || "{}")
          , C = g.maxFileQty > 10 ? Qo ? g.maxFileQty : 10 : g.maxFileQty || 1
          , w = g.useEditorImage || !1
          , $ = g.defaultValueUploaded || {}
          , L = g?.image_ratios || []
          , P = L.map(M => {
            if (M.toLowerCase() === "custom")
                return [void 0, "Custom"];
            if (M.toLowerCase() === "square")
                return [1, "Square"];
            if (M.includes(":")) {
                const [z,X] = M.split(":");
                return [z / X, M]
            }
        }
        )
          , k = L.length > 0 ? P : [[void 0, "Custom"], [1, "Square"], [16 / 9, "16:9"], [4 / 3, "4:3"]]
          , A = document.createElement("input");
        "dragover dragenter".split(" ").forEach(M => A.addEventListener(M, z => {
            v.classList.add("is-dragover"),
            y.querySelector(".tpo-dropzone__action").innerHTML = "Drop files to upload"
        }
        )),
        "dragleave dragend drop".split(" ").forEach(M => A.addEventListener(M, z => {
            v.classList.remove("is-dragover"),
            y.querySelector(".tpo-dropzone__action").innerHTML = o || Re["Add files"] && Re["Add files"][xt] || "Add files"
        }
        ));
        let R = ["test-easify-product-options.myshopify.com", "plentyprints-9822.myshopify.com", "efa901-2.myshopify.com", "17e9ba-2.myshopify.com", "0ad21f-51.myshopify.com"]
          , Q = []
          , I = []
          , F = []
          , ee = 0;
        for (let M = 0; M < C; M++) {
            let z = M + 1
              , X = document.createElement("input");
            Object.assign(X, {
                className: "tpo_file-upload-input tpo_hidden",
                type: "text",
                name: `properties[${r}-${z}]`,
                hidden: !0,
                ariaLabel: r
            });
            let J = s?.attributes.id?.value || null;
            J && X.setAttribute("form", J),
            z === 1 && (X.dataset.required = t),
            F.push(X)
        }
        function K() {
            for (let M = 0; M < F.length; M++) {
                let z = F[M];
                M < Q.length ? z.value = Q[M] : z.value = ""
            }
            Q.length ? (oi(p.id, Q[0], !0, "FILE_UPLOAD"),
            h.classList.add("active"),
            u(F[0], F[0].value, x)) : (oi(p.id, "", !1, "FILE_UPLOAD"),
            h.classList.remove("active"),
            u(F[0], F[0].value, "")),
            S ? dt(ke(s, l), s) : ke(s, l)
        }
        function H(M) {
            return Array.from(M.parentNode.children).indexOf(M)
        }
        function T() {
            const M = Array.from(E.querySelectorAll(".tpo-delete__file"));
            ee = M.length,
            M.forEach(z => {
                const X = z.closest(".tpo-file__preview");
                if (X && X.classList.contains("tpo_default_file"))
                    z.onclick = function() {
                        const J = Array.from(X.parentNode.children).indexOf(X) - 1;
                        A.classList.remove("tpo-disabled"),
                        A.dataset.currentFileQty--,
                        A.value = "",
                        ee--,
                        I.splice(J, 1),
                        Q.splice(J, 1),
                        K(),
                        b(ee),
                        X.parentElement.removeChild(X)
                    }
                    ;
                else {
                    const J = z.dataset.index;
                    z.onclick = function() {
                        const te = H(X) - 1
                          , ue = new DataTransfer;
                        for (let me = 0; me < A.files.length; me++)
                            me != J && ue.items.add(A.files[me]);
                        A.files = ue.files,
                        A.classList.remove("tpo-disabled"),
                        A.dataset.currentFileQty--,
                        A.value = "",
                        ee--,
                        I = [...ue.files],
                        Q.splice(te, 1),
                        K(),
                        b(ee),
                        X.parentElement.removeChild(X)
                    }
                }
            }
            )
        }
        const E = document.createElement("div");
        let q = Re.Uploading && Re.Uploading[xt] || "Uploading";
        Object.assign(E, {
            className: "tpo-file__img",
            innerHTML: `
                <div class="tpo-file-loader tpo_hidden">
                    ${Lo ? `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M31.75 22C31.75 23.2804 31.4978 24.5482 31.0078 25.7312C30.5178 26.9141 29.7997 27.9889 28.8943 28.8943C27.9889 29.7997 26.9141 30.5178 25.7312 31.0078C24.5482 31.4978 23.2804 31.75 22 31.75C20.7196 31.75 19.4518 31.4978 18.2688 31.0078C17.0859 30.5178 16.0111 29.7997 15.1057 28.8943C14.2003 27.9889 13.4822 26.9141 12.9922 25.7312C12.5022 24.5482 12.25 23.2804 12.25 22C12.25 20.7196 12.5022 19.4518 12.9922 18.2688C13.4822 17.0859 14.2003 16.0111 15.1057 15.1057C16.0111 14.2003 17.0859 13.4822 18.2688 12.9922C19.4518 12.5022 20.7196 12.25 22 12.25C23.2804 12.25 24.5482 12.5022 25.7312 12.9922C26.9141 13.4822 27.9889 14.2003 28.8943 15.1057C29.7997 16.0111 30.5178 17.0859 31.0078 18.2688C31.4978 19.4518 31.75 20.7196 31.75 22L31.75 22Z"
                        stroke="#E6E6E6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M22 12.25C23.2804 12.25 24.5482 12.5022 25.7312 12.9922C26.9141 13.4822 27.9889 14.2003 28.8943 15.1057C29.7997 16.0111 30.5178 17.0859 31.0078 18.2688C31.4978 19.4518 31.75 20.7196 31.75 22"
                        stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>` : `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="File / File_Upload">
                            <path id="Vector"
                                  d="M12 18V12M12 12L9 14M12 12L15 14M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002"
                                  stroke="#000000" stroke-width="0.8399999999999999" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </g>
                    </g>
                </svg>`}
                    <span>${q}...</span>
                </div>
            `
        }),
        A.addEventListener("input", function(M) {
            A.closest(".tpo_option-label").querySelector(".tpo-file__img") || A.closest(".tpo_option-label").append(E);
            let X = E.querySelector(".tpo-file-loader")
              , te = A.value.toLowerCase().split(".").pop()
              , ue = []
              , me = C - A.dataset.currentFileQty;
            const Me = new DataTransfer;
            if (A.files.length > me)
                for (let je = 0; je < me; je++)
                    Me.items.add(A.files[je]);
            else
                for (let je = 0; je < A.files.length; je++)
                    Me.items.add(A.files[je]);
            ue = [...Me.files];
            for (let je = 0; je < I.length; je++)
                I[je]?.url || Me.items.add(I[je]);
            A.files = Me.files;
            let Te = !1
              , we = []
              , Ce = A.closest(".tpo_option-label").querySelector(".tpo_error-message");
            for (let je = 0; je < ue.length; je++) {
                let Ae = ue[je]
                  , Z = Ae.size
                  , Ue = parseInt(p.max_value) > 10 ? Qo || R.includes(B) ? parseInt(p.max_value) : 10 : parseInt(p.max_value) || 10
                  , ft = Z / (1024 * 1024)
                  , le = Re["Please upload file having extensions {{extensions}} - {{fileName}}"] && Re["Please upload file having extensions {{extensions}} - {{fileName}}"][xt] || "Please upload file having extensions {{extensions}} - {{fileName}}"
                  , at = Re["Please upload file size less than {{maxFileSize}}MB - {{fileName}}"] && Re["Please upload file size less than {{maxFileSize}}MB - {{fileName}}"][xt] || "Please upload file size less than {{maxFileSize}}MB - {{fileName}}"
                  , bt = Re["Something went wrong! Please try again."] && Re["Something went wrong! Please try again."][xt] || "Something went wrong! Please try again.";
                if (A?.accept && !A?.accept?.toLowerCase()?.includes(te))
                    we.push(le.replace("{{extensions}}", A.accept).replace("{{fileName}}", Ae.name));
                else if (ft > Ue)
                    we.push(at.replace("{{maxFileSize}}", Ue).replace("{{fileName}}", Ae.name));
                else if (Ae) {
                    Te = !0,
                    X.classList.remove("tpo_hidden");
                    let oe = new FileReader;
                    oe.onload = function(Ve) {
                        let Ne = (pe, lt) => {
                            let St = new FormData
                              , _t = pe.name;
                            ["tigren-demo.myshopify.com", "svuk0t-71.myshopify.com", "f87b17-3.myshopify.com", "newaddontest.myshopify.com"].includes(B) && (_t = `uploads_200d-${pe.name}`);
                            const Be = new File([pe],_t,{
                                type: pe.type
                            });
                            St.append("file", Be);
                            const Ge = {
                                method: "POST",
                                headers: {
                                    shop: B,
                                    name: encodeURIComponent(A.name)
                                },
                                body: St
                            };
                            if (!di) {
                                const Y = ["xctasy-co.myshopify.com", "367e7f-3.myshopify.com", "0xp4s8-me.myshopify.com", "5q6zib-3b.myshopify.com", "svuk0t-71.myshopify.com", "f8a9a9-a6.myshopify.com", "db6ccc-5.myshopify.com", "nicoles-homemade-creations.myshopify.com", "f87b17-3.myshopify.com", "jbhtjf-iu.myshopify.com"].includes(B) ? "apps/upload-file" : "apps/upload-file-s3";
                                fetch(`${qt.easifyUrl}${Y}`, Ge).then(function(Se) {
                                    if (Se.status == "200")
                                        return ee++,
                                        Se.json().then(function(ie) {
                                            let _e = B !== "shepolish.myshopify.com" ? ie.url : ie.url.replace(B, window.location.host);
                                            const Oe = document.createElement("div");
                                            Object.assign(Oe, {
                                                className: "tpo-file__preview",
                                                innerHTML: `
                                                    <a class="tpo-file__img-preview" href="${_e}" style="background-image: url('${URL.createObjectURL(pe)}')" target="_blank"></a>
                                                    <div class="tpo-label__file">
                                                        <a
                                                            style="font-size: ${Zo.fontSize}px; ${Zo?.fontFamily ? `font-family: ${Zo.fontFamily};` : ""}"
                                                            class="tpo-name__file tpo_ ${Zo.fontStyle}" target="_blank" href="${_e}"
                                                         >
                                                            ${pe.name}
                                                         </a>
                                                        <span class="tpo-delete__file">
                                                             <svg data-index="${je}" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                 <path d="M5.0304 3.96967C4.73751 3.67678 4.26263 3.67678 3.96974 3.96967C3.67685 4.26256 3.67685 4.73744 3.96974 5.03033L7.93937 8.99997L3.96967 12.9697C3.67678 13.2626 3.67678 13.7374 3.96967 14.0303C4.26256 14.3232 4.73744 14.3232 5.03033 14.0303L9.00003 10.0606L12.9697 14.0303C13.2626 14.3232 13.7375 14.3232 14.0304 14.0303C14.3233 13.7374 14.3233 13.2626 14.0304 12.9697L10.0607 8.99997L14.0303 5.03033C14.3232 4.73744 14.3232 4.26256 14.0303 3.96967C13.7374 3.67678 13.2626 3.67678 12.9697 3.96967L9.00003 7.93931L5.0304 3.96967Z" fill="#B3B3B3"/>
                                                            </svg>
                                                        </span>
                                                    </div>  
                                                    `
                                            }),
                                            E.append(Oe),
                                            A.dataset.currentFileQty++,
                                            parseInt(A.dataset.currentFileQty) >= parseInt(A.dataset.maxFileAllowed) && A.classList.add("tpo-disabled"),
                                            Q.push(_e),
                                            I.push(pe),
                                            K(),
                                            ee === ue.length && b(ee, we.map(He => `<p>${He}</p>`))
                                        });
                                    Ce.innerHTML = bt,
                                    A.value = "",
                                    S ? dt(ke(s, l), s) : ke(s, l)
                                }).catch(Se => {
                                    Ce.innerHTML = bt,
                                    S ? dt(ke(s, l), s) : ke(s, l)
                                }
                                ).finally( () => {
                                    X.classList.add("tpo_hidden"),
                                    T()
                                }
                                )
                            }
                        }
                        ;
                        if (d !== 1 || !w || !window.pintura)
                            Ne(Ae);
                        else {
                            let pe = L && L.length && P[0][0] || "";
                            B === "testdiningbook.myshopify.com" ? (k = [[6 / 4, "6:4"]],
                            pe = 6 / 4) : B === "463aae.myshopify.com" || B === "knk-krafts.myshopify.com" ? (k = [[1, "Square"]],
                            pe = 1) : B === "367e7f-3.myshopify.com" ? (k = [[713 / 450, "713:450"]],
                            pe = 713 / 450) : B === "j0fbzy-f0.myshopify.com" ? (k = [[3 / 4, "3:4"]],
                            pe = 3 / 4) : B === "cadouri-miutic.myshopify.com" && (k = [[21 / 30, "21:30"]],
                            pe = 21 / 30);
                            let lt = ["crop", "filter", "finetune", "annotate", "decorate", "frame", "redact", "resize"];
                            (B === "pejknm-ex.myshopify.com" || B === "k9chr0-ma.myshopify.com") && (lt = ["crop"]);
                            const St = window.pintura.openDefaultEditor({
                                src: Ae,
                                imageCropAspectRatio: pe,
                                cropSelectPresetOptions: k,
                                utils: lt
                            });
                            St.on("load", _t => {}
                            ),
                            St.on("process", _t => {
                                Ne(_t.dest)
                            }
                            )
                        }
                    }
                    ,
                    oe.readAsDataURL(Ae)
                }
            }
            let Le = we.map(je => `<p>${je}</p>`);
            Le && Le.length > 0 ? v.setAttribute("data-error", "") : v.removeAttribute("data-error"),
            Ce.innerHTML = Le.join(""),
            Te || b(ee, Le)
        });
        let j = ""
          , N = c ? c.split(",").map(M => M.trim().toLowerCase()) : [];
        switch (d) {
        case 0:
            j = "";
            break;
        case 1:
            j = ".jpeg,.jpg,.svg,.png,.tiff,.tif";
            break;
        case 2:
            j = ".pdf,.doc,.docx,.html,.htm,.xls,.xlsx,.txt";
            break;
        case 3:
            j = N.map(M => `.${M}`)
        }
        Object.assign(A, {
            className: `tpo_option-input tpo_dropzone tpo_${pt.fontStyle}`,
            type: "file",
            id: `${i}-${a}`,
            accept: `${j}`,
            placeholder: o,
            multiple: !0,
            ariaLabel: r
        }),
        A.dataset.maxFileAllowed = C,
        A.dataset.currentFileQty = 0;
        for (let M = 0; M < C; M++) {
            let z = M + 1;
            const X = $[`${r}-${z}`];
            X && (F[M].value = X,
            U(X, M))
        }
        function U(M="", z) {
            if (!M)
                return;
            let X = "";
            const J = M.indexOf("name=");
            J && J > 0 && (X = M.slice(J + 5));
            const te = document.createElement("div");
            Object.assign(te, {
                className: "tpo-file__preview tpo_default_file",
                innerHTML: `
                                                    <a class="tpo-file__img-preview" href="${M}" style="background-image: url('${M}')" target="_blank" disabled></a>
                                                    <div class="tpo-label__file">
                                                        <a
                                                            style="font-size: ${Zo.fontSize}px; ${Zo?.fontFamily ? `font-family: ${Zo.fontFamily};` : ""}"
                                                            class="tpo-name__file tpo_ ${Zo.fontStyle}" target="_blank" href="${M}"
                                                         >
                                                            ${X || "File"}
                                                         </a>
                                                        <svg data-index="${z}" class="tpo-delete__file" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                             <path d="M5.0304 3.96967C4.73751 3.67678 4.26263 3.67678 3.96974 3.96967C3.67685 4.26256 3.67685 4.73744 3.96974 5.03033L7.93937 8.99997L3.96967 12.9697C3.67678 13.2626 3.67678 13.7374 3.96967 14.0303C4.26256 14.3232 4.73744 14.3232 5.03033 14.0303L9.00003 10.0606L12.9697 14.0303C13.2626 14.3232 13.7375 14.3232 14.0304 14.0303C14.3233 13.7374 14.3233 13.2626 14.0304 12.9697L10.0607 8.99997L14.0303 5.03033C14.3232 4.73744 14.3232 4.26256 14.0303 3.96967C13.7374 3.67678 13.2626 3.67678 12.9697 3.96967L9.00003 7.93931L5.0304 3.96967Z" fill="#B3B3B3"/>
                                                        </svg>
                                                    </div>  
                                                    `
            }),
            E.append(te),
            A.dataset.currentFileQty++,
            parseInt(A.dataset.currentFileQty) >= parseInt(A.dataset.maxFileAllowed) && A.classList.add("tpo-disabled"),
            Q.push(M),
            I.push({
                name: X,
                url: M
            }),
            T(),
            K()
        }
        _.type = "button",
        _.addEventListener("click", function() {
            b(ee)
        });
        const O = document.createElement("div");
        return O.append(A, ...F),
        {
            fileUploadElement: O,
            fileListElement: E
        }
    }
    function Xi(t="", o="", i="span") {
        const a = document.createElement(i);
        return Object.assign(a, {
            className: `tpo_option_type_description ${o}`,
            innerHTML: t
        }),
        a
    }
    function gr(t="") {
        const o = document.createElement("span");
        Object.assign(o, {
            className: `tpo_option_type_tooltip_icon ${t ? "" : "tpo_hidden"}`,
            innerHTML: `
                <span 
                    style='font-size: ${Wt.fontSize}px; ${Wt?.fontFamily ? `font-family: ${Wt?.fontFamily};` : ""}' 
                    class='tpo_option-tooltip-icon tpo_ ${Wt.fontStyle}'
                >
                ${Lo ? '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99992 1.83334C4.59416 1.83334 1.83325 4.59425 1.83325 8C1.83325 11.4058 4.59416 14.1667 7.99992 14.1667C11.4057 14.1667 14.1666 11.4058 14.1666 8C14.1666 4.59425 11.4057 1.83334 7.99992 1.83334ZM0.833252 8C0.833252 4.04196 4.04188 0.833336 7.99992 0.833336C11.958 0.833336 15.1666 4.04196 15.1666 8C15.1666 11.958 11.958 15.1667 7.99992 15.1667C4.04188 15.1667 0.833252 11.958 0.833252 8ZM7.99992 5.16667C7.53968 5.16667 7.16659 5.53977 7.16659 6C7.16659 6.27614 6.94273 6.5 6.66659 6.5C6.39044 6.5 6.16659 6.27614 6.16659 6C6.16659 4.98748 6.9874 4.16667 7.99992 4.16667C9.01244 4.16667 9.83325 4.98748 9.83325 6C9.83325 6.36423 9.72652 6.70505 9.54247 6.99109C9.42718 7.17025 9.2924 7.3413 9.16812 7.49576C9.14539 7.524 9.12305 7.55165 9.1011 7.57882C8.99798 7.70646 8.90331 7.82363 8.81583 7.94385C8.60011 8.24033 8.49992 8.46313 8.49992 8.66667V9C8.49992 9.27614 8.27606 9.5 7.99992 9.5C7.72378 9.5 7.49992 9.27614 7.49992 9V8.66667C7.49992 8.13383 7.76153 7.69318 8.00723 7.3555C8.11104 7.21282 8.2248 7.0721 8.32825 6.94414C8.34897 6.91851 8.36928 6.89338 8.38901 6.86886C8.51248 6.71542 8.61757 6.58044 8.70152 6.44997C8.78486 6.32046 8.83325 6.16665 8.83325 6C8.83325 5.53977 8.46016 5.16667 7.99992 5.16667ZM7.99992 10.1667C8.27606 10.1667 8.49992 10.3905 8.49992 10.6667V11.3333C8.49992 11.6095 8.27606 11.8333 7.99992 11.8333C7.72378 11.8333 7.49992 11.6095 7.49992 11.3333V10.6667C7.49992 10.3905 7.72378 10.1667 7.99992 10.1667Z" fill="white" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="16px" height="16px"><path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 24 14 A 2 2 0 0 0 24 18 A 2 2 0 0 0 24 14 z M 23.976562 20.978516 A 1.50015 1.50015 0 0 0 22.5 22.5 L 22.5 33.5 A 1.50015 1.50015 0 1 0 25.5 33.5 L 25.5 22.5 A 1.50015 1.50015 0 0 0 23.976562 20.978516 z"/></svg>'}            
            `
        });
        const i = document.createElement("div");
        Object.assign(i, {
            className: "tpo_option_type_tooltip_wrapper",
            innerHTML: t
        });
        const a = i.cloneNode(!0);
        o.appendChild(i);
        let r;
        const c = () => {
            a.style.visibility = "visible",
            a.style.opacity = "1",
            a.style.zIndex = "9999",
            document.body.appendChild(a),
            a.addEventListener("mouseenter", () => {
                clearTimeout(r)
            }
            ),
            a.addEventListener("mouseleave", () => {
                r = setTimeout(d, 200)
            }
            );
            const n = o.getBoundingClientRect()
              , f = a.getBoundingClientRect();
            let p = n.top + window.scrollY - f.height - 5
              , s = n.left + n.width / 2 - f.width / 2;
            s + f.width > window.innerWidth && (s = window.innerWidth - f.width - 10),
            s < 0 && (s = 10),
            a.style.top = `${p}px`,
            a.style.left = `${s}px`
        }
          , d = () => {
            a.remove()
        }
        ;
        return o.addEventListener("mouseenter", c),
        o.addEventListener("mouseleave", () => {
            r = setTimeout(d, 200)
        }
        ),
        o
    }
    function ze(t, o) {
        let i = new RegExp(/{{(.*?)}}/gim);
        return typeof o == "object" ? o.length > 1 ? t.replace("{{minValue}}", o[0]).replace("{{maxValue}}", o[1]) : t.replace(i, function() {
            return o
        }) : t.replace(i, function() {
            return o
        })
    }
    function dt(t, o) {
        if (t)
            if (o) {
                const i = o.closest(Yt);
                i ? i.setAttribute("tpo-validated-form", !0) : document.querySelector("body").setAttribute("tpo-validated-form", !0)
            } else
                document.querySelector("body").setAttribute("tpo-validated-form", !0);
        else if (o) {
            const i = o.closest(Yt);
            i ? i.setAttribute("tpo-validated-form", !1) : document.querySelector("body").setAttribute("tpo-validated-form", !1)
        } else
            document.querySelector("body").setAttribute("tpo-validated-form", !1);
        o && Gn(o)
    }
    function Wm(t, o) {
        const i = document.querySelectorAll(Sn)
          , a = document.querySelectorAll(Vs);
        t ? (i.forEach(r => {
            r.type = "button",
            r.disabled = !1
        }
        ),
        a.forEach(r => {
            r.disabled = !1
        }
        )) : (i.forEach(r => {
            r.type = "button",
            r.disabled = !0
        }
        ),
        a.forEach(r => {
            r.disabled = !0
        }
        ))
    }
    function yt(t, o, i) {
        if (i <= 0)
            o.innerHTML = "";
        else {
            let a = PriceFormatter.formatMoney(parseFloat(i * 100), !0);
            o.innerHTML = `(${a})`
        }
    }
    function Yn(t) {
        return Fn ? t + t * Fn / 100 : t
    }
    function Um(t, o) {
        if (!Fn || !o || !o.parentElement)
            return;
        const i = t + t * Fn / 100
          , a = PriceFormatter.formatMoney(parseFloat(i), !0)
          , r = `${ze(Bf)} <span>${a}</span>`;
        let c = o.parentElement.querySelector(".tpo_price_include_tax");
        c ? c.innerHTML = r : (c = document.createElement("div"),
        Object.assign(c, {
            className: "tpo_price_include_tax",
            innerHTML: r
        }),
        o.parentElement.append(c))
    }
    function od({xValue: t=1, yValue: o=1, zValue: i=1, formula: a, price: r, tablePrice: c}) {
        const d = t * o * i * r * 100;
        if (!a)
            return d;
        a = a.replace(/({{|}})/g, "").toLowerCase();
        const n = {
            x: t,
            y: o,
            z: i,
            price: r,
            tableprice: c
        };
        try {
            const f = math.evaluate(a, n) * 100;
            return f < 0 ? 0 : f
        } catch {
            return d
        }
    }
    function ad({xValue: t=1, yValue: o=1, zValue: i=1, tablePricing: a={}}) {
        if (!a.enable)
            return {
                valid: !0,
                tablePrice: null
            };
        const {ranges: r} = a;
        if (!r || !r.length)
            return {
                valid: !0,
                tablePrice: null
            };
        const {dimensionType: c} = a
          , d = r.find(n => {
            const {xMin: f, xMax: p, yMin: s, yMax: l} = n;
            let b, h;
            return b = !f && t <= Number(p) || !p && t >= Number(f) || t >= Number(f) && t <= Number(p),
            c === 1 ? h = !0 : h = !s && o <= Number(l) || !l && o >= Number(s) || o >= Number(s) && o <= Number(l),
            b && h
        }
        );
        return d ? {
            valid: !!d.price,
            tablePrice: d.price
        } : {
            valid: !1,
            tablePrice: null
        }
    }
    function rd({value: t, price: o, formula: i, useFormula: a, priceType: r}) {
        if (!i || !a || r !== "one" && r !== "one_formula")
            return t * o * 100;
        i = i.replace(/({{|}})/g, "");
        const c = {
            x: t,
            price: o
        };
        try {
            const d = math.evaluate(i, c) * 100;
            return d <= 0 ? 0 : d
        } catch {
            return t * o * 100
        }
    }
    function Rm(t, o, i, a, r, c="", d=!1) {
        if (r === "one" || r === "product_add_ons" || r === "one_with_new_price" || r === "one_formula")
            if (r === "one_formula" && (d = !0),
            !t || i <= 0)
                o.innerHTML = "";
            else {
                let n = PriceFormatter.formatMoney(parseFloat(a * i * 100), !1)
                  , f = a.toString();
                if (f && f.endsWith("]")) {
                    const p = f.indexOf("[");
                    f = f.slice(0, p - 1).trim()
                }
                f = rd({
                    value: f,
                    price: i,
                    formula: c,
                    useFormula: d,
                    priceType: r
                }),
                a.toString() !== f ? (n = PriceFormatter.formatMoney(parseFloat(f), !0),
                o.innerHTML = `(+${n})`) : o.innerHTML = `(+${n})`
            }
        else if (!t || i <= 0)
            o.innerHTML = "";
        else {
            let n = PriceFormatter.formatMoney(parseFloat(i * 100), !1)
              , f = a.toString();
            if (f && f.endsWith("]")) {
                const p = f.indexOf("[");
                f = f.slice(0, p - 1).trim()
            }
            a.toString() !== f ? (n = PriceFormatter.formatMoney(parseFloat(i * 100), !0),
            o.innerHTML = `(+${n})`) : o.innerHTML = `(+${n})`
        }
    }
    function Zn(t) {
        let o = document.createElement("input");
        Object.assign(o, {
            className: "tpo_total-additional-price-input",
            name: "tpo_total-additional-price",
            type: "hidden",
            value: ""
        }),
        ea && o.setAttribute("form", ea);
        let i = document.createElement("span");
        Object.assign(i, {
            className: "tpo_total-additional-price"
        }),
        i.style.fontSize = `${Ca.fontSize}px`,
        i.style.color = V.totalPricePriceColor ?? Ca.fontColor;
        let a = document.createElement("div");
        return Object.assign(a, {
            className: `tpo_total-additional-price-wrapper ${t?.querySelectorAll(".tpo_additional-price.active").length > 0 ? "" : "tpo_hidden"} tpo_${Ca.fontStyle}`,
            innerHTML: `
                    <label class='tpo_total-additional-price-label'>${gp ? ze(gp, "") : In === "exclude" || In === void 0 ? "Your selections will add an additional charge of" : "Total price"} </label>
                `
        }),
        tm || (a.style.display = "none"),
        a.style.fontSize = `${Ca.fontSize}px`,
        a.style.color = V.totalPriceTextColor ?? Ca.fontColor,
        a.style.backgroundColor = V.totalPriceBackgroundColor,
        a.style.borderColor = V.totalPriceBorderColor,
        a.style.borderRadius = `${Oi.totalPriceBorderRadius}px`,
        Ca?.fontFamily && (a.style.fontFamily = Ca.fontFamily),
        a.append(i),
        {
            totalAdditionalPrice: i,
            totalAdditionalPriceWrapper: a,
            totalAdditionalPriceInput: o
        }
    }
    function ke(t, o) {
        let i = t?.querySelectorAll([".tpo_error-message", ".tpo-quantity-error"]);
        if (!i.length) {
            let _ = t.closest(Yt);
            _ && !_.querySelector(".tpo_option-set-wrapper") && (_ = document.querySelector(Yt)),
            _ || (_ = document.querySelector(Yt)),
            i = _ ? _?.querySelectorAll([".tpo_error-message", ".tpo-quantity-error"]) : []
        }
        let a = [];
        const r = De.map(_ => document.getElementById(_));
        let c = []
          , d = []
          , n = [];
        r.forEach(_ => {
            if (_ && _.className.indexOf("tpo_hidden") !== -1)
                if (_.id.split(",")[2] === "group") {
                    let m = Array.from(_?.querySelectorAll([".tpo_error-message", ".tpo-quantity-error"])) || [];
                    c = [...c, ...m];
                    const S = Array.from(_.querySelectorAll("input, textarea")) || [];
                    d = [...d, ...S];
                    let v = Array.from(_.querySelectorAll(".tpo_additional-price.active")) || [];
                    v && (n = [...n, ...v])
                } else {
                    let m = _?.querySelectorAll([".tpo_error-message", ".tpo-quantity-error"]);
                    c = [...c, ...m];
                    const S = _.querySelectorAll("input, textarea");
                    d = [...d, ...S];
                    let v = _.querySelector(".tpo_additional-price.active");
                    v && (n = [...n, v])
                }
        }
        );
        for (const _ of i)
            c.find(m => m === _) ? a.push("") : a.push(_.innerHTML);
        const f = a.every(_ => _ === "");
        let p = Array.from(t.elements || []).filter(_ => _.className.includes("tpo") && !_.className.includes("tpo_add-to-cart"))
          , s = !0;
        if (!p.length) {
            let _ = document.querySelector(Ai);
            p = Array.from(_?.elements || []).filter(m => m.className.includes("tpo") && !m.className.includes("tpo_add-to-cart"))
        }
        for (const _ of p) {
            const m = d.find(S => S === _);
            if (m && m.name.includes("properties["))
                m.setAttribute("disabled", "disabled");
            else {
                if (_.tagName === "BUTTON")
                    continue;
                const S = _.closest(".tpo_option-container");
                if (S) {
                    const v = S.parentElement.closest(".tpo_option-container");
                    if (v && v.classList.contains("tpo_hidden"))
                        continue
                }
                if (S && S.classList.contains("tpo_hidden") || (_.removeAttribute("disabled"),
                S && S.querySelectorAll("input.tpo_option-dropdown").forEach(y => {
                    y.removeAttribute("disabled")
                }
                )),
                _.dataset.required !== "1" || _.disabled || S && S.classList.contains("tpo_hidden"))
                    continue;
                if (_.type !== "checkbox" && _.value === "") {
                    s = !1;
                    continue
                }
                _.type === "checkbox" && !_.checked && (s = !1)
            }
        }
        let l = t.querySelector(`.tpo_total-additional-price:not(.${_i} *)`) || t.closest(Yt)?.querySelector(`.tpo_total-additional-price:not(.${_i} *)`) || document.querySelector(".easify-product-options")?.querySelector(`.tpo_total-additional-price:not(.${_i} *)`) || document.createElement("div")
          , b = t.querySelector(`.tpo_total-additional-price-wrapper:not(.${_i} *)`) || t.closest(Yt)?.querySelector(`.tpo_total-additional-price-wrapper:not(.${_i} *)`) || document.querySelector(".easify-product-options")?.querySelector(`.tpo_total-additional-price-wrapper:not(.${_i} *)`) || document.createElement("div")
          , h = t.querySelector(`.tpo_total-additional-price-input:not(.${_i} *)`) || t.closest(Yt)?.querySelector(`.tpo_total-additional-price-input:not(.${_i} *)`) || document.querySelector(".easify-product-options")?.querySelector(`.tpo_total-additional-price-input:not(.${_i} *)`) || document.createElement("div");
        Oa(t, l, b, h, o, n),
        f && s || (mt.type = "button");
        let u = ["bisoo-shop.myshopify.com", "mxjpaf-ir.myshopify.com"];
        if (document.querySelector("gp-product") && !u.includes(B)) {
            const _ = document.querySelectorAll(Sn)
              , m = document.querySelectorAll(Vs);
            f && s ? (_.forEach(S => {
                S.disabled && (S.type = "button",
                S.disabled = !1)
            }
            ),
            m.forEach(S => {
                S.disabled && (S.disabled = !1)
            }
            )) : (_.forEach(S => {
                S.type = "button",
                S.disabled = !0
            }
            ),
            m.forEach(S => {
                S.disabled = !0
            }
            ))
        }
        const x = rs(t);
        return f && s && x
    }
    function es(t) {
        return t ? ci(t.innerText) * 100 : 0
    }
    function Vm(t) {
        let o = vi && (vi.classList.contains("active") || vi.classList.contains("is-open") || typeof vi.open == "boolean" && !!vi.open);
        if (vi || (vi = document.querySelector(Xo),
        o = vi && rm(vi)),
        t.tagName === "FORM" || t.classList.contains("product__meta")) {
            let i = t.closest(Yt);
            if (se || Ep)
                if (i) {
                    let a = i.querySelector(go) || i.parentElement.querySelector(go);
                    return es(a)
                } else {
                    const a = [".product__info-wrapper", ".product-detail", ".product-single__meta"];
                    let c = t.closest(a)?.querySelector(go);
                    return es(c)
                }
            else if ((ve && kp || (ce || ge) && Cp || ve && $p) && t.action.includes("cart/add")) {
                const a = t.closest(Yt);
                if (a) {
                    const r = a.querySelector(go);
                    if (r)
                        return es(r)
                }
                return 0
            }
        } else if (It || o) {
            const i = t.querySelector(go) || t.closest(ji)?.querySelector(go);
            return i ? es(i) : 0
        }
    }
    function nd(t, o, i) {
        if (!Hf || Uc.includes(B) && ti?.length === 0 || (t || Ea(),
        !t))
            return;
        const {totalPrice: a, originalTotalPrice: r, additionalPrice: c, originalAdditionalPrice: d} = o;
        let n = PriceFormatter.formatMoney(parseFloat(a), !0)
          , f = PriceFormatter.formatMoney(parseFloat(r + d), !0);
        if (!n || !f)
            return;
        const p = t.closest([...Yt, ...er.wrapper]);
        if (!p)
            return;
        let s = p.querySelectorAll(go);
        if (s.length || (s = p.parentElement.querySelectorAll(go)),
        !s.length)
            return;
        s.forEach(h => {
            let u;
            const x = h.parentElement?.querySelector(":scope >.tpo_product_price");
            if (x)
                x.innerHTML = Zs ? f : n,
                u = x;
            else {
                const _ = h.cloneNode(!0);
                _.classList.add("tpo_product_price"),
                h.parentNode?.insertBefore(_, h.nextSibling),
                _.innerHTML = Zs ? f : n,
                h.style.display = "none",
                h.style.visibility = "hidden",
                u = _
            }
            Td({
                target: u,
                beforeWholesale: i,
                showLabel: !1,
                position: "after",
                totalPriceAfter: a,
                section: "main-product-price"
            })
        }
        );
        let l = p.querySelector(il);
        if (l || (l = p.parentElement.querySelector(il)),
        l) {
            let h = l.innerHTML.includes("<sup") ? parseFloat(ci(l.innerText)) : parseFloat(ci(l.innerText) * 100);
            if (h) {
                h += Zs ? d : c;
                let u = PriceFormatter.formatMoney(parseFloat(h), !0);
                const x = l.parentElement?.querySelector(":scope >.tpo_product_old_price");
                if (x)
                    x.innerHTML = u;
                else {
                    const _ = l.cloneNode(!0);
                    _.classList.add("tpo_product_old_price"),
                    l.parentNode?.insertBefore(_, l.nextSibling),
                    _.innerHTML = u,
                    l.style.display = "none"
                }
            }
        }
        if (B === "7fbfaa.myshopify.com") {
            let h = function() {
                document.querySelectorAll(".sls-total-price .seal-money").forEach(u => {
                    u.innerHTML = n
                }
                )
            };
            var b = h;
            h(),
            document.addEventListener("sealsubs:price_update", function(u) {
                h()
            })
        }
    }
    function zm(t, o) {
        const i = document.querySelector(er.form);
        i && nd(i, t, o)
    }
    function Oa(t, o, i, a, r, c) {
        if (!c) {
            ke(t, r);
            return
        }
        let d = o
          , n = i
          , f = a;
        if (Hr) {
            const Q = document.querySelector(".tpo_cart_drawer_modal .tpo_modal-container");
            Q && (d = Q.querySelector(".tpo_total-additional-price") || o,
            n = Q.querySelector(".tpo_total-additional-price-wrapper") || i,
            f = Q.querySelector(".tpo_total-additional-price-input") || a)
        }
        const p = mt ? mt.querySelector(ty) : null;
        let s = Vm(t) || 0;
        const l = document.querySelector(".tpo_option-set-wrapper") || document.createElement("div");
        let b;
        const h = document.querySelectorAll(op);
        Hr ? b = Array.from(document.querySelector(".tpo_modal-container form")?.querySelectorAll(".tpo_additional-price.active") || []) : b = Array.from(t ? t.querySelectorAll(".tpo_additional-price.active").length ? t.querySelectorAll(".tpo_additional-price.active") : l && l.querySelectorAll(".tpo_additional-price.active") || [] : document.querySelector("main").querySelectorAll(".tpo_additional-price.active").length ? document.querySelector("main").querySelectorAll(".tpo_additional-price.active") : l && l.querySelectorAll(".tpo_additional-price.active") || []);
        const u = T_(t);
        let x = s || 0
          , _ = s || 0;
        Qa && (x *= u);
        let m = 0
          , S = 0
          , v = 0
          , y = 0
          , g = 0;
        for (const Q of b)
            if (c && c.length > 0) {
                if (c.find(I => I === Q))
                    continue;
                {
                    let I = Q.textContent;
                    if (!I)
                        continue;
                    const F = Q.dataset.oneTimeCharge
                      , ee = Q.dataset.addOnProduct;
                    let K = /\(\+?(.*)\)/
                      , H = I.match(K)
                      , T = 0;
                    if (H) {
                        let E = H[1]
                          , q = ci(E);
                        T = parseFloat(q * 100)
                    }
                    Qa ? F ? Gc ? y += T : (x += T,
                    m += T,
                    v += T,
                    g += T) : (x += T * u,
                    m += T * u,
                    v += T) : F ? y += T : (x += T,
                    m += T,
                    ee || (S += T),
                    v += T)
                }
            } else {
                let I = Q.textContent;
                if (!I)
                    continue;
                const F = Q.dataset.oneTimeCharge
                  , ee = Q.dataset.addOnProduct;
                let K = /\(\+?(.*)\)/
                  , H = I.match(K)
                  , T = 0;
                if (H) {
                    let E = H[1]
                      , q = ci(E);
                    T = parseFloat(q * 100)
                }
                Qa ? F ? Gc ? y += T : (x += T,
                m += T,
                v += T,
                g += T) : (x += T * u,
                m += T * u,
                v += T) : F ? y += T : (x += T,
                m += T,
                ee || (S += T),
                v += T)
            }
        const C = {
            totalPrice: x,
            originalTotalPrice: _,
            productPrice: s,
            additionalPrice: m,
            originalAdditionalPrice: v
        }
          , w = {
            totalPrice: ta(x, r, zn, ur, "product", !1, g),
            originalTotalPrice: ta(_, r, zn, ur, "product", !0),
            additionalPrice: m,
            originalAdditionalPrice: v
        };
        nd(t, w, C),
        zm(w, C);
        const $ = In === "include" ? x + y : x - s + y
          , L = ta(Kc ? x - m : $, r, zn, ur) + (Kc ? m + y : 0);
        let P = PriceFormatter.formatMoney(parseFloat(L), !0);
        f.value = P;
        let k = ["tuanna-store.myshopify.com", "portail-francais.myshopify.com"].includes(B);
        if (Vt !== "no" && (Nf.includes(B) || k || xa)) {
            let Q = t.querySelector('[name="properties[_tpo_price]"]');
            if (Q ? k ? Q.value = parseFloat(S / ht) / 100 : Q.value = parseFloat(m / ht) / 100 : (Q = document.createElement("input"),
            Q.type = "hidden",
            Q.id = "_tpo_price",
            Q.name = "properties[_tpo_price]",
            k ? Q.value = parseFloat(S / ht) / 100 : Q.value = parseFloat(m / ht) / 100,
            t.appendChild(Q)),
            Vt === "expand") {
                let I = aa()
                  , F = t.querySelector('[name="properties[_tpo_custom_options]"]');
                F ? F.value = JSON.stringify(uo(I)) : (F = document.createElement("input"),
                F.type = "hidden",
                F.id = "_tpo_custom_options",
                F.name = "properties[_tpo_custom_options]",
                F.value = JSON.stringify(uo(I)),
                t.appendChild(F))
            }
        }
        L > 0 ? (d.innerHTML = `${P}`,
        n.classList.remove("tpo_hidden"),
        p && (p.innerHTML = `${P}`),
        Um(L, d),
        Td({
            target: d,
            beforeWholesale: C,
            showLabel: !0,
            position: "after",
            totalPriceAfter: L,
            section: "custom-box-price"
        })) : n.classList.add("tpo_hidden"),
        A_(n);
        const A = yr( () => {
            Oa(t, o, i, a, r, c)
        }
        , 150);
        Qa && r && (r.dataset.listenerAdded || (r.addEventListener("input", A),
        r.dataset.listenerAdded = "true"),
        h.forEach(Q => {
            Q.dataset.listenerAdded || (Q.addEventListener("click", A),
            Q.dataset.listenerAdded = "true")
        }
        ));
        const R = new Event("getTotalAdditionalPrice");
        document.dispatchEvent(R)
    }
    window.easifyHandleUpdateTotalAdditionalPrice = function() {
        try {
            const t = document.querySelector(Ai);
            Oa(t)
        } catch {}
    }
    ;
    function ta(t, o, i, a, r="product", c=!1, d=null) {
        if (!i)
            return t;
        const n = Number(o.value)
          , f = a.filter(b => !Number(b.maxQty) && n >= Number(b.minQty) || n >= Number(b.minQty) && n <= Number(b.maxQty));
        if (!f.length)
            return t;
        const p = f[f.length - 1];
        let {type: s, value: l} = p;
        if (s === "fixed" && (Qa && r === "product" && (l *= c ? 1 : n),
        t -= Number(l) * 100),
        s === "percentage")
            if (Vt === "expand" && Qa && r === "product") {
                let b = 0;
                d && d > 0 && (b = d,
                t -= d);
                const h = t / n / 100;
                t = parseFloat(h * (100 - Number(l)) / 100).toFixed(2) * n * 100 + b
            } else
                t *= (100 - Number(l)) / 100;
        return t >= 0 ? t : 0
    }
    function Ct(t, o, i, a, r, c, d) {
        if (c) {
            if (Ft !== -1 && !Fe.includes(c)) {
                let n = At[Ft].filter(p => {
                    if (p.conditions_serialized.conditionOptions)
                        return p.conditions_serialized.conditionOptions.filter(l => l.id === c)[0]
                }
                );
                const f = n.map(p => {
                    const s = `${p.id},${p.type}`;
                    return document.getElementById(`${s}`)
                }
                );
                !n.includes(null) && n.length && n.forEach( (p, s) => {
                    const l = f[s];
                    if (l) {
                        l.classList.add("tpo_hidden"),
                        Fi(p.id, "hide", p.multi_select),
                        Fe.push(c);
                        const b = l.querySelectorAll("input, textarea")
                          , h = b[b.length - 1];
                        h && Oo(h);
                        const u = l.id.split(",")[2];
                        Uo(u, !0, l),
                        Ct(At, "", "", "", "", l.id, d)
                    }
                }
                )
            }
        } else {
            t?.length && (Ft = t[0].option_set_id);
            const n = W.findIndex(s => s?.id === o);
            i === "switch" ? n >= 0 ? W[n] = {
                ...W[n],
                value: a
            } : W = [...W, {
                id: o,
                value: a
            }] : n >= 0 ? W[n] = {
                ...W[n],
                value: a,
                optionValue: d
            } : W = [...W, {
                id: o,
                value: a,
                optionValue: d
            }];
            let f = At[Ft].filter(s => {
                if (s.conditions_serialized.conditionOptions)
                    return s.conditions_serialized.conditionOptions.filter(b => b.id === o)[0]
            }
            );
            const p = f.map(s => {
                const l = `${s.id},${s.type}`;
                return document.getElementById(`${l}`)
            }
            );
            !f.includes(null) && f.length && f.forEach( (s, l) => {
                const {action: b, match: h} = s.conditions_serialized
                  , u = s?.metadata ? JSON.parse(s?.metadata) : {}
                  , x = (m, S, v) => {
                    const {enableColorPreview: y=0, textBoxIdentifier: g="", textBoxIdentifierV2: C=[]} = S
                      , w = m.querySelector(".tpo_color-picker_input")
                      , $ = m.closest(".tpo_option-set-wrapper") || m.closest(".tpo_option-set-container")
                      , L = w?.value;
                    v === "SHOW" ? (Wi(s.id, "name", L, !0, "COLOR"),
                    y && (Xn($, g, L),
                    wl($, C, L))) : (Wi(s.id, "name", "", !0, "COLOR"),
                    y && (Xn($, g, ""),
                    wl($, C, "")))
                }
                  , _ = (m, S, v) => {
                    const {displayFontSwatches: y, enableFontPreview: g=0, textBoxIdentifier: C="", textBoxIdentifierV2: w=[]} = S
                      , $ = m.querySelector(".tpo_font-picker-google-wrapper") || m.querySelector(".tpo_font-picker-dropdown-wrapper") || m.querySelector(".tpo_option-type-font-picker-swatches")
                      , L = m.closest(".tpo_option-set-wrapper") || m.closest(".tpo_option-set-container");
                    let P;
                    y ? P = $?.querySelector(".tpo_buttons-wrapper .tpo_is_checked_buttons") : P = $?.firstElementChild,
                    v === "SHOW" ? (Wi(s.id, "name", {
                        name: P?.textContent
                    }, !0, "FONT"),
                    g && (La(L, C, {
                        name: P?.textContent
                    }),
                    Qr(L, w, {
                        name: P?.textContent
                    }))) : (Wi(s.id, "name", "", !0, "FONT"),
                    g && (La(L, C, {
                        name: ""
                    }),
                    Qr(L, w, {
                        name: ""
                    })))
                }
                ;
                switch (h) {
                case "ANY":
                    s.conditions_serialized.conditionOptions.every(L => sd(p[l], b, L.relative, L.value, o, At, s.id, d, s));
                    break;
                case "ALL":
                    const m = ae.find(L => `${L.id}` == `${s.id}`);
                    let S = []
                      , v = []
                      , y = [];
                    const g = (L, P, k, A, R) => {
                        const Q = document.getElementById(A)
                          , I = Number(P || "0");
                        if (Q && Q.classList.contains("tpo_hidden"))
                            S = [...S, !1];
                        else if (typeof k != "object")
                            switch (L) {
                            case "EQUAL":
                                k.toString() === P.toString() ? S = [...S, !0] : S = [...S, !1];
                                break;
                            case "NOT_EQUAL":
                                k.toString() !== P.toString() ? S = [...S, !0] : S = [...S, !1];
                                break;
                            case "CONTAIN":
                                k.includes(P.toString()) ? S = [...S, !0] : S = [...S, !1];
                                break;
                            case "NOT_CONTAIN":
                                k.includes(P.toString()) ? S = [...S, !1] : S = [...S, !0];
                                break;
                            case "START_WITH":
                                k.startsWith(P.toString()) ? S = [...S, !0] : S = [...S, !1];
                                break;
                            case "END_WITH":
                                k.endsWith(P.toString()) ? S = [...S, !0] : S = [...S, !1];
                                break;
                            case "NUMBER_CHOICES_EQUAL":
                                I !== NaN && (I === 1 && k ? S = [...S, !0] : S = [...S, !1]);
                                break;
                            case "NUMBER_CHOICES_NOT":
                                I !== NaN && (I === 1 && k ? S = [...S, !1] : S = [...S, !0]);
                                break;
                            case "GREATER_THAN":
                                if (I !== NaN) {
                                    const F = Number(k);
                                    F && I < F ? S = [...S, !0] : S = [...S, !1]
                                }
                                break;
                            case "LESS_THAN":
                                if (I !== NaN) {
                                    const F = Number(k);
                                    F && I > F ? S = [...S, !0] : S = [...S, !1]
                                }
                                break;
                            case "GREATER_THAN":
                                if (I !== NaN) {
                                    const F = Number(k);
                                    F && I < F ? S = [...S, !0] : S = [...S, !1]
                                }
                                break;
                            case "LESS_THAN":
                                if (I !== NaN) {
                                    const F = Number(k);
                                    F && I > F ? S = [...S, !0] : S = [...S, !1]
                                }
                                break;
                            case "VALUE_GREATER_THAN":
                                if (I !== NaN) {
                                    const F = Number(R);
                                    F && F > I ? S = [...S, !0] : S = [...S, !1]
                                }
                                break;
                            case "VALUE_GREATER_EQUAL":
                                if (I !== NaN) {
                                    const F = Number(R);
                                    F && F >= I ? S = [...S, !0] : S = [...S, !1]
                                }
                                break;
                            case "VALUE_LESS_THAN":
                                if (I !== NaN) {
                                    const F = Number(R);
                                    F && F < I ? S = [...S, !0] : S = [...S, !1]
                                }
                                break;
                            case "VALUE_LESS_EQUAL":
                                if (I !== NaN) {
                                    const F = Number(R);
                                    F && F <= I ? S = [...S, !0] : S = [...S, !1]
                                }
                                break
                            }
                        else
                            switch (L) {
                            case "EQUAL":
                                y = [...k],
                                k.length && k.find(F => F === P) ? (v = [...v, !0],
                                S = [...S, !0]) : S = [...S, !1];
                                break;
                            case "NOT_EQUAL":
                                y = [...k],
                                k.length && k.find(F => F === P) ? S = [...S, !1] : (v = [...v, !0],
                                S = [...S, !0]);
                                break;
                            case "CONTAIN":
                                k.find(F => F === P.toString()) ? (v = [...v, !0],
                                S = [...S, !0]) : S = [...S, !1];
                                break;
                            case "NOT_CONTAIN":
                                k.find(F => F === P.toString()) ? S = [...S, !1] : (v = [...v, !0],
                                S = [...S, !0]);
                                break;
                            case "NUMBER_CHOICES_EQUAL":
                                I !== NaN && (I === k?.length ? S = [...S, !0] : S = [...S, !1]);
                                break;
                            case "NUMBER_CHOICES_NOT":
                                I !== NaN && (I !== k?.length ? S = [...S, !0] : S = [...S, !1]);
                                break;
                            case "GREATER_THAN":
                                I !== NaN && (I < k?.length ? S = [...S, !0] : S = [...S, !1]);
                                break;
                            case "LESS_THAN":
                                I !== NaN && (I > k?.length ? S = [...S, !0] : S = [...S, !1]);
                                break;
                            case "VALUE_GREATER_THAN":
                                if (I !== NaN) {
                                    const F = Number(R);
                                    F && F > I ? S = [...S, !0] : S = [...S, !1]
                                }
                                break;
                            case "VALUE_GREATER_EQUAL":
                                if (I !== NaN) {
                                    const F = Number(R);
                                    F && F >= I ? S = [...S, !0] : S = [...S, !1]
                                }
                                break;
                            case "VALUE_LESS_THAN":
                                if (I !== NaN) {
                                    const F = Number(R);
                                    F && F < I ? S = [...S, !0] : S = [...S, !1]
                                }
                                break;
                            case "VALUE_LESS_EQUAL":
                                if (I !== NaN) {
                                    const F = Number(R);
                                    F && F <= I ? S = [...S, !0] : S = [...S, !1]
                                }
                                break
                            }
                    }
                    ;
                    m.conditionOptions.forEach(L => {
                        W.forEach(P => {
                            const k = document.getElementById(`${P.id}`);
                            P.id === L.id && k && !k.classList.contains("tpo_hidden") && g(L.relative, L.value, P.value, L.id, P.optionValue)
                        }
                        )
                    }
                    );
                    let C = !1;
                    v.length >= y.length ? C = !0 : C = !1;
                    const w = p[l];
                    let $ = "";
                    if (w) {
                        $ = w.id.split(",")[2];
                        const P = Array.from(w.querySelectorAll("input, textarea"))
                          , k = P[P.length - 1]
                          , A = B !== "060d87-4f.myshopify.com" ? S.length === m.conditionOptions.length : !0;
                        if (k && (A && S.every(R => R === !0) && C ? m.action === "SHOW" ? (ia(k),
                        s.type === "color-picker" && x(w, u, m.action),
                        s.type === "font-picker" && _(w, u, m.action)) : (Oo(k),
                        s.type === "color-picker" && x(w, u),
                        s.type === "font-picker" && _(w, u)) : m.action === "SHOW" ? (Oo(k),
                        s.type === "color-picker" && x(w, u),
                        s.type === "font-picker" && _(w, u)) : (ia(k),
                        s.type === "color-picker" && x(w, u, m.action),
                        s.type === "font-picker" && _(w, u, m.action))),
                        A && S.every(R => R === !0) && C)
                            if (m.action === "SHOW") {
                                w.classList.remove("tpo_hidden"),
                                Fi(w.id, "show", s.multi_select),
                                Fe = Fe.filter(function(Q) {
                                    return Q !== w.id
                                });
                                let R = W.find(Q => Q.id === w.id);
                                R || (W.push({
                                    id: w.id,
                                    value: "",
                                    optionValue: ""
                                }),
                                R = {
                                    id: w.id,
                                    value: "",
                                    optionValue: ""
                                }),
                                R && Ct(At, w.id, s.type, R.value, null, null, R.optionValue),
                                Uo($, !0, w)
                            } else
                                w.classList.add("tpo_hidden"),
                                Fi(w.id, "hide", s.multi_select),
                                Uo($, !1, w),
                                Ct(At, "", "", "", "", w.id, d);
                        else if (m.action === "SHOW")
                            w.classList.add("tpo_hidden"),
                            Fi(w.id, "hide", s.multi_select),
                            Uo($, !1, w),
                            Ct(At, "", "", "", "", w.id, d);
                        else {
                            w.classList.remove("tpo_hidden"),
                            Fi(w.id, "show", s.multi_select),
                            Fe = Fe.filter(function(Q) {
                                return Q !== w.id
                            });
                            const R = W.find(Q => Q.id === w.id);
                            R && (typeof R.value == "string" ? Ct(At, w.id, "", R.value, null, null, R.optionValue) : Ct(At, w.id, "", R.value, R.value)),
                            Uo($, !0, w)
                        }
                    }
                    break
                }
            }
            )
        }
    }
    function Uo(t, o, i) {
        ["group", "dimension"].includes(t) && (Array.from(i.querySelectorAll(["input", "textarea"])) || []).forEach(r => {
            o ? ia(r) : Oo(r)
        }
        )
    }
    function sd(t, o, i, a, r, c, d, n, f) {
        const p = ae.find(u => `${u.id}` == `${d}`);
        let s = []
          , l = "";
        t && (l = t.id.split(",")[2]);
        const b = (u, x, _, m, S) => {
            const v = Number(x || "0")
              , y = document.getElementById(m);
            if (y && y.classList.contains("tpo_hidden"))
                s = [...s, !1];
            else if (typeof _ != "object")
                switch (u) {
                case "EQUAL":
                    _.toString() === x.toString() ? s = [...s, !0] : s = [...s, !1];
                    break;
                case "NOT_EQUAL":
                    _.toString() !== x.toString() ? s = [...s, !0] : s = [...s, !1];
                    break;
                case "CONTAIN":
                    _.includes(x.toString()) ? s = [...s, !0] : s = [...s, !1];
                    break;
                case "NOT_CONTAIN":
                    _.includes(x.toString()) ? s = [...s, !1] : s = [...s, !0];
                    break;
                case "START_WITH":
                    _.startsWith(x.toString()) ? s = [...s, !0] : s = [...s, !1];
                    break;
                case "END_WITH":
                    _.endsWith(x.toString()) ? s = [...s, !0] : s = [...s, !1];
                    break;
                case "NUMBER_CHOICES_EQUAL":
                    v !== NaN && (v === 1 && _ ? s = [...s, !0] : s = [...s, !1]);
                    break;
                case "NUMBER_CHOICES_NOT":
                    v !== NaN && (v === 1 && _ ? s = [...s, !1] : s = [...s, !0]);
                    break;
                case "GREATER_THAN":
                    if (v !== NaN) {
                        const g = Number(_);
                        g && v < g ? s = [...s, !0] : s = [...s, !1]
                    }
                    break;
                case "LESS_THAN":
                    if (v !== NaN) {
                        const g = Number(_);
                        g && v > g ? s = [...s, !0] : s = [...s, !1]
                    }
                    break;
                case "VALUE_GREATER_THAN":
                    if (v !== NaN) {
                        const g = Number(S);
                        g && g > v ? s = [...s, !0] : s = [...s, !1]
                    }
                    break;
                case "VALUE_GREATER_EQUAL":
                    if (v !== NaN) {
                        const g = Number(S);
                        g && g >= v ? s = [...s, !0] : s = [...s, !1]
                    }
                    break;
                case "VALUE_LESS_THAN":
                    if (v !== NaN) {
                        const g = Number(S);
                        g && g < v ? s = [...s, !0] : s = [...s, !1]
                    }
                    break;
                case "VALUE_LESS_EQUAL":
                    if (v !== NaN) {
                        const g = Number(S);
                        g && g <= v ? s = [...s, !0] : s = [...s, !1]
                    }
                    break
                }
            else
                switch (u) {
                case "EQUAL":
                    _.length === 1 && _[0] === x ? s = [...s, !0] : s = [...s, !1];
                    break;
                case "NOT_EQUAL":
                    _.length === 1 && _[0] === x ? s = [...s, !1] : s = [...s, !0];
                    break;
                case "CONTAIN":
                    _.find(g => g === x.toString()) ? s = [...s, !0] : s = [...s, !1];
                    break;
                case "NOT_CONTAIN":
                    _.find(g => g === x.toString()) ? s = [...s, !1] : s = [...s, !0];
                    break;
                case "NUMBER_CHOICES_EQUAL":
                    v !== NaN && (v === _?.length ? s = [...s, !0] : s = [...s, !1]);
                    break;
                case "NUMBER_CHOICES_NOT":
                    v !== NaN && (v !== _?.length ? s = [...s, !0] : s = [...s, !1]);
                    break;
                case "GREATER_THAN":
                    v !== NaN && (v < _?.length ? s = [...s, !0] : s = [...s, !1]);
                    break;
                case "LESS_THAN":
                    v !== NaN && (v > _?.length ? s = [...s, !0] : s = [...s, !1]);
                    break;
                case "VALUE_GREATER_THAN":
                    if (v !== NaN) {
                        const g = Number(S);
                        g && g > v ? s = [...s, !0] : s = [...s, !1]
                    }
                    break;
                case "VALUE_GREATER_EQUAL":
                    if (v !== NaN) {
                        const g = Number(S);
                        g && g >= v ? s = [...s, !0] : s = [...s, !1]
                    }
                    break;
                case "VALUE_LESS_THAN":
                    if (v !== NaN) {
                        const g = Number(S);
                        g && g < v ? s = [...s, !0] : s = [...s, !1]
                    }
                    break;
                case "VALUE_LESS_EQUAL":
                    if (v !== NaN) {
                        const g = Number(S);
                        g && g <= v ? s = [...s, !0] : s = [...s, !1]
                    }
                    break
                }
        }
        ;
        t && p.conditionOptions.forEach(u => {
            W.forEach(x => {
                const _ = document.getElementById(`${x.id}`);
                x.id === u.id && _ && !_.classList.contains("tpo_hidden") && b(u.relative, u.value, x.value, x.id, x.optionValue)
            }
            )
        }
        );
        let h = !1;
        if (s.includes(!0) ? h = !0 : h = !1,
        t) {
            if (o === "SHOW")
                if (h) {
                    t.classList.remove("tpo_hidden"),
                    Fi(t.id, "show", f.multi_select),
                    Fe = Fe.filter(function(m) {
                        return m !== t.id
                    });
                    const _ = W.find(m => m.id === t.id);
                    _ && (typeof _.value == "string" ? Ct(c, t.id, "", _.value, null, null, n) : Ct(c, t.id, "", _.value, _.value)),
                    Uo(l, !0, t)
                } else
                    t.classList.add("tpo_hidden"),
                    Fi(t.id, "hide", f.multi_select),
                    Uo(l, !1, t),
                    Ct(c, "", "", "", "", t.id, n);
            else if (h)
                t.classList.add("tpo_hidden"),
                Fi(t.id, "hide", f.multi_select),
                Uo(l, !1, t),
                Ct(c, "", "", "", "", t.id, n);
            else {
                t.classList.remove("tpo_hidden"),
                Fi(t.id, "show", f.multi_select),
                Fe = Fe.filter(function(m) {
                    return m !== t.id
                });
                const _ = W.find(m => m.id === t.id);
                _ && (typeof _.value == "string" ? Ct(c, t.id, "", _.value, null, null, n) : Ct(c, t.id, "", _.value, _.value)),
                Uo(l, !0, t)
            }
            const u = t.querySelectorAll("input, textarea")
              , x = u[u.length - 1];
            x && (o === "SHOW" ? h ? ia(x) : Oo(x) : h ? Oo(x) : ia(x))
        } else
            return !1;
        return !h
    }
    function Oo(t) {
        t.setAttribute("disabled", "disabled"),
        t.dataset.conditionalLogic = !1
    }
    function ia(t) {
        t.removeAttribute("disabled"),
        t.dataset.conditionalLogic = !0
    }
    function ld(t) {
        if (!t || !t.elements)
            return;
        Array.from(t.elements).forEach(i => {
            i.tagName !== "INPUT" && i.tagName !== "TEXTAREA" || i.value || i.disabled || (i.disabled = !0)
        }
        )
    }
    if (se || di || Ka) {
        let t = document.createElement("div");
        if (t.classList.add("tpo_option-set-wrapper"),
        (Hi?.sectionTopSpacing || Hi?.sectionBottomSpacing) && (t.style.paddingTop = `${Hi?.sectionTopSpacing || 12}px`,
        t.style.paddingBottom = `${Hi?.sectionBottomSpacing || 12}px`),
        Qc.includes(B) && document.querySelector(".tpo_option-set-wrapper")) {
            const n = document.querySelector(".tpo_option-set-wrapper");
            n.parentElement.replaceChild(t, n)
        }
        di && ti.length === 0 && (ti = window.TPOConfigs.product_options,
        mt = document.querySelector(".preview-atc")),
        se && ti.length && !di && (B === "d9022c-f9.myshopify.com" ? (document.querySelector("gp-product") && window.TPOConfigs && window.TPOConfigs.template !== "product" && Ke.querySelector(Sn) && (mt = Ke.querySelector(Sn)),
        ml()) : (document.querySelector("gp-product") && (mt = Ke.querySelector(Sn)),
        ml()));
        const o = ["rare-succulent.myshopify.com"];
        if (zs = document.querySelectorAll(".easify-product-options"),
        o.includes(B)) {
            const n = document.querySelector('form[action*="/cart/add"]');
            n?.parentElement.insertBefore(t, n)
        } else if (mt.parentElement && (se || di || Ka) || zs.length || zi.includes(gt)) {
            const n = Lt?.position || "above_add_to_cart";
            di && document.querySelectorAll(".tpo_option-set-wrapper").forEach(h => {
                h.remove()
            }
            );
            let f = [".prd-block .prd-block-info .prd-block-actions.js-sticky-add-to-cart-marker"]
              , p = document.querySelector(f);
            const s = ["appleton-sweets.myshopify.com", "757a1b-2.myshopify.com", "6fdef4.myshopify.com", "0d684b-5.myshopify.com", "yapcr.myshopify.com", "467f57.myshopify.com", "minimelons-pk.myshopify.com"];
            let l = document.querySelector(Fo);
            if (zs.length)
                zs[0].append(t);
            else if (n === "below_add_to_cart")
                if (s.includes(B))
                    mt.parentElement.parentElement.insertBefore(t, mt.parentElement.nextSibling);
                else if (B === "lisa-marie-jimenez-designs.myshopify.com")
                    Ke.append(t);
                else if (B === "f0aa9b-2.myshopify.com")
                    mt.parentElement.parentElement.parentElement.insertBefore(t, mt.parentElement.parentElement.nextSibling);
                else if (B === "sin-miedo-8556.myshopify.com")
                    mt.parentElement.append(t);
                else if (zi.includes(gt)) {
                    const b = document.querySelector('form[data-type="add-to-cart-form"] .product-form-buttons');
                    b && b.parentElement.parentElement.insertBefore(t, b.parentElement.nextSibling)
                } else
                    mt.parentElement.insertBefore(t, mt.nextSibling);
            else if (!l && zi.includes(gt)) {
                const b = document.querySelector('form[data-type="add-to-cart-form"] .product-form-buttons');
                b && b.parentElement.insertBefore(t, b)
            } else if (n === "above_product_variants") {
                let b = document.querySelector(Fo);
                b && B !== "meenabazaar-3.myshopify.com" ? b.parentElement.insertBefore(t, b) : mt.parentElement.insertBefore(t, mt)
            } else if (n === "below_product_variants") {
                let b = document.querySelector(Fo);
                if (b && B !== "meenabazaar-3.myshopify.com")
                    b.parentElement.insertBefore(t, b.nextSibling);
                else {
                    let h = document.querySelector(Ku);
                    h ? h.parentElement.insertBefore(t, h) : p ? p.parentElement.insertBefore(t, p) : mt.parentElement.insertBefore(t, mt)
                }
            } else if (zi.includes(gt)) {
                const b = document.querySelector('form[data-type="add-to-cart-form"] .product-form-buttons');
                b && b.parentElement.insertBefore(t, b)
            } else if (s.includes(B))
                mt.parentElement.parentElement.insertBefore(t, mt.parentElement);
            else if (B === "lisa-marie-jimenez-designs.myshopify.com") {
                const b = Ke.querySelector(".purchase-details");
                Ke.insertBefore(t, b)
            } else
                B === "3dd5ff.myshopify.com" ? Ke.querySelector(".productView-group").prepend(t) : mt.parentElement.insertBefore(t, mt)
        } else if (B === "southeastsoftwash.myshopify.com") {
            const n = document.querySelector(py);
            n.parentElement.insertBefore(t, n)
        } else if (B === "london-uk-shop.myshopify.com") {
            const n = document.querySelector("[id*='rbr-container-element']");
            n ? n.parentElement.insertBefore(t, n) : document.querySelector(".product__info-container .button-flex").insertAdjacentElement("afterend", t)
        } else if (window.__pageflyProducts) {
            let f = window.__pageflyProducts[Ip.toString()];
            if (f) {
                let s = f.atcContents.entries().next().value
                  , [l,b] = s
                  , h = document.querySelector(`.${l}`);
                h?.parentElement.parentElement.insertBefore(t, h.parentElement)
            }
        }
        let {totalAdditionalPriceWrapper: i, totalAdditionalPriceInput: a} = Zn(Ke);
        ["gogreekstore.myshopify.com", "paaksr-fx.myshopify.com", "96948d-2e.myshopify.com", "fdb9e4-a2.myshopify.com", "304b68-4.myshopify.com", "paq8nn-da.myshopify.com", "www-sinclo-com-au.myshopify.com", "dbxk6x-uq.myshopify.com", "3928da.myshopify.com"].includes(B) || Ke.addEventListener("change", () => {
            setTimeout( () => {
                Ea(),
                ke(Ke, $a)
            }
            , 1e3)
        }
        ),
        t.append(i, a);
        let c = ti.map( (n, f) => bl(n, Ke, mt, $a, !0));
        if ($n.theme && $n.theme.name === "Symmetry || OPT" && c) {
            const n = c[0].querySelectorAll(".tpo_option-label-container");
            n.length && n.forEach(f => {
                f.classList.add("custom-label-theme")
            }
            )
        }
        if (ti.length && t.classList.add("tpo_has-option-set"),
        ti.length > 0 && Hr) {
            const n = Ke.closest(Yt)
              , p = await (await fetch("/cart.js?app=tpo", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }))?.json();
            let s = [];
            p && (s = p?.items || []),
            await pd({
                cartItemsElement: ii,
                productDetailElement: n,
                appliedOptionSet: ti[0],
                isShowPopup: Hr,
                mainProduct: {},
                wrapperElement: t,
                formProductPageElement: Ke,
                addToCartButton: mt,
                cartItems: s
            })
        } else
            t.prepend(...c),
            jl(),
            await Pd({
                optionSet: ti[0]
            });
        ti.length > 0 && document.dispatchEvent(new Event("easify:loaded")),
        Gr();
        let d = ["bisoo-shop.myshopify.com", "mxjpaf-ir.myshopify.com"];
        if (document.querySelector("gp-product") && !d.includes(B) && Wm(jp(ti[0]?.options)),
        dt(ke(Ke, $a), Ke),
        B && window.location.href.endsWith("?addToCart=true")) {
            let n = document.querySelector(Za);
            if (window.prepareDataForDisplayWidgetByRule && B === "bff7f4.myshopify.com")
                window.prepareDataForDisplayWidgetByRule();
            else {
                if (!n)
                    return;
                let f = new CustomEvent("click",{
                    bubbles: !0,
                    cancelable: !0
                });
                n.dispatchEvent(f)
            }
        }
        if (zn) {
            $a.addEventListener("change", function(s) {
                let l = Ke.querySelector(`.tpo_total-additional-price:not(.${_i} *)`) || Ke.closest(Yt)?.querySelector(`.tpo_total-additional-price:not(.${_i} *)`) || document.createElement("div")
                  , b = Ke.querySelector(`.tpo_total-additional-price-wrapper:not(.${_i} *)`) || Ke.closest(Yt)?.querySelector(`.tpo_total-additional-price:not(.${_i} *)`) || document.createElement("div")
                  , h = Ke.querySelector(`.tpo_total-additional-price-input:not(.${_i} *)`) || Ke.closest(Yt)?.querySelector(`.tpo_total-additional-price:not(.${_i} *)`) || document.createElement("div");
                Oa(Ke, l, b, h, $a)
            });
            const n = ql(ur, "product");
            Zp(ur, Vt, Ke),
            Object.assign(n, {
                className: `tpo_modal-tired-wholesale-wraper tpo_wholesale_table ${po ? "in-dark-mode" : ""}`
            });
            const f = document.querySelector(".tpo_wholesale_block");
            f ? (n.style.marginBottom = "30px",
            f.append(n)) : mt.parentElement && (Mn === "below_add_to_cart" ? (n.style.marginBottom = "30px",
            mt.parentElement.insertBefore(n, mt.nextSibling)) : (n.style.marginBottom = "30px",
            mt.parentElement.insertBefore(n, mt)));
            const p = document.querySelector('form[data-type="add-to-cart-form"] .product-form-buttons');
            zi.includes(gt) && p && p.parentElement && p && p.parentElement && (n.style.marginBottom = "30px",
            Mn === "below_add_to_cart" ? p.parentElement.insertBefore(n, p.nextSibling) : p.parentElement.insertBefore(n, p))
        }
    }
    function Gr() {
        const t = ["dropdown", "color-swatches", "image-swatches", "checkbox", "buttons", "radio-buttons", "product-list"];
        ne.forEach(i => {
            if (!Fe.find(a => a === `${i.id},${i.type}`) && i.option_types.length)
                if (i.type !== "switch")
                    if (t.find(a => a === i.type)) {
                        const a = [];
                        let r = JSON.parse(i.metadata || "{}")
                          , {useUrl: c=!1} = r;
                        i.option_types.forEach(d => {
                            let n = d.is_default;
                            if (c) {
                                const p = JSON.parse(d.metadata || "{}").url || "";
                                let s = p.startsWith("/") || p.startsWith("http") ? p : `https://${p}`;
                                s = Fa(c, s),
                                n = n || Dl(c, s)
                            }
                            n && a.push(d.id)
                        }
                        ),
                        a.length > 1 && Ct(ne, `${i.id},${i.type}`, i.type, a),
                        a.length <= 1 && Ct(ne, `${i.id},${i.type}`, i.type, a[0] || "")
                    } else {
                        const a = i.default_value || "";
                        Ct(ne, `${i.id},${i.type}`, i.type, a)
                    }
                else {
                    const a = [];
                    a.push(!!i.switch_value),
                    Ct(ne, `${i.id},${i.type}`, i.type, a[0])
                }
        }
        ),
        o();
        function o() {
            rt.length && rt.forEach(i => {
                Fe.find(a => a === i) && Ct(ne, "", "", "", "", i)
            }
            )
        }
    }
    function cd(t, o) {
        for (let i = 0; i < o.length; i++)
            o[i].dataset.cartItemIndex = i
    }
    async function Cl(t) {
        const {cartItemsElement: o, productDetailElements: i, cartItems: a} = t;
        for (const r of i) {
            const c = r.dataset.cartItemIndex
              , d = a[c];
            if (d && d.properties && d.properties._tpo_main_product_id)
                continue;
            const n = await br(d?.product_id, d?.handle);
            n && await pd({
                cartItemsElement: o,
                productDetailElement: r,
                appliedOptionSet: n,
                cartItems: a,
                mainProduct: d,
                isEditOption: !0
            })
        }
    }
    async function pd(t) {
        const {cartItemsElement: o, productDetailElement: i, appliedOptionSet: a, cartItems: r, mainProduct: c, isEditOption: d, isShowPopup: n, wrapperElement: f, formProductPageElement: p, addToCartButton: s} = t;
        c.properties || (c.properties = {});
        const l = c.quantity
          , b = d && [...a?.options].some( ({live_preview_transform: j}) => {
            const N = j && typeof j == "string" ? JSON.parse(j) : j;
            return N && N?.enabled
        }
        )
          , h = JSON.parse(JSON.stringify(a))
          , u = i.dataset.cartItemIndex ? Number(i.dataset.cartItemIndex) : i.dataset.cartItemIndex;
        let x = [".quantity__input", ".quantity-selector__input", ".js-qty__num", ".input-text.js_qty", '.quantity-selector input[name="quantity"]'];
        const _ = ip[0]?.split(",");
        if (_ && _?.length)
            for (let j = 0; j < _.length; j++)
                x.push(_[j]);
        let m = i.parentElement.querySelector(x);
        !m && i && (m = document.querySelector(yo) || i.closest(ji)?.querySelector(x));
        let {totalAdditionalPrice: S, totalAdditionalPriceWrapper: v, totalAdditionalPriceInput: y} = Zn(i);
        const g = zi.includes(gt)
          , C = document.querySelector(".tpo_modal-background.tpo_edit-option-modal");
        let w;
        if (g ? w = C || document.createElement("dialog") : w = C || document.createElement("div"),
        Object.assign(w, {
            className: `tpo_modal-background tpo_edit-option-modal ${po ? "in-dark-mode" : ""}`
        }),
        Ho) {
            const {appTheme: j, appMode: N} = Ho || {};
            document.body.setAttribute("data-tpo-theme", j ?? ""),
            document.body.setAttribute("data-tpo-mode", N ?? ""),
            document.body.setAttribute("data-tpo-custom-style", ""),
            N && N === "dark" && document.body.setAttribute("data-tpo-dark-mode", "")
        }
        Wo && !It && w.classList.add("tpo_cart_drawer_modal");
        let $ = document.createElement("div");
        Object.assign($, {
            className: "tpo_modal-container",
            innerHTML: d ? "<div></div>" : `<div><h2 class="tpo-popup-title">${Re["Customize Your Product"] && Re["Customize Your Product"][xt] || Gf}</h2></div>`
        });
        const L = i.querySelector(".tpo_open-modal-button.tpo_edit-option-modal");
        let P = L || document.createElement("button")
          , k = d ? Re["Edit options"] && Re["Edit options"][xt] || "Edit options" : Re["Customize it"] && Re["Customize it"][xt] || Kf;
        Object.assign(P, {
            className: `tpo_open-modal-button tpo_edit-option-modal ${d ? "" : "tpo-show-popup"}`,
            type: "button",
            textContent: k,
            hidden: b,
            onclick: function() {
                W = [],
                g ? w && typeof w.showModal == "function" && (w.showModal(),
                w.style.display = "block") : w.style.display = "block";
                const j = w.querySelector("div.tpo_modal-container");
                j && j.remove(),
                w.append($);
                const N = $.querySelector(".tpo_option-set-container");
                if (N) {
                    d && (h.options = Jm(h.options, c.properties));
                    const U = bl(h, Ke || $, Q, m, !1);
                    K = Array.from(U.querySelectorAll(["input", "textarea"])) || [],
                    $.querySelector("form").replaceChild(U, N),
                    jl(),
                    Pd({
                        optionSet: a,
                        isPopupModal: !0
                    });
                    const O = new CustomEvent("reloadValueOnTextField",{
                        detail: {
                            formElement: U
                        }
                    });
                    window.dispatchEvent(O)
                }
                W?.length ? W.forEach(U => {
                    Ct(ne, U.id, U.type || "", U.value, null, null, U.optionValue)
                }
                ) : Gr(),
                Oa(i, S, v, y, m)
            }
        });
        let A = document.createElement("span");
        Object.assign(A, {
            className: "tpo_close-popup-button",
            innerHTML: "&times;",
            onclick: function() {
                g ? (w.innerHTML = "",
                w && typeof w.close == "function" && (w.close(),
                w.style.display = "none",
                w.innerHTML = "")) : (w.style.display = "none",
                w.innerHTML = "")
            }
        }),
        window.addEventListener("click", function(j) {
            j.target === w && (g ? (w.innerHTML = "",
            w && typeof w.close == "function" && (w.close(),
            w.style.display = "none",
            w.innerHTML = "")) : (w.style.display = "none",
            w.innerHTML = ""))
        });
        let R = d ? Re.Confirm && Re.Confirm[xt] || "Confirm" : Re["Add to cart"] && Re["Add to cart"][xt] || Lt?.textAddToCartCustom || "Add to cart"
          , Q = document.createElement("button");
        Object.assign(Q, {
            className: "tpo_edit-option_confirm-button button",
            type: "button",
            textContent: R
        });
        let I = await jc(h?.products_handle, Mi);
        Mi.push(...I);
        const F = document.createElement("div");
        F.classList.add("tpo_option-set-container");
        const ee = document.createElement("form");
        ee.append(F);
        let K = [];
        const H = () => {
            Q.disabled = !0,
            Q.classList.add("loading"),
            Q.innerHTML = '<span class="spinnerPopup"></span>'
        }
          , T = j => {
            Q.disabled = !1,
            Q.classList.remove("loading"),
            Q.innerHTML = j
        }
        ;
        d ? Q.addEventListener("click", async function(j) {
            setTimeout(async () => {
                const N = Q.innerHTML;
                if (H(),
                ke(ee, m)) {
                    j.preventDefault();
                    let O = {}
                      , M = 0;
                    const z = /properties\[(.*?)\]/;
                    if (K && !K.some(te => te.name === "properties[_tpo_wholesale]")) {
                        let te = ee.querySelector('[name="properties[_tpo_wholesale]"]');
                        te && K.push(te)
                    }
                    for (const te of K) {
                        let we = function(Le) {
                            const Ae = ["kr", "Rs", "USD", "EUR", "€", "₹", "£", "¥", "VND", "₫", "TRY", "TL", "₺"].map(ft => ft.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")
                              , Z = new RegExp(`\\[\\s*([\\+\\$]*)\\s*(?:(${Ae})(?:\\.)?)?\\s*([\\d.,'\\s]+)(?:\\s+${Ae})?\\s*\\]`,"gi")
                              , Ue = [];
                            for (const ft of Le.matchAll(Z)) {
                                const le = ft[3].trim()
                                  , at = ci(le);
                                at > 0 && Ue.push(at)
                            }
                            return Ue
                        };
                        var U = we;
                        const {name: ue="", value: me} = te
                          , Me = !ue.includes("disabled") && ue.match(z);
                        if (!Me || te.disabled || !me.trim())
                            continue;
                        const Te = Me[1];
                        O[Te] = me;
                        const Ce = we(me);
                        if (Ce?.length < 2) {
                            let Le = /\[ \+(.*)\]/
                              , je = me.match(Le);
                            if (je) {
                                let Ae = je[1]
                                  , Z = ci(Ae);
                                Z && (M += Z)
                            }
                        } else
                            for (const Le of Ce)
                                Le && (M += Le)
                    }
                    Vt !== "no" && M ? (Vt === "expand" && (O._tpo_custom_options = JSON.stringify(uo(O))),
                    O._tpo_price = parseFloat(M / ht)) : O._tpo_wholesale && delete O._tpo_wholesale;
                    let X = r || [];
                    if (X && X?.length === 0) {
                        const ue = await (await fetch("/cart.js?app=tpo", {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }))?.json();
                        ue && (X = ue?.items || [])
                    }
                    const J = await gl(h, ee, Q, O, c, u, X, l);
                    w.style.display = "none",
                    w.innerHTML = "",
                    typeof J == "object" && J !== null && (O = {
                        ...O,
                        ...J.properties._tpo_add_on_products !== void 0 && {
                            _tpo_add_on_products: J.properties._tpo_add_on_products,
                            _tpo_price: J?.properties?._tpo_price || (Vt === "expand" ? "0" : void 0)
                        }
                    },
                    await Qm(o, u, O, r)),
                    Q.disabled = !1
                } else
                    rs(ee) || Bl(dl);
                T(N)
            }
            , 0)
        }) : Q.addEventListener("click", async function(j) {
            const N = document.querySelector(".tpo_modal-container");
            if (N) {
                const O = N.querySelectorAll(".tpo_option-container");
                if (!Array.from(O).some(X => X.classList.contains("tpo_hidden"))) {
                    const X = N.querySelectorAll(".tpo_error-message");
                    if (Array.from(X).some(te => te.textContent.trim() !== ""))
                        return !1
                }
                if (N?.querySelector(".tpo-quantity-error") || Array.from(O).some(X => X.querySelector(".tpo-quantity-error")))
                    return !1
            }
            const U = Q.innerHTML;
            if (H(),
            ke(p, m)) {
                let O = {}
                  , M = r || [];
                if (M && M?.length === 0) {
                    const X = await (await fetch("/cart.js?app=tpo", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }))?.json();
                    X && (M = X?.items || [])
                }
                await gl(h, p, s, O, c, u, M, !1, n),
                w.style.display = "none",
                Q.disabled = !1
            } else
                rs(p) || Bl(dl);
            T(U)
        }),
        o?.addEventListener("change", function() {
            Oa(i, S, v, y, m)
        }),
        $.firstElementChild.append(A, ee, v, y, Q);
        const {tieredPrices: E, allowTieredPrices: q} = gd(h);
        if (q) {
            const j = ql(E, "cart", c);
            Object.assign(j, {
                className: `tpo_modal-tired-wholesale-wraper tpo_wholesale_table ${po ? "in-dark-mode" : ""}`
            });
            const N = document.querySelector(".tpo_wholesale_block");
            N ? (j.style.marginBottom = "30px",
            N.append(j)) : Q.parentElement && (Mn === "below_add_to_cart" ? (j.style.marginBottom = "30px",
            Q.parentElement.insertBefore(j, Q.nextSibling)) : (j.style.marginBottom = "30px",
            Q.parentElement.insertBefore(j, Q))),
            Zp(E, Vt, ee)
        }
        L || (n ? f.append(P) : i.append(P)),
        C || document.body.append(w),
        n && Qf === "replace_add_to_cart" && (s.style.display = "none")
    }
    function Jm(t, o) {
        const i = {
            dropdown: !0,
            "color-swatches": !0,
            "image-swatches": !0,
            checkbox: !0,
            buttons: !0,
            "radio-buttons": !0,
            "product-list": !0
        }
          , a = {
            "text-box": !0,
            "text-area": !0,
            "text-number": !0,
            quantity: !0,
            range: !0
        };
        return t.map(r => {
            const {option_identifier: c, multi_select: d, option_types: n, type: f} = r;
            o[c] || (o[c] = "");
            const p = {
                ...JSON.parse(r.metadata || "{}")
            };
            let s;
            if (a[r.type] || f === "color-picker" ? s = o[c] : (p?.formatDateRange?.includes(",") ? s = o[c].split(". ") : s = o[c].split(", "),
            s = s.map(l => {
                let b = PropertyFormatter.removeMoneyProperty(l).trim();
                return PropertyFormatter.formatDefaultPropertyValues(b)
            }
            )),
            f === "file-upload") {
                const l = p.maxFileQty || 1;
                let b = {}
                  , h = 0;
                for (h; h < l; h++)
                    b[`${c}-${h + 1}`] = o[`${c}-${h + 1}`];
                s = b
            }
            try {
                if (i[f]) {
                    const l = JSON.parse(r.quantity_selector || "{}")
                      , b = {};
                    n.forEach( (h, u) => {
                        h.is_default = 0,
                        s.forEach( (x, _) => {
                            let m = 0;
                            h.label || (h.label = ""),
                            x?.label.trim() === h?.label.trim() && (m = 1,
                            h.is_default = m),
                            x.quantity && r.quantity_selector && (l.configs.optionDefaultQuantityValue = x.quantity,
                            m && (b[h.id] = x.quantity),
                            l.configs.optionTypeDefaultQuantityMapper = b)
                        }
                        )
                    }
                    ),
                    r.quantity_selector = JSON.stringify(l)
                } else if (f === "switch")
                    r.switch_value = 0,
                    s.some(l => l.label?.includes(r.switch_label)) && (r.switch_value = 1);
                else if (a[f])
                    r.default_value = s;
                else if (f === "color-picker") {
                    const l = p.default_value;
                    p.default_value = s || l,
                    r.metadata = JSON.stringify(p)
                } else if (f === "date-picker")
                    p.default_value = s[0].label,
                    r.metadata = JSON.stringify(p);
                else if (f === "date-range")
                    p.default_value = s[0].label.split(" to "),
                    r.metadata = JSON.stringify(p);
                else if (f === "time-picker") {
                    let l = s[0].label;
                    const b = l.split(":");
                    let h = parseInt(b[0], 10);
                    const u = b[1]?.split(" ") || []
                      , x = parseInt(u[0], 10);
                    u.length > 1 && u[1].toLowerCase() === "pm" && h < 12 && (h += 12),
                    p.default_value = {
                        string_value: l,
                        default_hour: h,
                        default_minute: x
                    },
                    r.metadata = JSON.stringify(p)
                } else if (f === "dimension") {
                    const {labelX: l="", labelY: b="", labelZ: h="", suffixX: u="", suffixY: x="", suffixZ: _="", valueX: m="", valueY: S="", valueZ: v=""} = p
                      , y = o[`${c}-${l}`] ? o[`${c}-${l}`].replace(` ${u}`, "") : ""
                      , g = o[`${c}-${b}`] ? o[`${c}-${b}`].replace(` ${x}`, "") : ""
                      , C = o[`${c}-${h}`] ? o[`${c}-${h}`].replace(` ${_}`, "") : "";
                    p.valueX = y,
                    p.valueY = g,
                    p.valueZ = C,
                    r.metadata = JSON.stringify(p)
                } else if (f === "font-picker") {
                    const l = p.defaultFont;
                    p.defaultFont = s[0].label || l,
                    r.metadata = JSON.stringify(p)
                } else
                    f === "file-upload" && (p.defaultValueUploaded = s,
                    r.metadata = JSON.stringify(p))
            } catch {}
            return r
        }
        )
    }
    async function br(t, o) {
        for (let i = window.TPOConfigs.product_options_tpo.length - 1; i >= 0; i--) {
            let a = window.TPOConfigs.product_options_tpo[i].option_set;
            const r = Ki?.customer || {}
              , c = r.tags || []
              , d = a.customer_tag || "{}"
              , n = JSON.parse(d)
              , {tagSet: f, appliedCustomer: p} = n
              , s = Object.keys(n).length < 1 || p === "ALL" || p === "GUEST" && r.id === null || p === "LOGIN" && r.id || p === "TAG" && c.some(u => f.includes(u))
              , l = a.status;
            let b = kd(a?.title || "");
            if (l === 0 || !s || !b)
                continue;
            const h = a.apply_type;
            if (h === 0)
                return a;
            if (h === 1) {
                if (a.option_set_products.length < 1)
                    continue;
                if (a.option_set_products.map(x => x.product_id.slice(22)).includes(t?.toString()))
                    return a
            }
            if (h === 2) {
                const u = a.product_condition ? JSON.parse(a.product_condition) : void 0;
                if (u && u.conditions.length) {
                    if (u.conditions = u.conditions.map(x => {
                        if (typeof x.value == "string")
                            return {
                                ...x
                            };
                        if (x.value.id)
                            return {
                                ...x,
                                value: {
                                    ...x.value,
                                    id: x.value.id.slice(25)
                                }
                            }
                    }
                    ),
                    !Bi.length || !Bi.find(x => x.productHandle === o)) {
                        if (await _l(u, o))
                            return a
                    } else if (await _l(u, o, !0))
                        return a
                }
            }
        }
    }
    async function Ii() {
        const o = await (await fetch("/cart.js?app=tpo-fetch", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })).json();
        return ir = o ? JSON.parse(JSON.stringify(o || {})) : {},
        o
    }
    async function Qm(t, o, i, a) {
        try {
            if (t && typeof t.updateQuantity == "function") {
                const r = JSON.stringify({
                    line: parseInt(o) + 1,
                    properties: i
                });
                await fetch("/cart/change.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: r
                }).then(async () => {
                    setTimeout(async () => {
                        await ui()
                    }
                    , 1e3)
                }
                ),
                await t.updateQuantity(parseInt(o) + 1, a[o].quantity, document.activeElement.getAttribute("name") || "")
            } else {
                const r = JSON.stringify({
                    line: parseInt(o) + 1,
                    properties: i,
                    quantity: a[o].quantity
                });
                if (await fetch("/cart/change.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: r
                }).then(async () => {
                    setTimeout(async () => {
                        await ui()
                    }
                    , 1e3)
                }
                ),
                gt.includes("Shrine")) {
                    let c = It ? Array.from(t.querySelectorAll(so))[0] : Array.from(t.querySelectorAll(yo))[0];
                    c.tagName !== "INPUT" && (c = c.querySelector("input")),
                    c && c.tagName === "INPUT" && c.dispatchEvent(new Event("change",{
                        bubbles: !0
                    }))
                } else
                    window.location.reload()
            }
        } catch (r) {
            throw new Error(r)
        }
    }
    async function kl(t) {
        const o = "cart";
        for (let i = 0; i < t.items.length; i++) {
            const a = t.items[i]
              , {product_id: r, price: c, handle: d, properties: n, quantity: f} = a;
            let p = n._tpo_wholesale
              , s = 0;
            if (p) {
                let C = JSON.parse(p);
                for (let w = C.length - 1; w >= 0; w--) {
                    let {min: $, max: L, t: P, v: k} = C[w];
                    if (f >= $ && (!L || f <= L)) {
                        s = P === "f" ? k * ht * 100 : c * (k / 100) / (1 - k / 100);
                        break
                    }
                }
            }
            const b = (await br(r, d))?.wholesale_price || {}
              , h = JSON.parse(b.price_set || "[]")
              , u = JSON.parse(b.customer_tag || "{}").appliedCustomer || "ALL"
              , x = JSON.parse(b.customer_tag || "{}").tagSet || []
              , _ = JSON.parse(b.customer_tag || "{}").excludeTagSet || []
              , m = Ki?.customer || {}
              , S = m.tags || []
              , v = h.length > 0 && xa && (u === "ALL" || u === "GUEST" && m.id === null || u === "LOGIN" && m.id || u === "TAG" && S.some(C => x.includes(C)) || u === "EXCLUDE_TAG" && !S.some(C => _.includes(C)));
            let y = 0
              , g = 0;
            if (a.properties && !a.properties.hasOwnProperty("_tpo_price")) {
                for (let[C,w] of Object.entries(a.properties))
                    if (w && typeof w == "string")
                        for (let $ of w.split("],")) {
                            $.endsWith("]") || ($ = $ + "]");
                            let L = /\[ \+(.*)\]/
                              , P = $.match(L);
                            if (P) {
                                let k = P[1]
                                  , A = ci(k);
                                A = Ta(k, a),
                                y += parseFloat(A * 100)
                            }
                        }
            }
            g = y + c - ta(y + c, {
                value: a.quantity
            }, v, h, c, o),
            It && Gm({
                discountPrice: g,
                allowTieredPrices: v,
                index: i,
                wholesaleDiscount: s
            }),
            Wo && setTimeout( () => {
                Km({
                    discountPrice: g,
                    allowTieredPrices: v,
                    index: i,
                    wholesaleDiscount: s
                })
            }
            , 1e3)
        }
    }
    async function Pa(t) {
        let o = await Ii();
        if (await kl(o),
        It) {
            const i = {
                childList: !0,
                subtree: !0
            }
              , a = async (c, d) => {
                let n = Array.from(c[0].addedNodes);
                const f = [".cart-items", ".cart-total-label"];
                if (n.includes(Ke.querySelector(f))) {
                    let s = await Ii();
                    if (Object.keys(s).length < 1)
                        return;
                    await kl(s)
                }
            }
            ;
            new MutationObserver(a).observe(Ke, i)
        }
        if (Wo) {
            const i = {
                childList: !0,
                subtree: !0
            }
              , a = async (c, d) => {
                let n = Array.from(c[0].addedNodes);
                const f = [...za, ".loading-overlay"];
                if (n.includes(vi.querySelector(f))) {
                    let s = await Ii();
                    if (Object.keys(s).length < 1)
                        return;
                    await kl(s)
                }
            }
            ;
            new MutationObserver(a).observe(vi, i)
        }
    }
    function Gm(t) {
        const {discountPrice: o, allowTieredPrices: i, index: a, wholesaleDiscount: r} = t;
        let c = o;
        r && (c = r);
        let d = Ke.querySelectorAll(ji)[a];
        d || (d = document.querySelectorAll(ji)[a]);
        const n = d ? d.querySelector(va) : null;
        if (n) {
            n.classList.add("tpo_cart-properties-wrapper");
            const f = document.createElement("div");
            Object.assign(f, {
                className: "tpo_discount-wrapper",
                innerHTML: c > 0 ? `${Li ? ze(Li, "") : "Wholesale discount"}: -${PriceFormatter.formatMoney(parseFloat(c), !0)}` : ""
            });
            const p = d.querySelector(".tpo_discount-wrapper");
            i && n && (p ? p.innerHTML = c > 0 ? `${Li ? ze(Li, "") : "Wholesale discount"}: -${PriceFormatter.formatMoney(parseFloat(c), !0)}` : "" : n.insertAdjacentElement("afterend", f))
        }
    }
    function Km(t) {
        const {discountPrice: o, allowTieredPrices: i, index: a, wholesaleDiscount: r} = t;
        let c = o;
        if (r && (c = r),
        Ea(),
        !!ka.length)
            for (let d = 0; d < ka.length; d++) {
                const n = ka[d];
                let f;
                zi.includes(gt) ? f = ji.flatMap(h => Array.from(n.querySelectorAll(h)))[a] : f = n.querySelectorAll(ji)[a];
                const p = f && f.querySelector(va) || document.createElement("div")
                  , s = document.createElement("div");
                Object.assign(s, {
                    className: "tpo_discount-wrapper",
                    innerHTML: c > 0 ? `${Li ? ze(Li, "") : "Wholesale discount"}: -${PriceFormatter.formatMoney(parseFloat(c), !0)}` : ""
                });
                let l = f ? f.querySelector(".tpo_discount-wrapper") : null;
                l && l.parentElement.removeChild(l),
                i && p && p.insertAdjacentElement("afterend", s)
            }
    }
    async function wr() {
        if (Fp && It) {
            let i = function(a) {
                let r = Array.from(Ke.querySelectorAll(yo) || []);
                r.length || (r = Array.from(ii?.querySelectorAll(so) || []));
                for (let d = 0; d < r.length; d++) {
                    let n = r[d];
                    n.onchange = function() {
                        if (ii && typeof ii.updateQuantity == "function") {
                            if (n.dataset.index === void 0)
                                return;
                            ii.updateQuantity(n.dataset.index, n.value, document.activeElement.getAttribute("name") || "")
                        }
                    }
                }
                let c = Ke.querySelectorAll(tr);
                return c.length || (c = Array.from(ii?.querySelectorAll(tr) || [])),
                Zr(a, "CART"),
                cd(a, c),
                {
                    qtyInputElements: r,
                    productDetailElements: c
                }
            };
            var t = i;
            ii && ii && typeof ii.onChange == "function" && (ii.onChange = function() {
                return !1
            }
            ),
            ea = Ke?.attributes.id?.value || null;
            async function o() {
                let a = await Ii();
                if (Object.keys(a).length < 1)
                    return;
                let r = a.items
                  , {productDetailElements: c} = i(r);
                const d = {
                    childList: !0,
                    subtree: !0
                }
                  , n = async (p, s) => {
                    let l = Array.from(p[0].addedNodes);
                    const b = [".cart-items", ".cart-total-label", ".cart__price"];
                    if (l.includes(Ke.querySelector(b)) || p[0].target === Ke.querySelector(b)) {
                        let u = await Ii();
                        if (Object.keys(u).length < 1)
                            return;
                        let x = u.items
                          , {productDetailElements: _} = i(x);
                        await Cl({
                            cartItemsElement: ii,
                            productDetailElements: _,
                            cartItems: x
                        })
                    }
                }
                ;
                new MutationObserver(n).observe(Ke, d),
                await Cl({
                    cartItemsElement: ii,
                    productDetailElements: c,
                    cartItems: r
                })
            }
            await o()
        }
    }
    async function Aa() {
        if (Fp && Wo)
            for (let o = 0; o < ka.length; o++) {
                let d = function(n) {
                    a = i.querySelectorAll(za)[0],
                    a ? a.onChange = function() {
                        return !1
                    }
                    : a = i?.querySelector('form[action="/cart"]') || document.createElement("div"),
                    r = i?.querySelector('form[action="/cart"]') || document.createElement("form");
                    let f = Array.from(r.querySelectorAll(yo) || []);
                    f.length || (f = Array.from(a.querySelectorAll(yo) || []));
                    for (let s = 0; s < f.length; s++) {
                        let l = f[s];
                        l.onchange = function() {
                            Number(l.value) !== 0 && a && typeof a.updateQuantity == "function" && a.updateQuantity(l.dataset.index, l.value, document.activeElement.getAttribute("name") || "")
                        }
                    }
                    let p = r.querySelectorAll(tr);
                    return p.length || (p = a.querySelectorAll(va)),
                    cd(n, p),
                    {
                        qtyInputElements: f,
                        productDetailElements: p
                    }
                };
                var t = d;
                let i = ka[o]
                  , a = i.querySelectorAll(za)[0] || null;
                a ? a.onChange = function() {
                    return !1
                }
                : a = i?.querySelector('form[action="/cart"]') || i;
                let r = i?.querySelector('form[action="/cart"]');
                r ? ea = r.attributes.id?.value || null : r = i;
                async function c() {
                    let n = await Ii();
                    if (Object.keys(n).length < 1)
                        return;
                    let f = n.items
                      , {productDetailElements: p} = d(f)
                      , s = i.querySelectorAll(za)[0] || null;
                    if (s ? s.onChange = function() {
                        return !1
                    }
                    : s = i?.querySelector('form[action="/cart"]') || i,
                    s) {
                        if (!Ks) {
                            const l = async (u, x) => {
                                let _ = Array.from(u[0].addedNodes);
                                const m = [...za, ...ji, ".loading-overlay", ".drawer__content"];
                                _.includes(i.querySelector(m)) && (x.disconnect(),
                                setTimeout(async () => {
                                    await c()
                                }
                                , 1500))
                            }
                              , b = {
                                childList: !0,
                                subtree: !0
                            };
                            new MutationObserver(l).observe(i, b)
                        }
                    } else {
                        s = i?.querySelector('form[action="/cart"]'),
                        s || (s = i);
                        let l = i.querySelectorAll(so.join(", "))
                          , b = i.querySelectorAll(bo.join(", "))
                          , h = i.querySelectorAll(jo);
                        l.forEach(function(u) {
                            u.addEventListener("change", async function() {
                                Ko(),
                                setTimeout(async () => {
                                    await c()
                                }
                                , 1500)
                            })
                        }),
                        h.forEach(function(u) {
                            u.addEventListener("click", async function() {
                                Ko(),
                                setTimeout(async () => {
                                    await c()
                                }
                                , 1500)
                            })
                        }),
                        b.forEach(function(u) {
                            u.addEventListener("click", async function() {
                                Ko(),
                                setTimeout(async () => {
                                    await c()
                                }
                                , 1500)
                            })
                        })
                    }
                    await Cl({
                        cartItemsElement: s,
                        productDetailElements: p,
                        cartItems: f
                    })
                }
                setTimeout(async () => {
                    await c();
                    let n = await Ii();
                    if (Object.keys(n).length < 1)
                        return;
                    let f = n.items;
                    Zr(f, "DRAWER")
                }
                , 1e3)
            }
    }
    function Xm(t) {
        const o = new MutationObserver(function(a) {
            if (window.location.href !== Mc) {
                let r = Ni.length ? Array.from(Ni[0].querySelectorAll(Xa)) : [];
                r.length && r.forEach(c => {
                    c.classList.remove("tpo-isactive-image")
                }
                )
            }
        }
        )
          , i = {
            subtree: !0,
            childList: !0
        };
        o.observe(document, i)
    }
    Xm();
    function oo(t) {
        if (Jc.includes(B)) {
            const o = window.location.href;
            let i = Ni.length ? Array.from(Ni[0].querySelectorAll(Xa)) : [];
            if (Mc !== o) {
                Mc = o,
                i.length && (Gt = [...i],
                Gt.forEach(r => {
                    r.classList.remove("tpo-isactive-image")
                }
                ),
                ar = [...i.map(r => {
                    const c = r.querySelectorAll("img");
                    if (c.length)
                        return c[0].getAttribute("alt")
                }
                )]);
                let a = "";
                i[0]?.parentNode?.style?.transform && (i[0]?.parentNode?.style?.transform.includes("%") ? a = i[0]?.parentNode?.style?.transform.replace(/(\d+)%/, (r, c) => `-${c}%`) : a = i[0]?.parentNode?.style?.transform.replace(/translateX\(([^)]+)\)/, (r, c) => `translateX(${c})`)),
                Qs = a
            }
            if (t) {
                if (Gt.length) {
                    const a = ar.findIndex(r => r.trim().toLowerCase() === t.trim().toLowerCase());
                    if (a !== -1) {
                        Gt.forEach(c => {
                            c.classList.remove("tpo-isactive-image")
                        }
                        );
                        const r = Gt[a];
                        if (r.classList.add(["tpo-isactive-image"]),
                        oi("tpo_custom_background_image", r.querySelector("img").getAttribute("src"), !0),
                        Lt?.targetSelectorSetting && Lt?.targetSelectorSetting !== "product__media-list contains-media grid grid--peek list-unstyled slider slider--mobile" ? Ni[0].style.height = `${r.querySelectorAll("img")[0].offsetHeight}px` : Gt[0].classList.remove("is-active"),
                        r.style.transform) {
                            let c = "";
                            r.style.transform.includes("%") ? c = r.style.transform.replace(/(\d+)%/, (d, n) => `-${n}%`) : c = r.style.transform.replace(/translateX\(([^)]+)\)/, (d, n) => `translateX(-${n})`),
                            Gt[0].parentNode.style.transform = c
                        } else if (Ni[0].style.transform) {
                            let c = "";
                            const d = r.querySelector("img").width || r.style.width;
                            typeof d == "number" ? c = `translateX(-${d})` : c = d.replace(/translateX\(([^)]+)\)/, (n, f) => `translateX(-${f})`),
                            Gt[0].parentNode.style.transform = c
                        }
                        i[0].parentNode.insertBefore(r, i[0])
                    }
                }
            } else {
                Gt[0].style.transform && Qs && (Gt[0].parentNode.style.transform = Qs);
                const a = Gt[0].parentNode
                  , r = a.querySelector(".tpo_canvas_builder");
                a.innerHTML = "",
                Gt.forEach(c => {
                    c.classList.remove("tpo-isactive-image"),
                    a.appendChild(c)
                }
                ),
                r && (oi("tpo_custom_background_image", Gt[0].querySelector("img").getAttribute("src"), !0),
                a.appendChild(r)),
                Lt?.targetSelectorSetting && Lt?.targetSelectorSetting !== "product__media-list contains-media grid grid--peek list-unstyled slider slider--mobile" ? (a.style.height = `${Gt[0].querySelectorAll("img")[0].offsetHeight}px`,
                Ni[0].style.height = `${Gt[0].querySelectorAll("img")[0].offsetHeight}px`) : Gt[0].classList.add("is-active")
            }
        } else
            Ni && Ni.length && Ni.forEach(o => {
                let i = Array.from(o.querySelectorAll(Xa));
                if (i.length && (Gt = [...i],
                ar = [...i.map(a => {
                    const r = a.querySelectorAll("img");
                    if (r.length)
                        return r[0].getAttribute("alt")
                }
                )]),
                t) {
                    if (Gt.length) {
                        const a = ar.findIndex(r => r.trim().toLowerCase() === t.trim().toLowerCase());
                        if (a !== -1) {
                            const r = Gt[a]
                              , c = r.querySelector("img");
                            if (c) {
                                let d = new CustomEvent("click",{
                                    bubbles: !0,
                                    cancelable: !0,
                                    detail: r
                                });
                                c.dispatchEvent(d)
                            }
                        }
                    }
                } else {
                    const a = Gt[0];
                    if (a) {
                        const r = a.querySelector("img");
                        if (r) {
                            let c = new CustomEvent("click",{
                                bubbles: !0,
                                cancelable: !0,
                                detail: a
                            });
                            r.dispatchEvent(c)
                        }
                    }
                }
            }
            )
    }
    const dd = {
        1: ["debut", "narrative", "venture", "minimal", "simple", "express", "supply", "boundless", "brooklyn"],
        2: ["refresh", "ride", "colorblock", "taste", "studio", "craft", "crave", "sense", "dawn", "origin", "publisher"]
    };
    function Ym(t) {
        for (const o in dd)
            if (dd[o].some(r => t.includes(r.toLowerCase())))
                return o;
        return null
    }
    let ud = "";
    const Zm = gt.toLowerCase() || "";
    let El = Ym(Zm);
    El == 2 && It && (ud = "page-width");
    const ts = `
<style>
.tpo-discount-code-block .tpo-discount-code-wrapper .tpo-discount-code-input--button {
    background: ${V?.discountBoxButtonBackground || Wn?.background || "#000000"};
    border-color: ${V?.discountBoxButtonBackground || Wn?.background || "#000000"};
}
.tpo-discount-code-block .tpo-discount-code-wrapper .tpo-discount-code-input--button .tpo-discount-code-input--button-text {
    color:  ${V?.discountBoxButtonText || Wn?.textColor || "#ffffff"};
}
.tpo-discount-code-block .tpo-discount-code-wrapper input[type=text].tpo-discount-code-input--input {
    border-color:  ${V?.discountBoxInputBorder || Wn?.borderColor || "#ccc"};
}
</style>
<div class="tpo-discount-code-block ${ud}">
    <div class="tpo-discount-code-wrapper">
        <div class="tpo-discount-code-input--input-container">
            <input type="text" class="tpo-discount-code-input--input" placeholder="${Yf}">
            <div class="tpo-discount-code-input--button" tabindex="0">
                <div class="tpo-discount-code-input--button-text">${Xf}</div>
                <div class="tpo-loader"></div>
            </div>
        </div>
        <div id="tpo-discount-code--message"></div>
        <div class="tpo-discount-code--applied-wrapper"></div>
        <div class="tpo-discount-code--summary-wrapper"></div>
    </div>
</div>`;
    async function fd() {
        const t = document.querySelector(".tpo-discount-code--applied-wrapper")
          , o = document.querySelector(".tpo-discount-code--summary-wrapper")
          , i = document.querySelector("#tpo-discount-code--message")
          , a = document.querySelector(".tpo-discount-code-block .tpo-discount-code-input--button")
          , r = document.querySelector(".tpo-discount-code-block").querySelector("input.tpo-discount-code-input--input")
          , c = a.querySelector("div.tpo-loader");
        a.classList.remove("tpo-button-active"),
        a.style.pointerEvents = "all",
        c.classList.remove("button--loading"),
        t.innerHTML = "",
        o.innerHTML = "",
        i.innerHTML = "",
        r.value = "",
        $l(),
        await ui()
    }
    function e_() {
        if (!qt.cartJson.items || !qt.cartJson.items.length)
            return 0;
        let t = qt.cartJson.tpo_add_price || 0;
        return qt.cartJson.items.forEach(o => {
            t += o.original_line_price
        }
        ),
        t
    }
    function t_(t) {
        const o = e_();
        if (!o)
            return;
        const i = o - t;
        if (i < 0)
            return;
        const a = document.querySelector(".tpo_custom_cart_old_price");
        if (!a)
            return;
        const r = document.querySelector(".tpo_custom_cart_total");
        r && (r.innerHTML = PriceFormatter.formatMoney(i),
        r.classList.add("tpo_custom_cart_new_price"),
        a.classList.remove("tpo_hidden"),
        a.innerHTML = PriceFormatter.formatMoney(o))
    }
    function $l() {
        const t = document.querySelector(".tpo_custom_cart_old_price");
        if (!t)
            return;
        t.classList.add("tpo_hidden");
        const o = document.querySelector(".tpo_custom_cart_total");
        o && (o.classList.remove("tpo_custom_cart_new_price"),
        ui())
    }
    async function Tl() {
        let t = document.querySelector(".tpo-discount-code-block .tpo-discount-code-input--button")
          , o = document.querySelector(".tpo-discount-code-block") || null
          , i = o ? o.querySelector("input.tpo-discount-code-input--input") : null
          , a = i ? i.value.trim() : ""
          , r = document.querySelector(".tpo-discount-code--applied-wrapper")
          , c = document.querySelector(".tpo-discount-code--summary-wrapper");
        const d = document.querySelector("#tpo-discount-code--message");
        if (!a) {
            d.innerHTML = em,
            d.classList.add("invalid"),
            d.classList.remove("valid");
            return
        }
        d.innerHTML = "",
        t.classList.add("tpo-button-active"),
        t.style.pointerEvents = "none";
        const n = t.querySelector("div.tpo-loader");
        n.classList.add("button--loading");
        const f = await Ii();
        if (f.item_count < 1) {
            i.value = "",
            await fd();
            return
        }
        const s = {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                shop: B
            },
            body: JSON.stringify({
                line_items: f,
                cart: qt,
                customer: Nc,
                discount_code: a,
                locale: {
                    shouldUseMultiCurrency: $o,
                    locale: Ga,
                    currency: Hc
                }
            })
        };
        await fetch(`https://${window.location.host}/discount/${a}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }),
        await fetch(`${qt.easifyUrl}apps/discount-code`, s).then(function(l) {
            if (l.status == "200")
                return l.json().then(function(b) {
                    let h = b.discount_amount;
                    r.innerHTML = `
                        <div class="tpo-discount-code--applied-wrapper--applied">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="currentColor"><path d="M17.78 3.09C17.45 2.443 16.778 2 16 2h-5.165c-.535 0-1.046.214-1.422.593l-6.82 6.89c0 .002 0 .003-.002.003-.245.253-.413.554-.5.874L.738 8.055c-.56-.953-.24-2.178.712-2.737L9.823.425C10.284.155 10.834.08 11.35.22l4.99 1.337c.755.203 1.293.814 1.44 1.533z" fill-opacity=".55"></path><path d="M10.835 2H16c1.105 0 2 .895 2 2v5.172c0 .53-.21 1.04-.586 1.414l-6.818 6.818c-.777.778-2.036.782-2.82.01l-5.166-5.1c-.786-.775-.794-2.04-.02-2.828.002 0 .003 0 .003-.002l6.82-6.89C9.79 2.214 10.3 2 10.835 2zM13.5 8c.828 0 1.5-.672 1.5-1.5S14.328 5 13.5 5 12 5.672 12 6.5 12.672 8 13.5 8z"></path></svg>
                            ${a}
                            <div class="tpo-discount-code--applied-wrapper--applied-remove" data-code="${a}">×</div></div>`,
                    c.innerHTML = `
                        <div class="tpo-discount-code--summary-discount">
                            <span>${Zf}</span>
                            <span class="tpo-discount-code--summary-discount-value">-${PriceFormatter.formatMoney(Number(h) / 100, !0)}</span>
                        </div>`,
                    d.innerHTML = `Discount code '${a}' applied`,
                    d.classList.add("valid"),
                    d.classList.remove("invalid"),
                    n.classList.remove("button--loading"),
                    document.querySelector(".tpo-discount-code--applied-wrapper--applied-remove").addEventListener("click", async () => {
                        await fd()
                    }
                    ),
                    t_(h / 100)
                });
            d.innerHTML = qp,
            d.classList.add("invalid"),
            d.classList.remove("valid"),
            n.classList.remove("button--loading"),
            r.innerHTML = "",
            c.innerHTML = "",
            $l()
        }).catch(l => {
            d.innerHTML = qp,
            d.classList.add("invalid"),
            d.classList.remove("valid"),
            n.classList.remove("button--loading"),
            r.innerHTML = "",
            c.innerHTML = "",
            $l()
        }
        ).finally( () => {
            ui()
        }
        ),
        t.classList.remove("tpo-button-active"),
        t.style.pointerEvents = "auto"
    }
    async function is() {
        let t = document.querySelector(".tpo-discount-code-block") || null
          , o = t ? t.querySelector("input.tpo-discount-code-input--input") : null;
        if (!o)
            return;
        const i = o.value.trim();
        setTimeout(async () => {
            i && (o.value = "",
            o.value = i,
            await Tl()),
            Array.from(document.querySelectorAll(so) || []).forEach( (c, d) => {
                c.addEventListener("change", async () => {
                    await is()
                }
                )
            }
            ),
            Array.from(document.querySelectorAll(jo) || []).forEach( (c, d) => {
                c.addEventListener("click", async () => {
                    await is()
                }
                )
            }
            ),
            await ui()
        }
        , 1e3)
    }
    if (zf && It) {
        const t = ['form[action="/cart"]:last-child', "table.line-item-table"]
          , o = ["vent-yourcar.myshopify.com", "bc7269.myshopify.com", "funfactory-hr.myshopify.com"];
        if (El == 2)
            document.querySelector("main .shopify-section").insertAdjacentHTML("afterend", ts);
        else if (El == 1)
            document.querySelector('form[action="/cart"] table').insertAdjacentHTML("afterend", ts);
        else if (o.includes(B))
            document.querySelector('form[action="/cart"]').lastElementChild.insertAdjacentHTML("beforebegin", ts);
        else {
            let r = document.querySelector(".tpo-discount-box-custom");
            r || (r = document.querySelector(t)),
            r && r.insertAdjacentHTML("beforeend", ts)
        }
        document.querySelector("input.tpo-discount-code-input--input") && (document.querySelector("input.tpo-discount-code-input--input").addEventListener("keydown", r => {
            r.keyCode === 13 && (r.preventDefault(),
            r.stopPropagation(),
            Tl())
        }
        ),
        document.querySelector(".tpo-discount-code-input--button").addEventListener("click", r => {
            Tl()
        }
        )),
        Array.from(document.querySelectorAll(so) || []).forEach( (r, c) => {
            r.addEventListener("change", () => {
                is()
            }
            )
        }
        ),
        Array.from(document.querySelectorAll(jo) || []).forEach( (r, c) => {
            r.addEventListener("click", () => {
                is()
            }
            )
        }
        )
    }
    function i_(t) {
        let i = document.querySelector('textarea[name="note"]') || document.querySelector(".tpo-cart-note");
        i && (i.value = t || "",
        i.addEventListener("change", yr(a => {
            fetch("/cart/update.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    note: a.target.value
                })
            })
        }
        , 300)))
    }
    function o_(t) {
        let o = document.querySelectorAll('form[action="/cart"] input[name*="attributes["]')
          , i = o.length ? o : document.querySelectorAll(".tpo-cart-attribute");
        for (let a = 0; a < i.length; a++) {
            let r = i[a]
              , c = r.name?.match(/\[([^)]+)\]/)?.[1];
            r && (r.value = t.toString() !== "{}" && t[c] ? t[c] : "",
            r.addEventListener("change", yr(d => {
                fetch("/cart/update.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        attributes: {
                            ...t,
                            [c]: d.target.value
                        }
                    })
                })
            }
            , 300)))
        }
    }
    function md(t) {
        if (!t.cart_level_discount_applications || !t.cart_level_discount_applications.length)
            return;
        const o = t.cart_level_discount_applications.find(r => r.type === "discount_code");
        if (!o)
            return;
        const i = o.title
          , a = document.querySelector(".tpo-discount-code-input--input");
        a && (a.value = i)
    }
    function _d(t) {
        const {cartContents: o, visibleTotalPriceElements: i, listLoopTotalPriceElements: a, cartTotalPriceElement: r, cartSubTotalPriceElement: c} = t;
        let d = 0
          , n = 0
          , f = o.items;
        if (i.forEach( (p, s) => {
            let l = B === "classyironworks.myshopify.com" ? p.dataset.key : f[s]?.key
              , b = 0
              , h = 0
              , u = f[s]?.final_line_price
              , x = f[s]?.final_line_price
              , _ = f[s]?.total_discount;
            p.setAttribute("tpo-data-key", l);
            let m = qt.cartJson.items.find(v => v.key === l);
            if (B === "classyironworks.myshopify.com") {
                const v = f.find(y => y.key === l);
                u = v?.final_line_price,
                x = v?.original_line_price
            }
            m && m.tpo_final_add_price && (b = m.tpo_final_add_price || 0),
            m && m.tpo_add_on_product_price && (h = m.tpo_add_on_product_price),
            B === "classyironworks.myshopify.com" ? (_ = f.find(v => v.key === l)?.total_discount,
            a.find(v => v === p.dataset.key) || (a.push(p.dataset.key),
            m ? (n += m.original_line_price + m.tpo_add_price,
            d += m.original_line_price + m.tpo_add_price) : (n += x,
            d += x),
            _ && (n = n - _,
            d = d - _))) : (m ? n += m.original_line_price + m.tpo_add_price : n += x,
            d += u || 0 + b || 0),
            u = u + b + h,
            u = Yn(u);
            const S = PriceFormatter.formatMoney(u);
            if (p.children.length ? p.textContent = p.textContent.replace(p.textContent, S) : p.innerHTML = p.innerHTML.replace(p.innerHTML, S),
            _ && m && m.tpo_add_price) {
                let v = p.parentElement.querySelector(Yu);
                if (v) {
                    const y = m.original_line_price + m.tpo_add_price;
                    v.innerHTML = PriceFormatter.formatMoney(y)
                }
            }
        }
        ),
        r.length && d) {
            const p = document.querySelector(".tpo_custom_cart_old_price");
            r.forEach(s => {
                if (s.classList.contains("tpo_custom_cart_total") && p && !p.classList.contains("tpo_hidden"))
                    return;
                const l = s.innerHTML;
                s.innerHTML = s.innerHTML.replace(l, PriceFormatter.formatMoney(d))
            }
            )
        } else if (c && !d) {
            d = qt.cartJson.tpo_add_price + o.total_price;
            let p = c.innerHTML;
            c.innerHTML = c.innerHTML.replace(p, PriceFormatter.formatMoney(d))
        } else if (c && d) {
            let p = c.innerHTML;
            c.innerHTML = c.innerHTML.replace(p, PriceFormatter.formatMoney(d))
        }
    }
    function a_(t) {
        let o = t.items;
        if (!o || !o.length)
            return;
        const {cartPageElement: i, cartDrawerElements: a, hasCartDrawer: r, listCartPageElements: c} = Ea();
        md(t);
        let d = Array.from(document.querySelectorAll(ji));
        if (It && r && (d = d.filter(n => {
            let f = !0;
            for (let p = 0; p < a.length; p++)
                if (a[p].contains(n)) {
                    f = !1;
                    break
                }
            return f
        }
        )),
        It && i)
            if (c && c.length > 1)
                for (let n = 0; n < c.length; n++) {
                    const f = c[n];
                    Ll(f, "page", t)
                }
            else
                Ll(i, "page", t);
        if (r && a.length)
            for (let n = 0; n < a.length; n++) {
                const f = a[n];
                Ll(f, "drawer", t)
            }
    }
    function Ll(t, o, i) {
        let a = t.querySelectorAll(wa), r = document.querySelectorAll(Br), c;
        zi.includes(gt) ? c = Array.from(t.querySelectorAll(ji)).filter(s => s.closest("tbody")) : c = t.querySelectorAll(ji);
        let d = [];
        c && c.length && (d = Array.from(c).filter(s => !s.classList.contains("tpo_ignore")),
        gt.includes("Prestige") && B !== "bella-mauve.myshopify.com" && B !== "7a3494-f9.myshopify.com" && (d = d.filter(s => s.tagName.toLowerCase() === "tr" && !s.classList.contains("line-item"))));
        let n = t.querySelectorAll(Ic)[0];
        const f = Array.from(a).filter(s => {
            let l = s.closest("td");
            if (!l) {
                const h = [".cart__item--price", ".cart__price", ".cart-item__price", ".cart-item__total", ".cart-drawer__items", ".cart--price"];
                l = s.closest(h) || s
            }
            return getComputedStyle(l).display !== "none" && !(l.parentElement.tagName === "CART-DRAWER" && It)
        }
        );
        let p = [];
        o === "page" && (r = document.querySelectorAll(Tn)),
        r_(i, a, r, d, n, f, p)
    }
    function r_(t, o, i, a, r, c, d) {
        let n = t.items;
        const f = t.currency;
        let p = 0
          , s = 0;
        if (n.length) {
            c.length,
            n.length;
            let l = c.length === n.length * 2;
            if (B === "classyironworks.myshopify.com" ? c.forEach( (h, u) => {
                h.classList.add("tpo_cart_item_price");
                let x = l ? u % n.length : u
                  , _ = B === "classyironworks.myshopify.com" ? h.dataset.key : n[x]?.key
                  , m = 0
                  , S = 0
                  , v = n[x]?.final_line_price
                  , y = n[x]?.final_line_price
                  , g = n[x]?.total_discount;
                h.setAttribute("tpo-data-key", _);
                let C = qt.cartJson.items.find($ => $.key === _);
                if (B === "classyironworks.myshopify.com") {
                    const $ = n.find(L => L.key === _);
                    v = $?.final_line_price,
                    y = $?.original_line_price
                }
                C && C.tpo_final_add_price && (m = C.tpo_final_add_price || 0),
                C && C.tpo_add_on_product_price && (S = C.tpo_add_on_product_price),
                B === "classyironworks.myshopify.com" ? (g = n.find($ => $.key === _)?.total_discount,
                d.find($ => $ === h.dataset.key) || (d.push(h.dataset.key),
                C ? (s += C.original_line_price + C.tpo_add_price,
                p += C.original_line_price + C.tpo_add_price) : (s += y,
                p += y),
                g && (s = s - g,
                p = p - g))) : (C ? s += C.original_line_price + C.tpo_add_price : s += y,
                l ? p += (v + m) / 2 : p += v + m),
                v = v + m + S,
                v = Yn(v);
                const w = PriceFormatter.formatMoney(v);
                if (h.children.length ? h.textContent = h.textContent.replace(h.textContent, w) : h.innerHTML = h.innerHTML.replace(h.innerHTML, w),
                g && C && C.tpo_add_price) {
                    let $ = h.parentElement.querySelector(Yu);
                    if ($) {
                        const L = C.original_line_price + C.tpo_add_price;
                        $.innerHTML = PriceFormatter.formatMoney(L)
                    }
                }
            }
            ) : a.forEach( (h, u) => {
                let x = h.querySelectorAll(wa.join(","));
                const _ = Array.from(x).filter(g => {
                    let C = g.closest("td");
                    if (!C) {
                        const $ = [".cart__item--price", ".cart__price", ".cart-item__price", ".cart-item__total", ".cart-drawer__items", ".cart--price"];
                        C = g.closest($) || g
                    }
                    return getComputedStyle(C).display !== "none" && !(C.parentElement.tagName === "CART-DRAWER" && It)
                }
                )
                  , m = n[u]?.properties
                  , S = m?._tpo_one_time_charges ? JSON.parse(m?._tpo_one_time_charges) : []
                  , v = m?._tpo_add_on_keys ? JSON.parse(m?._tpo_add_on_keys) : [];
                let y = [];
                n.forEach( (g, C) => {
                    const w = g.properties || {}
                      , $ = w._is_one_time_charge
                      , L = w._tpo_add_on_key;
                    S && v && S.find(P => P === $) && v.find(P => P === L) && y.push({
                        key: $,
                        price: g.final_line_price
                    })
                }
                ),
                _.forEach( (g, C) => {
                    g.classList.add("tpo_cart_item_price");
                    const w = n[u];
                    let $ = 0
                      , L = 0
                      , P = w?.key
                      , k = w?.final_line_price
                      , A = qt.cartJson.items.find(Q => Q.key === P);
                    if (A && A.tpo_final_add_price && ($ = A.tpo_final_add_price || 0,
                    $ = hd(w, f, $)),
                    A && A.tpo_add_on_product_price) {
                        const Q = A.quantity;
                        L = A.tpo_add_on_product_price,
                        y.length && y.forEach(I => {
                            L = L - (Q - 1) * I.price
                        }
                        ),
                        L = hd(w, f, L)
                    }
                    p += (k + $) / _.length,
                    k = k + $ + L,
                    k = Yn(k);
                    const R = PriceFormatter.formatMoney(k);
                    R && R !== g.textContent && (g.children.length ? g.textContent = g.textContent.replace(g.textContent, R) : g.innerHTML = g.innerHTML.replace(g.innerHTML, R))
                }
                )
            }
            ),
            !["555b61.myshopify.com", "zoe-app-testing.myshopify.com"].includes(B)) {
                if (p = Yn(p),
                i.length && p) {
                    const h = document.querySelector(".tpo_custom_cart_old_price");
                    i.forEach(u => {
                        if (u.classList.contains("tpo_custom_cart_total") && h && !h.classList.contains("tpo_hidden"))
                            return;
                        const x = u.innerHTML;
                        u.innerHTML !== PriceFormatter.formatMoney(p) && (u.innerHTML = u.innerHTML.replace(x, PriceFormatter.formatMoney(p)))
                    }
                    )
                } else if (r && !p) {
                    p = qt.cartJson.tpo_add_price + t.total_price;
                    let h = r.innerHTML;
                    r.innerHTML !== PriceFormatter.formatMoney(p) && (r.innerHTML = r.innerHTML.replace(h, PriceFormatter.formatMoney(p)))
                } else if (r && p) {
                    let h = r.innerHTML;
                    r.innerHTML !== PriceFormatter.formatMoney(p) && (r.innerHTML = r.innerHTML.replace(h, PriceFormatter.formatMoney(p)))
                }
            }
        }
    }
    function hd(t, o, i) {
        if (!$o)
            return i;
        const a = t.properties || {}
          , r = a._tpo_active_currency
          , c = a._tpo_currency_rate || 1;
        return !r || o === r ? i : i / c * ht
    }
    function n_(t) {
        let o = t.items;
        if (!o || !o.length)
            return;
        const {cartPageElement: i, cartDrawerElements: a, hasCartDrawer: r} = Ea();
        md(t);
        let c = Array.from(document.querySelectorAll(ji));
        if (It && r && (c = c.filter(d => {
            let n = !0;
            for (let f = 0; f < a.length; f++)
                if (a[f].contains(d)) {
                    n = !1;
                    break
                }
            return n
        }
        )),
        It && i) {
            const d = i.querySelectorAll(wa.join(","));
            let n = []
              , f = i.querySelectorAll(Tn);
            f.length || (f = i.closest("main")?.querySelectorAll(Tn) || []);
            const p = i.querySelector(Ic)
              , s = Array.from(d).filter(l => !!l.offsetParent);
            s.length,
            o.length,
            s.length,
            o.length * 2,
            _d({
                cartContents: t,
                visibleTotalPriceElements: s,
                listLoopTotalPriceElements: n,
                cartTotalPriceElement: f,
                cartSubTotalPriceElement: p
            })
        }
        if (r && a.length)
            for (let d = 0; d < a.length; d++) {
                const n = a[d]
                  , f = n.querySelectorAll(wa.join(","));
                let p = [];
                const s = n.querySelectorAll(Br)
                  , l = n.querySelector(Ic)
                  , b = Array.from(f).filter(h => {
                    const u = ["td", ".tt-list-parameters", ".cart-table-mobile"];
                    let x = h.closest(u);
                    if (!x) {
                        const m = [".cart__item--price", ".cart__price", ".cart-item__price", ".cart-item__total", ".cart-drawer__items", ".cart--price"];
                        x = h.closest(m) || h
                    }
                    return getComputedStyle(x).display !== "none" && x.parentElement.tagName !== "CART-DRAWER"
                }
                );
                b.length,
                o.length,
                b.length,
                o.length * 2,
                _d({
                    cartContents: t,
                    visibleTotalPriceElements: b,
                    listLoopTotalPriceElements: p,
                    cartTotalPriceElement: s,
                    cartSubTotalPriceElement: l
                })
            }
    }
    async function s_(t) {
        if (!t?.items?.length)
            return;
        const o = [];
        for (const i of t.items) {
            const a = i.properties;
            if (!a)
                continue;
            const r = ["_tpo_custom_options", "_tpo_add_on_products"];
            Object.entries(a).some( ([d,n]) => !r.includes(d) && typeof n == "string" && /\[\s*\+/.test(n)) && i.has_components !== !0 && o.push(i.key)
        }
        if (o.length)
            try {
                for (const i of o)
                    await fetch(`${Do}cart/change.js`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id: i,
                            quantity: 0
                        })
                    });
                window.location.reload()
            } catch {}
    }
    async function l_(t) {
        const o = t.items.filter(function(r) {
            return "_tpo_add_on_key"in r.properties
        })
          , i = t.items.filter(function(r) {
            return "_tpo_is_main_product"in r.properties
        }).map(function(r) {
            return r.properties._tpo_add_on_keys
        })
          , a = {};
        o.forEach(function(r) {
            i.toString().indexOf(r.properties._tpo_add_on_key) === -1 && (a[r.key] = 0)
        }),
        Object.keys(a).length && fetch(`${Do}cart/update.js`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                updates: a
            })
        }).then(function() {
            window.location.reload()
        })
    }
    async function ui() {
        let t = ["e9aae7-43.myshopify.com"]
          , o = ["felara.myshopify.com", "erikampowell.myshopify.com", "bebebydunja.myshopify.com", "hicapahub.myshopify.com", "faa1a1-4.myshopify.com", "roots-to-table.myshopify.com", "urquid3636.myshopify.com", "tougecon.myshopify.com", "pansabella.myshopify.com", "deae89-3.myshopify.com"];
        if ((Xs.includes(B) || t.includes(B)) && !o.includes(B))
            return;
        const i = ["aa5b29-4.myshopify.com", "e950f8-3.myshopify.com"];
        Ko(),
        hr(),
        np();
        const r = window.theme && typeof window.theme.addDelegateEventListener == "function" || i.includes(B) ? 2e3 : 1e3;
        let c = await Ii()
          , d = c?.items;
        Zr(d, "DRAWER"),
        (si === "bundle" || Vt !== "no") && await yl(d),
        Vt === "expand" && await s_(c),
        hm(c);
        let n = c.note
          , f = c.attributes;
        ["sublimajewels.myshopify.com", "jeff-s-specialty-sports.myshopify.com", "a06aea-2.myshopify.com", "class-act-eyecare.myshopify.com", "costlowboxes.myshopify.com", "2ha3wr-mt.myshopify.com"].includes(B) && await l_(c),
        i_(n),
        o_(f),
        await Up(c),
        _f.includes(B) || (B === "scarves-by-ruthie-l-designs.myshopify.com" ? n_(c) : a_(c)),
        await Pa();
        const s = document.querySelector(iy.join(","));
        if (!s || s && getComputedStyle(s).display == "none") {
            let u = document.querySelectorAll(so.join(", "))
              , x = document.querySelectorAll(bo.join(", "));
            u.forEach(function(_) {
                Ol(_) || (_ = _.querySelector("input") || _,
                _.classList.contains("tpo") || (_.classList.add("tpo"),
                _.addEventListener("keypress", function(m) {
                    m.key === "Enter" && m.preventDefault()
                }),
                _.addEventListener("change", function() {
                    _.style.pointerEvents = "none",
                    Ko(),
                    x.forEach(function(m) {
                        m.disabled = !0
                    }),
                    setTimeout(async () => {
                        await ui(),
                        _.style.pointerEvents = "unset",
                        x.forEach(function(m) {
                            m.disabled = !1
                        })
                    }
                    , r)
                }),
                window.theme && window.theme.info?.name === "District" && (_.onchange = function() {
                    if (ii && typeof ii.updateQuantity == "function") {
                        if (_.dataset.index === void 0)
                            return;
                        ii.updateQuantity(_.dataset.index, _.value, document.activeElement.getAttribute("name") || "")
                    }
                }
                )))
            }),
            x.forEach(_ => {
                Ol(_) || _.classList.contains("tpo") || (_.classList.add("tpo"),
                _.addEventListener("click", async function() {
                    Ko(),
                    setTimeout(async () => {
                        await ui(),
                        await easifyHandleUpdateCartWithAddonProduct(),
                        await Aa(),
                        await wr(),
                        _.disabled = !1
                    }
                    , r)
                }))
            }
            )
        }
        const l = document.querySelectorAll(jo.join(","));
        if (l.length)
            for (let u = 0; u < l.length; u++) {
                const x = l[u];
                if (Ol(x))
                    return;
                x.classList.contains("tpo") || (x.classList.add("tpo"),
                x.addEventListener("click", function(_) {
                    setTimeout(async () => {
                        await ui(),
                        await easifyHandleUpdateCartWithAddonProduct(),
                        await Aa(),
                        await wr()
                    }
                    , r)
                }))
            }
        const b = document.querySelectorAll(gy);
        if (b.length)
            for (let u = 0; u < b.length; u++) {
                const x = b[u];
                x.classList.contains("tpo") || (x.classList.add("tpo"),
                x.addEventListener("click", function(_) {
                    setTimeout(async () => {
                        await ui()
                    }
                    , r)
                }))
            }
        ["cyrell-shop.myshopify.com", "sublimajewels.myshopify.com"].includes(B) && await Po(),
        await wr()
    }
    function Ol(t) {
        return !!t.closest(Yt)
    }
    function yd(t, o, i="") {
        let a = t.querySelectorAll(o) || t.closest(".cart")?.querySelectorAll(o) || t.closest(".container")?.querySelectorAll(o) || [];
        const r = document.querySelector(".cart-drawer__inner");
        return i === "drawer" && zi.includes(gt) && r.querySelector(".cart-items__table thead tr.cart-items__table-row") && a[0]?.classList.add("tpo_ignore"),
        Array.from(a).filter(d => !d.classList.contains("tpo_ignore")) || []
    }
    function Pl(t, o, i) {
        const a = t && ol.length ? Array.from(t.querySelectorAll(ol)) : []
          , r = t && al.length ? Array.from(t.querySelectorAll(al)) : [];
        if (i && t && o)
            for (let d = 0; d < i.items.length; d++) {
                let x = function() {
                    let _ = s ? Array.from(s.querySelectorAll(bo)) || [] : [];
                    b = s ? s.querySelector(va) : null;
                    let m = s ? Array.from(s.querySelectorAll(jo)) || [] : null;
                    if (u && (_ = u ? Array.from(u.querySelectorAll(bo)) || [] : [],
                    m = u ? Array.from(u.querySelectorAll(jo)) || [] : null),
                    b) {
                        b.classList.add("tpo_cart-properties-wrapper");
                        for (const [v,y] of Object.entries(n.properties))
                            if (Bo.includes(v)) {
                                s.classList.add("tpo_add_on_product"),
                                n.properties && n.properties._is_one_time_charge && s.classList.add("tpo_one_time_charge");
                                break
                            }
                        for (const v of b.children) {
                            if (Bo.some($ => v.innerHTML.includes($))) {
                                v.style.display = "none",
                                s.classList.add("tpo_add_on_product"),
                                n.properties && n.properties._is_one_time_charge && s.classList.add("tpo_one_time_charge");
                                continue
                            }
                            const y = ["dd"]
                              , g = v.querySelector(y);
                            if (!g || !g.textContent.includes("apps/easify-po/apps/download") || !g.textContent.includes("linodeobjects"))
                                continue;
                            let w = g.textContent.split(", ").map($ => {
                                const [L,P=""] = $.split(/ (?=\[)/)
                                  , A = new URL(L).searchParams.get("name");
                                return `<a href="${L}" target="_blank">${A}</a> <span>${P}</span>`
                            }
                            ).join(", ");
                            g.innerHTML = w
                        }
                    }
                    n.properties?._one_time_per_cart && (s.classList.add("tpo_disabled_item"),
                    Al(_, s, m)),
                    (f.length || n.properties._tpo_is_main_product == 1) && s.classList.remove("tpo_add_on_product");
                    const S = l && (l.tagName === "INPUT" || l.tagName === "SELECT") ? l.value : l?.querySelector("input").value || 1;
                    if (n.properties._tpo_main_product_id)
                        Sa ? u ? (u.classList.add("tpo_disabled_item"),
                        Al(_, u, m)) : (s.classList.add("tpo_disabled_item"),
                        Al(_, s, m)) : s.classList.add("tpo_hidden");
                    else if (n.properties._tpo_is_main_product) {
                        if (_[0] && _[1]) {
                            _[0].classList.contains("incr") && _[1].classList.contains("decr") && (_ = [...[_[1], _[0]]]);
                            let v = _[0];
                            v.href && (v.href = "##");
                            let y = 1;
                            if (l) {
                                let w;
                                l.tagName !== "INPUT" ? w = l.querySelector("input") : w = l,
                                y = Number(w.value)
                            }
                            y === 1 && (v = _[0].cloneNode(!0),
                            v.classList.remove("tpo_add_on"),
                            _[0].replaceWith(v)),
                            v.style.cursor = "pointer",
                            v.classList.contains("tpo_add_on") || (v.removeAttribute("on:click"),
                            v.hasAttribute("onclick") && v.removeAttribute("onclick"),
                            Zh.find(w => w === B) && l && l.value && Number(l.value) <= 1 && v.tagName === "BUTTON" && (v.disabled = !0),
                            v.addEventListener("click", async function(w) {
                                if (w.preventDefault(),
                                w.stopImmediatePropagation(),
                                l) {
                                    let $;
                                    if (l.tagName !== "INPUT" ? $ = l.querySelector("input") : $ = l,
                                    $) {
                                        if (y === 1) {
                                            let P = {
                                                updates: {
                                                    [n.key]: "0"
                                                }
                                            };
                                            const k = n.properties?._tpo_products_per_cart ? JSON.parse(n.properties?._tpo_products_per_cart) : [];
                                            if (f.length || k.length) {
                                                const A = Kr(k, i.items, n.key);
                                                w.stopPropagation();
                                                for (let R = 0; R < f.length; R++) {
                                                    const Q = i.items.find(I => I.properties._tpo_add_on_key === f[R])?.key;
                                                    Q && (P.updates[Q] = "0")
                                                }
                                                A.forEach(R => {
                                                    R && (P.updates[R] = "0")
                                                }
                                                ),
                                                await fetch("/cart/update.js", {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: JSON.stringify(P)
                                                }).then(R => {
                                                    window.location.reload()
                                                }
                                                ).catch(R => {
                                                    alert("Remove item failed: Minus button"),
                                                    window.location.reload()
                                                }
                                                )
                                            }
                                        } else if (y > 1) {
                                            $.dataset.wholesaleStep ? $.value = y - parseInt($.dataset.wholesaleStep) : $.value = y - 1,
                                            l.value = Number($.value);
                                            const L = new Event("change");
                                            l.dispatchEvent(L)
                                        }
                                    }
                                }
                            }, !0),
                            v.classList.add("tpo_add_on"));
                            let g = _[1];
                            g.href && (g.href = "##");
                            let C = 1;
                            if (l) {
                                let w;
                                l.tagName !== "INPUT" ? w = l.querySelector("input") : w = l,
                                C = Number(w.value)
                            }
                            g.style.cursor = "pointer",
                            g.classList.contains("tpo_add_on") || (g.removeAttribute("on:click"),
                            g.hasAttribute("onclick") && g.removeAttribute("onclick"),
                            g.addEventListener("click", function(w) {
                                if (w.preventDefault(),
                                l) {
                                    let $;
                                    l.tagName !== "INPUT" ? $ = l.querySelector("input") : $ = l,
                                    $.dataset.wholesaleStep ? $.value = C + parseInt($.dataset.wholesaleStep) : $.value = C + 1,
                                    l.value = Number($.value);
                                    const L = new Event("change");
                                    l.dispatchEvent(L)
                                }
                            }),
                            g.classList.add("tpo_add_on"))
                        }
                        if (l) {
                            let v = [];
                            It ? v = u ? u.querySelectorAll(so) : s.querySelectorAll(so) : Wo && !It && (v = u ? u.querySelectorAll(yo) : s.querySelectorAll(yo)),
                            Array.from(v).forEach(y => {
                                y.classList.contains("tpo_add_on") || (y.addEventListener("change", async function(g) {
                                    s.classList.add("tpo_loading_fade");
                                    let C = Number(g.target.value);
                                    if (C) {
                                        y.dataset.wholesaleStep && (C = Math.ceil(C / y.dataset.wholesaleStep) * y.dataset.wholesaleStep);
                                        let w = {
                                            id: n.key,
                                            quantity: C,
                                            updates: {}
                                        };
                                        if (w.updates && (w.updates[n.key] = C.toString()),
                                        f.length) {
                                            for (let $ = 0; $ < f.length; $++) {
                                                let L = 0;
                                                const P = i.items.find(k => {
                                                    if (k.properties._tpo_add_on_key === f[$] && !p.find(A => A === k.properties._is_one_time_charge))
                                                        return L = k.quantity,
                                                        !0
                                                }
                                                )?.key;
                                                if (w.updates || (w.updates = {}),
                                                P)
                                                    if (L == S)
                                                        w.updates[P] = C.toString();
                                                    else {
                                                        let k = Number(L) / Number(S)
                                                          , A = Number(C) * Number(k);
                                                        w.updates[P] = A.toString()
                                                    }
                                            }
                                            setTimeout(async () => {
                                                await fetch("/cart/update.js", {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: JSON.stringify(w)
                                                }).then($ => {
                                                    s.classList.remove("tpo_loading_fade"),
                                                    !(!It && Ia()) && window.location.reload()
                                                }
                                                )
                                            }
                                            , 1e3)
                                        } else {
                                            if (await fetch("/cart/update.js", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify(w)
                                            }),
                                            s.classList.remove("tpo_loading_fade"),
                                            !It && Ia())
                                                return;
                                            window.location.reload()
                                        }
                                    } else {
                                        let $ = {
                                            updates: {
                                                [n.key]: "0"
                                            }
                                        };
                                        const L = n.properties?._tpo_products_per_cart ? JSON.parse(n.properties?._tpo_products_per_cart) : [];
                                        if (f.length || L.length) {
                                            const P = Kr(L, i.items, n.key);
                                            g.stopPropagation();
                                            for (let k = 0; k < f.length; k++) {
                                                const A = i.items.find(R => R.properties._tpo_add_on_key === f[k])?.key;
                                                A && ($.updates[A] = "0")
                                            }
                                            P.forEach(k => {
                                                k && ($.updates[k] = "0")
                                            }
                                            ),
                                            await fetch("/cart/update.js", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify($)
                                            }).then(k => {
                                                !It && Ia() || window.location.reload()
                                            }
                                            )
                                        }
                                    }
                                }),
                                y.classList.add("tpo_add_on"))
                            }
                            )
                        }
                        m && m.length && m.forEach(v => {
                            const y = n.properties?._tpo_products_per_cart ? JSON.parse(n.properties?._tpo_products_per_cart || "[]") : [];
                            (f.length || y.length) && (v.href ? (v.removeAttribute("href"),
                            v.style.cursor = "pointer") : v.firstElementChild && v.firstElementChild.href && (v.firstElementChild.removeAttribute("href"),
                            v.firstElementChild.style.cursor = "pointer"),
                            v.hasAttribute("on:click") && v.removeAttribute("on:click")),
                            v.removeAttribute("onclick"),
                            v.classList.add("tpo_main_product"),
                            !v.classList.contains("tpo_add_on") && (f.length || y.length) && (v.addEventListener("click", async function(g) {
                                g.preventDefault(),
                                g.stopImmediatePropagation();
                                const C = "0";
                                let w = {
                                    updates: {
                                        [n.key]: C.toString()
                                    }
                                };
                                const $ = n.properties?._tpo_products_per_cart ? JSON.parse(n.properties?._tpo_products_per_cart) : [];
                                if (f.length || $.length) {
                                    const L = Kr($, i.items, n.key);
                                    g.stopPropagation();
                                    for (let P = 0; P < f.length; P++) {
                                        const k = i.items.find(A => A.properties._tpo_add_on_key === f[P])?.key;
                                        k && (w.updates[k] = C.toString())
                                    }
                                    L.forEach(P => {
                                        P && (w.updates[P] = C.toString())
                                    }
                                    ),
                                    await fetch("/cart/update.js", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(w)
                                    }).then(P => {
                                        !It && Ia() || window.location.reload()
                                    }
                                    )
                                }
                            }, !0),
                            v.classList.add("tpo_add_on"))
                        }
                        )
                    }
                };
                var c = x;
                const n = i.items[d];
                n.properties || (n.properties = {});
                const f = JSON.parse(n.properties?._tpo_add_on_keys || "[]")
                  , p = n.properties?._tpo_one_time_charges ? JSON.parse(n.properties?._tpo_one_time_charges || "[]") : [];
                let s = document.createElement("div"), l, b, h = document.querySelector(Ai), u;
                if (o === "page" ? h = t || document.querySelector(ko) ? t?.querySelector(ko) || document.querySelector(ko) : document.body.contains(Vn) ? Vn : document.createElement("div") : o === "drawer" && (h = t.querySelector(ko)),
                (a.length || r.length) && (c_() ? u = r[d] : u = a[d]),
                o === "page") {
                    const _ = yd(h, ji);
                    _ && _.length ? s = _[d] : s = document.createElement("div"),
                    l = Array.from(s.querySelectorAll(so)).filter(m => !!m.offsetParent)[0],
                    u && (l = Array.from(u.querySelectorAll(so))[0]),
                    x()
                }
                if (o === "drawer") {
                    const _ = yd(t, ji, o);
                    if (_ && _.length ? s = _[d] : s = document.createElement("div"),
                    l = s ? s.querySelector(yo) : null,
                    u && (l = Array.from(u.querySelectorAll(yo))[0]),
                    B === "elarceilingfans.myshopify.com") {
                        const m = s.querySelector(".qtyField span.qtyBtn");
                        m && (l.value = Number(m.innerHTML))
                    }
                    x(),
                    window.easifyCustomDisableButton && document.dispatchEvent(new Event("easifyEnableButtonAfterLoad"))
                }
            }
        window.easifyCustomDisableButton && document.dispatchEvent(new Event("easifyEnableButtonAfterLoad"))
    }
    function Kr(t=[], o, i) {
        let a = [];
        return t.length && t.forEach(r => {
            const c = o.find(d => d.properties?._one_time_per_cart == r);
            c && (o.find(n => {
                const f = n.properties?._tpo_products_per_cart;
                return f ? f.includes(r) && n.key !== i : !1
            }
            ) || a.push(c.key))
        }
        ),
        a
    }
    function Al(t, o, i) {
        t.length && t.forEach(a => a.classList.add("tpo_disabled")),
        o && Array.from(o.querySelectorAll([...so, ...yo])).forEach(r => r.classList.add("tpo_disabled")),
        i && i.length && i.forEach(a => a.classList.add("tpo_disabled"))
    }
    async function Po() {
        if (si === "bundle" && Vt === "expand")
            return;
        const t = async () => {
            const {cartPageElement: o, cartDrawerElements: i, hasCartDrawer: a, listCartPageElements: r} = Ea();
            if (!It && !a)
                return;
            let c = await Ii();
            if (window.superCart) {
                const d = ["Shop Service"];
                c.items = c.items.filter(n => !d.includes(n.product_type))
            }
            if (It && o)
                if (r && r.length > 1)
                    for (let d = 0; d < r.length; d++) {
                        const n = r[d];
                        Pl(n, "page", c)
                    }
                else
                    Pl(o, "page", c);
            if (a && i.length)
                for (let d = 0; d < i.length; d++) {
                    const n = i[d];
                    Pl(n, "drawer", c)
                }
        }
        ;
        if (await t(),
        It && !Ks) {
            const o = {
                childList: !0,
                subtree: !0
            }
              , i = async (r, c) => {
                let d = Array.from(r[0].addedNodes);
                const n = [".cart-items", ".cart-total-label", ".CartItem"];
                let f = r[0].target;
                const p = [".cart__item-details", ".ajax-cart__item-details", "p.cart__price", "strong.price__current", ".price.price--end", ".cart-total-subtotal.cart_total", "span.money.done"]
                  , s = Array.from(Ke.querySelectorAll(p));
                (d.includes(Ke.querySelector(n)) || s.includes(f)) && (await t(),
                (B === "accurate-signs-and-engraving-solar-tags.myshopify.com" || B === "love-art-frames.myshopify.com" || B === "meetimmo-2.myshopify.com") && await ui())
            }
            ;
            new MutationObserver(i).observe(Ke, o)
        }
        if (Wo && !Ks) {
            const o = {
                childList: !0,
                subtree: !0,
                attributes: !0
            }
              , i = async (r, c) => {
                let d = Array.from(r[0].addedNodes);
                const n = [...za];
                let f = r[0].target;
                const p = ["span.cart__price", ".ajax-cart__item-details", ".cart-count", ".mini-cart__product-info", "p.cart__price", "strong.price__current", "span.price__regular", ".money.cart-item-line-price.cart-item-final-line-price", ".item-info__price span.money", "span.amount", ".ajaxcart-item__price span.money", "input.qty-input__input"];
                B === "elarceilingfans.myshopify.com" && p.push(".product-price");
                const s = Array.from(vi.querySelectorAll(p));
                (d.includes(vi.querySelector(n)) || s.includes(f)) && (["5a75b6-6.myshopify.com", "26389c-3.myshopify.com", "textilfarm.myshopify.com", "kileja.myshopify.com", "embroplacestore.myshopify.com"].includes(B) && await ui(),
                await t())
            }
            ;
            new MutationObserver(i).observe(vi, o)
        }
    }
    async function qa(t, o, i, a=!1) {
        const r = window.matchMedia("(max-width: 768px)").matches;
        let c = r && of.length > 0 ? of : Zc;
        if (pl && c && c.length > 0) {
            const _ = document.querySelectorAll(c);
            t = _.length > 0 ? _[0] : t
        }
        if (!t)
            return;
        const d = t.querySelector(".tpo_option-set-wrapper");
        d && !gf.includes(B) && d.remove();
        let n = !1
          , f = t.querySelector(Ai)
          , p = r && af.length > 0 ? af : ep;
        if (pl && p && p.length > 0) {
            const _ = document.querySelectorAll(p);
            f = _.length > 0 ? _[0] : f
        }
        switch (t.tagName) {
        case "QUICK-ADD-MODAL":
            {
                const _ = t.querySelector("product-form:not(.tpo_ignore)");
                _ && (f = _.querySelector("form"));
                break
            }
        case "DIV":
            {
                const _ = t.querySelector("product-form-component");
                _ && (f = _.querySelector("form"));
                break
            }
        }
        a && B === "509b66-96.myshopify.com" && (f && f.tagName === "FORM" || (f = await new Promise(_ => {
            const m = v => {
                const y = t.querySelector(Ai);
                y && y.tagName === "FORM" ? _(y) : _(null),
                document.removeEventListener("quickview:loaded", m)
            }
            ;
            document.addEventListener("quickview:loaded", m);
            const S = t.querySelector(Ai);
            S && S.tagName === "FORM" && (document.removeEventListener("quickview:loaded", m),
            _(S))
        }
        ))),
        f || (f = document.createElement("form"),
        n = !0);
        let s = f ? f.querySelector(tl) : null;
        if (f && !s && (s = document.querySelector(En)),
        !s) {
            if (s = document.createElement("div"),
            window.__pageflyProducts) {
                let m = window.__pageflyProducts[o.toString()];
                if (m) {
                    let v = m.atcContents.entries().next().value
                      , [y,g] = v;
                    s = document.querySelector(`.${y}`)
                }
            }
            window.__gemStoreData && (s = document.querySelector("button.gf_add-to-cart"))
        }
        const l = t.querySelector(oy) || document.createElement("div")
          , b = await br(o, i);
        if (Mi = await jc(b?.products_handle),
        s || (s = document.createElement("div")),
        !b)
            return;
        s.classList.add("tpo_add-to-cart");
        let h = document.createElement("div");
        if (h.classList.add("tpo_option-set-wrapper"),
        (Hi?.sectionTopSpacing || Hi?.sectionBottomSpacing) && (h.style.paddingTop = `${Hi?.sectionTopSpacing || 12}px`,
        h.style.paddingBottom = `${Hi?.sectionBottomSpacing || 12}px`),
        Qc.includes(B) && t.querySelector(".tpo_option-set-wrapper")) {
            const _ = t.querySelector(".tpo_option-set-wrapper");
            _.parentElement.replaceChild(h, _)
        }
        const u = document.querySelectorAll(wy.join(","));
        zi.includes(gt) && u.forEach(_ => {
            if (_.querySelector(".easify-product-options"))
                return;
            const m = _.querySelector(".product-grid-view-zoom-out--details");
            if (m && m.parentNode) {
                const S = document.createElement("div");
                S.classList.add("easify-product-options"),
                m.parentNode.insertBefore(S, m.nextSibling)
            }
        }
        );
        let x = bl(b, f, s, l, !0);
        if (n) {
            let _ = [".card > [class*='card__content']", ".product-block__inner", '[data-pf-type="Block"]', ".productitem--info"]
              , m = t.querySelector(_);
            if (m || (m = t),
            h.classList.add("tpo_in-card"),
            ["e2e8c8.myshopify.com"].includes(B)) {
                t.classList.add("tpo-hide-price");
                let C = t.querySelector(".productitem--title a[data-product-page-link]")?.getAttribute("href");
                t.querySelector("button.productitem--action-trigger")?.addEventListener("click", function() {
                    window.location.href = C
                })
            }
            let v = m?.querySelector(".easify-product-options");
            v ? v.append(h) : window.__pageflyProducts ? (m?.insertAdjacentElement("afterend", h),
            s.style.pointerEvents = "none") : window.__gemStoreData ? m?.insertBefore(h, m.lastElementChild) : m?.firstElementChild.insertAdjacentElement("afterend", h);
            let {totalAdditionalPriceWrapper: y, totalAdditionalPriceInput: g} = Zn(f);
            h.append(x),
            h.append(y, g),
            ke(h, l),
            Gr()
        } else {
            let _ = t.querySelector(".easify-product-options")
              , m = r && rf.length > 0 ? rf : tp;
            if (pl && m && m.length > 0) {
                const w = document.querySelectorAll(m);
                _ = w.length > 0 ? w[0] : _
            }
            if (_)
                _.append(h);
            else if (s.parentElement) {
                const w = Lt?.position || "above_add_to_cart";
                if (w === "below_add_to_cart")
                    s.parentElement.insertBefore(h, s.nextSibling);
                else if (w === "above_product_variants") {
                    let $ = t.querySelector(Fo);
                    $ ? $.parentElement.insertBefore(h, $) : s.parentElement.insertBefore(h, s)
                } else if (w === "below_product_variants") {
                    let $ = t.querySelector(Fo);
                    if ($)
                        $.parentElement.insertBefore(h, $.nextSibling);
                    else {
                        let L = t.querySelector(Ku);
                        L ? L.parentElement.insertBefore(h, L) : s.parentElement.insertBefore(h, s)
                    }
                } else if (zi.includes(gt)) {
                    const $ = t.querySelector("product-form-component");
                    $ && $.parentElement ? $.parentElement.insertBefore(h, $) : s.parentElement.insertBefore(h, s)
                } else if (B === "94f441-6.myshopify.com") {
                    const $ = document.querySelector(".product-form__item.product-form__item--payment-button");
                    $.parentElement.insertBefore(h, $)
                } else
                    s.parentElement.insertBefore(h, s)
            }
            let {totalAdditionalPriceWrapper: S, totalAdditionalPriceInput: v} = Zn(f);
            if (f.addEventListener("change", () => {
                setTimeout( () => {
                    ke(f, l)
                }
                , 1e3)
            }
            ),
            h.append(S, v),
            h.prepend(x),
            Ya.querySelectorAll('script[src="https://cdn.shopify.com/s/files/1/0748/6904/7603/files/konva.min.js?v=1742044331"]')?.length === 0 && Qo) {
                const w = document.createElement("script");
                w.async = !0,
                w.src = "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/konva.min.js?v=1742044331",
                w.onload = async function() {
                    await Xr({
                        optionSet: b,
                        productHandle: i,
                        isProductPage: !1
                    })
                }
                ,
                Ya.appendChild(w)
            }
            Gr(),
            dt(jp(b?.options), f),
            dt(ke(f, l), f),
            hr(),
            Gn(f, b);
            const {tieredPrices: g, allowTieredPrices: C} = gd(b);
            if (C) {
                l.addEventListener("change", function(L) {
                    let P = f.querySelector(`.tpo_total-additional-price:not(.${_i} *)`) || document.querySelector("main").querySelector(`.tpo_total-additional-price:not(.${_i} *)`) || document.createElement("div")
                      , k = f.querySelector(`.tpo_total-additional-price-wrapper:not(.${_i} *)`) || document.querySelector("main").querySelector(`.tpo_total-additional-price-wrapper:not(.${_i} *)`) || document.createElement("div")
                      , A = f.querySelector(`.tpo_total-additional-price-input:not(.${_i} *)`) || document.querySelector("main").querySelector(`.tpo_total-additional-price-input:not(.${_i} *)`) || document.createElement("div");
                    Oa(f, P, k, A, l)
                });
                const w = ql(g, "product");
                Object.assign(w, {
                    className: `tpo_modal-tired-wholesale-wraper tpo_wholesale_table ${po ? "in-dark-mode" : ""}`
                });
                const $ = document.querySelector(".tpo_wholesale_block");
                $ ? (w.style.marginBottom = "30px",
                $.append(w)) : s.parentElement && (Mn === "below_add_to_cart" ? (w.style.marginBottom = "30px",
                s.parentElement.insertBefore(w, s.nextSibling)) : (w.style.marginBottom = "30px",
                s.parentElement.insertBefore(w, s)))
            }
        }
    }
    function gd(t) {
        const o = t.wholesale_price || {}
          , i = JSON.parse(o.price_set || "[]")
          , a = JSON.parse(o.customer_tag || "{}").appliedCustomer || "ALL"
          , r = JSON.parse(o.customer_tag || "{}").tagSet || []
          , c = JSON.parse(o.customer_tag || "{}").excludeTagSet || []
          , d = Ki?.customer || {}
          , n = d.tags || []
          , f = i.length > 0 && xa && (a === "ALL" || a === "GUEST" && d.id === null || a === "LOGIN" && d.id || a === "TAG" && n.some(p => r.includes(p)) || a === "EXCLUDE_TAG" && !n.some(p => c.includes(p)));
        return {
            tieredPrices: i,
            allowTieredPrices: f
        }
    }
    function ql(t, o="product", i={}) {
        const a = document.createElement("div")
          , r = document.createElement("table");
        V?.wholesaleHeaderRows && r.style.setProperty("--wholesale-headerRow_background", V?.wholesaleHeaderRows),
        V?.wholesaleOddRows && r.style.setProperty("--wholesale-oddRows_background", V?.wholesaleOddRows),
        V?.wholesaleEvenRows && r.style.setProperty("--wholesale-evenRows_background", V?.wholesaleEvenRows),
        Object.assign(r, {
            className: "tpo_option-tiered-prices-table",
            innerHTML: `
                <tbody class='tpo_table-body'>
                    <tr>
                        <th>
                            ${vp ? ze(vp) : "Quantity"}
                        </th>             
                        <th>
                            ${Sp ? ze(Sp) : "Savings"}
                        </th>
                    </tr>
                </tbody>
            `
        }),
        t.forEach( (p, s) => {
            let l = PriceFormatter.formatMoney(parseFloat(p.value * 100), !0);
            r.firstElementChild.innerHTML += `
                <tr>
                    <td>${p.maxQty ? `${p.minQty} - ${p.maxQty}` : `${Re.From && Re.From[xt] || "From"} ${p.minQty}`}</td>                   
                    <td>${xp ? ze(xp) : "Save"} ${p.type === "fixed" ? l : `${p.value}%`}</td>
                </tr>
            `,
            setTimeout(async () => {
                await E_({
                    template: o,
                    rule: p,
                    target: r.firstElementChild.querySelector(`tr:nth-child(${s + 2}) td:last-child`),
                    mainProduct: i
                })
            }
            , 0)
        }
        ),
        r.querySelectorAll("tr th").forEach(p => {
            Ur?.fontFamily && (p.style.fontFamily = Ur.fontFamily),
            p.style.fontSize = `${Ur.fontSize}px`,
            p.style.color = V?.wholesaleTextColumnHeaders ?? Ur.fontColor,
            p.style.borderColor = V?.wholesaleTableHeaderRow,
            p.classList.add(`tpo_${Ur.fontStyle}`)
        }
        ),
        r.querySelectorAll("tr td").forEach(p => {
            Wr?.fontFamily && (p.style.fontFamily = Wr.fontFamily),
            p.style.fontSize = `${Wr.fontSize}px`,
            p.style.color = V?.wholesaleTextCellContents ?? Wr?.fontColor,
            p.style.borderColor = V?.wholesaleTableDataRows,
            p.classList.add(`tpo_${Wr.fontStyle}`)
        }
        );
        const n = document.createElement("span");
        Object.assign(n, {
            className: `tpo_option-tiered-prices-heading tpo_${Rr.fontStyle} ${Pi ? "tpo_compatible_wholesale_title" : ""}`,
            textContent: wp ? ze(wp) : "Tiered wholesale price:"
        }),
        Rr?.fontFamily && (n.style.fontFamily = Rr.fontFamily),
        n.style.fontSize = `${Rr.fontSize}px`,
        n.style.color = V?.wholesaleTextTitle ?? Rr.fontColor;
        const f = document.createElement("div");
        return f.classList.add("tpo_option-tiered-prices-table-container"),
        Pi && f.classList.add("tpo_compatible_wholesale_theme"),
        f.style.borderColor = V?.wholesaleTableBorder ?? im.borderColor,
        f.append(r),
        a.append(n, f),
        a
    }
    function bd(t, o, i) {
        if (o && o !== Dt && o !== wo) {
            const a = i || "";
            switch (t) {
            case "small":
                return `<img alt='${a}' src="${o}" width=48 height=48 class="tpo-image-select-value ${Pi ? "tpo_compatible_image_small" : ""}" />`;
            case "medium":
                return `<img alt='${a}' src="${o}" width=60 height=60 class="tpo-image-select-value ${Pi ? "tpo_compatible_image_medium" : ""}" />`;
            case "large":
                return `<img alt='${a}' src="${o}" width=80 height=80 class="tpo-image-select-value ${Pi ? "tpo_compatible_image_large" : ""}" />`
            }
        } else
            return ""
    }
    function c_() {
        return window.innerWidth <= 768
    }
    function Nl(t, o) {
        const {showTotalSelected: i=!1, hasLimitations: a=!1, minValue: r=1, maxValue: c=1, limitTotalSelected: d=0, isUseCustomIncrement: n=!1, customIncrementValue: f=1, isUseMinMaxSelected: p=!1, minValueTotal: s=1, maxValueTotal: l=1, isShowNewTotalSelected: b=!1} = t;
        return o ? i ? o === d : p ? o >= Number(s) && o <= Number(l) : !0 : !0
    }
    function Ml(t, o, i, a) {
        o ? t.innerHTML = "" : t.innerHTML = yp ? ze(yp, [i, a]) : `Select a minimum of ${i} and a maximum of ${a} items`
    }
    function Si(t, o, i, a, r) {
        const {showTotalSelected: c=!1, hasLimitations: d=!1, minValue: n=1, maxValue: f=1, limitTotalSelected: p=0, isUseCustomIncrement: s=!1, customIncrementValue: l=1, isUseMinMaxSelected: b=!1, minValueTotal: h=1, maxValueTotal: u=1, isShowNewTotalSelected: x=!1} = i;
        if (o) {
            const _ = Nl(i, Number(o))
              , m = t.querySelector(".tpo_quantity_selector_total-selected");
            m && (m.innerHTML = o,
            _ ? (m.classList.remove("tpo-quantity-error"),
            Number(o) && m.classList.add("tpo-quantity-success")) : (m.classList.add("tpo-quantity-error"),
            m.classList.remove("tpo-quantity-success")),
            a && Ml(a, _, h, u))
        } else {
            const _ = t.querySelector(".tpo_quantity_selector_total-selected");
            let m = 0
              , S = Array.from(t.querySelectorAll(".tpo_quantity-selector_wrapper"));
            if (r && (S = Array.from(r.querySelectorAll(".tpo_quantity-selector_wrapper"))),
            S.length) {
                if (S.forEach(v => {
                    if (!v.classList.contains("swatches-not-avaliable")) {
                        const y = v.querySelector("input").value;
                        m += Number(y)
                    }
                }
                ),
                _) {
                    _.innerHTML = m;
                    const v = Nl(i, Number(m));
                    v ? (_.classList.remove("tpo-quantity-error"),
                    Number(m) && _.classList.add("tpo-quantity-success")) : (_.classList.add("tpo-quantity-error"),
                    _.classList.remove("tpo-quantity-success")),
                    a && Ml(a, v, h, u)
                }
            } else {
                const v = t.id;
                if (v && Ft !== -1) {
                    const g = At[Ft].find(C => v.includes(C.id));
                    g && g.option_types.forEach(C => {
                        C && C.is_default && (m += 1)
                    }
                    )
                }
                const y = Nl(i, Number(m));
                _ && (_.innerHTML = m),
                _ && (y ? (_.classList.remove("tpo-quantity-error"),
                Number(m) && _.classList.add("tpo-quantity-success")) : (_.classList.add("tpo-quantity-error"),
                _.classList.remove("tpo-quantity-success")),
                a && Ml(a, y, h, u))
            }
        }
    }
    function p_(t, o, i) {
        const a = i?.includes(",") ? i.split(",")[1] : i;
        let r = window.Konva?.stages?.[0]?.findOne(`#group_qty_${a}`);
        if (!(!r && (r = window.Konva?.stages?.[0]?.findOne(`#group_${a}`),
        !r))) {
            if (t > o) {
                if (o === 0 && t >= 1) {
                    const c = r.getChildren().find(d => d.getAttr("qtyAttr") === 1);
                    c && (c.show(),
                    c.opacity(1)),
                    r.setAttr("currentQty", 1),
                    o = 1
                }
                if (t > o)
                    for (let c = o + 1; c <= t; c++)
                        Rl("ADD", c, i, !1)
            } else if (t < o)
                if (t === 0) {
                    if (o >= 1) {
                        Rl("REMOVE", 1, i, !1);
                        const c = r.getChildren().find(d => d.getAttr("qtyAttr") === 1);
                        c && c.hide(),
                        r.setAttrs({
                            currentQty: 0
                        })
                    }
                } else
                    Rl("REMOVE", t, i, !1)
        }
    }
    function d_(t, o, i) {
        const a = i?.includes(",") ? i.split(",")[1] : i;
        let r = window.Konva?.stages?.[0]?.findOne(`#group_qty_${a}`);
        if (!(!r && (r = window.Konva?.stages?.[0]?.findOne(`#group_${a}`),
        !r))) {
            if (t > o) {
                if (o === 0 && t >= 1 && (r.show(),
                r.setAttr("currentQty", 1),
                o = 1),
                t > o)
                    for (let c = o + 1; c <= t; c++)
                        Vl("ADD", c, i, !1)
            } else
                t < o && (t === 0 ? o >= 1 && (Vl("REMOVE", 1, i, !1),
                r.hide(),
                r.setAttrs({
                    currentQty: 0
                })) : Vl("REMOVE", t, i, !1));
            t > 0 && (!r.isVisible() || r.opacity() === 0) && (r.show(),
            r.setAttr("currentQty", 1))
        }
    }
    function u_(t, o, i, a, r) {
        const {showTotalSelected: c=!1, hasLimitations: d=!1, minValue: n=1, maxValue: f=1, limitTotalSelected: p=0, isUseCustomIncrement: s=!1, customIncrementValue: l=1, isUseMinMaxSelected: b=!1, minValueTotal: h=1, maxValueTotal: u=1, isShowNewTotalSelected: x=!1} = t
          , {activeBorderColor: _="", fontFamily: m, fontStyle: S, fontSize: v=0, widthQuantity: y=0} = r
          , g = document.createElement("div");
        Object.assign(g, {
            className: "tpo_quantity-selector_wrapper swatches-not-avaliable"
        }),
        g.style.width = Kt?.quantitySelectorWidth ? `${Kt.quantitySelectorWidth}px` : "",
        g.style.border = V?.quantitySelectorBorder_unselected ? `1px solid ${V.quantitySelectorBorder_unselected}` : "",
        g.style.borderRadius = Oi?.quantitySelectorBorderRadius ? `${Oi.quantitySelectorBorderRadius}px` : "",
        g.style.setProperty("--active-quantitySelector-border", V.quantitySelectorBorder_selected || ""),
        g.style.width = y ? `${y}px` : void 0,
        g.style.border = y ? `2px solid ${_}` : void 0;
        const C = document.createElement("input");
        Object.assign(C, {
            className: `tpo_quantity-selector_input tpo_${S}`,
            id: `${a},dropdown,quantity_selector`
        }),
        m && (C.style.fontFamily = m),
        C.style.fontSize = Number(v) >= 10 ? `${v}px` : "14px",
        C.value = 1,
        s && Number(l) > 1 && (C.value = Number(l),
        C.readOnly = !0);
        const w = document.createElement("span");
        Object.assign(w, {
            className: "tpo_quantity-selector_minus",
            innerHTML: "-",
            onclick: () => wd(C, () => {}
            , t, a, !0)
        });
        const $ = document.createElement("span");
        Object.assign($, {
            className: "tpo_quantity-selector_plus",
            innerHTML: "+",
            onclick: () => vd(C, t, a, !0)
        });
        let L = document.createElement("div");
        Object.assign(L, {
            className: `tpo_error-message tpo_${li.fontStyle}`,
            innerHTML: ""
        }),
        L.style.fontSize = "11px",
        L.style.color = "#D82C0D",
        C.addEventListener("change", k => {
            d && (Sd(k.target, n, f, L) ? g.classList.remove("tpo-error_validate") : g.classList.add("tpo-error_validate"));
            let A = /^(?!00)\d+|0$/
              , R = k.target.value;
            if (A.test(R)) {
                if (R = parseFloat(R || 0),
                (isNaN(R) || R < 0) && (R = 0,
                k.target.value = 0),
                i(),
                o) {
                    const ee = Number(o) * R;
                    i(ee, R, 1)
                } else
                    i(0, R, 1);
                let I = 1;
                const F = k.target.closest(".tpo_option-label");
                if (F) {
                    const ee = F.querySelector(".tpo_option-input.tpo_option-dropdown");
                    if (R === 0 && (k.target.value = 1,
                    ee.value = "",
                    g.classList.add("swatches-not-available-dropdown")),
                    ee && ee.value.trim() !== "" && g.classList.remove("swatches-not-available-dropdown"),
                    ee && ee.value.trim() !== "" || R === 0) {
                        let K = parseInt(k.target.dataset.previousValue || R, 10);
                        d_(R, K, a),
                        I = R
                    }
                }
                k.target.dataset.previousValue = I
            }
        }
        ),
        t.optionDefaultQuantityValue && setTimeout( () => {
            C.value = t.optionDefaultQuantityValue,
            C.dispatchEvent(new Event("change"))
        }
        , 0),
        g.append(w, C, $);
        let P = document.createElement("div");
        return Object.assign(P, {
            className: "dropdown-quantity-selector_wrapper"
        }),
        P.append(g, L),
        {
            quantitySelectorContainer: P
        }
    }
    function oa(t, o, i, a, r, c, d, n= () => {}
    , f=0) {
        const {showTotalSelected: p=!1, hasLimitations: s=!1, minValue: l=1, maxValue: b=1, limitTotalSelected: h=0, isUseCustomIncrement: u=!1, customIncrementValue: x=1, isUseMinMaxSelected: _=!1, minValueTotal: m=1, maxValueTotal: S=1, isShowNewTotalSelected: v=!1, optionTypeDefaultQuantityMapper: y={}} = t
          , {fontFamily: g="", fontStyle: C="", fontSize: w=0} = c
          , $ = document.createElement("div");
        Object.assign($, {
            className: "tpo_quantity-selector_wrapper swatches-not-avaliable"
        }),
        $.style.width = Kt?.quantitySelectorWidth ? `${Kt.quantitySelectorWidth}px` : void 0,
        $.style.border = V?.quantitySelectorBorder_unselected ? `1px solid ${V.quantitySelectorBorder_unselected}` : void 0,
        $.style.borderRadius = Oi?.quantitySelectorBorderRadius ? `${Oi.quantitySelectorBorderRadius}px` : void 0,
        $.style.setProperty("--active-quantitySelector-border", V.quantitySelectorBorder_selected || "");
        const L = document.createElement("input");
        Object.assign(L, {
            className: `tpo_quantity-selector_input tpo_${C}`,
            id: `${r},${a},quantity_selector`
        }),
        g && (L.style.fontFamily = g),
        w && (L.style.fontSize = `${w}px`),
        L.value = 1,
        a && t && t.optionTypeDefaultQuantityMapper && (L.value = t.optionTypeDefaultQuantityMapper[a] || 1),
        u && Number(x) > 1 && (L.value = Number(x),
        L.readOnly = !0);
        const P = document.createElement("span");
        Object.assign(P, {
            className: "tpo_quantity-selector_minus",
            innerHTML: "-",
            onclick: () => wd(L, n, t)
        });
        const k = document.createElement("span");
        Object.assign(k, {
            className: "tpo_quantity-selector_plus",
            innerHTML: "+",
            onclick: () => vd(L, t)
        });
        let A = document.createElement("div");
        return Object.assign(A, {
            className: `tpo_error-message tpo_${li.fontStyle}`,
            innerHTML: ""
        }),
        A.style.fontSize = "11px",
        A.style.color = "#D82C0D",
        L.addEventListener("change", R => {
            const Q = R?.detail;
            s && (Sd(R.target, l, b, A) ? $.classList.remove("tpo-error_validate") : $.classList.add("tpo-error_validate"));
            let I = /^(?!00)\d+|0$/
              , F = R.target.value;
            if (I.test(F)) {
                if (F = parseFloat(F || 0),
                (isNaN(F) || F < 0) && (F = 0,
                R.target.value = 0),
                o) {
                    const K = Number(o) * F;
                    i(K, F)
                } else
                    i(0, F);
                if (!Q) {
                    let K = parseInt(R.target.dataset.previousValue || F, 10);
                    p_(F, K, a),
                    R.target.dataset.previousValue = F
                }
            }
        }
        ),
        Object.keys(y || {}).length && y[a] ? setTimeout( () => {
            L.value = y[a] || 1,
            L.dispatchEvent(new CustomEvent("change",{
                detail: {
                    initDefault: !0
                },
                bubbles: !0
            }))
        }
        , 0) : (d || d === 0) && setTimeout( () => {
            d === 0 ? L.value = 0 : L.value = d || 1,
            L.dispatchEvent(new CustomEvent("change",{
                detail: {
                    initDefault: !0
                },
                bubbles: !0
            }))
        }
        , 0),
        $.append(P, L, k),
        {
            quantitySelectorWrapper: $,
            errorMessageElement: A
        }
    }
    function wd(t, o, i, a, r=!1) {
        const {showTotalSelected: c=!1, hasLimitations: d=!1, minValue: n=1, maxValue: f=1, limitTotalSelected: p=0, isUseCustomIncrement: s=!1, customIncrementValue: l=1, isUseMinMaxSelected: b=!1, minValueTotal: h=1, maxValueTotal: u=1, isShowNewTotalSelected: x=!1} = i
          , _ = Number(t.value);
        s && Number(l) > 1 ? _ > Number(l) ? (t.value = _ - Number(l),
        t.dispatchEvent(new Event("change"))) : _ == Number(t.value) && o() : _ > 1 ? (t.value = _ - 1,
        t.dispatchEvent(new Event("change"))) : _ == 1 && o()
    }
    function vd(t, o, i, a=!1) {
        const {showTotalSelected: r=!1, hasLimitations: c=!1, minValue: d=1, maxValue: n=1, limitTotalSelected: f=0, isUseCustomIncrement: p=!1, customIncrementValue: s=1, isUseMinMaxSelected: l=!1, minValueTotal: b=1, maxValueTotal: h=1, isShowNewTotalSelected: u=!1} = o
          , x = Number(t.value);
        p && Number(s) > 1 ? (t.value = x + Number(s),
        t.dispatchEvent(new Event("change"))) : (t.value = x + 1,
        t.dispatchEvent(new Event("change")))
    }
    function Sd(t, o=1, i, a) {
        let r = /^(?!00)\d+|0$/
          , c = t.value;
        if (r.test(c))
            return c = parseFloat(c || 0),
            c >= o ? !i || i && c <= i ? (a.innerHTML = "",
            !0) : (a.innerHTML = Nn ? ze(Nn, [o, i]) : `Between ${o}-${i}`,
            !1) : (a.innerHTML = Nn ? ze(Nn, [o, i]) : `Between ${o}-${i}`,
            !1);
        if (c)
            return c = c ? parseFloat(c) : "",
            a.innerHTML = lr ? ze(lr, "") : "This input value is not numeric!",
            !1
    }
    function Il() {
        if (!Ep)
            return;
        const t = window.matchMedia("(max-width: 768px)").matches;
        let o = t && On && On.length > 0 ? On : Xc
          , i = t && Pn && Pn.length > 0 ? Pn : rl;
        const a = Array.from(document.querySelectorAll(o));
        Array.from(document.querySelectorAll(i)).forEach( (c, d) => {
            let n = c.querySelectorAll(tf)[0];
            n || (n = c);
            let f = ""
              , p = "";
            const l = (n.closest(Yt) || document.createElement("div")).querySelector(".tpo-feature-product-detail");
            if (l) {
                const b = JSON.parse(l.textContent);
                p = b.id,
                f = b.handle
            } else {
                if (n.dataset.productUrl)
                    f = n.dataset.productUrl.slice(10);
                else if (n.href) {
                    const u = n.href.split("/");
                    f = u[u.length - 1]
                }
                const h = n.closest(".product-card")?.querySelector("a.product-card__link");
                if (h && (f = h.href.split("/products/")[1]),
                !f) {
                    const u = n.closest(Yt);
                    u && (f = u.getAttribute("handle"))
                }
                !f && gt.includes("Expanse") && (f = n.getAttribute("data-handle"))
            }
            f && (n.classList.contains("tpo_quickview_opener") || (n.classList.add("tpo_quickview_opener"),
            n.addEventListener("click", function(b) {
                if (a.length) {
                    const h = a.length > 1 ? a[d] : a[0];
                    if (!p) {
                        const u = h.querySelector('input[name="product-id"]');
                        if (u?.value && /^\d+$/.test(u.value))
                            p = u.value;
                        else {
                            const _ = h.getAttribute("id")?.match(/\d{10,}/);
                            _ && (p = _[0])
                        }
                    }
                    setTimeout(async () => {
                        await qa(h, p, f, !0)
                    }
                    , 2e3)
                } else
                    setTimeout(async () => {
                        const h = document.querySelectorAll(yy)[0];
                        if (!h)
                            return;
                        const u = h.querySelector("script.product-json") || h.querySelector(".tpo-feature-product-detail")
                          , x = JSON.parse(u?.textContent || "{}");
                        if (!x.id)
                            return;
                        let _ = t && nl.length > 0 ? nl : Yc;
                        const m = h.querySelectorAll(_)[0];
                        await qa(m, x.id, f, !0)
                    }
                    , 1500)
            })))
        }
        )
    }
    function Fl(t, o) {
        t && o && (typeof o != "string" ? t.innerHTML = o.join(", ") : t.innerHTML = o,
        o.length ? t.style.marginBottom = "6px" : t.style.marginBottom = "0px")
    }
    function f_() {
        if (ve && kp || (ce || ge) && Cp) {
            const t = ["[class*='card__heading'] a", '[data-pf-type="ProductTitle"]', ".gf_product-title", ".product-card__media", "product-card.product-card product-price"];
            document.querySelectorAll(Yt).forEach(async (i, a) => {
                let r = i.querySelector(t)
                  , c = ""
                  , d = "";
                if (r?.id ? c = r.id.slice(-13) : (r && (c = r.getAttribute("data-product-id")),
                !c && i.querySelector("[data-pid]") && (c = i.querySelector("[data-pid]").getAttribute("data-pid"))),
                r?.href)
                    d = r.href.slice(`https://${Ja}/products/`.length);
                else if (r) {
                    let p = r.getAttribute("data-href");
                    if (p) {
                        const s = p.match(/\/products\/([^?]+)/);
                        s && (d = s[1])
                    }
                }
                if (!d) {
                    const s = i.closest(".product-card")?.querySelector("a.product-card__link");
                    s && (d = s.href.split("/products/")[1]?.split(/[?#]/)[0])
                }
                if (!c) {
                    const p = i.querySelector(".product-card__media ~ button");
                    if (p) {
                        const s = p.getAttribute("aria-controls");
                        s && (c = s.slice(-13))
                    } else {
                        const s = i.querySelector(".product-card__media ~ form");
                        if (s) {
                            const l = s.getAttribute("id");
                            l && (c = l.slice(-13))
                        }
                    }
                }
                let n = i.getAttribute("tpo-product-id")
                  , f = i.getAttribute("tpo-product-handle");
                n && f && (c = n,
                d = f,
                r = f),
                r && c && d ? await qa(i, c, d) : c && (c = i.id.slice(-13),
                await qa(i, c))
            }
            )
        }
    }
    function m_() {
        if (!$p || se)
            return;
        const t = [".featured-product:not(.product-card-wrapper)", '[id*="featured_product"][data-product-url]', '[class="product-section"][data-product-url][data-product-handle]'];
        Array.from(document.querySelectorAll(t) || []).forEach(async i => {
            Ai.forEach(r => {
                const c = i.querySelector(r);
                c && Array.from(c.elements).every(d => d.type === "hidden") && c.setAttribute("id", c.getAttribute("id") + "-installment")
            }
            );
            const a = i.querySelector(".tpo-feature-product-detail");
            if (a) {
                const r = JSON.parse(a.textContent)
                  , {id: c, handle: d} = r;
                await qa(i, c, d)
            } else {
                let r = i.querySelector('a[href*="products/"]:not(.product__thumb)')
                  , c = r?.href.split("/").pop();
                if (r || (c = i.getAttribute("data-product-url")?.split("/").pop()),
                c) {
                    const n = await (await fetch(`${Do}products/${c}.js`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })).json()
                      , {id: f} = n;
                    await qa(i, f, c)
                }
            }
        }
        )
    }
    async function xd(t, o, i) {
        if (!t || !o || !i)
            return meta.product.variants;
        const a = `gid://shopify/Product/${i}`
          , r = `https://${t}/api/2025-07/graphql.json`;
        let c = []
          , d = !0
          , n = null;
        const f = `
    query getProductVariants($id: ID!, $cursor: String) {
      product(id: $id) {
        id
        title
        handle
        descriptionHtml
        variants(first: 250, after: $cursor) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              price { amount currencyCode }
              title
              sku
            }
          }
        }
      }
    }
  `;
        try {
            for (; d; ) {
                const p = await fetch(r, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Shopify-Storefront-Access-Token": o
                    },
                    body: JSON.stringify({
                        query: f,
                        variables: {
                            id: a,
                            cursor: n
                        }
                    })
                });
                if (!p.ok) {
                    const u = await p.json();
                    throw new Error(`HTTP error! Status: ${p.status}, Errors: ${JSON.stringify(u.errors)}`)
                }
                const s = await p.json();
                if (s.errors)
                    throw new Error(`GraphQL Errors: ${JSON.stringify(s.errors)}`);
                const l = s.data.product;
                if (!l)
                    return [];
                const b = l.variants
                  , h = b.edges.map(u => u.node);
                c = c.concat(h),
                d = b.pageInfo.hasNextPage,
                n = b.pageInfo.endCursor
            }
            return c
        } catch (p) {
            throw p
        }
    }
    async function Cd() {
        const t = document.querySelectorAll(Za);
        if (t.length)
            for (let o = 0; o < t.length; o++)
                t[o].addEventListener("click", async function() {
                    await Aa(),
                    Ko(),
                    setTimeout(async () => {
                        await ui()
                    }
                    , 1e3),
                    await Pa(),
                    await Po()
                })
    }
    function __(t, o, i) {
        let a = null;
        const r = new MutationObserver(function(d) {
            a && clearTimeout(a),
            a = setTimeout(async function() {
                let n;
                if (meta.product.variants.length < 250 ? n = meta.product.variants : Dr ? n = Dr : (n = await xd(B, sl(TPOConfigs?.settings?.extraRequirement), meta?.product?.id),
                Dr = n),
                Xu !== window.location.href) {
                    Xu = window.location.href;
                    let f = window.location.href.match(/variant=(\d+)/)
                      , p = f ? f[1] : Zt.variants.find(b => b.available).id.toString()
                      , s = n;
                    s.length > 0 && typeof s[0]?.id == "string" && s.forEach(b => {
                        b.id = b.id.split("/").pop()
                    }
                    );
                    const l = s.find(b => b.id.toString() === p) || s[0];
                    os(t, o, l?.title?.toLowerCase() || l?.public_title?.toLowerCase() || ""),
                    Kn(i)
                } else if (window.Shopify?.theme?.schema_name === "Tailor")
                    document.addEventListener("product:options-change", function(f) {
                        const {variant: p} = f.detail;
                        p && (os(t, o, p?.title?.toLowerCase() || p?.public_title?.toLowerCase() || ""),
                        Kn(i),
                        dt(ke(Ke, $a), Ke))
                    });
                else if (window.EComposer && window.EComposer.TEMPLATE_ID && window.EComposer.TEMPLATE) {
                    let f = document.querySelector(".ecom-product-single-select-id");
                    if (!f)
                        return;
                    f.addEventListener("change", function(p) {
                        let s = this.value;
                        if (!s)
                            return;
                        let l = n;
                        l.length > 0 && typeof l[0]?.id == "string" && l.forEach(h => {
                            h.id = h.id.split("/").pop()
                        }
                        );
                        const b = l.find(h => h.id.toString() === s) || l[0];
                        b && (os(t, o, b?.title?.toLowerCase() || b?.public_title?.toLowerCase() || ""),
                        Kn(i),
                        dt(ke(Ke, $a), Ke))
                    })
                }
            }, 250)
        }
        )
          , c = {
            subtree: !0,
            childList: !0
        };
        r.observe(document, c)
    }
    async function h_(t, o) {
        if (!se)
            return;
        let i;
        meta.product.variants.length < 250 ? i = meta.product.variants : Dr ? i = Dr : (i = await xd(B, sl(TPOConfigs?.settings?.extraRequirement), meta?.product?.id),
        Dr = i);
        let a = window.location.href.match(/variant=(\d+)/)
          , r = a ? a[1] : Zt.variants.find(n => n.available).id.toString()
          , c = i;
        c.length > 0 && typeof c[0]?.id == "string" && c.forEach(n => {
            n.id = n.id.split("/").pop()
        }
        );
        const d = c.find(n => n.id.toString() === r) || c[0];
        os(t, o, d?.title?.toLowerCase() || d?.public_title?.toLowerCase() || ""),
        Gr()
    }
    function os(t, o, i) {
        const a = W.findIndex(c => c?.id === "variant");
        a >= 0 ? W[a] = {
            ...W[a],
            value: i
        } : W = [...W, {
            id: "variant",
            value: i
        }],
        ae.filter(c => c.conditionOptions?.some(d => d.id.includes("variant")) && c.conditionalField).forEach( (c, d) => {
            const {action: n, match: f, id: p, conditionOptions: s} = c;
            let l = f === "ALL";
            s.forEach(m => {
                m.id.includes("variant") && (f === "ALL" ? m.relative === "EQUAL" ? l = l && m.value.toString().toLowerCase() === i : m.relative === "CONTAIN" ? l = l && i.includes(m.value.toString().toLowerCase()) : m.relative === "NOT_CONTAIN" ? l = l && !i.includes(m.value.toString().toLowerCase()) : m.relative === "NOT_EQUAL" ? l = l && m.value.toString().toLowerCase() !== i : m.relative === "START_WITH" ? l = l && i.startsWith(m.value.toString().toLowerCase()) : m.relative === "END_WITH" && (l = l && i.endsWith(m.value.toString().toLowerCase())) : m.relative === "EQUAL" ? l = l || m.value.toString().toLowerCase() === i : m.relative === "CONTAIN" ? l = l || i.includes(m.value.toString().toLowerCase()) : m.relative === "NOT_CONTAIN" ? l = l || !i.includes(m.value.toString().toLowerCase()) : m.relative === "NOT_EQUAL" ? l = l || m.value.toString().toLowerCase() !== i : m.relative === "START_WITH" ? l = l || i.startsWith(m.value.toString().toLowerCase()) : m.relative === "END_WITH" && (l = l || i.endsWith(m.value.toString().toLowerCase())))
            }
            );
            let b = o.querySelector(`[id*="${p}"]`) || document.createElement("div")
              , h = b.querySelectorAll('[name*="properties"]') || []
              , u = b?.getAttribute("id") || "";
            const x = t[d].multi_select;
            f === "ALL" ? l ? n === "SHOW" ? b.classList.contains("tpo_hidden") && (b.classList.remove("tpo_hidden"),
            Fi(u, "show", x),
            h.forEach(m => ia(m)),
            rt.indexOf(u) !== -1 && rt.splice(rt.indexOf(u), 1),
            Fe = Fe.filter(function(m) {
                return m !== u
            })) : b.classList.contains("tpo_hidden") || (b.classList.add("tpo_hidden"),
            Fi(u, "hide", x),
            h.forEach(m => Oo(m)),
            rt.indexOf(u) === -1 && rt.push(u),
            Fe.indexOf(u) === -1 && Fe.push(u)) : n === "SHOW" ? b.classList.contains("tpo_hidden") || (b.classList.add("tpo_hidden"),
            Fi(u, "hide", x),
            h.forEach(m => Oo(m)),
            rt.indexOf(u) === -1 && rt.push(u),
            Fe.indexOf(u) === -1 && Fe.push(u)) : b.classList.contains("tpo_hidden") && (b.classList.remove("tpo_hidden"),
            Fi(u, "show", x),
            h.forEach(m => ia(m)),
            rt.indexOf(u) !== -1 && rt.splice(rt.indexOf(u), 1),
            Fe = Fe.filter(function(m) {
                return m !== u
            })) : l ? n === "SHOW" ? b.classList.contains("tpo_hidden") && (b.classList.remove("tpo_hidden"),
            Fi(u, "show", x),
            h.forEach(m => ia(m)),
            rt.indexOf(u) !== -1 && rt.splice(rt.indexOf(u), 1),
            Fe = Fe.filter(function(m) {
                return m !== u
            })) : b.classList.contains("tpo_hidden") || (b.classList.add("tpo_hidden"),
            Fi(u, "hide", x),
            h.forEach(m => Oo(m)),
            rt.indexOf(u) === -1 && rt.push(u),
            Fe.indexOf(u) === -1 && Fe.push(u)) : b.classList.contains("tpo_hidden") || (b.classList.add("tpo_hidden"),
            Fi(u, "hide", x),
            h.forEach(m => Oo(m)),
            rt.indexOf(u) === -1 && rt.push(u),
            Fe.indexOf(u) === -1 && Fe.push(u));
            const _ = W.find(m => m.id === b.id);
            _ && (typeof _.value == "string" ? Ct(ne, b.id, "", _.value) : Ct(ne, b.id, "", _.value, _.value))
        }
        )
    }
    function y_(t) {
        return se ? t.filter(o => o.conditions_serialized && o.conditions_serialized.conditionOptions ? o.conditions_serialized.conditionOptions.some(i => i.id.includes("variant")) : !1) : null
    }
    function kd(t) {
        let o = t.match(/\{([A-Za-z]+(?:-[A-Za-z]+)?)\}/);
        return o ? o[1].toLowerCase() === xt.toLowerCase() : !0
    }
    function g_() {
        if (!zi.includes(gt))
            return;
        const t = new MutationObserver( () => {
            document.querySelectorAll(rl).forEach(a => {
                (a.querySelector(tf) || a).classList.contains("tpo_quickview_opener") || Il()
            }
            )
        }
        )
          , o = {
            subtree: !0,
            childList: !0
        };
        t.observe(document, o)
    }
    if (!di) {
        let o = function() {
            const i = {
                childList: !0,
                subtree: !0
            }
              , a = async (c, d) => {
                let n = Array.from(c[0].addedNodes);
                const f = [...za];
                let p = c[0].target;
                const s = ["span.cart__price", ".ajax-cart__item-details", ".cart-count", ".mini-cart__product-info", "p.cart__price", "strong.price__current", "span.price__regular", ".money.cart-item-line-price.cart-item-final-line-price", ".item-info__price span.money", "span.amount", ".ajaxcart-item__price span.money", ".scd-item__original-price.scd-item__price"];
                B === "elarceilingfans.myshopify.com" && s.push(".product-price");
                const l = Array.from(vi.querySelectorAll(s));
                (n.includes(vi.querySelector(f)) || l.includes(p)) && setTimeout(async () => {
                    await Jn(),
                    await ui()
                }
                , 1e3)
            }
            ;
            new MutationObserver(a).observe(vi, i)
        };
        var Jy = o;
        async function t(i) {
            if (document.readyState !== "loading") {
                await i(),
                window.easifyOnElementLoadShowOptionSetQuickView = async function() {
                    await Il()
                }
                ,
                window.easifyShowOptionSetOnCustomElement = async function(a, r, c) {
                    await qa(a, r, c),
                    jl()
                }
                ,
                window.easifyShowCartDrawerAfterPageLoad = function() {
                    if (B && window.location.href.endsWith("?addToCart=true")) {
                        const a = document.querySelector(Za);
                        if (!a)
                            return;
                        let r = new CustomEvent("click",{
                            bubbles: !0,
                            cancelable: !0
                        });
                        a.dispatchEvent(r)
                    }
                }
                ,
                window.easifyHandleCalculateCart = async function() {
                    await ui()
                }
                ,
                window.easifyHandleUpdateCartWithAddonProduct = async function() {
                    await Po()
                }
                ,
                window.getEasifyProperties = function() {
                    return aa()
                }
                ,
                window.easifyLoadAndRenderProductImageCanvasFrame = async function() {
                    await Xr({
                        optionSet: ti[0]
                    }),
                    document.dispatchEvent(new Event("easify:render-canvas"))
                }
                ;
                return
            }
            document.addEventListener("DOMContentLoaded", i)
        }
        await t(async function() {
            Ko(),
            await wr(),
            await Aa(),
            await Pa(),
            await Po(),
            await Il(),
            await f_(),
            await m_(),
            C_(),
            setTimeout(async () => {
                await Cd(),
                await ui(),
                document.dispatchEvent(new Event("tpo_loaded"))
            }
            , 500),
            g_()
        }),
        Wo && B !== "embroplacestore.myshopify.com" && o()
    }
    function b_() {
        setTimeout(async () => {
            await Aa(),
            await Pa(),
            await Po(),
            await ui(),
            await Jn()
        }
        , 500)
    }
    function w_() {
        const {cartDrawerElements: t} = Ea();
        for (let o = 0; o < t.length; o++) {
            const i = t[o];
            new window.IntersectionObserver( ([r]) => {
                r.isIntersecting && b_()
            }
            ,{
                root: null,
                threshold: .1
            }).observe(i)
        }
    }
    By && w_();
    function xo(t) {
        return Number.isFinite(t) && t % 1 !== 0
    }
    function vr(t, o, i) {
        let a = document.createElement("div");
        Object.assign(a, {
            className: `tpo_quantity_selector_total-wrapper ${i === "min_max_not_count" ? "tpo_hidden" : ""}`,
            innerHTML: `
                            <span class="tpo_quantity_selector_total-label">${o || "You've chosen:"}</span> 
                            <span class="tpo_quantity_selector_total-content ${i}">
                                <span class="tpo_quantity_selector_total-selected">0</span>
                            ${t.configs.limitTotalSelected && i === "exact_count" ? `/<span class="tpo_quantity_selector_total-limit">${t.configs.limitTotalSelected}</span>` : ""}</span>
                        `
        });
        let r;
        return (i === "min_max_count" || i === "min_max_not_count") && (r = document.createElement("div"),
        Object.assign(r, {
            className: `tpo_error-message tpo_${li.fontStyle}`,
            innerHTML: ""
        })),
        {
            totalQuantitySelectorElementWrapperRender: a,
            errorTotalElementRender: r
        }
    }
    function Na({imageOrColor: t, numberColor: o, swatchShape: i, colorCodes: a, imageUrl: r, product: c, label: d, imgElement: n, onlyReturnColor: f}) {
        let p = "";
        if (t === 2 || t === 0 && (!r || r && (r === Dt || r === wo)))
            return null;
        if (t === 1) {
            if (o === 1)
                p = `<div class='tpo_color-swatches-wrapper'>
            <label class='tpo_shape_${i}'>
                <div><span style='background-color: ${a[0]}'></span></div>
            </label>
            </div>`;
            else if (o === 2)
                p = `<div class='tpo_color-swatches-wrapper'>
            <label class='tpo_shape_${i}'>
                <div>
                    <span style='background-color: ${a[0]}'></span>
                    <span style='background-color: ${a[1]}'></span>
                </div>
            </label>
            </div>`;
            else if (o === 3)
                return null;
            return p
        }
        return f ? p : n || (r && r !== Dt && r !== wo ? `<img src='${Ma(c, r)}' loading='lazy' alt='${d.replace(/'/g, "&#39;")}' />` : "")
    }
    function Ma(t, o) {
        if (t?.image) {
            const i = `https:${t?.image}`
              , a = t?.variants && t?.variants[0]?.featured_image ? t.variants[0]?.featured_image.src : "";
            return a || i || o
        }
        return o
    }
    const as = document.querySelector(".rbr-addBundleBtn-container");
    as && (as.onclick = async function() {
        setTimeout(async function() {
            if (!as.querySelector(".rbr-loader"))
                return;
            window.stop();
            let o = await Ii();
            const i = o.items.findIndex(p => p.product_id == Zt?.id);
            if (i < 0)
                return;
            const r = o.items[i].key
              , d = as.closest(".product__info-container").querySelectorAll(["input", "textarea"])
              , n = {};
            d.forEach( (p, s) => {
                const l = p?.name
                  , b = p?.value;
                if (b && l && l.includes("properties")) {
                    const h = l.slice(11, -1);
                    n[h] = b
                }
            }
            ),
            await fetch("/cart/change.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: r,
                    properties: n
                })
            }),
            window.location.reload()
        }, 1e3)
    }
    );
    async function v_() {
        window.Appointo && await _r()
    }
    async function S_(t) {
        let i = await (await fetch("/cart.js?app=tpo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })).json();
        i.attributes && Object.entries(i.attributes).length && (t.cart.attributes = i.attributes)
    }
    function Ia(t) {
        return Ks ? (document.dispatchEvent(new CustomEvent("easify:ajaxCart",{
            detail: {
                cartItem: t
            }
        })),
        setTimeout(async () => {
            await Po()
        }
        , 500),
        !0) : !1
    }
    function x_() {
        return window.navigator.userAgent.lastIndexOf("iPhone; CPU iPhone OS") !== -1 || window.navigator.userAgent.lastIndexOf("iPad; CPU OS") !== -1
    }
    function Dl(t, o) {
        if (!t)
            return !1;
        let i = t ? window.location.href === o : !1;
        if (!i) {
            let a = /\/products\/([^\/?]+)/
              , r = window.location.href.match(a)
              , c = o.match(a)
              , d = r ? r[1] : window.location.href;
            (c ? c[1] : o) === d && (i = !0)
        }
        return i
    }
    function Fa(t, o) {
        if (!t)
            return o;
        let i = o
          , a = Zt?.title.toLowerCase().replace(/\s+/g, "-") || ""
          , r = Zt?.handle || ""
          , c = Do !== "/" ? Do.replace(/\//g, "") : ""
          , d = /\{product_handle\(([^)]+)\)\}/
          , n = /\{product_handle_exclude\(([^)]+)\)\}/;
        if (o && o.includes("{product_name}") && a && (i = o.replace(/{product_name}/g, a)),
        o && o.includes("{product_handle(") && r) {
            const f = o.match(d);
            if (f) {
                const p = f[1]
                  , s = new RegExp(`^(.*?)(?:${p})$`)
                  , l = r.match(s);
                l && (i = o.replace(d, l[1]))
            }
        }
        if (o && o.includes("{product_handle_exclude(") && r) {
            const f = o.match(n);
            if (f) {
                const p = f[1]
                  , s = new RegExp(`^(.*?)(?:${p})`)
                  , l = r.match(s);
                l && (i = o.replace(n, l[1]))
            }
        }
        return o && o.includes("{product_name_exclude_hyphen}") && a && (a = Zt?.title.toLowerCase().split(" - ")[0].replace(/\./g, "").replace(/\s+/g, "-") || "",
        i = o.replace(/{product_name_exclude_hyphen}/g, a)),
        o && o.includes("{product_name_exclude_parentheses}") && a && (a = Zt?.title.toLowerCase().split(" (")[0].replace(/\./g, "").replace(/\s+/g, "-") || "",
        i = o.replace(/{product_name_exclude_parentheses}/g, a)),
        o && o.includes("{lang}") && (c ? i = o.replace(/{lang}/g, c) : i = o.replace(/\/{lang}/g, "")),
        i
    }
    function C_() {
        if (!mt.dataset.isRenderOptionSet)
            return;
        const t = document.querySelectorAll(er.atcButton);
        !t.length || !mt || t.forEach(o => {
            o.classList.contains("tpo_sticky-atc") || (o.classList.add("tpo_sticky-atc"),
            o.addEventListener("click", i => {
                i.preventDefault(),
                i.stopPropagation(),
                mt.setAttribute("stickyAdd", "true"),
                mt.dispatchEvent(new Event("click")),
                mt.removeAttribute("stickyAdd")
            }
            ))
        }
        )
    }
    function Sr(t, o) {
        if (!Io)
            return;
        const i = [];
        o.forEach(a => {
            a && a.checked && i.push({
                printBoxName: a.dataset.printBoxName,
                printBoxValue: a.dataset.printBoxValue
            })
        }
        ),
        t.dataset.printBox = JSON.stringify(i)
    }
    function Ed(t, o) {
        let i = "", a;
        const r = o.findIndex(c => {
            if (!c.metadata)
                return !1;
            const d = JSON.parse(c.metadata || "{}");
            if (!d.useDimensionDropdownPricing)
                return !1;
            const n = d.linkedDropdowns;
            if (!n || !n.length)
                return !1;
            const f = n.findIndex( ({id: p}) => p.length > 0 && t.id.includes(p));
            return f < 0 ? !1 : (i = n[f].formula,
            a = n[f].tablePricing,
            !0)
        }
        );
        return r < 0 ? "" : {
            dimensionId: o[r].id,
            tablePricing: a,
            formula: i
        }
    }
    function xr(t, o, i) {
        const a = t.dimensionId
          , r = t.dimensionFormula
          , c = t.tablePricing;
        if (!a || !r)
            return 0;
        const d = document.querySelector(`[id*="${a}"]`);
        if (!d)
            return 0;
        let n = d.querySelector('[data-tpo-dimension="x"]')?.value || 0
          , f = d.querySelector('[data-tpo-dimension="y"]')?.value || 0
          , p = d.querySelector('[data-tpo-dimension="z"]')?.value || 0;
        const s = ad({
            xValue: n,
            yValue: f,
            zValue: p,
            tablePricing: c
        })
          , {valid: l, tablePrice: b} = s;
        return o.dataset.tablePriceValid = Number(l),
        od({
            xValue: n,
            yValue: f,
            zValue: p,
            formula: r,
            price: i,
            tablePrice: b
        }) / 100
    }
    function k_(t, o) {
        yr( () => {
            t.forEach( ({id: a}) => {
                const r = o.parentElement.querySelector(`[id*="${a}"]`);
                if (!r)
                    return;
                r.querySelectorAll([".tpo_option-type-selection", ".container-wrap-selection"]).forEach(d => d.dispatchEvent(new Event("updateDimensionPricing")))
            }
            )
        }
        , 300)()
    }
    async function E_(t) {
        if (!ly)
            return;
        const {template: o, rule: i, target: a, mainProduct: r} = t;
        if (!a)
            return;
        let c, d;
        switch (o) {
        case "product":
            const n = a.closest(Yt);
            if (!n)
                return;
            let f = n.querySelector(go) || n.parentElement.querySelector(go);
            if (!f)
                return;
            c = ci(f.innerText);
            break;
        case "cart":
            c = r.presentment_price || r.price / 100;
            break
        }
        d = $_(c, i),
        a.innerHTML = PriceFormatter.formatMoney(parseFloat(d), !0)
    }
    function $_(t, o) {
        return o.type === "percentage" ? t * (100 - o.value) : (t - o.value) * 100
    }
    function T_(t) {
        if (!t)
            return 1;
        const o = t.closest([...Yt, ...er.wrapper]);
        if (!o)
            return 1;
        let i = o.querySelector(Fc);
        return i ? parseInt(i.value) : 1
    }
    function Ao(t, o, i) {
        const a = JSON.parse(t || "{}");
        i && i.some(c => c.product_handle !== null && c.product_handle !== "") && (o.dataset.addOnProduct = !0),
        a.enable && (o.dataset.oneTimeCharge = !0)
    }
    function $d() {
        if (!window.Zapiet)
            return !0;
        const t = document.querySelector("#storePickupApp .checkoutMethodContainer.delivery #deliveryGeoSearchField");
        return !t || window.ZapietCheckoutEnabled ? !0 : (t.classList.contains("tpo_custom") || (t.classList.add("tpo_custom"),
        t.addEventListener("blur", function() {
            setTimeout( () => {
                window.ZapietCheckoutEnabled && hr()
            }
            , 1e3)
        })),
        !1)
    }
    function L_() {
        return (pp ? cp : lp).trim()
    }
    function O_(t="en-US") {
        if (!$o)
            return {
                decimal: ".",
                group: ","
            };
        if (window.TPOGlobal && window.TPOGlobal.currencySeparator && window.TPOGlobal.currencySeparator[t])
            return window.TPOGlobal.currencySeparator[t];
        const i = Intl.NumberFormat(t).formatToParts(10000.1);
        return {
            decimal: i.find(a => a.type === "decimal")?.value || ".",
            group: i.find(a => a.type === "group")?.value || ","
        }
    }
    function Td(t) {
        if (!Uy)
            return;
        const {target: o, showLabel: i=!1, position: a="after", beforeWholesale: r, totalPriceAfter: c, section: d} = t;
        if (!o)
            return;
        const {productPrice: n, additionalPrice: f} = r;
        let p = 0;
        if (d === "main-product-price" ? p = n + f : (p = In === "include" ? n + f : f,
        P_(o, p, c)),
        c >= p) {
            const x = o.parentElement?.querySelector(":scope >.tpo_original_price_wrapper");
            x && x.remove();
            const _ = o.parentElement?.querySelector(":scope >.tpo_wholesale_discount_percentage");
            _ && _.remove();
            return
        }
        let s = PriceFormatter.formatMoney(parseFloat(p), !0);
        if (!s)
            return;
        const l = document.createElement("del");
        Object.assign(l, {
            className: "tpo_original_price",
            innerHTML: s
        });
        const b = document.createElement("span");
        Object.assign(b, {
            className: `tpo_original_price_label ${i ? "" : "tpo_hidden"}`,
            innerHTML: ze(Wf)
        });
        const h = document.createElement("p");
        Object.assign(h, {
            className: "tpo_original_price_wrapper"
        }),
        h.append(b, l);
        const u = o.parentElement?.querySelector(":scope >.tpo_original_price_wrapper");
        u ? u.replaceWith(h) : a === "after" ? o.insertAdjacentElement("afterend", h) : o.insertAdjacentElement("beforebegin", h)
    }
    function P_(t, o, i) {
        const a = Math.round((1 - i / o) * 100)
          , r = document.createElement("span");
        Object.assign(r, {
            className: "tpo_wholesale_discount_percentage",
            innerHTML: `-${a}% `
        });
        const c = t.parentElement?.querySelector(":scope >.tpo_wholesale_discount_percentage");
        c ? c.replaceWith(r) : t.insertAdjacentElement("beforebegin", r)
    }
    function jl() {
        const t = document.querySelectorAll(".tpo-swiper.swiper");
        t && t.length > 0 && t.forEach( (o, i) => {
            const a = o.getAttribute("data-swiperId")
              , r = Number(o.getAttribute("data-numberofrowsdesktop") || o.getAttribute("data-numberofrows") || 1)
              , c = Number(o.getAttribute("data-numberofrowsmobile")) || r
              , d = Number(o.getAttribute("data-swatchesperrowdesktop") || o.getAttribute("data-swatchesperrow") || 3.5)
              , n = Number(o.getAttribute("data-swatchesperrowmobile")) || d
              , f = o.getAttribute("data-showindicators") === "true";
            window.TPO_Swiper && new TPO_Swiper(`.swiper.swiper-${a}`,{
                spaceBetween: 12,
                speed: 500,
                parallax: !0,
                navigation: {
                    nextEl: ".tpo-swiper-button-next",
                    prevEl: ".tpo-swiper-button-prev"
                },
                pagination: f ? {
                    el: ".tpo-swiper-pagination",
                    type: "bullets",
                    clickable: !0
                } : !1,
                breakpoints: {
                    0: {
                        slidesPerView: n,
                        slidesPerGroup: Math.floor(n),
                        grid: {
                            fill: "row",
                            rows: c
                        }
                    },
                    768: {
                        slidesPerView: d,
                        slidesPerGroup: Math.floor(d),
                        grid: {
                            fill: "row",
                            rows: r
                        }
                    }
                }
            })
        }
        )
    }
    function Ld(t) {
        const o = document.querySelector("#bookeasy-product-properties");
        if (!o)
            return;
        o.querySelectorAll("input").forEach(a => {
            if (a.disabled)
                return;
            const r = a.name.match(/\[(.*?)\]/);
            if (!r)
                return;
            const c = r[1]
              , d = a.value;
            d && typeof d != "object" && (t.properties[c] = d)
        }
        )
    }
    function A_(t, o=_i) {
        const i = Array.from(document.getElementsByClassName(o));
        i.length && i.forEach(a => {
            a.innerHTML = t.outerHTML
        }
        )
    }
    function aa() {
        const t = {};
        try {
            const o = new FormData(Ke);
            return Array.from(Ke.elements).filter(a => !a.disabled && a.name && a.name.includes("properties")).forEach(a => {
                const r = a.name.match(/\[(.*?)\]/);
                if (!r)
                    return;
                const c = r[1]
                  , d = o.get(a.name);
                if (d && typeof d != "object")
                    if (kn && a?.classList?.contains("tpo_file-upload-input")) {
                        const n = / \[ (.*?) ]/
                          , f = d.match(n);
                        let p, s = null;
                        f && f[1] && (s = f[1],
                        p = d.replace(n, "").trim());
                        const l = `_${c}_price-tpo`;
                        s ? (t[l] = s,
                        t[c] = p) : t[c] = d
                    } else
                        t[c] = d
            }
            ),
            t
        } catch {
            return {}
        }
    }
    function rs(t) {
        if (!t)
            return !0;
        let o = t.querySelectorAll("[data-table-price-valid]");
        if (!o.length) {
            const a = t.closest(Yt);
            a && (o = a.querySelectorAll("[data-table-price-valid]"))
        }
        if (!o.length)
            return !0;
        const i = Array.from(o).every(a => a.dataset.tablePriceValid !== "0");
        return i || dt(i, t),
        i
    }
    function Bl(t) {
        const o = document.createElement("div");
        o.classList.add("dimension-dropdown__error__wrapper"),
        o.innerHTML = t;
        const i = new TpoModal(o,!0);
        i.setOverlayClass(po ? "in-dark-mode" : "in-light-mode"),
        i.setModalWidth(400),
        i.render(),
        i.open()
    }
    function q_() {
        if (!se)
            return;
        ba.productPageSelector?.variants && (Fo = [...Fo, ba.productPageSelector.variants]);
        const t = document.querySelector(Fo);
        if (t) {
            const o = t.querySelectorAll('input[type="radio"]');
            o.length > 0 && Array.from(o).forEach(i => {
                i.addEventListener("change", () => {
                    setTimeout( () => {
                        document.querySelector(".tpo_option-set-container") || ll()
                    }
                    , 500)
                }
                )
            }
            )
        }
    }
    (gt.includes("Prestige") || gt.includes("Impact")) && q_();
    function N_(t, o) {
        if (!t || !o)
            return;
        const {initialWidth: i, initialHeight: a} = o.getAttrs()
          , r = t.offsetWidth / i
          , c = t.offsetHeight / a
          , d = Math.min(r, c);
        o.width(i * d + 1),
        o.height(a * d + 1),
        o.scale({
            x: d,
            y: d
        })
    }
    function Hl(t, o=!1, i="", a=1) {
        const {childImageSelector: r, firstChildImageSelector: c, firstChildImageSelectorMobile: d} = Wl()
          , n = document.querySelector(".tpo_canvas_builder");
        let f;
        if (o && (i === "LAST_IMAGE" || i === "SPECIFIC_IMAGE")) {
            const p = d.length > 0 && window.matchMedia("(max-width: 959px)").matches ? d : r
              , s = Array.from(document.querySelectorAll(p));
            f = i === "LAST_IMAGE" ? s?.reverse()[0] : s?.[+a - 1],
            window.matchMedia("(max-width: 750px)").matches ? (n.style.removeProperty("top"),
            n.style.removeProperty("left"),
            n.style.removeProperty("right")) : (n.style.top = `${f.offsetTop}px`,
            n.style.left = `${f.offsetLeft}px`,
            +a != 1 && (n.style.right = "unset"))
        } else
            f = document.querySelector(c),
            d.length > 0 && window.matchMedia("(max-width: 959px)").matches && (f = document.querySelector(d));
        N_(f, t)
    }
    function M_(t) {
        const o = new Konva.Layer({
            id: "tpo_transformer_layer"
        })
          , i = new Konva.Transformer({
            id: "tpo_canvas_transformer",
            anchorStyleFunc: a => {
                (a.hasName("top-center") || a.hasName("bottom-center")) && (a.height(6),
                a.offsetY(3),
                a.width(20),
                a.offsetX(10)),
                (a.hasName("middle-left") || a.hasName("middle-right")) && (a.height(20),
                a.offsetY(10),
                a.width(6),
                a.offsetX(3))
            }
            ,
            anchorCornerRadius: 12,
            anchorSize: 8,
            padding: 0,
            flipEnabled: !1,
            boundBoxFunc: (a, r) => Math.abs(r.width) < 5 || Math.abs(r.height) < 5 ? a : r
        });
        o.add(i),
        t.add(o),
        t.on("click tap", function(a) {
            const r = a.target;
            if (r === t) {
                i.nodes([]);
                return
            }
            const c = a.evt.shiftKey || a.evt.ctrlKey || a.evt.metaKey
              , d = i.nodes().indexOf(r) >= 0;
            if (r.getAttr("allowTransform")) {
                if (!c && !d) {
                    const {id: f, height: p, nodeType: s, allowTransformSizeType: l} = r.getAttrs();
                    switch (s) {
                    case "TEXT_AREA":
                        l !== "DEDICATED_UNDER_TEXT_FIELD" ? i.enabledAnchors(["middle-left", "middle-right", "top-center", "bottom-center", "top-left", "top-right", "bottom-left", "bottom-right"]) : i.enabledAnchors(["middle-left", "middle-right", "top-center", "bottom-center"]),
                        r.on("transform", u => {
                            switch (i.getActiveAnchor()) {
                            case "middle-left":
                            case "middle-right":
                            case "top-center":
                            case "bottom-center":
                                r.setAttrs({
                                    width: Math.max(5, r.width() * r.scaleX()),
                                    height: Math.max(p, r.height() * r.scaleY()),
                                    scaleX: 1,
                                    scaleY: 1
                                }),
                                r.setAttr("fontSize", r.getAttr("currentFontSize") || r.getAttr("inputFontSize"));
                                break;
                            default:
                                if (l === "LIVE_PREVIEW_ONLY")
                                    r.setAttr("currentFontSize", r.fontSize() * Math.max(r.scaleX(), r.scaleY()));
                                else {
                                    const _ = document.getElementById(`tpo-input-change-size-${f}`)
                                      , m = r.getAttr("inputFontSize") * Math.max(r.scaleX(), r.scaleY());
                                    r.setAttrs({
                                        currentFontSize: m
                                    }),
                                    _.value = m.toFixed(1)
                                }
                                break
                            }
                        }
                        ),
                        i.nodes([r]);
                        break;
                    case "TEXT":
                        if (i.enabledAnchors(["top-left", "top-right", "bottom-left", "bottom-right"]),
                        l !== "LIVE_PREVIEW_ONLY") {
                            const {text: u, fontFamily: x, text_align: _, maxWidthEnabled: m, maxWidth: S, defaultFontSize: v} = r.getAttrs();
                            r.on("transform", y => {
                                const g = document.getElementById(`tpo-input-change-size-${f}`)
                                  , C = r.scaleX()
                                  , w = r.scaleY()
                                  , L = Math.abs(C - 1) > .01 || Math.abs(w - 1) > .01 ? (v || r.fontSize()) * Math.max(C, w) : v || r.fontSize()
                                  , P = ao(u, x, L, r.getLayer().getContext());
                                m || (r.setAttrs({
                                    fontSize: L,
                                    offsetY: L / 2,
                                    offsetX: _ === "center" ? P / 2 : _ === "left" ? 0 : P
                                }),
                                g && (g.value = L.toFixed(1)))
                            }
                            )
                        }
                        break;
                    case "IMAGE":
                        const h = r.getAttr("lock") ? [] : ["middle-left", "middle-right", "top-center", "bottom-center"];
                        i.enabledAnchors(["top-left", "top-right", "bottom-left", "bottom-right", ...h]),
                        r.on("transform", () => {
                            const u = r?.scaleX()
                              , x = r?.scaleY()
                              , _ = Math.round(Math.max(5, r.width() * u))
                              , m = Math.round(Math.max(r.height() * x));
                            r.setAttrs({
                                width: _,
                                height: m,
                                scaleX: 1,
                                scaleY: 1
                            })
                        }
                        );
                        break
                    }
                    if (r.getAttr("isNodeChildren")) {
                        i.enabledAnchors(["top-left", "top-right", "bottom-left", "bottom-right"]);
                        const b = r.parent;
                        b.getAttr("allowTransformSizeType") !== "LIVE_PREVIEW_ONLY" && b.on("transform", h => {
                            const {id: u, fontFamily: x, textSize: _, textValue: m, arc: S, defaultColor: v, fontSize: y, defaultFontSize: g} = b.getAttrs()
                              , C = b.getAttr("circular")
                              , w = document.getElementById(`tpo-input-change-size-${u}`)
                              , $ = b.scaleX()
                              , L = b.scaleY()
                              , k = Math.abs($ - 1) > .01 || Math.abs(L - 1) > .01 ? (g || y) * Math.max($, L) : g || y;
                            b.setAttr("fontSize", k),
                            b.destroyChildren(),
                            C ? Er(b, m, x, S, _, v, k / _) : kr(b, m, x, S, _, v, k / _),
                            w && (w.value = k.toFixed(1))
                        }
                        ),
                        i.nodes([b])
                    } else
                        i.nodes([r])
                } else if (c && d) {
                    const f = i.nodes().slice();
                    f.splice(f.indexOf(r), 1),
                    i.nodes(f)
                } else if (c && !d) {
                    const f = i.nodes().concat([r]);
                    i.nodes(f)
                }
            }
        })
    }
    function I_(t, o) {
        o?.parentElement?.classList.contains("konvajs-content") || t?.findOne("#tpo_canvas_transformer")?.nodes([])
    }
    function Wl(t) {
        const o = [".product__media-wrapper .product__media-list:not(.tpo_ignore)", ".product-gallery__media-list:not(.tpo_ignore)", ".media-gallery .media-gallery__inner:not(.tpo_ignore)", ".media-gallery__viewer .media-viewer:not(.tpo_ignore)", ".product-gallery .product-gallery--viewer:not(.tpo_ignore)", ".product__photos .product__main-photos:not(.tpo_ignore)", ".preview-card-container:not(.tpo_ignore)", ".product-information__media:not(.tpo_ignore)"]
          , i = [".product__media-wrapper .product__media-list .product__media-item.is-active:not(.tpo_ignore)", ".product__photos .product__main-photos .product-main-slide.is-selected:not(.tpo_ignore)", ".product-gallery__media-list .product-gallery__media.is-selected:not(.tpo_ignore)", '.product-gallery .product-gallery--viewer .product-gallery--image[data-gallery-selected="true"]:not(.tpo_ignore)', '.media-gallery--carousel slideshow-container .product-media-container--image[aria-hidden="false"]:not(.tpo_ignore)', ".media-gallery__grid .product-media-container--image:not(.tpo_ignore)", ".media-gallery__viewer .media-viewer .media-viewer__item.is-current-variant:not(.tpo_ignore)", ".media-gallery .media-gallery__inner .slider__item.is-active .product-media--image:not(.tpo_ignore)", ".product__media-wrapper .product__media-list .splide__slide.is-active.is-visible:not(.tpo_ignore)"]
          , a = [".product__media-wrapper .product__media-list .product__media-item:not(.tpo_ignore)", ".product-gallery__media-list .product-gallery__media:not(.tpo_ignore)", ".media-gallery__grid .product-media-container--image:not(.tpo_ignore)", ".product-gallery .product-gallery--viewer .product-gallery--image:not(.tpo_ignore)", ".productView-image-wrapper .productView-nav .productView-image:not(.tpo_ignore)", ".rio-media-gallery .pwzrswiper-wrapper .pwzrswiper-slide:not(.tpo_ignore)", ".product-gallery-container .product-gallery-mobile-container.active .gallery-slide:not(.tpo_ignore)", ".product-gallery-container .product-gallery-desktop.active .gallery-image-container:not(.tpo_ignore)", "product-slider .product-images__slide:not(.tpo_ignore)", ".tpo-image-selector__child"]
          , r = [".product__thumbs .product__thumb-item:not(.tpo_ignore)", ".product__media-wrapper .product__media-list .product__media-item:not(.tpo_ignore)", ".media-gallery__grid .product-media-container--image:not(.tpo_ignore)", ".media-gallery--carousel slideshow-container .product-media-container--image:not(.tpo_ignore)", ".thumbnail-list .thumbnail-list__item .thumbnail:not(.tpo_ignore)", ".product__thumb-item .product__thumb:not(.tpo_ignore)", ".product-gallery--media-thumbnail:not(.tpo_ignore)", ".media-thumbs__item .media-thumbs__btn:not(.tpo_ignore)", ".thumbnails .slider__grid .slider__item:not(.tpo_ignore)", ".thumbnail-list__item.splide__thumbnail.is-active.is-visible:not(.tpo_ignore)", ".slideshow-controls__thumbnails-container .slideshow-controls__thumbnails .slideshow-control:not(.tpo_ignore)"]
          , {livePreviewParentSelector: c, livePreviewFirstChildImageSelector: d, livePreviewFirstChildImageSelectorMobile: n, livePreviewImageThumbSelector: f, livePreviewImageThumbSelectorMobile: p} = ba?.productPageSelector || {};
        return c && ((gt === "Sleek" || gt === "San Francisco" || gt === "Swipe") && o.shift(),
        o.unshift(...c.split(", "))),
        d && ((B === "medicid-store.myshopify.com" || B === "hisenher-com.myshopify.com" || B === "jehz1u-gb.myshopify.com") && i.shift(),
        i.unshift(...d.split(", "))),
        f && r.unshift(...f.split(", ")),
        {
            parentSelector: o,
            firstChildImageSelector: i,
            childImageSelector: a,
            firstChildImageSelectorMobile: n ? n?.split(", ") : [],
            thumbImageSelector: r,
            thumbImageSelectorMobile: p ? p?.split(", ") : []
        }
    }
    async function Xr({optionSet: t, productHandle: o=Zt?.handle, isProductPage: i=!0, isPopupModal: a=!1}) {
        if (!window?.Konva && !window?.Konva?.stages || !window.TPOConfigs?.appLivePreview && !o || window?.Konva?.stages.length === 1 && !a && !window.TPOConfigs?.appLivePreview || (a && (window?.Konva?.stages?.[0]?.destroy(),
        window?.Konva?.stages?.pop(),
        document.querySelector(".tpo_canvas_builder")?.remove()),
        !t || !t.options))
            return;
        const r = window.TPOConfigs?.appLivePreview ? Zt : await If(o)
          , d = [...[...t.options].filter( ({live_preview_transform: u}) => {
            const x = u && typeof u == "string" ? JSON.parse(u) : u;
            return x && x?.enabled
        }
        )].sort( (u, x) => u.sortOrder - x.sortOrder);
        wn = d.map( (u, x) => u.id);
        const f = (t?.additional_data && typeof t?.additional_data == "string" ? JSON.parse(t?.additional_data) : t?.additional_data)?.live_preview_background || {}
          , p = document.createElement("div");
        p.classList.add("tpo_canvas_builder"),
        (gt.includes("Prestige") || gt.includes("Stiletto")) && p.classList.add("tpo_canvas_custom_theme");
        const {parentSelector: s, firstChildImageSelector: l} = Wl()
          , b = document.querySelectorAll(s)
          , h = document.querySelectorAll(l);
        if (!(!b || !h || !f || !r) && (b.forEach(u => u.appendChild(p)),
        d && d.length > 0)) {
            b.forEach($ => $.classList.add("tpo_canvas_wrapper"));
            const u = r?.variants[0]?.featured_image?.src || r?.featured_image;
            let x = 0
              , _ = 0;
            const {image_url: m, overlay_mode: S, type: v, preview: y, preview_index: g} = f
              , C = new Konva.Stage({
                container: ".tpo_canvas_builder"
            })
              , w = new Konva.Layer({
                id: "tpo_live_preview_layer"
            });
            if (F_(d),
            window.TPOConfigs?.appLivePreview)
                Od(d, w, t);
            else {
                const $ = new Konva.Layer({
                    listening: !1
                })
                  , L = v === "CUSTOM" && S === "OVERLAY_AFTER_FILL_VALUE"
                  , P = v === "CUSTOM" ? m : u;
                Konva.Image.fromURL(P, function(A) {
                    const R = A.image()
                      , Q = ra(w.getChildren());
                    (L || !Q) && b.forEach(I => I.classList.remove("tpo_canvas_wrapper")),
                    x = R.naturalWidth + 1,
                    _ = R.naturalHeight + 1,
                    C.setAttrs({
                        width: x,
                        initialWidth: x,
                        height: _,
                        initialHeight: _
                    }),
                    Hl(C),
                    A.setAttrs({
                        id: "tpo_custom_background_image",
                        x: 0,
                        y: 0,
                        overlayMode: S,
                        preview_options: y,
                        preview_index: g,
                        visible: !L || Q ? 1 : 0,
                        width: x,
                        height: _,
                        crossOrigin: "Anonymous",
                        listening: !1
                    }),
                    $.add(A),
                    $.draw()
                }),
                C.add($),
                Od(d, w, t),
                C.add(w),
                D_(r, i, y, g, v === "CUSTOM" ? m : ""),
                M_(C),
                window.addEventListener("resize", () => {
                    Hl(C)
                }
                ),
                window.addEventListener("click", A => {
                    I_(C, A.target)
                }
                );
                let k = setInterval( () => {
                    const A = window.Konva?.stages?.[0]?.children?.[1];
                    A && typeof wn < "u" && wn !== null && A.children.length === wn.length && (wn.forEach( (Q, I) => {
                        const F = A.findOne(`#${Q}`);
                        F && F.zIndex(I)
                    }
                    ),
                    A.batchDraw(),
                    clearInterval(k),
                    k = null)
                }
                , 500)
            }
        }
    }
    function Od(t, o, i) {
        for (const [a,r] of t.entries()) {
            const {live_preview_transform: c} = r
              , d = document.querySelector(`.tpo_option-container[id*="${r.id}"]`)
              , {image_sizing_mode: n, preview_shape: f, color_picker_link: p, color_swatch_link: s, font_picker_link: l, image_swatch_link: b, transforms: h, allowed_to_change_position: u, allowed_to_change_size: x, allowed_change_size_type: _, quantity_selector: m, qty_selector_x_spacing: S, qty_selector_y_spacing: v} = (c && typeof c == "string" ? JSON.parse(c) : c) || {}
              , y = {
                x: parseInt(S),
                y: parseInt(v)
            }
              , g = r.multi_select || r.type === "checkbox" || m === "MULTIPLE" ? h : [...h].slice(0, 1);
            if (!g)
                return;
            if (g.length > 1 || m === "MULTIPLE") {
                const C = new Konva.Group({
                    id: `group_${r.id}`
                });
                g.forEach( (w, $) => {
                    const L = new Image;
                    L.onload = async () => {
                        const P = await getImageOutline(L) || [];
                        m && m === "MULTIPLE" ? B_(w, r, i, L, P, C, u, x, g.length - $ - 1, d, n, y) : Nd(w, r, i, L, P, C, u, x, g.length - $ - 1, d, n)
                    }
                    ,
                    L.crossOrigin = "anonymous",
                    L.src = f
                }
                ),
                o.add(C)
            } else {
                const {type: C, arc: w, max_width_enabled: $, max_width: L} = g?.[0];
                switch (C) {
                case "IMAGE":
                    const P = new Image;
                    P.onload = async () => {
                        const R = await getImageOutline(P) || [];
                        Nd(g[0], r, i, P, R, o, u, x, a, d, n)
                    }
                    ,
                    P.crossOrigin = "anonymous",
                    P.src = f;
                    break;
                case "TEXT":
                    const k = [p, s, l, b];
                    $ && L ? U_(g[0], r, i, k, o, u, x, _, a, d) : w && parseInt(w) !== 0 ? R_(g[0], r, i, k, o, u, x, _, a, d) : W_(g[0], r, i, k, o, u, x, _, a, d);
                    break;
                case "TEXT_AREA":
                    const A = [p, s, l, b];
                    V_(g[0], r, i, A, o, u, x, _, a, d);
                    break
                }
            }
        }
    }
    async function Pd({optionSet: t, isPopupModal: o=!1}) {
        const i = Ya.querySelectorAll('script[src="https://cdn.shopify.com/s/files/1/0748/6904/7603/files/konva.min.js?v=1742044331"]')?.length === 0;
        if (i && Qo) {
            const a = document.createElement("script");
            a.async = !0,
            a.src = "https://cdn.shopify.com/s/files/1/0748/6904/7603/files/konva.min.js?v=1742044331",
            a.onload = async function() {
                await Xr({
                    optionSet: t
                })
            }
            ,
            Ya.appendChild(a)
        } else
            !i && (window.TPOConfigs?.appLivePreview || o) ? await Xr({
                optionSet: t,
                isPopupModal: o
            }) : hy?.querySelectorAll('script[src="https://cdn.shopify.com/s/files/1/0748/6904/7603/files/konva.min.js?v=1742044331"]')?.length && await Xr({
                optionSet: t
            })
    }
    function F_(t) {
        const o = []
          , i = JSON.parse(window.TPOConfigs?.settings?.customFonts || "[]");
        if (!i || i.length === 0)
            return;
        const a = document.createElement("style");
        a.id = "tpo_live_preview_custom_fonts",
        t.forEach(c => {
            const {live_preview_transform: d} = c
              , n = d && typeof d == "string" ? JSON.parse(d) : d;
            n && n?.enabled && n.transforms.forEach(p => {
                p.type !== "IMAGE" && p?.default_font?.type === "custom" && o.push(p.default_font.value)
            }
            )
        }
        );
        const r = [...new Set(o)];
        r.length > 0 && r.forEach(c => {
            if (!c)
                return;
            const d = i?.find(n => n.name === c);
            d && (a.innerHTML += `
                    @font-face {
                        font-family: ${d.name};
                        src: url('${d.url}')
                    }
            `)
        }
        ),
        Ya.appendChild(a)
    }
    function Ul(t, o=!1, i="", a=1) {
        const r = t.naturalWidth
          , c = t.naturalHeight;
        window.Konva.stages?.[0]?.setAttrs({
            initialWidth: r,
            initialHeight: c
        }),
        window.Konva.stages?.[0]?.findOne("#tpo_custom_background_image")?.setAttrs({
            image: t,
            width: r,
            height: c
        }),
        Hl(window.Konva.stages?.[0], o, i, a)
    }
    function D_(t, o, i, a=1, r) {
        if (!window.Konva && !window.Konva?.stages?.[0] || !t)
            return;
        const {parentSelector: c, firstChildImageSelector: d, thumbImageSelector: n, thumbImageSelectorMobile: f} = Wl()
          , p = document.querySelector(".tpo-product-container") || document.querySelector(".product-information__media media-gallery") || document.querySelector(".product")
          , s = p?.classList.contains("product--stacked") || p?.classList.contains("media-gallery--grid") || p?.classList.contains("product--columns")
          , l = new MutationObserver(function(b) {
            const h = window.Konva.stages?.[0]?.findOne("#tpo_live_preview_layer")
              , u = window.Konva.stages?.[0]?.findOne("#tpo_custom_background_image");
            u && u?.getAttr("overlayMode") === "OVERLAY_AFTER_FILL_VALUE" && !ra(h?.getChildren()) && u?.hide();
            const x = window.location.href.match(/variant=(\d+)/)
              , _ = x ? x[1] : t.variants[0].id.toString();
            let m = t.variants.find(y => y.id === +_)?.featured_image?.src
              , S = gt.includes("July24") ? d : n;
            const v = !window?.GP && window.matchMedia("(max-width: 959px)").matches || window?.GP && window.matchMedia("(max-width: 750px)").matches;
            if (f.length > 0 && v && (S = f),
            i === "ALL_IMAGES") {
                let y = Array.from(document.querySelectorAll(S));
                if (y && y.length > 0) {
                    const C = y.findIndex(L => Ad(L))
                      , w = y[C]?.querySelector("img")
                      , $ = w?.getAttribute("data-tpo-canvas-src") || w?.getAttribute("src");
                    m = C === 0 && r || $?.split("&")[0]
                }
                const g = !!m && (m?.startsWith("/") || m?.startsWith("http") ? m : `https://${m}`);
                if (g) {
                    const C = new Image;
                    C.src = g,
                    C.crossOrigin = "Anonymous",
                    C.onload = () => {
                        Ul(C)
                    }
                }
            } else if (i === "ALL_VARIANTS_IMAGES") {
                const y = t.variants.map(C => C?.featured_image?.src)
                  , g = document.querySelector(d);
                if (g) {
                    const C = g.querySelector("img")
                      , w = C?.getAttribute("data-tpo-canvas-src") || C?.getAttribute("src");
                    let $ = "";
                    if (w.includes("&width") ? $ = w.match(/files\/(.*?)&/)?.[1] : $ = w.match(/files\/(.+)/)?.[1],
                    $ ? y.some(P => P?.includes($)) : !1) {
                        m = r || w?.split("&")[0];
                        const P = !!m && (m?.startsWith("/") || m?.startsWith("http") ? m : `https://${m}`);
                        if (P) {
                            const k = new Image;
                            k.src = P,
                            k.crossOrigin = "Anonymous",
                            k.onload = () => {
                                Ul(k),
                                window.Konva?.stages?.[0]?.show()
                            }
                        }
                    } else
                        window.Konva?.stages?.[0].hide()
                }
            } else {
                let y, g = 0;
                if (i !== "FIRST_IMAGE") {
                    const L = Array.from(document.querySelectorAll(S));
                    y = i === "LAST_IMAGE" ? L.reverse()[0] : L[+a - 1],
                    g = i === "LAST_IMAGE" ? L.length - 1 : +a - 1
                } else
                    y = document.querySelector(S);
                const C = y?.querySelector("img");
                m = (C?.getAttribute("data-tpo-canvas-src") || C?.getAttribute("src"))?.split("&")[0];
                const $ = new Image;
                if ($.src = r || m,
                $.crossOrigin = "Anonymous",
                $.onload = () => {
                    Ul($, s, i, a)
                }
                ,
                y && (!s || window.matchMedia("(max-width: 750px)").matches)) {
                    let L = !0;
                    window?.GP && window.matchMedia("(max-width: 750px)").matches && document.querySelector("gp-product") ? +document.querySelector('gp-carousel[id*="gp-root-carousel"]').getAttribute("active-index") !== g && (L = !1) : L = Ad(y),
                    L ? window.Konva?.stages?.[0]?.show() : window.Konva?.stages?.[0]?.hide()
                }
            }
        }
        );
        gt.includes("Prestige") && document.querySelector(".product-gallery__thumbnail-scroller") && l.observe(document.querySelector(".product-gallery__thumbnail-scroller"), {
            subtree: !0,
            childList: !0,
            attributes: !0
        }),
        l.observe(document.querySelector(c), {
            subtree: !0,
            childList: !0,
            attributes: !0
        })
    }
    function Ad(t) {
        return gt === "Sleek" || B === "xdjbj4-zb.myshopify.com" ? t && t?.classList.contains("swiper-slide-thumb-active") : gt === "Debut" ? t && !t?.classList.contains("hide") : gt === "Palo Alto" || gt === "Vision" ? t && (t?.classList.contains("is-selected") || t?.classList.contains("is-nav-selected")) : t && t?.classList.contains("slick-slide") && !t.classList.contains("tpo_ignore") ? t?.classList.contains("slick-current") : t && t?.classList.contains("swiper-slide") ? t?.classList.contains("swiper-slide-active") : window?.GP && t && document.querySelector("gp-product") ? t?.getAttribute("data-outline") === "active" : t && t?.classList.contains("hidden") ? !0 : t && (t?.getAttribute("aria-current") === "true" || t?.classList.contains("is-selected") || t?.classList.contains("slide-active") || t?.classList.contains("media--active") || t?.classList.contains("is-nav-selected") || t?.classList.contains("active-slide") || t?.classList.contains("swiper-slide-active") || t?.classList.contains("is-active") || t?.getAttribute("data-outline") === "active" || t?.classList.contains("active") || t?.classList.contains("is-active-item") || t?.classList.contains("active-thumb") || t?.classList.contains("tpo-isactive-image") || t?.classList.contains("is-current-variant") || t?.classList.contains("animation--product-media") || t?.classList.contains("tee-slide--active") || t?.classList.contains("pwzrswiper-slide-active") || t?.getAttribute("data-active") === "true" || t?.getAttribute("aria-hidden") === "false" || t?.getAttribute("aria-selected") === "true" || t?.getAttribute("data-gallery-selected") === "true" || t?.getAttribute("data-pmslider-slide-active") === "true")
    }
    function j_(t, o, i="center-middle") {
        const a = o.width
          , r = o.height
          , c = a / r;
        let d, n;
        const f = t.width / t.height;
        c >= f ? (d = t.width,
        n = t.width / c) : (d = t.height * c,
        n = t.height);
        let p = 0
          , s = 0;
        return i === "left-top" ? (p = 0,
        s = 0) : i === "left-middle" ? (p = 0,
        s = (t.height - n) / 2) : i === "left-bottom" ? (p = 0,
        s = t.height - n) : i === "center-top" ? (p = (t.width - d) / 2,
        s = 0) : i === "center-middle" ? (p = (t.width - d) / 2,
        s = (t.height - n) / 2) : i === "center-bottom" ? (p = (t.width - d) / 2,
        s = t.height - n) : i === "right-top" ? (p = t.width - d,
        s = 0) : i === "right-middle" ? (p = t.width - d,
        s = (t.height - n) / 2) : i === "right-bottom" ? (p = t.width - d,
        s = t.height - n) : i === "scale" && (p = 0,
        s = 0,
        d = a,
        n = r),
        {
            x: p,
            y: s,
            width: d,
            height: n
        }
    }
    function qd(t) {
        const {mode: o="FIT"} = t
          , i = (p, s) => {
            const l = j_({
                width: p?.width || 0,
                height: p?.height || 0
            }, {
                width: s?.width || 0,
                height: s?.height || 0
            });
            return [l.x, l.y, l.width, l.height, 0, 0, s?.width, s?.height]
        }
          , a = (p, s) => {
            const l = p.width
              , b = p.height
              , h = s.width / l
              , u = b * h
              , x = s.width;
            return [0, (s.height - u) / 2, x, u]
        }
          , r = (p, s) => {
            const l = p.width
              , b = p.height
              , h = s.height / b
              , u = s.height
              , x = l * h;
            return [(s.width - x) / 2, 0, x, u]
        }
          , n = {
            COVER: i,
            FIT: (p, s) => {
                const l = s.width / s.height
                  , b = p.width / p.height;
                return l >= b ? r(p, s) : a(p, s)
            }
            ,
            FIT_WIDTH: a,
            FIT_HEIGHT: r,
            FILL: (p, s) => [0, 0, s.width, s.height]
        };
        return {
            getParams: (p, s) => (n?.[o] || n.FIT)(p, s)
        }
    }
    function ra(t) {
        return t ? t.filter(i => i.id() !== "tpo_canvas_transformer").some(i => {
            if (i.getType().toLowerCase() === "group")
                return i.getAttr("optionType") === "text" ? i.getAttr("visible") && i.getChildren().length > 0 : i.getChildren().some(a => {
                    if (a.getAttr("optionType") === "group-image")
                        return a.getChildren().some(c => c.getAttr("visible"));
                    const {visible: r} = a.getAttrs();
                    return r
                }
                );
            {
                const {optionType: a, visible: r, text: c} = i.getAttrs();
                return a === "image" && r || a === "text" && c && r
            }
        }
        ) : !1
    }
    function Nd(t, o, i, a, r, c, d, n=!1, f, p, s) {
        let l = []
          , b = !1
          , h = ""
          , u = Dt;
        const x = ["jpg", "jpeg", "jpe", "jfif", "jif", "jfi", "png", "gif", "webp", "tiff", "tif", "raw", "bmp", "heif", "svg"]
          , {id: _, option_types: m, multi_select: S, type: v, metadata: y, is_in_group: g} = o
          , {getParams: C} = qd({
            mode: s
        })
          , w = window.Konva.stages[0]?.findOne("#tpo_custom_background_image")
          , {overlayMode: $} = w?.getAttrs() || {}
          , L = p?.classList?.contains("tpo_hidden") || p?.parentElement?.closest(".tpo_option-container")?.classList?.contains("tpo_hidden")
          , P = JSON.parse(y || "{}")
          , {id: k, x_axis: A, y_axis: R, rotate: Q, width: I, height: F, lock_points: ee} = t
          , K = v !== "product-list" ? `${_}` : `${_} ${v}-${_} ${v}-${k}`;
        if (v === "switch") {
            if (l = m[0],
            b = o?.switch_value,
            h = P?.image_canvas_url || P?.switchImageUrl,
            !h)
                return
        } else
            v === "file-upload" ? b = !1 : v === "design-layer" ? (b = !0,
            h = P?.image_canvas_url || t?.image_url) : (l = S || v === "checkbox" ? m.filter(H => H.id === k)[0] : m.filter(H => H.is_default)[0],
            b = l?.is_default,
            h = l?.image_canvas_url || l?.image_url);
        b && !L && $ === "OVERLAY_AFTER_FILL_VALUE" && w?.show(),
        Konva.Image.fromURL(h || u, function(H) {
            if (H.setAttrs({
                id: S || v === "checkbox" ? k : _,
                name: K,
                x: +A,
                y: +R,
                width: +I,
                height: +F,
                visible: b && !L ? 1 : 0,
                isSelected: b ? 1 : 0,
                rotation: +Q,
                nodeType: "IMAGE",
                nodeIndex: f,
                optionType: "image",
                lock: ee,
                draggable: d,
                allowTransform: n,
                crossOrigin: "Anonymous"
            }),
            g) {
                const T = p?.parentElement?.closest(".tpo_option-container").getAttribute("id").split(",")[1];
                H.setAttr("groupId", T)
            }
            v === "design-layer" && H.setAttr("listening", !1),
            H.sceneFunc( (T, E) => {
                const q = E.image();
                if (!(!q || !x.some(N => q.getAttribute("src").includes(N))) && a) {
                    const N = E.width() * E.scaleX()
                      , U = E.height() * E.scaleY()
                      , O = a.width / N
                      , M = a.height / U
                      , z = C(q, {
                        width: N,
                        height: U
                    })
                      , X = [q].concat(z);
                    T.beginPath();
                    for (const [J,te] of r?.entries()) {
                        const ue = te?.x / O
                          , me = te?.y / M;
                        J === 0 ? T.moveTo(ue, me) : T.lineTo(ue, me)
                    }
                    T.clip(),
                    T.fillStrokeShape(E),
                    q && T.drawImage.apply(T, X)
                }
            }
            ),
            H.on("dragend", () => {
                Ji()
            }
            ),
            c.add(H),
            H.zIndex(f),
            c.draw(),
            Ji()
        })
    }
    function B_(t, o, i, a, r, c, d, n=!1, f, p, s, l) {
        const b = ["jpg", "jpeg", "jpe", "jfif", "jif", "jfi", "png", "gif", "webp", "tiff", "tif", "raw", "bmp", "heif", "svg"]
          , {id: h, option_types: u, multi_select: x, type: _, quantity_selector: m, is_in_group: S} = o
          , {getParams: v} = qd({
            mode: s
        })
          , y = window.Konva.stages[0]?.findOne("#tpo_custom_background_image")
          , {overlayMode: g} = y?.getAttrs() || {}
          , C = p?.classList?.contains("tpo_hidden") || p?.parentElement?.closest(".tpo_option-container")?.classList?.contains("tpo_hidden")
          , {id: w, x_axis: $, y_axis: L, rotate: P, width: k, height: A, lock_points: R} = t
          , Q = _ !== "product-list" ? `${h}` : `${h} ${_}-${h} ${_}-${w}`
          , I = JSON.parse(m || "{}");
        let {customIncrementValue: F, isUseCustomIncrement: ee} = I.configs || {};
        ee || (F = 1);
        const K = x || _ === "checkbox" ? u.filter(q => q.id === w)[0] : u.filter(q => q.is_default)[0]
          , H = K?.is_default
          , T = K?.image_canvas_url || K?.image_url || Dt;
        H && !C && g === "OVERLAY_AFTER_FILL_VALUE" && y.show();
        const E = new Konva.Group({
            id: `group_qty_${w}`,
            xPosition: +$,
            yPosition: +L,
            xSpacing: l?.x,
            ySpacing: l?.y,
            optionType: "group-image"
        });
        for (let q = 0; q < +F; q++)
            Konva.Image.fromURL(T, function(j) {
                if (j.setAttrs({
                    id: w,
                    qtyAttr: q + 1,
                    singleChoice: x || _ === "checkbox" ? 0 : 1,
                    name: Q,
                    x: E.getAttr("xPosition") + l?.x,
                    y: E.getAttr("yPosition") + l?.y,
                    width: +k,
                    height: +A,
                    visible: H && !C ? 1 : 0,
                    isSelected: H ? 1 : 0,
                    rotation: +P,
                    nodeType: "IMAGE",
                    nodeIndex: f,
                    option: o.type,
                    optionType: "image",
                    lock: R,
                    draggable: d,
                    allowTransform: n,
                    crossOrigin: "Anonymous",
                    baseNode: !0
                }),
                S) {
                    const O = p?.parentElement?.closest(".tpo_option-container").getAttribute("id").split(",")[1];
                    j.setAttr("groupId", O)
                }
                j.sceneFunc( (O, M) => {
                    const z = M.image();
                    if (!(!z || !b.some(J => z.getAttribute("src").includes(J))) && a) {
                        const J = M.width() * M.scaleX()
                          , te = M.height() * M.scaleY()
                          , ue = a.width / J
                          , me = a.height / te
                          , Me = v(z, {
                            width: J,
                            height: te
                        })
                          , Te = [z].concat(Me);
                        O.beginPath();
                        for (const [we,Ce] of r?.entries()) {
                            const Le = Ce?.x / ue
                              , je = Ce?.y / me;
                            we === 0 ? O.moveTo(Le, je) : O.lineTo(Le, je)
                        }
                        O.clip(),
                        O.fillStrokeShape(M),
                        z && O.drawImage.apply(O, Te)
                    }
                }
                ),
                E.setAttrs({
                    currentQty: q + 1,
                    xPosition: E.getAttr("xPosition") + l?.x,
                    yPosition: E.getAttr("yPosition") + l?.y
                }),
                E.on("dragend", () => {
                    Ji()
                }
                ),
                c.add(E),
                E.add(j);
                const N = E.getChildren().length
                  , U = Math.max(0, Math.min(f, N - 1));
                j.zIndex(U),
                c.draw(),
                Ji()
            })
    }
    function oi(t, o, i, a="") {
        if (!window.Konva && !window.Konva?.stages?.[0])
            return;
        document.dispatchEvent(new Event("easify:preview-updated"));
        const r = t?.includes(",") ? t.split(",")[1] : t
          , c = window.Konva.stages[0]?.find(`#${r}`);
        if (!c || c.length === 0)
            return;
        c[0]?.getAttr("singleChoice") && (window.Konva.stages[0]?.find(`.${c[0].getAttr("name")}`)).forEach(_ => {
            _?.attrs?.nodeType !== "TEXT" && _.hide()
        }
        );
        const d = window.Konva.stages[0]?.findOne("#tpo_live_preview_layer")
          , n = window.Konva.stages[0]?.findOne("#tpo_custom_background_image")
          , {overlayMode: f, visible: p, preview_options: s, preview_index: l} = n?.getAttrs() || {};
        window.Konva.stages[0]?.findOne("#tpo_canvas_transformer")?.nodes([]);
        let h = o;
        a === "FILE_UPLOAD" && o && (h = o.replace(B, Ja).replace(/\.[^/.]+$/, x => x.toLowerCase()));
        const u = B === "oleole-art.myshopify.com" ? {} : {
            opacity: 0,
            duration: .1,
            easing: Konva.Easings.EaseOut
        };
        c.forEach(x => {
            const _ = new Image;
            _.src = h || Dt,
            _.crossOrigin = "Anonymous",
            _.onload = () => {
                i ? x.to({
                    ...u,
                    onFinish: () => {
                        x.image(_),
                        x.visible(!0),
                        B !== "oleole-art.myshopify.com" && x.to({
                            opacity: 1,
                            duration: .15,
                            easing: Konva.Easings.EaseIn
                        }),
                        x.setAttr("isSelected", !0),
                        x.setAttrs({
                            _tpo_option_id: r,
                            _tpo_image_url: h
                        }),
                        x.zIndex(x.getAttr("qtyAttr") - 1),
                        f === "OVERLAY_AFTER_FILL_VALUE" && !p && ra(d.getChildren()) && n?.show(),
                        H_(s, l),
                        Ji()
                    }
                }) : x.to({
                    ...u,
                    onFinish: () => {
                        x.image(_),
                        x.visible(!1),
                        x.setAttr("isSelected", !1),
                        f === "OVERLAY_AFTER_FILL_VALUE" && p && !ra(d.getChildren()) && n?.hide(),
                        Ji()
                    }
                })
            }
        }
        )
    }
    function H_(t, o) {
        if ((gt === "Impulse" || gt === "Showcase" || gt === "Swipe") && (t === "FIRST_IMAGE" || t === "LAST_IMAGE" || t === "SPECIFIC_IMAGE")) {
            let a, r;
            gt === "Impulse" ? r = ".product__thumbs--scroller .product__thumb-item .product__thumb" : gt === "Swipe" ? r = window.matchMedia("(max-width: 750px)").matches ? ".product__media-list .product__media-item" : ".product__media-sublist .product__media-subitem" : r = window.matchMedia("(max-width: 750px)").matches ? ".theme-images .theme-img" : ".product-area__thumbs .product-area__thumbs__thumb";
            const c = Array.from(document.querySelectorAll(r))
              , d = c.findIndex(n => gt === "Impulse" ? n.classList.contains("is-active") : gt === "Swipe" ? window.matchMedia("(max-width: 750px)").matches ? n.classList.contains("swiper-slide-active") : n.classList.contains("swiper-slide-thumb-active") : window.matchMedia("(max-width: 750px)").matches ? n.classList.contains("swiper-slide-active") : n.querySelector("a").classList.contains("thumb-active"));
            switch (t) {
            case "LAST_IMAGE":
                a = c.length - 1;
                break;
            case "SPECIFIC_IMAGE":
                a = o - 1;
                break;
            default:
                a = 0;
                break
            }
            if (d !== a || d === a && a === 0)
                if (gt === "Impulse")
                    c[a].dispatchEvent(new Event("click"));
                else if (gt === "Swipe") {
                    const n = document.querySelector(".product__slider-nav .swiper-button-next")
                      , f = document.querySelector(".product__slider-nav .swiper-button-prev");
                    for (let p = 0; p < d; p++)
                        d > a ? f.dispatchEvent(new Event("click")) : n.dispatchEvent(new Event("click"));
                    window.matchMedia("(max-width: 750px)").matches && document.querySelector(".product__main .product__media-wrapper")?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest"
                    })
                } else if (window.matchMedia("(max-width: 750px)").matches) {
                    const n = document.querySelector(".theme-viewport .swiper-button-next")
                      , f = document.querySelector(".theme-viewport .swiper-button-prev");
                    for (let p = 0; p < d; p++)
                        d > a ? f.dispatchEvent(new Event("click")) : n.dispatchEvent(new Event("click"));
                    document.querySelector(".theme-viewport .theme-images")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    })
                } else
                    Array.from(document.querySelectorAll('.theme-viewport .theme-images .theme-img[aria-hidden="false"]'))[a]?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    })
        }
    }
    function Cr(t, o, i) {
        const {xPosition: a, yPosition: r, xSpacing: c, ySpacing: d} = o.getAttrs();
        if (t === "ADD") {
            const f = o.getChildren()[0].clone({
                qtyAttr: i,
                x: a + c,
                y: r + d,
                baseNode: !1
            });
            o.setAttrs({
                currentQty: i,
                xPosition: a + c,
                yPosition: r + d
            }),
            o.add(f)
        } else {
            const n = o.getChildren().find(f => f.getAttr("qtyAttr") === i + 1);
            o.setAttrs({
                currentQty: i,
                xPosition: a - c,
                yPosition: r - d
            }),
            n.destroy()
        }
    }
    function Rl(t, o, i, a=!1) {
        if (!window.Konva && !window.Konva?.stages?.[0])
            return;
        const r = i?.includes(",") ? i.split(",")[1] : i
          , c = window.Konva.stages[0]?.findOne(`#group_qty_${r}`);
        if (c)
            if (a) {
                const d = c.getAttr("currentQty");
                if (t === "ADD")
                    for (let n = d + 1; n <= o; n++)
                        Cr(t, c, n);
                else
                    for (let n = d - 1; n >= o; n--)
                        Cr(t, c, n)
            } else if (t === "REMOVE") {
                const d = o;
                let n = c.getChildren();
                for (; n.length > d; ) {
                    const f = n[n.length - 1]
                      , {xPosition: p, yPosition: s, xSpacing: l, ySpacing: b} = c.getAttrs();
                    c.setAttrs({
                        currentQty: n.length - 1,
                        xPosition: p - l,
                        yPosition: s - b
                    }),
                    f.destroy(),
                    n = c.getChildren()
                }
            } else
                Cr(t, c, o)
    }
    function Vl(t, o, i, a=!1) {
        if (!window.Konva && !window.Konva?.stages?.[0])
            return;
        const r = i?.includes(",") ? i.split(",")[1] : i;
        window.Konva.stages[0]?.findOne(`#group_${r}`)?.getChildren().forEach(d => {
            if (a) {
                const n = d.getAttr("currentQty");
                if (t === "ADD")
                    for (let f = n + 1; f <= o; f++)
                        Cr(t, d, f);
                else
                    for (let f = n - 1; f >= o; f--)
                        Cr(t, d, f)
            } else if (t === "REMOVE") {
                const n = o;
                let f = d.getChildren();
                for (; f.length > n; ) {
                    const p = f[f.length - 1]
                      , {xPosition: s, yPosition: l, xSpacing: b, ySpacing: h} = d.getAttrs();
                    d.setAttrs({
                        currentQty: f.length - 1,
                        xPosition: s - b,
                        yPosition: l - h
                    }),
                    p.destroy(),
                    f = d.getChildren()
                }
            } else
                Cr(t, d, o)
        }
        )
    }
    function Md(t) {
        return t.split(",").map(o => {
            o = o.trim();
            const i = o.indexOf(" ") >= 0
              , a = o.indexOf('"') >= 0 || o.indexOf("'") >= 0;
            return i && !a && (o = `"${o}"`),
            o
        }
        ).join(", ")
    }
    function ao(t, o, i, a) {
        a.save(),
        a.font = [`${i}px`, Md(o)].join(" ");
        const {width: r} = a?.measureText([" ", t, " "].join(""));
        return a?.restore(),
        r
    }
    function Yr(t, o, i, a=!1, r) {
        const c = document.createElement("div");
        c.classList.add("tpo-input-changeLivePreviewSize-wrapperContainer");
        const d = document.createElement("div")
          , n = document.createElement("p");
        Object.assign(n, {
            className: "tpo-input-change-size-title",
            innerHTML: `<span class='tpo_${bi.fontStyle}' 
                       style='
                            ${V?.optionLabelColor ? `color: ${V?.optionLabelColor};` : ""}
                            ${bi?.fontSize ? `font-size: ${bi?.fontSize}px;` : ""}
                            ${bi?.fontFamily ? `font-family: ${bi?.fontFamily};` : ""}
                       '
                >
                    ${Re["Font size"] && Re["Font size"][xt] || "Font size"}
                </span>`
        }),
        d.classList.add("tpo-input-changeLivePreviewSize-wrapper");
        const f = document.createElement("input");
        Object.assign(f, {
            id: `tpo-input-change-size-${t}`,
            className: "tpo_option-input tpo-input-change-livePreview-size",
            type: "number",
            value: a ? r % 1 === 0 ? r : r.toFixed(1) : 15 * +i,
            step: "any",
            min: 0,
            autocomplete: "off",
            ariaLabel: "Font size"
        }),
        f.addEventListener("input", l => {
            Wi(t, "id", l.target.value, !0, "SIZE")
        }
        );
        const p = document.createElement("span");
        Object.assign(p, {
            className: "tpo-change-livePreview-size-btn",
            innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
            </svg>`,
            onclick: () => {
                const l = parseFloat(f.value) + 1;
                Wi(t, "id", l, !0, "SIZE"),
                f.value = l % 1 === 0 ? l : l.toFixed(1).toString(),
                s.removeAttribute("disabled")
            }
        });
        const s = document.createElement("span");
        Object.assign(s, {
            className: "tpo-change-livePreview-size-btn",
            innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
            </svg>`,
            onclick: () => {
                const l = parseFloat(f.value) - 1;
                l >= 0 && (Wi(t, "id", l, !0, "SIZE"),
                f.value = l % 1 === 0 ? l : l.toFixed(1).toString()),
                l === 0 && e.target.setAttribute("disabled", !0)
            }
        }),
        d.append(s, f, p),
        c.append(n, d),
        o?.appendChild(c)
    }
    function W_(t, o, i, a, r, c, d=!1, n, f, p) {
        const {id: s, x_axis: l, y_axis: b, rotate: h, arc: u, opacity: x, size: _, text: m, default_color: S, default_font: v, text_align: y="center"} = t
          , {default_value: g, is_in_group: C} = o
          , w = window.Konva.stages[0]?.findOne("#tpo_custom_background_image")
          , {overlayMode: $} = w?.getAttrs() || {}
          , L = g || m || "";
        let P = "none";
        try {
            P = (typeof o.metadata == "string" ? JSON.parse(o.metadata) : o.metadata)?.type_letter || "none"
        } catch {}
        const k = A(L, P);
        function A(N, U) {
            switch (U) {
            case "lowercase":
                return N.toLowerCase();
            case "uppercase":
                return N.toUpperCase();
            case "capitalize_each_word":
                return N.toLowerCase().replace(/(^|\s)([a-zA-Z\u00C0-\u1EF9])/g, O => O.toUpperCase());
            case "sentence_case":
                return N.charAt(0).toUpperCase() + N.slice(1).toLowerCase();
            case "none":
            default:
                return N
            }
        }
        const R = p?.classList?.contains("tpo_hidden") || p?.parentElement?.closest(".tpo_option-container")?.classList?.contains("tpo_hidden")
          , Q = a.map(N => N?.enabled && N?.data).join(" ")
          , {type: I, value: F} = v || {}
          , ee = r.getContext();
        let K = null;
        const H = a[1]?.enabled ? a[1]?.data : null;
        if (H) {
            const N = i?.options.find(U => U.id === H);
            K = N?.multi_select !== 1 ? N?.option_types.find(U => U.is_default)?.color_code?.trim()?.replace(",", "") : null
        }
        if (!K) {
            const N = a[3]?.enabled ? a[3]?.data : null;
            if (N) {
                const U = i?.options.find(O => O.id === N);
                K = U?.multi_select !== 1 ? U?.option_types.find(O => O.is_default)?.color_code?.trim()?.replace(",", "") : null
            }
        }
        K === "#00000000" && (K = null),
        !R && $ === "OVERLAY_AFTER_FILL_VALUE" && k && w?.show(),
        d && n && n !== "LIVE_PREVIEW_ONLY" && Yr(s, p, _);
        const T = new Konva.Text
          , E = +_ * 15;
        T.setAttrs({
            id: s,
            name: Q,
            x: +l,
            y: +b,
            visible: R ? 0 : 1,
            fill: K ?? S,
            defaultColor: S,
            initialColor: S,
            fontFamily: F || "Roboto",
            defaultFont: F || "Roboto",
            initialText: k,
            text: k,
            rotation: +h,
            scaleFontSize: +_,
            arc: +u,
            fontSize: E,
            defaultFontSize: E,
            nodeType: "TEXT",
            nodeIndex: f,
            optionType: "text",
            allowTransform: d && n !== "DEDICATED_UNDER_TEXT_FIELD",
            allowTransformSizeType: n,
            draggable: c,
            text_align: y,
            offsetY: +_ * 15 / 2,
            opacity: +x / 100
        }),
        B === "giginyork.myshopify.com" && T.setAttr("letterSpacing", 7);
        const q = F || "Roboto"
          , j = ({textWidth: N}) => ({
            left: 0,
            center: N / 2,
            right: N
        })?.[y];
        if (T.on("dragend", () => {
            Ji()
        }
        ),
        C) {
            const N = p?.parentElement?.closest(".tpo_option-container").getAttribute("id").split(",")[1];
            T.setAttr("groupId", N)
        }
        if (F)
            WebFont.load({
                [I]: {
                    families: [F]
                },
                fontactive: () => {
                    const N = ao(k, q, +_ * 15, ee);
                    T.setAttr("offsetX", j({
                        textWidth: N
                    }))
                }
            });
        else {
            const N = ao(k, q, +_ * 15, ee);
            T.setAttr("offsetX", j({
                textWidth: N
            }))
        }
        r.add(T),
        T.zIndex(f),
        r.draw(),
        Ji()
    }
    function U_(t, o, i, a, r, c, d=!1, n, f, p) {
        const {id: s, x_axis: l, y_axis: b, rotate: h, size: u, text: x, opacity: _, default_color: m, default_font: S, text_align: v="center", max_width_enabled: y, max_width: g} = t
          , {default_value: C, is_in_group: w} = o
          , $ = window.Konva.stages[0]?.findOne("#tpo_custom_background_image")
          , {overlayMode: L} = $?.getAttrs() || {}
          , P = C || x || "";
        let k = "none";
        try {
            k = (typeof o.metadata == "string" ? JSON.parse(o.metadata) : o.metadata)?.type_letter || "none"
        } catch {}
        const A = R(P, k);
        function R(N, U) {
            switch (U) {
            case "lowercase":
                return N.toLowerCase();
            case "uppercase":
                return N.toUpperCase();
            case "capitalize_each_word":
                return N.toLowerCase().replace(/(^|\s)([a-zA-Z\u00C0-\u1EF9])/g, O => O.toUpperCase());
            case "sentence_case":
                return N.charAt(0).toUpperCase() + N.slice(1).toLowerCase();
            case "none":
            default:
                return N
            }
        }
        const Q = p?.classList?.contains("tpo_hidden") || p?.parentElement?.closest(".tpo_option-container")?.classList?.contains("tpo_hidden")
          , I = a.map(N => N?.enabled && N?.data).join(" ")
          , {type: F, value: ee} = S || {}
          , K = r.getContext();
        let H = null;
        const T = a[1]?.enabled ? a[1]?.data : null;
        if (T) {
            const N = i?.options.find(U => U.id === T);
            H = N?.multi_select !== 1 ? N?.option_types.find(U => U.is_default)?.color_code?.trim()?.replace(",", "") : null
        }
        if (!H) {
            const N = a[3]?.enabled ? a[3]?.data : null;
            if (N) {
                const U = i?.options.find(O => O.id === N);
                H = U?.multi_select !== 1 ? U?.option_types.find(O => O.is_default)?.color_code?.trim()?.replace(",", "") : null
            }
        }
        H === "#00000000" && (H = null),
        !Q && L === "OVERLAY_AFTER_FILL_VALUE" && A && $?.show();
        const E = new Konva.Text({
            id: s,
            name: I,
            x: +l,
            y: +b,
            visible: Q ? 0 : 1,
            fill: H ?? m,
            defaultColor: m,
            initialColor: m,
            fontFamily: ee || "Roboto",
            defaultFont: ee || "Roboto",
            initialText: A,
            text: A,
            rotation: +h,
            scaleFontSize: +u,
            nodeType: "TEXT",
            nodeIndex: f,
            optionType: "text",
            allowTransform: !1,
            draggable: c,
            allowedToChangeSize: d,
            align: v,
            opacity: +_ / 100,
            width: +g,
            maxWidth: +g,
            maxWidthEnabled: y
        })
          , q = ee || "Roboto"
          , j = ({textWidth: N}) => ({
            left: 0,
            center: N / 2,
            right: N
        })?.[v];
        if (w) {
            const N = p?.parentElement?.closest(".tpo_option-container").getAttribute("id").split(",")[1];
            E.setAttr("groupId", N)
        }
        if (ee)
            WebFont.load({
                [F]: {
                    families: [ee]
                },
                fontactive: () => {
                    const N = ao(A, q, +u * 15, K)
                      , U = N > +g ? +g / N * 15 * +u : +u * 15;
                    E.setAttr("fontSize", U),
                    E.setAttr("offsetX", j({
                        textWidth: +g || N
                    })),
                    E.setAttr("offsetY", E.height() / 2),
                    E.setAttr("initialOffsetY", E.height() / 2),
                    d && n && n !== "LIVE_PREVIEW_ONLY" && (E.setAttr("initialFontSize", U.toFixed(1)),
                    Yr(s, p, u, !0, U))
                }
            });
        else {
            const N = ao(A, q, +u * 15, K)
              , U = N > +g ? +g / N * 15 * +u : +u * 15;
            E.setAttr("fontSize", U),
            E.setAttr("offsetX", j({
                textWidth: +g || N
            })),
            E.setAttr("offsetY", E.height() / 2),
            E.setAttr("initialOffsetY", E.height() / 2),
            d && n && n !== "LIVE_PREVIEW_ONLY" && (E.setAttr("initialFontSize", U.toFixed(1)),
            Yr(s, p, u, !0, U))
        }
        r.add(E),
        E.zIndex(f),
        r.draw(),
        Ji()
    }
    function zl(t="", o, i) {
        const r = document.createElement("canvas").getContext("2d");
        return r.font = `${o}px ${i}`,
        [...t].map(c => r.measureText(c).width)
    }
    function kr(t, o, i, a, r, c, d=15) {
        if (!o)
            return;
        const n = Bc.includes(B) ? o.split("").reverse().join("") : o
          , f = zl(n, r * d, i)
          , p = f.reduce( (x, _) => x + _, 0)
          , s = Math.abs(a)
          , l = p * 100 / (2 * Math.PI * s)
          , b = a >= 0 ? 1 : -1
          , h = b * (l - l / p);
        let u = -p / (2 * l);
        n.split("").forEach( (x, _) => {
            const m = f[_]
              , S = u + m / (2 * l)
              , v = l * Math.sin(S)
              , y = h - b * l * Math.cos(S);
            u += m / l;
            const g = new Konva.Text({
                x: v,
                y,
                fill: c,
                defaultColor: c,
                fontFamily: i,
                defaultFont: i,
                initialText: n,
                text: x,
                isNodeChildren: !0,
                offsetX: m / 2,
                rotation: b * (S * 180) / Math.PI,
                scaleFontSize: +r,
                fontSize: +r * d,
                offsetY: +r * d / 2,
                allowTransform: t.getAttr("allowTransform"),
                align: "center",
                opacity: t.getAttr("textOpacity")
            });
            t.add(g)
        }
        )
    }
    function Er(t, o, i, a, r, c, d=15) {
        let n = Bc.includes(B) ? o.split("").reverse().join("") : o
          , f = zl(n, r * d, i)
          , p = f.reduce( (v, y) => v + y, 0);
        const s = Math.max(1, Math.abs(a))
          , l = a >= 0 ? 1 : -1
          , b = s * 2.5
          , h = 2 * Math.PI * b;
        let u = r
          , x = f
          , _ = p;
        if (p > h) {
            n = n + " ",
            f = zl(n, r * d, i),
            p = f.reduce( (y, g) => y + g, 0);
            const v = h / p;
            u = r * v,
            x = f.map(y => y * v),
            _ = h
        }
        const m = l * (b - b / _);
        let S = -_ / (2 * b);
        n.split("").forEach( (v, y) => {
            const g = x[y]
              , C = S + g / (2 * b)
              , w = b * Math.sin(C)
              , $ = m - l * b * Math.cos(C);
            S += g / b;
            const L = new Konva.Text({
                x: w,
                y: $,
                fill: c,
                defaultColor: c,
                fontFamily: i,
                defaultFont: i,
                initialText: n,
                text: v,
                isNodeChildren: !0,
                offsetX: g / 2,
                rotation: l * (C * 180) / Math.PI,
                scaleFontSize: +u,
                fontSize: +u * d,
                offsetY: +u * d / 2,
                allowTransform: t.getAttr("allowTransform"),
                align: "center",
                opacity: t.getAttr("textOpacity")
            });
            t.add(L)
        }
        )
    }
    function R_(t, o, i, a, r, c, d=!1, n, f, p) {
        const {id: s, x_axis: l, y_axis: b, rotate: h, arc: u, circular: x, opacity: _, size: m, text: S, default_color: v, default_font: y} = t
          , {default_value: g, is_in_group: C} = o
          , w = window.Konva.stages[0]?.findOne("#tpo_custom_background_image")
          , {overlayMode: $} = w?.getAttrs() || {}
          , L = g || S || "";
        let P = "none";
        try {
            P = (typeof o.metadata == "string" ? JSON.parse(o.metadata) : o.metadata)?.type_letter || "none"
        } catch {}
        const k = A(L, P);
        function A(E, q) {
            switch (q) {
            case "lowercase":
                return E.toLowerCase();
            case "uppercase":
                return E.toUpperCase();
            case "capitalize_each_word":
                return E.toLowerCase().replace(/(^|\s)([a-zA-Z\u00C0-\u1EF9])/g, j => j.toUpperCase());
            case "sentence_case":
                return E.charAt(0).toUpperCase() + E.slice(1).toLowerCase();
            case "none":
            default:
                return E
            }
        }
        const {type: R, value: Q} = y || {}
          , I = a.map(E => E?.enabled && E?.data).join(" ");
        let F = null;
        const ee = a[1]?.enabled ? a[1]?.data : null;
        if (ee) {
            const E = i?.options.find(q => q.id === ee);
            F = E?.multi_select !== 1 ? E?.option_types.find(q => q.is_default)?.color_code?.trim()?.replace(",", "") : null
        }
        if (!F) {
            const E = a[3]?.enabled ? a[3]?.data : null;
            if (E) {
                const q = i?.options.find(j => j.id === E);
                F = q?.multi_select !== 1 ? q?.option_types.find(j => j.is_default)?.color_code?.trim()?.replace(",", "") : null
            }
        }
        F === "#00000000" && (F = null);
        const K = p?.classList?.contains("tpo_hidden") || p?.parentElement?.closest(".tpo_option-container")?.classList?.contains("tpo_hidden");
        !K && $ === "OVERLAY_AFTER_FILL_VALUE" && k && w?.show(),
        d && n && n !== "LIVE_PREVIEW_ONLY" && Yr(s, p, m);
        const H = +m * 15
          , T = new Konva.Group({
            id: s,
            name: I,
            x: +l,
            y: +b,
            visible: K ? 0 : 1,
            nodeType: "TEXT",
            nodeIndex: f,
            optionType: "text",
            rotation: +h,
            arc: +u,
            circular: x,
            fontSize: H,
            defaultFontSize: H,
            textOpacity: +_ / 100,
            textSize: +m,
            initialText: k,
            textValue: k,
            fontFamily: Q || "Roboto",
            defaultColor: v,
            initialColor: v,
            allowTransform: d && n !== "DEDICATED_UNDER_TEXT_FIELD",
            allowTransformSizeType: n,
            draggable: c
        });
        if (C) {
            const E = p?.parentElement?.closest(".tpo_option-container").getAttribute("id").split(",")[1];
            T.setAttr("groupId", E)
        }
        T.on("dragend", () => {
            Ji()
        }
        ),
        Q ? WebFont.load({
            [R]: {
                families: [Q]
            },
            fontactive: () => {
                x ? Er(T, k, Q, u, m, F ?? v) : kr(T, k, Q, u, m, F ?? v)
            }
        }) : x ? Er(T, k, "Roboto", u, m, F ?? v) : kr(T, k, "Roboto", u, m, F ?? v),
        r.add(T),
        T.zIndex(f),
        r.draw(),
        Ji()
    }
    function V_(t, o, i, a, r, c, d=!1, n, f, p) {
        const {id: s, x_axis: l, y_axis: b, rotate: h, width: u, height: x, size: _, text: m, opacity: S, text_align: v, vertical_align: y="top", default_color: g, default_font: C, max_height_enabled: w} = t
          , {default_value: $, is_in_group: L} = o
          , P = window.Konva.stages[0]?.findOne("#tpo_custom_background_image")
          , {overlayMode: k} = P?.getAttrs() || {}
          , A = $ || m || ""
          , R = p?.classList?.contains("tpo_hidden") || p?.parentElement?.closest(".tpo_option-container")?.classList?.contains("tpo_hidden")
          , Q = a?.map(T => T?.enabled && T?.data).join(" ");
        let I = null;
        const F = a[1]?.enabled ? a[1]?.data : null;
        if (F) {
            const T = i?.options.find(E => E.id === F);
            I = T?.multi_select !== 1 ? T?.option_types.find(E => E.is_default)?.color_code?.trim()?.replace(",", "") : null
        }
        if (!I) {
            const T = a[3]?.enabled ? a[3]?.data : null;
            if (T) {
                const E = i?.options.find(q => q.id === T);
                I = E?.multi_select !== 1 ? E?.option_types.find(q => q.is_default)?.color_code?.trim()?.replace(",", "") : null
            }
        }
        I === "#00000000" && (I = null);
        const {type: ee, value: K} = C || {};
        !R && k === "OVERLAY_AFTER_FILL_VALUE" && A && P?.show(),
        d && n && n !== "LIVE_PREVIEW_ONLY" && Yr(s, p, _);
        const H = new Konva.Text({
            id: s,
            name: Q,
            perfectDrawEnabled: !1,
            x: +l,
            y: +b,
            visible: R ? 0 : 1,
            fill: I ?? g,
            defaultColor: g,
            initialColor: g,
            width: u,
            height: x,
            initialText: A,
            text: A,
            align: v,
            verticalAlign: y,
            opacity: +S / 100,
            rotation: +h,
            scaleFontSize: +_,
            fontSize: +_ * 15,
            inputFontSize: +_ * 15,
            nodeType: "TEXT_AREA",
            nodeIndex: f,
            optionType: "text",
            allowTransform: d,
            allowTransformSizeType: n,
            draggable: c,
            maxHeightEnabled: w
        });
        if (L) {
            const T = p?.parentElement?.closest(".tpo_option-container").getAttribute("id").split(",")[1];
            H.setAttr("groupId", T)
        }
        if (H.on("dragend", () => {
            Ji()
        }
        ),
        K ? WebFont.load({
            [ee]: {
                families: [K]
            },
            fontactive: () => {
                H.setAttrs({
                    fontFamily: K,
                    defaultFont: K
                })
            }
        }) : H.setAttrs({
            fontFamily: "Roboto",
            defaultFont: "Roboto"
        }),
        w) {
            const {inputFontSize: T} = H.getAttrs()
              , E = Id({
                node: H,
                text: A,
                maxHeight: x,
                maxSize: T
            });
            H.setAttr("fontSize", E)
        }
        r.add(H),
        H.zIndex(f),
        r.draw(),
        Ji()
    }
    function Wi(t, o, i, a, r) {
        if (!window.Konva || a === !1)
            return;
        document.dispatchEvent(new Event("easify:preview-updated"));
        const c = t.includes(",") ? t.split(",")[1] : t
          , d = o === "id" ? "#" : "."
          , n = window.Konva.stages[0]?.find(`${d + c}`);
        if (!n || n.length === 0)
            return;
        const f = window.Konva.stages[0]?.findOne("#tpo_live_preview_layer")
          , p = window.Konva.stages[0]?.findOne("#tpo_custom_background_image")
          , {overlayMode: s} = p?.getAttrs() || {};
        window.Konva.stages[0]?.findOne("#tpo_canvas_transformer")?.nodes([]),
        n.forEach(b => {
            const h = b.getLayer().getContext()
              , {id: u, fontSize: x, initialFontSize: _, maxWidth: m, maxWidthEnabled: S, scaleFontSize: v, fontFamily: y, arc: g, initialText: C, nodeType: w, text_align: $, nodeIndex: L, textSize: P, defaultColor: k, initialColor: A, defaultFont: R, initialOffsetY: Q, text: I, allowedToChangeSize: F, maxHeightEnabled: ee, height: K, inputFontSize: H} = b.getAttrs();
            switch (b.getAttr("qtyAttr") ? b.zIndex(b.getAttr("qtyAttr") - 1) : b.zIndex(L),
            r) {
            case "TEXT":
                const T = i || C;
                if (S && m) {
                    const U = x > 15 * +v ? x : 15 * +v
                      , O = ao(T, y, U, h)
                      , M = O > m ? m / O * U : U;
                    if (b.setAttrs({
                        text: T,
                        fontSize: i ? M : _ || M,
                        offsetY: O > m ? b.height() / 2 : Q
                    }),
                    F) {
                        const z = document.getElementById(`tpo-input-change-size-${u}`)
                          , X = i ? z.value > M && O <= m ? z.value : M : _;
                        document.getElementById(`tpo-input-change-size-${u}`).value = X % 1 === 0 ? X : (+X).toFixed(1)
                    }
                } else if (!g || g === 0) {
                    const U = ao(T, y, x, h)
                      , O = {
                        left: 0,
                        center: U / 2,
                        right: U
                    };
                    if (b.setAttrs({
                        text: T,
                        offsetX: w === "TEXT" ? O?.[$] : 0
                    }),
                    w === "TEXT_AREA" && ee) {
                        const M = Id({
                            node: b,
                            text: T,
                            maxHeight: K,
                            maxSize: H
                        });
                        b.setAttrs({
                            fontSize: M
                        });
                        const z = document.getElementById(`tpo-input-change-size-${u}`);
                        z && H >= M && (z.value = M)
                    }
                } else
                    b.setAttr("textValue", T),
                    b.destroyChildren(),
                    b.getAttr("circular") ? Er(b, T, y, g, P, k) : kr(b, T, y, g, P, k);
                !T && s === "OVERLAY_AFTER_FILL_VALUE" && !ra(f.getChildren()) ? p?.hide() : p?.show();
                break;
            case "FONT":
                const E = i?.name || R || y;
                if (S && m) {
                    const U = x > 15 * +v ? x : 15 * +v
                      , O = ao(I, E, U, h)
                      , M = O > m ? m / O * U : U;
                    if (b.setAttrs({
                        fontSize: M,
                        fontFamily: E,
                        offsetY: O > m ? b.height() / 2 : Q
                    }),
                    F) {
                        const z = document.getElementById(`tpo-input-change-size-${u}`)
                          , X = i ? z.value > M && O <= m ? z.value : M : _;
                        document.getElementById(`tpo-input-change-size-${u}`).value = X % 1 === 0 ? X : (+X).toFixed(1)
                    }
                } else if (!g || g === 0) {
                    const U = ao(I, E, x, h)
                      , O = {
                        left: 0,
                        center: U / 2,
                        right: U
                    };
                    b.setAttrs({
                        fontFamily: E,
                        offsetX: w === "TEXT" ? O?.[$] : 0
                    })
                } else {
                    const {textValue: U} = b.getAttrs();
                    b.setAttr("fontFamily", E),
                    b.destroyChildren(),
                    b.getAttr("circular") ? Er(b, U, E, g, P, k) : kr(b, U, E, g, P, k)
                }
                break;
            case "COLOR":
                if (b.getAttr("optionType") === "image")
                    return;
                let q = i ? i.trim().replace(",", "") : k;
                if (q === "#00000000" && (q = A),
                q || (q = k),
                !g || g === 0)
                    b.setAttr("fill", q);
                else {
                    const U = b.getChildren();
                    b.setAttr("defaultColor", q),
                    U?.forEach(O => O.setAttr("fill", q))
                }
                break;
            case "SIZE":
                const {textValue: j} = b.getAttrs()
                  , N = parseFloat(i);
                if (S && m)
                    if (ao(I, y, N, h) <= +m)
                        b.setAttr("fontSize", N);
                    else {
                        const O = ao(I, y, x, h);
                        if (O + ao(" ", y, x, h) > m)
                            return;
                        b.setAttr("fontSize", +m / O * x)
                    }
                else if (!g || g === 0)
                    if (w === "TEXT") {
                        const U = ao(I, y, N, h);
                        b.setAttrs({
                            fontSize: N,
                            offsetY: N / 2,
                            offsetX: $ === "center" ? U / 2 : $ === "left" ? 0 : U
                        })
                    } else
                        b.setAttrs({
                            fontSize: N,
                            inputFontSize: N,
                            scale: {
                                x: 1,
                                y: 1
                            }
                        });
                else
                    b.setAttr("fontSize", N),
                    b.destroyChildren(),
                    b.getAttr("circular") ? Er(b, j, y, g, P, k, N / P) : kr(b, j, y, g, P, k, N / P);
                break
            }
        }
        ),
        Ji()
    }
    function Id({node: t, text: o, maxHeight: i, maxSize: a=100}) {
        let r = "-", c = " ", d;
        function n() {
            return d || (d = document.createElement("canvas").getContext("2d"),
            d)
        }
        const f = (s, l) => {
            let b = s.length;
            return n().measureText(s).width + (b ? l * (b - 1) : 0)
        }
        ;
        return ( () => {
            if (!t)
                return a;
            const s = t.fontFamily()
              , l = t.fontStyle()
              , b = t.width()
              , h = t.lineHeight()
              , u = t.letterSpacing()
              , x = v => {
                n().font = `${l} ${v}px ${Md(s)}`;
                const y = o.split(`
`)
                  , g = [];
                for (let C = 0; C < y.length; C++) {
                    let w = y[C]
                      , $ = f(w, u);
                    if ($ > b)
                        for (; w.length > 0; ) {
                            let L = 0
                              , P = w.length
                              , k = ""
                              , A = 0;
                            for (; L < P; ) {
                                let R = Math.floor((L + P) / 2)
                                  , Q = w.slice(0, R + 1)
                                  , I = f(Q, u);
                                I <= b ? (L = R + 1,
                                k = Q,
                                A = I) : P = R
                            }
                            if (k) {
                                let R, Q = w[k.length];
                                if ((Q === c || Q === r) && A <= b ? R = k.length : R = Math.max(k.lastIndexOf(c), k.lastIndexOf(r)) + 1,
                                R > 0 && (L = R,
                                k = k.slice(0, L),
                                A = f(k, u)),
                                k = k.trimRight(),
                                g.push(k),
                                w = w.slice(L),
                                w = w.trimLeft(),
                                w.length > 0 && ($ = f(w, u),
                                $ <= b)) {
                                    g.push(w);
                                    break
                                }
                            } else
                                break
                        }
                    else
                        g.push(w)
                }
                return g.length * v * h
            }
            ;
            let _ = 1
              , m = a
              , S = 1;
            for (; _ <= m; ) {
                const v = Math.floor((_ + m) / 2);
                x(v) <= i ? (S = v,
                _ = v + 1) : m = v - 1
            }
            return S > a ? a : S
        }
        )()
    }
    function Fi(t, o, i) {
        if (!window.Konva)
            return;
        const a = i ? "." : "#"
          , r = document.querySelector(`[id*='${t}']`)?.classList.contains("tpo_hidden)")
          , c = t.includes(",") ? t.split(",")[1] : t;
        let d = [];
        if (t.includes("group") ? d = window.Konva?.stages[0]?.find(l => l?.getAttr("groupId") === c) : d = window.Konva?.stages[0]?.find(`${a + c}`),
        !d)
            return;
        const n = window.Konva.stages[0]?.findOne("#tpo_live_preview_layer")
          , f = window.Konva.stages[0]?.findOne("#tpo_custom_background_image")
          , {overlayMode: p, visible: s} = f?.getAttrs() || {};
        d.forEach(l => {
            const b = l?.getAttr("isSelected")
              , h = l.getAttr("optionType")
              , u = l?.getAttr("groupId") ? document.querySelector(`[id*='${l.getAttr("id")}']`)?.classList.contains("tpo_hidden") : !1;
            o === "show" && (h === "image" ? b : !0) && !r && !u ? (l.setAttr("visible", !0),
            p === "OVERLAY_AFTER_FILL_VALUE" && !s && ra(n.getChildren()) && f?.show()) : (l.setAttr("visible", !1),
            p === "OVERLAY_AFTER_FILL_VALUE" && s && !ra(n.getChildren()) && f?.hide())
        }
        ),
        Ji()
    }
    function Zr(t, o) {
        if (!t)
            return;
        let i = 0;
        const a = document.querySelectorAll(Cn[o])
          , r = [];
        t.filter( (d, n) => {
            if (!d.featured_image.url)
                return d.properties?._tpo_add_on_key ? void 0 : (r.push(void 0),
                d);
            if (!d.properties?._tpo_add_on_key || d.properties?.[en()])
                return r.push(a[i]),
                i++,
                d;
            i++
        }
        ).forEach( (d, n) => {
            if (!d)
                return;
            Object.keys(d?.properties).some(p => p?.includes("_tpo"));
            const f = d?.properties?.[en()];
            if (f) {
                const p = document.querySelectorAll(`[href="${f}"]:not(.tpo_ignore)`);
                z_(en()),
                r[n] && !ny && (r[n].src = f,
                r[n].srcset = f),
                p.forEach(s => {
                    s.innerHTML = en()
                }
                )
            }
        }
        )
    }
    if (It) {
        const t = await Ii();
        Zr(t?.items, "CART")
    }
    typeof window?.subscribe == "function" && Qo && window?.subscribe("cart-update", async t => {
        if (t?.source === "cart-items")
            return;
        const o = await Ii();
        Zr(o?.items, "DRAWER")
    }
    );
    function z_(t) {
        const o = document.querySelectorAll([".product-option dt", ".product-option span", ".cart__item--properties span"]);
        for (let i of o)
            i.textContent.includes(t) && i.remove()
    }
    async function Jl(t) {
        if (window?.Konva?.stages?.[0]) {
            let d = function(n, f) {
                let p = n.split(",")
                  , s = p[0].match(/:(.*?);/)[1]
                  , l = atob(p[p.length - 1])
                  , b = l.length
                  , h = new Uint8Array(b);
                for (; b--; )
                    h[b] = l.charCodeAt(b);
                return new File([h],f,{
                    type: s
                })
            };
            var o = d;
            window?.Konva?.stages?.[0]?.show();
            const i = window?.Konva?.stages?.[0]?.findOne("#tpo_canvas_transformer")
              , a = window?.Konva?.stages[0]?.findOne("#tpo_live_preview_layer");
            i?.visible(!1);
            const r = window?.Konva?.stages?.[0]?.toDataURL();
            i?.visible(!0);
            const c = ra(a.getChildren());
            try {
                const n = d(r, "live-preview-image.png")
                  , f = new DataTransfer;
                f.items.add(n);
                let p = t.querySelector(`input[name="${na()}"]`);
                if (p || (p = document.createElement("input"),
                p.setAttribute("type", "file"),
                p.setAttribute("hidden", "true"),
                p.setAttribute("name", na())),
                p && !c) {
                    p.remove();
                    return
                }
                p.files = f.files,
                t.appendChild(p)
            } catch {}
        }
    }
    function J_(t={}, o=new FormData) {
        const i = new FormData;
        for (const a of Object.keys(t))
            if (a !== "properties") {
                const r = t?.[a];
                if (Array.isArray(r))
                    for (const c of r)
                        i.append(`${a}[]`, c);
                else
                    i.append(a, r)
            } else
                for (const r of Object.keys(t?.properties)) {
                    const c = t?.properties?.[r];
                    i.append(`properties[${r}]`, c)
                }
        return o.has(na()) && i.append(na(), o.get(na())),
        i
    }
    async function ns({body: t, mainProduct: o, formData: i, cartAddUrl: a="/cart/add.js"}) {
        if (!i.has(na()))
            return [null, await fetch(a, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...t
                })
            })];
        const r = t?.items?.find(c => c?.id === o?.id);
        if (r) {
            const c = J_(r, i)
              , n = await (await fetch("/cart/add", {
                method: "POST",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    Accept: "application/json"
                },
                body: c
            })).json()
              , f = t?.items?.map(l => n?.id == l?.id ? {
                ...l,
                properties: n?.properties || l?.item
            } : {
                ...l
            });
            return await (await fetch("/cart/update.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    updates: {
                        [n.id]: "0"
                    }
                })
            })).json(),
            [null, await fetch(a, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...t,
                    items: f || []
                })
            })]
        }
        return []
    }
    function en() {
        return qf ? "_Preview" : Rf || "Preview"
    }
    function na() {
        return `properties[${en()}]`
    }
    function Ji() {
        om()
    }
    function Fd(t, o, i) {
        if (!t.includes("https://cdn.shopify.com/s/files"))
            return t;
        const a = t.match(/\.([a-zA-Z]+)(\?v=.*)?$/);
        if (!a)
            return t;
        const r = a[1]
          , c = a[2] || ""
          , d = t.replace(/\.([a-zA-Z]+)(\?v=.*)?$/, "");
        let n = "";
        return n = `_${o}x`,
        `${d}${n}.${r}${c}`
    }
    function sa(t, o) {
        if (!o)
            return t;
        const i = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
          , a = new RegExp(`[${i}]`,"g");
        return t.replace(a, "")
    }
    function Q_(t, o={}) {
        if (typeof t != "string")
            return t || o;
        try {
            return JSON.parse(t)
        } catch {
            return o
        }
    }
}
