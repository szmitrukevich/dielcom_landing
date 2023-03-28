import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { MainSection } from "../Common/MainSection"
import { AsideLayout } from "../ui/layouts/AsideLayout"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"
import { CompanyCard } from "./components/CompanyCard"

const Delivery = () => {
    const companyCards = [
        { url: '/static/images/company_1.png', alt: 'Изображение кампании', text: 'ABB - лидер в области технологий для электроэнергетики и автоматизации. ' },
        { url: '/static/images/company_2.png', alt: 'Изображение кампании',  text: 'DEKraft – продуктовая линейка состоит из модульного, силового, измерительного, коммутационного оборудования, корпусных решений и аксессуаров для них.'},
        { url: '/static/images/company_3.png', alt: 'Изображение кампании', text: 'Основные товарные направления EKF: низковольтная электротехническая продукция, оборудование среднего напряжения, корпуса электрощитов, изделия для электромонтажа и электроустановки, средства измерения, кабеленесущие системы, шинопровод, умный дом, молниезащита, профессиональное освещение.' },
        { url: '/static/images/company_4.png', alt: 'Изображение кампании', text: 'IEK GROUP – ведущий российский производитель и поставщик электротехнической и светотехнической продукции под брендом IEK®, оборудования промышленной автоматизации ONI® и продукции для IT-технологий ITK®. ' },
        { url: '/static/images/company_5.png', alt: 'Изображение кампании', text: 'Schneider Electric - мировой эксперт в области управления энергией и автоматизации.' },
        { url: '/static/images/company_6.png', alt: 'Изображение кампании', text: 'Rittal разрабатывает и создает решения в области распределительных шкафов, электрораспределения, контроля микроклимата, IT-инфраструктуры.' },
        { url: '/static/images/company_7.png', alt: 'Изображение кампании', text: '«Legrand» - это мировой производитель, специализирующийся на производстве продуктов и систем для построения электрических коммуникаций и информационных сетей в жилых, коммерческих и промышленных зданиях.' },
        { url: '/static/images/company_8.png', alt: 'Изображение кампании', text: 'Инкотекс – это российское предприятие, выпускающее широкую гамму счетчиков электрической энергии.' },
        { url: '/static/images/company_9.png', alt: 'Изображение кампании', text: 'Компания «Vergokan» это производитель кабельных лотков и сопутствующих монтажных аксессуаров для профессионального рынка электроинсталляций.' },
        { url: '/static/images/company_10.png', alt: 'Изображение кампании', text: 'Международная группа компаний «Световые Технологии» - ведущий производитель светотехнического оборудования на территории СНГ.' },
        { url: '/static/images/company_11.png', alt: 'Изображение кампании', text: 'Компания LEDVANCE является одним из мировых лидеров в области общего освещения, предлагая широкий ассортимент светодиодных светильников, передовых светодиодных ламп, интеллектуальных светотехнических решений, светодиодных лент и компонентов к ним, а также и традиционных источников света.' },
        { url: '/static/images/company_12.png', alt: 'Изображение кампании', text: 'ЭРА - освещение и электротовары для дома, офиса и промышленных объектов. ' },
        { url: '/static/images/company_13.png', alt: 'Изображение кампании', text: 'JAZZWAY – одна из самых признанных на Российском рынке светотехники. Основу ассортимента составляют светодиодные светильники, светодиодные источники света, светодиодная лента, а также удлинители, элементы питания, фонари.' },
        { url: '/static/images/company_14.png', alt: 'Изображение кампании', text: 'Компания ДКС является крупнейшим производителем кабеленесущих систем и низковольтного оборудования.' },
        { url: '/static/images/company_15.png', alt: 'Изображение кампании', text: 'Компания интегрирует лучшие технологии в области управления электроэнергией и автоматизации в режиме реального времени, услуги и решения для объектов гражданского и жилищного строительства, центров обработки данных, инфраструктуры и промышленности.' },
        { url: '/static/images/company_16.png', alt: 'Изображение кампании', text: 'АО «Ардатовский светотехнический завод» – одно из крупнейших светотехнических предприятий России, которое занимается производством и продажей осветительных приборов общего и специального назначения.' },
        { url: '/static/images/company_17.png', alt: 'Изображение кампании', text: 'Немецкий промышленный концерн, работающий в сфере электротехники, транспорта, энергетики, производства медицинского оборудования, производственной автоматизации и т. д. ' },
        { url: '/static/images/company_18.png', alt: 'Изображение кампании', text: 'Закрытое Акционерное Общество «Рувинил» является одним из ведущих производителей изделий электротехнического назначения в России' },
        { url: '/static/images/company_19.png', alt: 'Изображение кампании', text: 'Компания "Экопласт" производит: гофротрубы, трубы гладкие жесткие, кабель-каналы, миниканалы, короба для электроустановочных, каналы магистральные, миниколонны, лючки электротехнические, коробки распределительные, аксессуары для труб и крепеж, хомуты и стяжки кабельные, розетки, выключатели для внутренней и наружной электропроводки, материалы для отделки зданий и сооружений, кабельные лотки.' },
        { url: '/static/images/company_20.png', alt: 'Изображение кампании', text: 'Научно-производственное объединение GALAD является ведущим производителем светотехнической продукции.' },
        { url: '/static/images/company_21.png', alt: 'Изображение кампании', text: 'НИЛЕД сегодня предлагает широкую гамму арматуры для СИП: зажимы для крепления системы СИП, анкерные кронштейны, изолированные наконечники, соединительные зажимы и модули, крепежные изделия и приспособления для СИП' },
        { url: '/static/images/company_22.png', alt: 'Изображение кампании', text: 'BK является самой специализированной организацией в РФ и странах СНГ в области линейной арматуры для СИП, обладая полным спектром необходимых экспертных компетенций.' },
        { url: '/static/images/company_23.png', alt: 'Изображение кампании', text: 'Ассортимент продукции Система КМ включает в себя листовые кабельные лотки, лотки лестничного типа, проволочные лотки, аксессуары для всех типов лотков, монтажные системы, системы для прокладки инженерных сетей.' },
        { url: '/static/images/company_24.png', alt: 'Изображение кампании', text: 'ITK - известная российская марка телекоммуникационного оборудования, под которой выпускается надежная продукция российского производства для ИТ рынка.' },
        { url: '/static/images/company_25.png', alt: 'Изображение кампании', text: 'CHINT — является одним из ведущих поставщиков электротехнической отрасли в области производства и распределения электроэнергии (0,4 кВ-1150 кВ).' },
        { url: '/static/images/company_26.png', alt: 'Изображение кампании', text: '«Weidmüller» - ведущий производитель коммутационной техники и ряда других компонентов для электротехнической промышленности.' },
        { url: '/static/images/company_27.png', alt: 'Изображение кампании', text: 'Phoenix Contact предлагает широкий ассортимент продуктов для промышленной электротехники, который включает в себя: клеммные блоки с четырьмя вариантами подключения проводов, разъемы для быстрого соединения, разъемы для печатных плат, устройства защиты от импульсных перенапряжений, электронные преобразователи, Ethernet.' },

    ]

    return (
        <MainLayout>
            <Container>
                <MainSection>
                    <H1Styled>ЛИНЕЙКА ПОСТАВОК</H1Styled>
                </MainSection>
            </Container>

            <AsideLayout>
                <H2>ЛИНЕЙКА ПОСТАВОК</H2>
                <CardsWrapper>
                    {companyCards.map(card => (
                        <CompanyCard key={card.url} url={card.url} alt={card.alt} text={card.text} />
                    ))}
                </CardsWrapper>
            </AsideLayout>
        </MainLayout>
    )
}

const H1Styled = styled(H1)`
    padding-right: 300px;

    ${breakpoint.tablet`
        padding-right: 0;
    `}
`

const CardsWrapper = styled.div`
    margin-bottom: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${breakpoint.tablet`
    `}

    ${breakpoint.mobile`
        
    `}
`

export default Delivery