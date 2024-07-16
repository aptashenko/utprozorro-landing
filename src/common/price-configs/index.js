export const BASIC_PLAN = {
    name: 'basic',
    amount: 1000,
    settings: {
        lessons: {value: 5, text: 'уроков'},
        video: {value: 3, text: 'часа видео'},
        content: {value: 5, text: 'конспектов'},
        infinity: {text: 'Полный пожизненный доступ'},
        devices: {text: 'Доступ через мобильные устройства и компьютеры'},
        certificate: {text: 'Сертификат об окончании'},
    }
}

export const DEMO_PLAN = {
    name: 'demo',
    amount: 400,
    settings: {
        lessons: {value: 2, text: 'уроков'},
        video: {value: 1, text: 'час видео'},
        content: {value: 2, text: 'конспектов'},
        infinity: {text: 'Полный пожизненный доступ'},
        devices: {text: 'Доступ через мобильные устройства и компьютеры'},
    }
}
