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

                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Инсульт</Box> — это острое
                    нарушение мозгового кровообращения, при котором клетки головного мозга перестают получать кислород и
                    питательные вещества. В результате развивается повреждение тканей мозга, приводящее к серьёзным
                    последствиям: нарушению речи, движений, памяти, когнитивных функций.
                </Typography>
            </Box>

            <Box
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
                        marginBottom: '20px',
                        fontSize: { xs: '20px', sm: '24px' },
                        fontWeight: 400
                    }}
                >
                    <Box component="span" sx={{ color: 'var(--red)' }}>Инсульт</Box> развивается внезапно, но его корни
                    формируются задолго до приступа. К наиболее
                    распространённым причинам инсульта относятся:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Гипертония</Box> – высокое артериальное
                            давление повреждает сосуды и провоцирует их разрыв или закупорку
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Атеросклероз</Box> – холестериновые
                            бляшки сужают просвет сосудов и мешают нормальному кровотоку
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Сахарный диабет</Box> – нарушает обмен
                            веществ и ускоряет разрушение сосудов
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Заболевания сердца</Box> (аритмия,
                            пороки, инфаркт в анамнезе) – повышают риск тромбообразования
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Неправильный образ жизни</Box> – курение,
                            злоупотребление алкоголем, лишний вес, стресс и низкая физическая активность
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Наследственная
                                предрасположенность</Box> – генетические факторы также могут увеличивать риск инсульта
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
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
                        fontSize: { xs: '20px', sm: '24px' },
                        fontWeight: 400
                    }}
                >
                    <Box component="span" sx={{ color: 'var(--red)' }}>Инсульт</Box> всегда развивается стремительно, и
                    от скорости реакции зависит жизнь и восстановление пациента. Чтобы вовремя оказать помощь, важно
                    знать <Box component="span" sx={{ color: 'var(--red)' }}>первые признаки инсульта</Box>:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Внезапная слабость или онемение</Box> в
                            руке, ноге или половине лица
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Нарушение речи</Box> – человек не может
                            произнести слова, путает их или не понимает обращённую речь
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Проблемы со зрением</Box> – двоение,
                            выпадение части поля зрения
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Нарушение координации</Box> –
                            головокружение, шаткость походки, потеря равновесия
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Острая головная боль</Box> – возникает
                            резко, часто с тошнотой и потерей сознания
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
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
                        fontSize: { xs: '20px', sm: '24px' },
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
                    <Box component="span" sx={{ color: 'var(--red)' }}>Реабилитация после инсульта</Box> — это комплекс
                    мер, направленных на восстановление здоровья, подвижности, речи и памяти пациента. Чем раньше
                    начнётся восстановление, тем выше шансы вернуть утраченные функции и улучшить качество жизни.
                </Typography>
            </Box>

            <Box
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
                        fontSize: { xs: '20px', sm: '24px' },
                        fontWeight: 400
                    }}
                >
                    Мы предлагаем полный комплекс мероприятий для восстановления пациентов:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 } }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Медицинская реабилитация</Box> — наблюдение врачей-неврологов, терапия для стабилизации состояния
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Физиотерапия и ЛФК</Box> — упражнения для восстановления движений, силы и координации
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Логопедическая помощь</Box> — работа с речью, памятью и когнитивными функциями
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Психологическая поддержка</Box> — помощь в преодолении депрессии и мотивация к восстановлению
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)' }}>Патронаж и уход</Box> — профессиональный уход на дому или в стационаре
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <PhoneBlock text="Более подробно о реабилитации — по телефону. Звоните!" />

            <Box
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

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Ускоряет восстановление речи и движений
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Снижает риск повторного инсульта
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Улучшает общее состояние здоровья и настроение пациента
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Помогает вернуться к самостоятельной жизни
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
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
                    Преимущества нашей компании
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Реабилитация в федеральных и ведомственных клиниках Москвы
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Опытные специалисты и индивидуальные программы восстановления
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Госпитализация без ожидания и очередей
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Транспортировка пациентов с медицинским сопровождением
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Поддержка 24/7 — всегда рядом с вами
                        </Typography>
                    </Box>

                </Box>
            </Box>

        </Box>
    );
});
