import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import PhoneBlock from '@/components/PhoneBlock';

export const MainInfoBlock = memo(() => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingTop: { xs: '25px', sm: '50px' },
                paddingBottom: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >
            <Box
                component="article"
                sx={{
                    paddingBottom: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Что такое инсульт и почему он возникает?
                </Typography>

                <Typography component="p"
                            sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Инсульт</Box> — штука довольно
                    коварная. Это когда кровоток в каком-то участке мозга внезапно блокируется или, наоборот, происходит
                    кровоизлияние — результат, по сути, одинаков: клетки мозга начинают задыхаться без кислорода и
                    питательных веществ. И знаете что? У нейронов нет ни "запасного аккумулятора", ни возможности как-то
                    "переждать" — достаточно пары минут без питания, и повреждения становятся необратимыми.
                </Typography>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                    Отсюда и те самые пугающие последствия: человек может вдруг потерять способность двигаться половиной
                    тела, у него путается речь или пропадает возможность вспоминать даже простые вещи вроде своего
                    адреса. Даже если все случилось "на ровном месте", подоплека обычно кроется глубже: закупорка сосуда
                    (чаще всего тромб или эмбол) либо разрыв сосуда из-за проблем с давлением или состоянием стенки
                    артерий. И в итоге — настоящий аврал для организма.
                </Typography>
            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Основные причины инсульта
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '10px',
                        fontSize: { xs: 18, sm: 20 },
                        fontWeight: 400
                    }}
                >
                    <Box component="span" sx={{ color: 'var(--red)' }}>Инсульт</Box> всегда кажется чем-то молниеносным
                    — вот только что всё было нормально, а через минуту человек уже не может выговорить фразу или
                    поднять руку. Но если по-честному, настоящая история инсульта начинается намного раньше. Это как
                    трещина в стене: она появляется неожиданно лишь для того, кто давно не заглядывал за обои, а на
                    самом деле зреет исподтишка, годами.
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '15px',
                        fontSize: { xs: 18, sm: 20 },
                        fontWeight: 400
                    }}
                >
                    Что же закладывает мины замедленного действия в нашем организме? В список “главных подозреваемых”
                    почти всегда попадают несколько привычных вещей:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}
                            >
                                Гипертония
                            </Typography>
                        </Box>
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Когда давление в сосудах постоянно выше нормы, это словно вода пробивает себе дорогу по
                            слишком узким или ослабленным трубам. Со временем такие "перегрузки" наносят вред:
                            стенки
                            сосудов истончаются или становятся ломкими, а где-то могут буквально отдать – вот вам и
                            риск
                            разрыва или закупорки.
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}
                            >
                                Атеросклероз
                            </Typography>
                        </Box>
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Здесь у нас уже другой враг: на внутренних стенках сосудов оседают холестериновые бляшки.
                            Представьте, если внутренняя сторона водопроводной трубы обрастает слоем наслоений — вода
                            течет хуже, а в какой-то момент проход может вообще забиться. С кровью примерно та же
                            история: нормальный ток затруднен, а это отлично повышает риск "аварий".
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}
                            >
                                Сахарный диабет
                            </Typography>
                        </Box>
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Коварен тем, что атакует с разных сторон: страдает обмен веществ, и особенно сильно —
                            состояние сосудов. Микроскопические повреждения накапливаются быстрее, чем обычно, наше тело
                            просто не успевает ремонтировать поломки.

                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}
                            >
                                Заболевания сердца (аритмия, пороки, инфаркт в анамнезе)
                            </Typography>
                        </Box>
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Болезни сердца вроде аритмии или перенесенного инфаркта добавляют масла в огонь: когда
                            сердце работает нестабильно, кровь прокачивается хуже и склонна застаиваться, а значит
                            повышается шанс образования тромбов. Тут один неравномерный толчок — и последствия могут
                            быть тяжелыми.
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}
                            >
                                Неправильный образ жизни
                            </Typography>
                        </Box>
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Обычные, казалось бы, жизненные привычки тоже играют роль детонатора: курение сужает сосуды
                            (по сути, вы каждый раз жмёте резиновую трубку), алкоголь провоцирует скачки давления и
                            разрушает ткани. Добавьте туда лишний вес (дополнительная нагрузка), хронический стресс
                            (гормоны выбивают ритмы работы организма) и малоподвижность… И вот перед нами вырисовывается
                            целый букет рисков.
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                            <Typography
                                variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}
                            >
                                Наследственная предрасположенность
                            </Typography>
                        </Box>
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Ну и наконец — наследственность. Тут уж ничего не поделаешь — встречаются семьи, где
                            проблемы с сосудами прямо “передаются по наследству”. Гены пока не перешить пластырем — зато
                            можно вовремя узнать об уязвимости и держать руку на пульсе (буквально).
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Симптомы инсульта: как вовремя распознать
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: 18, sm: 20 },
                        fontWeight: 400
                    }}
                >
                    Знаешь, с инсультом нет такого понятия, как “подождать и посмотреть”. Вся эта история всегда
                    начинается молниеносно — буквально только что человек был обычным собой, а через минуту мир вокруг
                    словно меняет цвет. Вот почему реагировать надо сразу и без колебаний.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Иногда человек вдруг замечает — рука или нога будто не его: тяжелеет, соскальзывает предмет
                            из пальцев, а ощущения словно "выключились" на одну половину лица или тела. Причём это
                            случается резко — только что всё было нормально, и вот уже стакан выскальзывает, невозможно
                            застегнуть пуговицу или возникает странное чувство перекоса во рту.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Речь тоже может предательски подвести — слова спутались, язык заплетается как после
                            новокаина у стоматолога. Можно пытаться объясниться, но фразы звучат нелепо или вовсе нет
                            никакой возможности произнести ни одного внятного слова. И бывает ещё так, что человек
                            ничего не понимает из того, что ему говорят: вроде слышит — а будто иностранный язык.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Зрение подкидывает свои "сюрпризы": кто-то внезапно начинает всё видеть вдвойне (нет, это не
                            усталость), у кого-то пропадает кусок привычной картинки — словно стерли ластиком часть поля
                            зрения.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Координация летит к чертям: привычная походка превращается в шатающуюся походку матроса на
                            палубе во время шторма. Порой кружится голова настолько сильно, что удержаться на ногах
                            почти невозможно.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            И отдельная глава — это головная боль. Не просто "поболела и отпустила", а как удар —
                            внезапный, резкий, такой силы, что тошнит и человек иногда теряет сознание буквально через
                            минуту после её появления.
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Тест «УЗП» для проверки инсульта
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: 18, sm: 20 },
                    }}
                >
                    Простая методика, которая помогает быстро определить опасность:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Улыбка</Box> — попросите человека
                            улыбнуться. При инсульте улыбка будет «кривой»
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Заговорите</Box> – попросите произнести
                            простую фразу. Если речь нарушена, это тревожный сигнал
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Поднимите руки</Box> – при инсульте одна
                            рука может опускаться
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: 'var(--main-color)',
                            marginTop: '20px',
                            fontSize: { xs: '20px', sm: '24px' },
                        }}
                    >
                        <Box component="span" sx={{ color: 'var(--red)' }}>Если хотя бы один признак присутствует — это
                            повод срочно вызывать скорую помощь!</Box>
                    </Typography>

                </Box>
            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Реабилитация после инсульта в Москве
                </Typography>

                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Реабилитация после инсульта</Box> — штука
                    многослойная. Это не какая-то одна большая процедура, как может показаться со стороны, а целый набор
                    шагов, которые помогают человеку снова быть собой: научиться двигать рукой, говорить без спотыканий,
                    помнить дороги домой или просто радоваться простым вещам. Тут время — прямо на вес золота: если
                    начать заниматься сразу после инсульта, у мозга больше шансов «перепрокинуть мосты» и обойти
                    повреждённые участки. Я много раз видел, как ранняя работа возвращает людям возможность гулять с
                    внуками или даже возвращаться к любимому хобби; промедлишь — и часть этих дверей могут захлопнуться.
                </Typography>
            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Этапы реабилитации после инсульта
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: 18, sm: 20 },
                        fontWeight: 400
                    }}
                >
                    У нас можно получить не просто лечение, а действительно продуманный маршрут возвращения к привычной
                    жизни — с опорой на команду специалистов, которые держат руку на пульсе вашего прогресса.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 } }}>
                            Если говорить по порядку: за медицинскую часть у нас отвечают <Box component="span"
                                                                                               sx={{ color: 'var(--red)' }}>врачи-неврологи</Box>,
                            которые
                            регулярно следят за динамикой и корректируют терапию по мере надобности. Это позволяет
                            быстро замечать даже небольшие изменения — в лучшую или худшую сторону — и реакция всегда
                            своевременная.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Физиотерапия и занятия лечебной
                                физкультурой</Box> — отдельная большая тема. Там нет универсальной «зарядки»: упражнения
                            подбираются так, чтобы постепенно вернуть контроль над движениями, укрепить мышцы и снова
                            почувствовать уверенность в теле. С годами я видел немало историй, когда простая возможность
                            самостоятельно встать с кровати становилась праздником.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Работа с логопедом</Box> у нас тоже
                            выстроена очень гибко — ведь речь, память и внимание страдают по-разному у каждого. Иногда
                            речь о восстановлении дикции, иногда о том, как заново научиться связывать слова и выражать
                            мысли.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Многие недооценивают <Box component="span" sx={{ color: 'var(--red)' }}>роль
                            психолога</Box> — но без поддержки на этом пути тяжело не растеряться.
                            Специалисты помогают справиться с унынием, тревогой или страхом «не справлюсь», а главное —
                            разбудить желание двигаться вперёд.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Ну и последняя составляющая — это <Box component="span" sx={{ color: 'var(--red)' }}>патронаж
                            и уход</Box> (куда без этого). Когда нужно, рядом
                            всегда есть люди, которые знают свой толк в уходе: от помощи с гигиеной до профилактики
                            пролежней и мониторинга состояния дома или в стационаре.
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: 'var(--main-color)',
                            marginTop: '20px',
                            fontSize: { xs: 18, sm: 20 },
                            fontWeight: 400
                        }}
                    >
                        В итоге человек оказывается в окружении заботы со всех сторон — здесь не оставляют один на один
                        с трудностями, какими бы они ни были.
                    </Typography>

                </Box>
            </Box>

            <PhoneBlock text="Более подробно о реабилитации — по телефону. Звоните!" />

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Почему важна ранняя реабилитация
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: 18, sm: 20 },
                        fontWeight: 400
                    }}
                >
                    Почему вообще все твердят о ранней реабилитации? Вот представьте: человек только перенёс инсульт —
                    шок для организма, всё будто застыло. И вот тут иногда кажется, что нужно подождать, дать телу
                    "отдохнуть". Но на деле промедление играет против нас.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Чем раньше начинаешь реабилитацию</Box> —
                            даже если это простые упражнения или попытки говорить —
                            тем выше шанс восстановить речь и движения. Тут срабатывает неврологическая пластичность: у
                            мозга появляется шанс перестроиться, перекинуть “мосты” туда, где “дороги” разрушены. Можно
                            сравнить с ремонтом после аварии — чем быстрее начинаешь чинить, тем меньше запущенных
                            проблем.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Есть ещё один момент. <Box component="span" sx={{ color: 'var(--red)' }}>Активное
                            восстановление</Box> снижает риск второго инсульта (да-да, такое
                            встречается нередко). Если человек долго лежит, замедляются обменные процессы, возрастает
                            опасность тромбов и прочих осложнений. А вот движение и дыхательные упражнения поддерживают
                            внутренние системы в боевом состоянии.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Не забываем и о психологии</Box>:
                            возвращаясь хоть к небольшой активности, человек чувствует себя
                            не просто пациентом, а участником собственного выздоровления. Настроение выправляется (это
                            не пустяк), энергия появляется — и потихоньку возвращается самостоятельность: возможность
                            элементарно умыться самому или поговорить с родными без чужой помощи. А когда видишь первые
                            успехи — пусть маленькие! — это подпитывает желание бороться дальше.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Вот почему <Box component="span" sx={{ color: 'var(--red)' }}>ранняя реабилитация</Box> — не
                            просто медицинский стандарт. Это реальная поддержка
                            человеку на пути к независимости и качественной жизни после серьезного удара судьбы.
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
                component="article"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Почему нас выбирают — не только цифры, а реальный опыт
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Мы сотрудничаем с ведущими федеральными
                                центрами и профильными клиниками Москвы</Box>. Это значит,
                            что наши пациенты проходят реабилитацию там же, где восстанавливаются олимпийские спортсмены
                            или известные политики — среди оборудования последнего поколения и под присмотром врачей с
                            огромным опытом.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            В команде работают <Box component="span" sx={{ color: 'var(--red)' }}>врачи и
                            реабилитологи</Box>, которые видели самые разные случаи: от спортивных
                            травм до серьезных неврологических состояний. Чужого диагноза для них нет — каждому
                            разрабатывается программа под ситуацию и особенности человека. Бывает даже, что вместе с
                            пациентом меняем тактику буквально “на ходу”, если видим, что организм реагирует необычно.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Есть пожелание <Box component="span" sx={{ color: 'var(--red)' }}>попасть в стационар без
                            долгих ожиданий</Box>? Мы тоже не любим очереди (особенно
                            когда речь о здоровье). Поэтому госпитализируем пациентов сразу — никаких тоскливых ожиданий
                            перед регистратурой.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Отдельная забота — <Box component="span" sx={{ color: 'var(--red)' }}>транспортировка</Box>.
                            Если человек лежачий или состояние нестабильное,
                            обеспечиваем путь до клиники в машине скорой с опытной медсестрой или врачом. За этим у нас
                            очень строго: рисковать безопасностью мы не позволяем.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)', alignSelf: 'start' }} />
                        <Typography
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Ну и чтобы не было ощущения “вас здесь бросили” — <Box component="span"
                                                                                   sx={{ color: 'var(--red)' }}>наш
                            координатор всегда на связи</Box>. Телефон
                            можно набирать хоть посреди ночи: если возник сложный вопрос или захотелось просто услышать
                            знакомый голос, поддержка 24/7 помогает пройти этот путь спокойнее и увереннее.
                        </Typography>
                    </Box>

                </Box>
            </Box>

        </Box>
    );
});
