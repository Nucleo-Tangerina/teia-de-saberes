import { Check, ShieldCheck, Lock, CreditCard, Plus } from 'lucide-react'
import { offerBlock, offer, guarantee, objections, faq, closing, type QA } from './content'
import { Button, Section, TwoTone } from './ui'
import { Seal } from './Seal'
import { PayMethods } from './PayMethods'

// Blocks 18–23: what you get, what it costs, what if, and the last word.

const TRUST_ICONS = [Lock, ShieldCheck, CreditCard]

export function Offer() {
  return (
    <Section id="oferta" tone="lacquer" className="offer" labelledBy="offer-title">
      <div className="offer__grid">
        <div>
          <h2 id="offer-title" className="offer__title">
            <TwoTone text={offerBlock.heading} />
          </h2>
          <ul role="list" className="offer__includes">
            {offerBlock.includes.map((i) => (
              <li key={i}>
                <Check size={18} strokeWidth={2} aria-hidden />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="price">
          {/* Authority seal: facts of the offer only, struck like the guarantee's. */}
          <Seal
            className="price__seal"
            figure={`${offer.hours}h`}
            unit="CERTIFICADO"
            ring="FORMAÇÃO COMPLETA · CERTIFICADO DE CONCLUSÃO · "
          />
          <p className="price__name">
            {offer.name}
            <span>{offer.subtitle}</span>
          </p>
          <p className="price__seats">
            <span>{offerBlock.seatsLabel}</span>
            <strong className="tabular">Apenas {offer.seats} vagas</strong>
          </p>
          <p className="price__now">
            <span className="price__lead">{offerBlock.priceLead}</span>
            <strong className="tabular">{offer.installments}</strong>
          </p>
          <p className="price__installments">
            {offerBlock.priceOr} <strong className="tabular">{offer.price}</strong> à vista
          </p>
          <Button className="price__cta">
            {offerBlock.cta}
          </Button>
          <ul role="list" className="price__trust">
            {offerBlock.trust.map((t, i) => {
              const Icon = TRUST_ICONS[i]
              return (
                <li key={t}>
                  <Icon size={15} strokeWidth={1.5} aria-hidden />
                  {t}
                </li>
              )
            })}
          </ul>
          <PayMethods />
        </div>
      </div>
    </Section>
  )
}

export function Guarantee() {
  return (
    <Section className="guarantee" labelledBy="guarantee-title">
      <div className="guarantee__panel" data-reveal>
        <Seal
          className="guarantee__seal"
          figure={String(offer.guaranteeDays)}
          unit="DIAS"
          ring="PARA CONHECER A FORMAÇÃO · CAMINHOS DA INCLUSÃO · "
        />
        <div>
          <h2 id="guarantee-title" className="guarantee__title">
            {guarantee.heading}
          </h2>
          <p className="guarantee__sub">{guarantee.subheading}</p>
          <p className="guarantee__text">{guarantee.text}</p>
        </div>
      </div>
    </Section>
  )
}

function Accordion({ items }: { items: QA[] }) {
  return (
    <div className="qa">
      {items.map((i) => (
        <details key={i.q} className="qa__item">
          <summary>
            <span>{i.q}</span>
            <Plus className="qa__icon" size={20} strokeWidth={1.5} aria-hidden />
          </summary>
          <p>{i.a}</p>
        </details>
      ))}
    </div>
  )
}

export function Objections() {
  return (
    <Section tone="paper" className="doubts doubts--pre" labelledBy="doubts-title">
      <div className="doubts__grid">
        <h2 id="doubts-title" className="heading doubts__heading">
          <TwoTone text={objections.heading} />
        </h2>
        <Accordion items={objections.items} />
      </div>
    </Section>
  )
}

export function Faq() {
  return (
    <Section id="faq" tone="paper" className="doubts" labelledBy="faq-title">
      <div className="doubts__grid">
        <h2 id="faq-title" className="heading doubts__heading">
          {faq.heading}
        </h2>
        <Accordion items={faq.items} />
      </div>
    </Section>
  )
}

export function Closing() {
  return (
    <Section stage="blue" className="closing" labelledBy="closing-title">
      <h2 id="closing-title" className="closing__title">
        <TwoTone text={closing.heading} />
      </h2>
      <div className="closing__grid">
        <div>
          {closing.text.map((t) => (
            <p key={t} className="closing__text">
              {t}
            </p>
          ))}
          <p className="closing__emphasis">{closing.emphasis}</p>
        </div>

        <div className="closing__buy">
          <p className="closing__invite">{closing.invite}</p>
          <p className="closing__price">
            <strong className="tabular">{offer.installments}</strong>
            <span>
              ou <span className="tabular">{offer.price}</span> à vista
            </span>
          </p>
          <Button className="closing__cta">
            {closing.cta}
          </Button>
          <p className="closing__guarantee">
            <ShieldCheck size={16} strokeWidth={1.5} aria-hidden />
            {closing.guaranteeNote}
          </p>
        </div>
      </div>
    </Section>
  )
}
