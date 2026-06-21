const products = [
    {
        id: 1,
        name: 'فلتر AQUA STAR القلوي – 7 مراحل (امريكي)',
        subtitle: 'للاستخدام المنزلي والمطاعم',
        description: 'احصل على مياه نقية وصحية مع فلتر AQUA STAR القلوي - 7 مراحل.',
        price: '100 د.ك',
        category: 'devices',
        isAvailable: true,
        image: 'AQUA star 7 stages USA v2.png',
        features: [
            'يزيل الشوائب والكلور والمواد الضارة',
            'يحافظ على المعادن المفيدة',
            'يوازن مستوى الـ pH ليمنحك ماء قلوياً صحياً',
            'صناعة أمريكية',
            '10-9 PH / 8-7 PH متوفر'
        ],
        whatsappMessage: 'أهلاً، أريد طلب فلتر AQUA STAR القلوي – 7 مراحل (100 د.ك) مع التركيب والتوصيل.'
    },
    {
        id: 2,
        name: 'فلتر مركزي 3 مراحل - AQUA STAR',
        subtitle: 'لتنقية المنزل بالكامل',
        description: 'نظام فلترة مركزي لتنقية مياه المنزل بالكامل. 3 مراحل (PP + كربون + PP). صناعة فيتنامية بجودة أمريكية.',
        price: 'تواصل معنا',
        category: 'devices',
        isAvailable: true,
        image: 'AQUA STAR 3.png',
        icon: 'fa-building',
        gradient: 'from-blue-500 to-indigo-600',
        features: [
            'المرحلة الأولى: فلتر PP لإزالة الشوائب والصدأ والرمال',
            'المرحلة الثانية: فلتر كربون للتخلص من الكلور والروائح الكريهة',
            'المرحلة الثالثة: فلتر PP إضافي لمزيد من النقاء',
            'صناعة فيتنامية بجودة أمريكية',
            'يحافظ على نظافة خزانات المياه والأدوات الصحية'
        ],
        whatsappMessage: 'أهلاً، أريد الاستفسار عن سعر فلتر مركزي 3 مراحل AQUA STAR.'
    },
    {
        id: 3,
        name: 'جهاز فلترة المياه المركزي Pure Plus',
        subtitle: 'فلتر مركزي مزدوج - مدخل ومخرج نحاس',
        description: 'احصل على جهاز فلترة المياه المركزي Pure Plus الآن بسعر لا يُفوّت!',
        price: '60 د.ك',
        category: 'devices',
        isAvailable: true,
        image: 'Pure plus.jpg',
        icon: 'fa-filter-circle-dollar',
        gradient: 'from-teal-400 to-blue-700',
        features: [
            'مدخل ومخرج نحاس لضمان أعلى جودة',
            'فلتر مركزي مزدوج لتنقية فعالة للمياه',
            'كفالة سنة كاملة'
        ],
        whatsappMessage: 'أهلاً، أريد طلب جهاز فلترة المياه المركزي Pure Plus (60 د.ك) مع التركيب.'
    },
    {
        id: 4,
        name: 'فلتر AQUA STAR القلوي – 7 مراحل (فيتنامي)',
        subtitle: 'فلتر 7 مراحل قلوية',
        description: 'فلتر 7 مراحل قلوية يعدل pH الماء ليصبح متوازناً وصحياً، ويمنحك طعماً منعشاً مع كل رشفة.',
        price: '90 د.ك',
        category: 'devices',
        isAvailable: true,
        image: 'AQUA star vt.png',
        icon: 'fa-droplet',
        gradient: 'from-green-400 to-teal-600',
        features: [
            'يحافظ على المعادن المفيدة',
            'يزيل الشوائب والروائح',
            'مثالي لصحة الجسم'
        ],
        whatsappMessage: 'أهلاً، أريد طلب فلتر AQUA STAR القلوي 7 مراحل (فيتنامي) - 90 د.ك.'
    },
    {
        id: 5,
        name: 'طقم شمعات فلتر منزلي – 3 مراحل (10")',
        subtitle: 'طقم الصيانة الدورية الأساسي (المراحل 1 و2 و3)',
        description: 'طقم الصيانة الدورية الأساسي لحماية فلتر المياه المنزلي وضمان نقاء الشرب. 3 شمعات مقاس 10 إنش تعمل بالتكامل لتنقية المياه وحماية المراحل العلوية والممبرين.',
        price: 'تواصل معنا',
        category: 'filters',
        isAvailable: true,
        image: 'طقم-شمعات.jpg',
        icon: 'fa-box-open',
        gradient: 'from-emerald-400 to-green-700',
        features: [
            'المرحلة الأولى (PP): شمعة شوائب 5 ميكرون لاحتجاز الأتربة والرمال والصدأ',
            'المرحلة الثانية (UDF/GAC): شمعة كربون حبيبي لامتصاص الكلور والغازات والروائح',
            'المرحلة الثالثة (CTO): شمعة كربون صلب لمنع مرور البقايا الكيميائية والعضوية'
        ],
        whatsappMessage: 'أهلاً، أريد الاستفسار عن سعر طقم شمعات الفلتر المنزلي – 3 مراحل (10").'
    },
    {
        id: 6,
        name: 'مرحلة فلتر Purosis القلوية',
        subtitle: 'طاقة أفضل - صحة أقوى - مناعة أعلى',
        description: 'يعادل الحموضة ويمنحك معادن ضرورية لجسمك. مياه قلوية منعشة لصحة قلبك وجسمك.',
        price: 'تواصل معنا',
        category: 'filters',
        isAvailable: true,
        image: 'مرحلة-قلوية.jpg',
        icon: 'fa-flask',
        gradient: 'from-green-400 to-emerald-600',
        features: [
            'يعادل الحموضة ويمنحك معادن ضرورية لجسمك',
            'مياه قلوية منعشة لصحة قلبك وجسمك',
            'طاقة أفضل - صحة أقوى - مناعة أعلى'
        ],
        whatsappMessage: 'أهلاً، أريد الاستفسار عن سعر مرحلة فلتر Purosis القلوية.'
    },
    {
        id: 8,
        name: 'مضخة مياه كهربائية – 24VDC',
        description: 'هذه مضخة مياه صغيرة، فعالة، وآمنة بجهد 24 فولت، وهي مثالية لزيادة الضغط أو تحويل المياه الى الفلتر.',
        price: 'تواصل معنا',
        category: 'spareparts',
        isAvailable: true,
        image: 'مضخة-مياه.jpg',
        icon: 'fa-water-pump',
        gradient: 'from-orange-400 to-red-600',
        whatsappMessage: 'أهلاً، أريد الاستفسار عن سعر مضخة المياه الكهربائية 24VDC.'
    },
    {
        id: 9,
        name: 'خرطوم مياه فلتر – لفة بيضاء',
        description: 'خرطوم مياه فلتر مرن وسهل التركيب.',
        price: 'تواصل معنا',
        category: 'spareparts',
        isAvailable: true,
        image: 'خرطوم-مياه-فلتر-–-لفة-بيضاء.jpg',
        icon: 'fa-pipe',
        gradient: 'from-stone-300 to-stone-500',
        features: [
            'مرن وسهل التركيب',
            'مادة خام متينة وصديقة للبيئة',
            'متوافق مع معظم أنظمة الفلترة',
            'مقاوم للتشقق والتآكل'
        ],
        whatsappMessage: 'أهلاً، أريد الاستفسار عن سعر خرطوم مياه الفلتر – اللفة البيضاء.'
    },
    {
        id: 10,
        name: 'طقم وصلات تثبيت سريع',
        description: 'مجموعة صمامات ووصلات تثبيت سريع (Quick Fittings) مع مشابك وأقفال زرقاء لتأمين الأنابيب ومنع التسريبات. أساسي لتركيب وصيانة الفلاتر.',
        price: 'تواصل معنا',
        category: 'spareparts',
        isAvailable: true,
        image: 'طقم-وصلات.jpg',
        icon: 'fa-gears',
        gradient: 'from-blue-400 to-blue-600',
        whatsappMessage: 'أهلاً، أريد الاستفسار عن سعر طقم وصلات التثبيت السريع.'
    },
    {
        id: 11,
        name: 'صنبور مياه فلتر فاخر – Gooseneck',
        description: 'صنبور ستانلس ستيل مصقول طويل بتصميم عنق الإوزة الأنيق. مقبض دوران مفرد. قاعدة تثبيت نحاسية مع حلقات عزل. يضيف لمسة جمالية للمطبخ.',
        price: 'تواصل معنا',
        category: 'spareparts',
        isAvailable: true,
        image: 'صنبور.jpg',
        icon: 'fa-faucet-drip',
        gradient: 'from-gray-400 to-gray-600',
        whatsappMessage: 'أهلاً، أريد الاستفسار عن سعر الصنبور الفاخر Gooseneck.'
    }
];

