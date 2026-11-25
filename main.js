/**
 * AL TABAYUN | التباين — Corporate Website Interactive Controller
 * Features:
 * - Bilingual EN / AR translation dictionary & seamless RTL / LTR switching
 * - Sticky header & active section navigation spy
 * - Responsive mobile navigation drawer with keyboard & backdrop controls
 * - Scroll reveal animations (IntersectionObserver)
 * - Service inquiry prefill into contact form
 * - Client-side contact form validation & prefilled mailto dispatch
 * - Dynamic copyright year & smooth back-to-top scrolling
 */

(function () {
  "use strict";

  /* ==================== TRANSLATIONS (EN / AR) ==================== */
  const translations = {
    en: {
      skip_to_content: "Skip to main content",
      brand_subtitle: "General Contracting & Supplies",
      nav_home: "Home",
      nav_about: "About Us",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_why: "Why AL TABAYUN",
      nav_contact: "Contact",
      nav_cta: "Contact Us",

      hero_eyebrow: "AL TABAYUN | التباين — GENERAL CONTRACTING & SUPPLIES",
      hero_title: "Engineering Excellence. Building Trust.",
      hero_subtitle:
        "Integrated contracting and electromechanical solutions built around quality, precision, safety, and reliable execution.",
      hero_btn_services: "Explore Our Services",
      hero_btn_projects: "View Our Projects",
      hero_btn_contact: "Contact Us",
      disc_mech: "Mechanical & HVAC",
      disc_elec: "Electrical Infrastructure",
      disc_fire: "Firefighting Systems",
      disc_gen: "General Contracting & Supplies",
      scroll_label: "SCROLL",

      about_eyebrow: "ABOUT AL TABAYUN",
      about_title: "Who We Are",
      about_badge_title: "INTEGRATED MEP & CONTRACTING",
      about_badge_text:
        "Coordinated execution across civil works, electromechanical installations, and technical procurement.",
      about_p1:
        "AL TABAYUN (التباين) is a general contracting and supplies company with a dedicated specialization in mechanical and electrical works, delivering practical, well-coordinated, and integrated project solutions.",
      about_p2:
        "We bridge technical engineering requirements with disciplined on-site execution. By combining general contracting capabilities with specialized MEP installations and reliable material supplies, we help project owners and main contractors achieve seamless integration across every phase of construction.",
      cap_mech: "Mechanical Works",
      cap_elec: "Electrical Works",
      cap_fire: "Firefighting Systems",
      cap_hvac: "HVAC Systems",
      cap_contracting: "General Contracting & Supplies",

      vmv_eyebrow: "CORPORATE DIRECTION",
      vmv_title: "Vision, Mission & Core Values",
      vision_title: "Our Vision",
      vision_text:
        "To become a trusted partner in delivering reliable contracting and electromechanical solutions.",
      mission_title: "Our Mission",
      mission_text:
        "To execute projects with professionalism, technical precision, quality, safety, and commitment.",
      values_title: "Our Values",
      val_integrity: "Integrity",
      val_quality: "Quality",
      val_safety: "Safety",
      val_commitment: "Commitment",
      val_teamwork: "Teamwork",
      val_improvement: "Continuous Improvement",

      services_eyebrow: "WHAT WE DELIVER",
      services_title: "Our Services",
      services_intro:
        "Comprehensive engineering, contracting, and supply solutions engineered for operational reliability and technical compliance.",
      srv_1_title: "Mechanical Works",
      srv_1_desc:
        "Installation, piping networks, pumping stations, plumbing infrastructure, and mechanical equipment integration executed to exact engineering specifications.",
      srv_2_title: "Electrical Works",
      srv_2_desc:
        "Power distribution systems, control panels, cabling networks, lighting installations, and low-current infrastructure engineered for safe, uninterrupted operation.",
      srv_3_title: "Firefighting Systems",
      srv_3_desc:
        "Complete fire protection networks including sprinkler piping, fire hose cabinets, hydrants, and fire pump assemblies installed with rigorous testing and safety compliance.",
      srv_4_title: "HVAC & Air Conditioning",
      srv_4_desc:
        "Central air conditioning, ductwork fabrication and installation, ventilation systems, and climate-control solutions designed for efficiency and thermal comfort.",
      srv_5_title: "General Contracting",
      srv_5_desc:
        "End-to-end site execution, structural and finishing works, and multi-disciplinary coordination ensuring disciplined schedules and dependable workmanship.",
      srv_6_title: "Supplies & Procurement",
      srv_6_desc:
        "Sourcing and timely delivery of approved electromechanical components, piping materials, valves, electrical gear, and construction supplies.",
      srv_inquire: "Request Consultation",

      projects_eyebrow: "SELECTED EXPERIENCE",
      projects_title: "Our Projects & Collaborations",
      projects_intro:
        "Selected project engagements demonstrating our execution across firefighting, HVAC, and specialized site works in collaboration with established partners.",
      illustrative_badge: "Illustrative Visual",
      meta_scope: "Scope",
      meta_collab: "Collaboration",
      proj_1_name: "Fustat City",
      proj_1_scope: "Firefighting Works",
      proj_1_collab: "Diagrm",
      proj_2_name: "Knowledge City – New Administrative Capital",
      proj_2_scope: "Firefighting and Air Conditioning Works",
      proj_2_collab: "Elshokair",
      proj_3_name: "Hyde Park",
      proj_3_scope: "Firefighting and Shield Works",
      proj_3_collab: "El Imam",
      projects_disclaimer:
        "* Note: Photography shown above serves as illustrative engineering visuals representing our technical scopes of work.",

      why_eyebrow: "OUR ADVANTAGE",
      why_title: "Why Choose AL TABAYUN",
      why_intro:
        "Built on engineering discipline, accountable site management, and consistent execution standards.",
      why_1_title: "Technical Expertise",
      why_1_desc:
        "Practical field knowledge across mechanical, electrical, firefighting, and HVAC systems tailored to complex project requirements.",
      why_2_title: "Quality-Focused Execution",
      why_2_desc:
        "Strict adherence to approved shop drawings, material submittals, and methodical inspection at every installation milestone.",
      why_3_title: "Safety Commitment",
      why_3_desc:
        "Proactive workplace safety practices that protect personnel, site assets, and operational continuity throughout execution.",
      why_4_title: "Reliable Project Coordination",
      why_4_desc:
        "Seamless alignment with consultants, main contractors, and collaborating partners to prevent clashes and streamline workflows.",
      why_5_title: "Professional Teamwork",
      why_5_desc:
        "Dedicated engineers, supervisors, and skilled technicians working cohesively from mobilization through testing and handover.",
      why_6_title: "Commitment to Delivery",
      why_6_desc:
        "Dependable resource planning and procurement discipline focused on honoring project timelines and contractual obligations.",

      qs_eyebrow: "EXECUTION STANDARDS",
      qs_title: "Quality & Safety Commitment",
      qs_lead:
        "At AL TABAYUN, quality control and workplace safety are integral to every stage of engineering, procurement, and site installation.",
      qs_body:
        "Our field teams operate under structured supervision, clear technical specifications, and disciplined coordination protocols. From verifying incoming materials and inspecting piping and electrical assemblies to maintaining safe working environments on active sites, we prioritize responsible, accountable project delivery.",
      qs_p1_title: "Rigorous Quality Control",
      qs_p1_desc:
        "Systematic material verification, installation checks, and functional system testing prior to handover.",
      qs_p2_title: "Workplace Safety Culture",
      qs_p2_desc:
        "Consistent adherence to site safety rules, protective equipment standards, and hazard prevention practices.",
      qs_p3_title: "Disciplined Coordination",
      qs_p3_desc:
        "Transparent communication with project stakeholders to ensure smooth sequencing and responsible execution.",

      contact_eyebrow: "GET IN TOUCH",
      contact_title: "Contact AL TABAYUN",
      contact_intro:
        "Connect with our team for contracting inquiries, electromechanical scopes, tenders, and supply requests.",
      contact_phone_label: "Phone",
      contact_email_label: "Email",
      contact_loc_label: "Location",
      contact_loc_value: "6th of October City, Giza, Egypt",
      contact_whatsapp_btn: "Chat on WhatsApp",

      form_heading: "Send an Inquiry",
      form_note:
        "Complete the form below to prepare a structured email directly to our engineering and contracting desk.",
      form_name_label: "Full Name *",
      form_name_ph: "Enter your full name",
      form_email_label: "Email Address *",
      form_email_ph: "name@company.com",
      form_phone_label: "Phone Number *",
      form_phone_ph: "+20 10 XXXXXXXX",
      form_subject_label: "Subject / Service Scope *",
      form_subject_ph: "e.g., Firefighting & HVAC Inquiry",
      form_message_label: "Project Details / Message *",
      form_message_ph: "Describe your project requirements, scope, or inquiry...",
      form_submit_btn: "Prepare & Open Email Inquiry",

      err_name: "Please enter your full name.",
      err_email: "Please enter a valid email address.",
      err_phone: "Please enter a valid phone number.",
      err_subject: "Please enter the inquiry subject.",
      err_message: "Please enter your message (at least 10 characters).",
      form_error_summary: "Please review and correct the highlighted fields above.",
      form_success_msg:
        "Your inquiry is validated. Your default email client is opening with a prefilled message to altapayun@gmail.com — please click Send in your email app to complete delivery.",

      footer_desc:
        "General contracting and supplies company specializing in mechanical, electrical, firefighting, and HVAC works with a commitment to quality and safety.",
      footer_quick_links: "Quick Links",
      footer_services: "Our Services",
      footer_contact: "Contact Information",
      footer_wa: "WhatsApp Direct →",
      footer_rights:
        "AL TABAYUN | التباين — General Contracting & Supplies. All rights reserved.",
      back_to_top: "Back to Top",
    },

    ar: {
      skip_to_content: "تخطي إلى المحتوى الرئيسي",
      brand_subtitle: "للمقاولات العامة والتوريدات",
      nav_home: "الرئيسية",
      nav_about: "من نحن",
      nav_services: "خدماتنا",
      nav_projects: "مشاريعنا",
      nav_why: "لماذا التباين",
      nav_contact: "تواصل معنا",
      nav_cta: "تواصل معنا",

      hero_eyebrow: "AL TABAYUN | التباين — للمقاولات العامة والتوريدات",
      hero_title: "تميز هندسي... نبني الثقة.",
      hero_subtitle:
        "نقدم حلولاً متكاملة في المقاولات والأعمال الكهروميكانيكية، وفق أعلى معايير الجودة والدقة والسلامة.",
      hero_btn_services: "استكشف خدماتنا",
      hero_btn_projects: "اطلع على مشاريعنا",
      hero_btn_contact: "تواصل معنا",
      disc_mech: "الأعمال الميكانيكية والتكييف",
      disc_elec: "البنية التحتية الكهربائية",
      disc_fire: "أنظمة مكافحة الحريق",
      disc_gen: "المقاولات العامة والتوريدات",
      scroll_label: "تصفح للأسفل",

      about_eyebrow: "عن شركة التباين",
      about_title: "من نحن",
      about_badge_title: "تكامل الأعمال الكهروميكانيكية والمقاولات",
      about_badge_text:
        "تنفيذ منسق يجمع بين أعمال المقاولات العامة والتركيبات الكهروميكانيكية والتوريدات الفنية.",
      about_p1:
        "شركة التباين (AL TABAYUN) هي شركة متخصصة في المقاولات العامة والتوريدات، مع تركيز أساسي على الأعمال الميكانيكية والكهربائية، لتقديم حلول هندسية عملية ومتكاملة تلبي متطلبات المشاريع بكفاءة عالية.",
      about_p2:
        "نربط بين المتطلبات الهندسية الدقيقة والتنفيذ المنضبط في مواقع العمل. ومن خلال الجمع بين قدرات المقاولات العامة والتركيبات الكهروميكانيكية المتخصصة وتوريد الخامات المعتمدة، ندعم الملاك والمقاولين الرئيسيين لتحقيق تكامل سلس في مختلف مراحل المشروع.",
      cap_mech: "الأعمال الميكانيكية",
      cap_elec: "الأعمال الكهربائية",
      cap_fire: "أنظمة مكافحة الحريق",
      cap_hvac: "أنظمة التكييف والتهوية (HVAC)",
      cap_contracting: "المقاولات العامة والتوريدات",

      vmv_eyebrow: "التوجه المؤسسي",
      vmv_title: "الرؤية والرسالة والقيم",
      vision_title: "رؤيتنا",
      vision_text:
        "أن نكون شريكاً موثوقاً في تقديم حلول المقاولات والأعمال الكهروميكانيكية بكفاءة واعتمادية.",
      mission_title: "رسالتنا",
      mission_text:
        "تنفيذ المشاريع باحترافية ودقة فنية والتزام كامل بمعايير الجودة والسلامة ومواعيد التسليم.",
      values_title: "قيمنا",
      val_integrity: "النزاهة",
      val_quality: "الجودة",
      val_safety: "السلامة",
      val_commitment: "الالتزام",
      val_teamwork: "العمل الجماعي",
      val_improvement: "التطوير المستمر",

      services_eyebrow: "مجالات تخصصنا",
      services_title: "خدماتنا",
      services_intro:
        "حلول هندسية وتنفيذية وتوريدات متكاملة مصممة لضمان الكفاءة التشغيلية والالتزام بالمواصفات الفنية.",
      srv_1_title: "الأعمال الميكانيكية",
      srv_1_desc:
        "تركيب شبكات المواسير، ومحطات الضخ، وأنظمة السباكة والبنية التحتية الميكانيكية، وربط المعدات وفق المخططات الهندسية المعتمدة.",
      srv_2_title: "الأعمال الكهربائية",
      srv_2_desc:
        "أنظمة توزيع الطاقة، ولوحات التحكم، وشبكات الكابلات، وأعمال الإنارة، وأنظمة التيار الخفيف المصممة للتشغيل الآمن والمستقر.",
      srv_3_title: "أنظمة مكافحة الحريق",
      srv_3_desc:
        "تنفيذ شبكات الحماية من الحريق بالكامل بما يشمل شبكات الرشاشات، وصناديق الحريق، وعساكر الحريق، ومضخات الإطفاء مع الاختبار الكامل.",
      srv_4_title: "التكييف والتهوية (HVAC)",
      srv_4_desc:
        "أنظمة التكييف المركزي، وتصنيع وتركيب مجاري الهواء (الدكت)، وأنظمة التهوية والتحكم المناخي لتحقيق أعلى كفاءة وراحة حرارية.",
      srv_5_title: "المقاولات العامة",
      srv_5_desc:
        "تنفيذ الأعمال الإنشائية والتشطيبات وإدارة التنسيق بين التخصصات المختلفة في الموقع وفق جداول زمنية منضبطة وجودة تنفيذ عالية.",
      srv_6_title: "التوريدات والمشتريات",
      srv_6_desc:
        "توفير وتوريد المكونات الكهروميكانيكية المعتمدة، ومستلزمات المواسير والمحابس، والمهمات الكهربائية ومواد البناء في المواعيد المحددة.",
      srv_inquire: "اطلب استشارة أو عرض سعر",

      projects_eyebrow: "سابقة الأعمال",
      projects_title: "مشاريعنا والتعاون المشترك",
      projects_intro:
        "نماذج من مشاريعنا المنفذة في مجالات مكافحة الحريق والتكييف والأعمال المتخصصة بالتعاون مع شركاء نجاح معتمدين.",
      illustrative_badge: "صورة توضيحية",
      meta_scope: "نطاق الأعمال",
      meta_collab: "بالتعاون مع",
      proj_1_name: "مدينة الفسطاط",
      proj_1_scope: "أعمال مكافحة الحريق",
      proj_1_collab: "Diagrm",
      proj_2_name: "مدينة المعرفة – العاصمة الإدارية الجديدة",
      proj_2_scope: "أعمال مكافحة الحريق والتكييف",
      proj_2_collab: "Elshokair",
      proj_3_name: "هايد بارك (Hyde Park)",
      proj_3_scope: "أعمال مكافحة الحريق وأعمال Shield",
      proj_3_collab: "El Imam",
      projects_disclaimer:
        "* ملاحظة: الصور المعروضة أعلاه هي صور هندسية توضيحية تعبر عن طبيعة الأعمال الفنية المنفذة.",

      why_eyebrow: "لماذا تختارنا",
      why_title: "لماذا التباين؟",
      why_intro:
        "نرتكز على الانضباط الهندسي، والإدارة المسؤولة للمواقع، والالتزام بمعايير التنفيذ المعتمدة.",
      why_1_title: "الخبرة الفنية",
      why_1_desc:
        "معرفة ميدانية عملية في الأنظمة الميكانيكية والكهربائية ومكافحة الحريق والتكييف بما يتناسب مع متطلبات كل مشروع.",
      why_2_title: "التنفيذ القائم على الجودة",
      why_2_desc:
        "الالتزام الدقيق بالمخططات التنفيذية واعتمادات المواد والفحص المرحلي في كل خطوة من خطوات التركيب.",
      why_3_title: "الالتزام بالسلامة",
      why_3_desc:
        "تطبيق إجراءات السلامة المهنية لحماية فرق العمل وممتلكات الموقع وضمان استمرارية التنفيذ بأمان.",
      why_4_title: "التنسيق الهندسي الموثوق",
      why_4_desc:
        "تعاون فعال مع الاستشاريين والمقاولين الرئيسيين والشركاء لتلافي التعارضات وتسهيل سير العمل في الموقع.",
      why_5_title: "فريق عمل محترف",
      why_5_desc:
        "مهندسون ومشرفون وفنيون متخصصون يعملون بروح الفريق الواحد من بدء التجهيز وحتى الاختبار والتسليم.",
      why_6_title: "الالتزام بالتسليم",
      why_6_desc:
        "تخطيط دقيق للموارد والتوريدات لضمان الوفاء بالبرامج الزمنية والالتزامات التعاقدية.",

      qs_eyebrow: "معايير التنفيذ",
      qs_title: "الالتزام بالجودة والسلامة",
      qs_lead:
        "في شركة التباين، تمثل مراقبة الجودة والسلامة المهنية ركيزة أساسية في جميع مراحل الهندسة والتوريد والتنفيذ بالموقع.",
      qs_body:
        "تعمل فرقنا الميدانية تحت إشراف هندسي منظم ووفق مواصفات فنية واضحة وبروتوكولات تنسيق دقيقة. بدءاً من فحص المواد الواردة ومراجعة تركيبات المواسير والأنظمة الكهربائية، وصولاً إلى الحفاظ على بيئة عمل آمنة، نلتزم بتسليم مشاريعنا بمسؤولية واحترافية.",
      qs_p1_title: "مراقبة جودة صارمة",
      qs_p1_desc:
        "فحص منهجي للخامات الموردة ومراجعة التركيبات وإجراء الاختبارات التشغيلية قبل التسليم.",
      qs_p2_title: "ثقافة السلامة في الموقع",
      qs_p2_desc:
        "الالتزام المستمر بقواعد السلامة المهنية ومعدات الوقاية الشخصية والحد من المخاطر في مواقع العمل.",
      qs_p3_title: "تنسيق هندسي منضبط",
      qs_p3_desc:
        "تواصل شفاف ومستمر مع أطراف المشروع لضمان تتابع الأعمال بسلاسة وكفاءة.",

      contact_eyebrow: "ابدأ التواصل معنا",
      contact_title: "تواصل مع شركة التباين",
      contact_intro:
        "يسعدنا تواصلكم للاستفسار عن خدمات المقاولات والأعمال الكهروميكانيكية والمناقصات وطلبات التوريد.",
      contact_phone_label: "الهاتف",
      contact_email_label: "البريد الإلكتروني",
      contact_loc_label: "الموقع",
      contact_loc_value: "مدينة السادس من أكتوبر، الجيزة، مصر",
      contact_whatsapp_btn: "تواصل عبر واتساب",

      form_heading: "أرسل استفسارك",
      form_note:
        "املأ البيانات التالية لتجهيز رسالة بريد إلكتروني منظمة وإرسالها مباشرة إلى قسم الهندسة والمقاولات.",
      form_name_label: "الاسم الكامل *",
      form_name_ph: "أدخل الاسم الكامل",
      form_email_label: "البريد الإلكتروني *",
      form_email_ph: "name@company.com",
      form_phone_label: "رقم الهاتف *",
      form_phone_ph: "+20 10 XXXXXXXX",
      form_subject_label: "الموضوع / نطاق الخدمة *",
      form_subject_ph: "مثال: استفسار عن أعمال مكافحة الحريق والتكييف",
      form_message_label: "تفاصيل المشروع / الرسالة *",
      form_message_ph: "اكتب تفاصيل المشروع أو نطاق الأعمال المطلوب...",
      form_submit_btn: "تجهيز وفتح رسالة البريد الإلكتروني",

      err_name: "يرجى إدخال الاسم الكامل.",
      err_email: "يرجى إدخال بريد إلكتروني صحيح.",
      err_phone: "يرجى إدخال رقم هاتف صحيح.",
      err_subject: "يرجى إدخال موضوع الاستفسار.",
      err_message: "يرجى كتابة تفاصيل الرسالة (10 أحرف على الأقل).",
      form_error_summary: "يرجى مراجعة وتصحيح الحقول المحددة أعلاه.",
      form_success_msg:
        "تم التحقق من بيانات استفسارك بنجاح. يتم الآن فتح تطبيق البريد الإلكتروني لديك برسالة جاهزة موجهة إلى altapayun@gmail.com — يرجى الضغط على إرسال داخل تطبيق البريد لإتمام الإرسال.",

      footer_desc:
        "شركة مقاولات عامة وتوريدات متخصصة في الأعمال الميكانيكية والكهربائية وأنظمة مكافحة الحريق والتكييف وفق أعلى معايير الجودة والسلامة.",
      footer_quick_links: "روابط سريعة",
      footer_services: "خدماتنا",
      footer_contact: "بيانات التواصل",
      footer_wa: "تواصل مباشر عبر واتساب ←",
      footer_rights:
        "AL TABAYUN | التباين — للمقاولات العامة والتوريدات. جميع الحقوق محفوظة.",
      back_to_top: "العودة للأعلى",
    },
  };

  /* ==================== STATE & DOM ELEMENTS ==================== */
  let currentLang = "en";

  const htmlEl = document.documentElement;
  const headerEl = document.getElementById("site-header");
  const primaryNav = document.getElementById("primary-nav");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navBackdrop = document.getElementById("nav-backdrop");
  const langToggleBtns = document.querySelectorAll("#lang-toggle, #mobile-lang-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");
  const backToTopBtn = document.getElementById("back-to-top");
  const currentYearEl = document.getElementById("current-year");
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");
  const serviceLinks = document.querySelectorAll(".service-link");

  /* ==================== DYNAMIC COPYRIGHT YEAR ==================== */
  if (currentYearEl) {
    currentYearEl.textContent = String(new Date().getFullYear());
  }

  /* ==================== LANGUAGE & RTL/LTR SWITCHING ==================== */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    const isArabic = lang === "ar";
    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", isArabic ? "rtl" : "ltr");

    // Persist preference during current browser session
    try {
      sessionStorage.setItem("altabayun_lang", lang);
    } catch (e) {
      // Ignore storage errors in restricted environments
    }

    const dict = translations[lang];

    // Translate standard text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!dict[key]) return;

      // Preserve arrow span inside service links
      if (el.classList.contains("service-link")) {
        const labelSpan = el.querySelector("span:first-child");
        if (labelSpan) labelSpan.textContent = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    // Translate input placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // Update toggle button text (shows the target language to switch to)
    langToggleBtns.forEach((btn) => {
      const label = btn.querySelector(".lang-label");
      if (label) {
        label.textContent = isArabic ? "English" : "العربية";
      }
      btn.setAttribute(
        "aria-label",
        isArabic ? "Switch language to English" : "التبديل إلى اللغة العربية"
      );
    });

    // Clear active validation messages when switching language to avoid stale language text
    clearFormErrors();
  }

  langToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "ar" : "en";
      applyLanguage(nextLang);
    });
  });

  // Restore language if user switched during current visit
  try {
    const savedLang = sessionStorage.getItem("altabayun_lang");
    if (savedLang === "ar" || savedLang === "en") {
      applyLanguage(savedLang);
    }
  } catch (e) {
    // Default remains 'en'
  }

  /* ==================== MOBILE MENU DRAWER ==================== */
  function openMobileMenu() {
    if (!primaryNav || !hamburgerBtn) return;
    primaryNav.classList.add("open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    if (navBackdrop) navBackdrop.classList.add("visible");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    if (!primaryNav || !hamburgerBtn) return;
    primaryNav.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    if (navBackdrop) navBackdrop.classList.remove("visible");
    document.body.style.overflow = "";
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = hamburgerBtn.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeMobileMenu);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && primaryNav && primaryNav.classList.contains("open")) {
      closeMobileMenu();
      if (hamburgerBtn) hamburgerBtn.focus();
    }
  });

  // Close mobile drawer when clicking any link inside it
  if (primaryNav) {
    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });
  }

  /* ==================== STICKY HEADER & ACTIVE NAV SPY ==================== */
  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (headerEl) {
      if (scrollY > 30) {
        headerEl.classList.add("scrolled");
      } else {
        headerEl.classList.remove("scrolled");
      }
    }

    // Active nav highlighting
    let currentSectionId = "home";
    const offset = 140;

    sections.forEach((sec) => {
      const top = sec.offsetTop - offset;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${currentSectionId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* ==================== SCROLL REVEAL ANIMATIONS ==================== */
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("revealed"));
  }

  /* ==================== SERVICE CARD CONSULTATION PREFILL ==================== */
  serviceLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const subjectInput = document.getElementById("subject");
      const cardTitle = link.closest(".service-card")?.querySelector(".service-title")?.textContent?.trim();
      if (subjectInput && cardTitle) {
        const prefix = currentLang === "ar" ? "استفسار بخصوص: " : "Inquiry: ";
        subjectInput.value = `${prefix}${cardTitle}`;
      }
    });
  });

  /* ==================== BACK TO TOP BUTTON ==================== */
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* ==================== CONTACT FORM VALIDATION & MAILTO ==================== */
  function clearFormErrors() {
    if (!contactForm) return;
    contactForm.querySelectorAll(".invalid").forEach((el) => el.classList.remove("invalid"));
    contactForm.querySelectorAll(".field-error").forEach((el) => {
      el.textContent = "";
    });
    if (formFeedback) {
      formFeedback.hidden = true;
      formFeedback.textContent = "";
      formFeedback.className = "form-feedback";
    }
  }

  function setFieldError(inputEl, errorElId, message) {
    if (inputEl) inputEl.classList.add("invalid");
    const errEl = document.getElementById(errorElId);
    if (errEl) errEl.textContent = message;
  }

  if (contactForm) {
    const nameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email-address");
    const phoneInput = document.getElementById("phone-number");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    // Clear individual field error on input
    [nameInput, emailInput, phoneInput, subjectInput, messageInput].forEach((input) => {
      if (!input) return;
      input.addEventListener("input", () => {
        input.classList.remove("invalid");
        const errorSpan = input.parentElement?.querySelector(".field-error");
        if (errorSpan) errorSpan.textContent = "";
      });
    });

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      clearFormErrors();

      const dict = translations[currentLang];
      let isValid = true;

      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const phoneVal = phoneInput.value.trim();
      const subjectVal = subjectInput.value.trim();
      const messageVal = messageInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      const phoneRegex = /^[+]?[\d\s\-().]{7,20}$/;

      if (nameVal.length < 2) {
        setFieldError(nameInput, "error-name", dict.err_name);
        isValid = false;
      }

      if (!emailRegex.test(emailVal)) {
        setFieldError(emailInput, "error-email", dict.err_email);
        isValid = false;
      }

      if (!phoneRegex.test(phoneVal)) {
        setFieldError(phoneInput, "error-phone", dict.err_phone);
        isValid = false;
      }

      if (subjectVal.length < 3) {
        setFieldError(subjectInput, "error-subject", dict.err_subject);
        isValid = false;
      }

      if (messageVal.length < 10) {
        setFieldError(messageInput, "error-message", dict.err_message);
        isValid = false;
      }

      if (!isValid) {
        if (formFeedback) {
          formFeedback.textContent = dict.form_error_summary;
          formFeedback.className = "form-feedback error";
          formFeedback.hidden = false;
        }
        const firstInvalid = contactForm.querySelector(".invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Build structured mailto link (no backend server required)
      const recipient = "altapayun@gmail.com";
      const mailSubject = encodeURIComponent(`[Website Inquiry] ${subjectVal} — ${nameVal}`);
      const mailBody = encodeURIComponent(
        `AL TABAYUN Website Inquiry
` +
          `----------------------------------------
` +
          `Name: ${nameVal}
` +
          `Email: ${emailVal}
` +
          `Phone: ${phoneVal}
` +
          `Subject: ${subjectVal}
` +
          `----------------------------------------

` +
          `${messageVal}
`
      );

      if (formFeedback) {
        formFeedback.textContent = dict.form_success_msg;
        formFeedback.className = "form-feedback success";
        formFeedback.hidden = false;
      }

      window.location.href = `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;
    });
  }
})();
