# Service booking and payment setup

The site is a static GitHub Pages export. It sends customers to hosted Cal.com
booking pages or Stripe Payment Links. No API keys or runtime server are needed.

Set the public URLs in `content/service-integrations.ts` and set `enabled: true`
when ready to accept bookings. A `null` URL or `enabled: false` keeps an
email inquiry available. Both the homepage and service detail pages use this
configuration. Invalid provider URLs fail the build rather than shipping a broken
checkout link.

As of October 11, 2026, these Cal.com events have been created with descriptions
and a required service-specific preparation question. All three are hidden from
the Cal.com profile while pricing and the Stripe connection are pending:

- Narrative: `https://cal.com/alexbloom/narrative` (90 minutes)
- Office Hours: `https://cal.com/alexbloom/office-hours` (60 minutes)
- Career Sessions: `https://cal.com/alexbloom/career-sessions` (60 minutes)

Agreed one-time prices: Narrative $750 USD, Office Hours $500 USD, Career
Sessions $300 USD, and async Critique $250 USD. These are displayed beside the
site CTAs; set matching amounts in Cal.com and Stripe before enabling the links.

Hidden Cal.com links can still be booked directly; hiding is not an access gate.
The site keeps its email inquiry flow until each integration is enabled.

## Live sessions

Create one Cal.com event for each service:

| Service | Duration | Preparation questions |
| --- | --- | --- |
| Narrative | 90 minutes | Audience, goal, current pitch/website |
| Office Hours | 60 minutes | Design decision, screens/prototype, constraints |
| Career Sessions | 60 minutes | Goals, portfolio or interview materials |

Connect your calendar and conferencing app, set availability, notice period,
buffers, and cancellation/rescheduling rules. Keep career-session availability
closed until the intended 2027 launch.

Connect Stripe through the Cal.com app store and enable payment on each paid
event, with the agreed price and currency. Use the event's public
`https://cal.com/…/…` link in the configuration. Cal.com handles scheduling and
payment together; do not also charge for the same live session with a separate
Stripe Payment Link.

Reference: [Cal.com payment FAQ](https://cal.com/faq).

## Async critique

The live $250 USD Payment Link is active:
`https://buy.stripe.com/14AaEXbaVfUn4RSeuE1oI00`.
Stripe link ID: `plink_1UPYmjFJLxdn6a2hs6ZBBO0l`.
It collects name, email, product/prototype URL, and the customer's key question.
Automatic tax remains enabled using the account's Website Design preset; review
that classification in Stripe if needed. The confirmation message asks customers
to email the receipt and supporting context, with delivery within 24 hours of the
agreed start. The site integration is enabled locally; deploy the site changes
to publish the updated CTA.

Create a one-time Stripe product and Payment Link at the agreed price. Collect
the customer's email and require a product/prototype URL and their key question
using checkout custom fields, where practical. Provide the delivery and refund
terms before purchase. Set the post-payment confirmation message to ask the
customer to email their receipt, link, context, and question to
alexbloomdesign@pm.me. The review starts after scope and start time are confirmed.

Paste the `https://buy.stripe.com/…` URL into the critique configuration. The
Stripe dashboard and receipt establish payment status; the site does not claim
to verify payments or automatically fulfill orders.

Reference: [Stripe Payment Links](https://docs.stripe.com/payment-links).

## Verification before launch

Run `npm run build`. Check every CTA on the homepage and service pages. Use
Stripe test mode to check critique checkout, receipts, and the confirmation
instructions. Test a Cal.com booking with payment, timezone selection,
confirmation, cancellation, and rescheduling. Replace any Stripe test link with
the live link after verification. The fractional Tally waitlist is independent.