const maintenancePackages = [
    {
        id: 'm1',
        name: 'باقة تبديل شمعات RO',
        description: 'خدمة تبديل شمعات الفلتر المنزلي (المراحل 1، 2، 3) لأنظمة RO مع فحص جودة المياه.',
        price: '10 د.ك',
        icon: 'fa-droplet',
        features: ['تبديل 3 شمعات (PP + كربون + كربون)', 'فحص نسبة الأملاح TDS', 'اختبار جودة المياه'],
        whatsappMessage: 'أهلاً، أريد حجز خدمة تبديل شمعات RO (باقة 10 د.ك).'
    },
    {
        id: 'm2',
        name: 'باقة تبديل شمعات جامبو دبل',
        description: 'خدمة تبديل شمعات الفلتر المركزي الدبل (شمعتين جامبو) مع فحص الضغط والتنظيف.',
        price: '15 د.ك',
        icon: 'fa-filter',
        features: ['تبديل شمعتين جامبو', 'فحص ضغط المياه', 'تنظيف الهيكل الداخلي'],
        whatsappMessage: 'أهلاً، أريد حجز خدمة تبديل شمعات جامبو دبل (باقة 15 د.ك).'
    },
    {
        id: 'm3',
        name: 'باقة تبديل شمعات جامبو تريبل',
        description: 'خدمة تبديل شمعات الفلتر المركزي الثلاثي (3 شمعات جامبو) مع فحص شامل وتنظيف.',
        price: '20 د.ك',
        icon: 'fa-water',
        features: ['تبديل 3 شمعات جامبو', 'فحص ضغط المياه', 'تنظيف الهيكل الداخلي', 'اختبار نسبة الأملاح'],
        whatsappMessage: 'أهلاً، أريد حجز خدمة تبديل شمعات جامبو تريبل (باقة 20 د.ك).'
    }
];

const companyInfo = {
    name: 'شركة الغردقة الذهبية',
    shortName: 'الغردقة الذهبية',
    phone: '97652365',
    fullPhone: '+96597652365',
    whatsappUrl: 'https://wa.me/96597652365',
    slogan: 'نقاء يدوم... صحة لكل بيت',
    description: 'حلول متكاملة لتنقية ومعالجة المياه في الكويت – فلاتر منزلية ومركزية، شمعات، قطع غيار، وصيانة دورية.',
    email: 'info@alghadeer-kw.com',
    instagram: 'https://www.instagram.com/company_gh_kw_2'
};
