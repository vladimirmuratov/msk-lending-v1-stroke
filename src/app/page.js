import { Banner } from '@/components/Banner';
import { ContactsBlock } from '@/components/ContactsBlock';
import { FormAction } from '@/components/FormAction';
import { MainInfoBlock } from '@/components/MainInfoBlock';
import PhoneBlock from '@/components/PhoneBlock';

export default function Home() {
    return (
        <main style={{ position: 'relative' }}>
            <Banner />
            <PhoneBlock
                style={{
                    paddingTop: { xs: '50px', sm: '100px' },
                    paddingBottom: { xs: '50px', sm: '50px' },
                }}
                text="Эффективное восстановление пациентов с нарушениями после инсульта. Звоните!"
            />
            {/*<CardsBlock />*/}
            <MainInfoBlock />
            {/*<AboutBlock />*/}
            {/*<WhyWeBlock />*/}
            {/*<WeRespondBlock />*/}
            {/*<WhatWeOfferBlock/>*/}
            {/*<DirectionsOfHospitalizationBlock />*/}
            {/*<BaseAccordion id="faq" title="Частые вопросы" items={faq} />*/}
            {/*<CoordinatorBlock />*/}
            {/*<PartnersBlock />*/}
            <PhoneBlock text="Позвоните сейчас и начните восстановление!" />
            {/*<BaseAccordion id="service" title="Услуги" items={services} />*/}
            {/*<TextBlock text={text1} />*/}
            <ContactsBlock />
            <FormAction />
        </main>
    );
}
