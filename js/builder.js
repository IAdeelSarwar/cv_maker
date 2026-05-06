$(function() {
    // ============ STATE ============
    const defaultData = {
        personalInfo: {
            fullName: '', jobTitle: '', email: '', phone: '',
            city: '', country: '', linkedin: '', website: '', summary: ''
        },
        experiences: [],
        education: [],
        skills: [],
        languages: [],
        projects: [],
        template: 'modern',
        accentColor: '#2563eb'
    };

    // ============ SAMPLE DATA (shown by default) ============
// ============ SAMPLE DATA FOR ADEEL SARWAR ============
const sampleData = {
    personalInfo: {
        fullName: 'Adeel Sarwar',
        jobTitle: 'Data Engineering Application Specialist',
        email: 'adeelsarwar44@gmail.com',
        phone: '+44 (744) 6709597',
        city: 'Bristol',
        country: 'United Kingdom',
        linkedin: 'www.linkedin.com/in/iadeelsarwar/',
        website: '',
        summary: 'Results-driven data engineer and application specialist with 8 years of experience delivering high-volume, production-critical data platforms across banking, telecom, oil & gas, and enterprise systems. Expert in designing and operating scalable ETL and data integration pipelines, processing hundreds of millions of records daily across Teradata, GCP BigQuery, and cloud-hosted SaaS platforms. Strong focus on data activation and real-time decisioning, enabling large-scale personalization and customer engagement under strict latency and SLA constraints. Proven ability to automate deployments, stabilize complex ecosystems, and lead platform upgrades through CI/CD, DevOps, and cloud-native practices. Trusted partner to business and technical stakeholders, known for turning complex data landscapes into reliable, high-performance systems that deliver measurable business impact.'
    },

    experiences: [
        {
            id: 'exp1',
            jobTitle: 'Data Engineering Application Specialist',
            company: 'Teradata',
            startDate: '2022-09',
            endDate: '',
            current: true,
            description: 'Implemented customer-targeted personalization and digital marketing decisioning for 100K+ commercial banking customers, leveraging Teradata CIM for email campaigns and VCX for web/mobile personalization using analytics and behavioral signals derived from customer data.\n\nArchitected and orchestrated 7 ETL pipelines processing 400M+ rows daily, enabling seamless data integration across enterprise Data Warehouses, Data Marts, IBM DataStage, GCP BigQuery, and AWS-hosted VCX platform.\n\nAutomated CI/CD pipelines for all 7 data workflows using Jenkins builds and IBM UrbanCode Deploy, integrated with Tivoli workload scheduler for Teradata BTEQ jobs, reducing manual deployment effort and improving release reliability.\n\nCustomized and managed VCX, a cloud-hosted AWS Real-Time Interaction Manager SaaS platform, delivering 950M+ personalized messages to commercial customers within a 200ms SLA for dynamic in-app and web targeting.\n\nEngineered and deployed 5 custom plugins for the Customer Interaction Management platform, enhancing business user efficiency in campaign execution and workflow management.\n\nLed platform upgrades for both CIM and VCX applications, ensuring system stability, security compliance, and alignment with evolving business requirements.\n\nTechnologies: Java 8 SE, SQL, GCP, Teradata, BTEQ, ETL, CI/CD, RTIM, Microservices, CIM, Data Analytics, SLA Monitoring.'
        },
        {
            id: 'exp2',
            jobTitle: 'Senior Application Development Consultant',
            company: 'Systems Ltd',
            startDate: '2021-05',
            endDate: '2022-09',
            current: false,
            description: 'Delivered new features and enhancements for the Muamalaty sales portal within the CIM system of Etisalat by e& UAE, supporting approximately 5,000 daily active business users.\n\nManaged release cycles and production issue resolution, achieving 99.9% platform uptime for mission-critical sales operations.\n\nDeveloped and maintained system integrations between CIM and SIM modules using REST and SOAP APIs, improving data flow efficiency by approximately 30%.\n\nCollaborated directly with the client to ensure alignment with business requirements and delivered timely, high-quality solutions in a fast-paced enterprise environment.\n\nTechnologies: Java, Spring, Spring Boot, Oracle SQL, JavaScript, jQuery, Maven, Apache Tomcat, Oracle WebLogic, Git, SVN, Citrix.'
        },
        {
            id: 'exp3',
            jobTitle: 'Application Engineer',
            company: 'LMKR',
            startDate: '2019-09',
            endDate: '2021-05',
            current: false,
            description: 'Worked directly with clients on the development of new features and plugins for large-scale data handling and 3D data graph modeling in complex geo applications.\n\nWorked across multiple application systems to transfer large amounts of data from one system to another and integrate them with a common model.\n\nCreated an integration model for sending and receiving important data from multiple applications using Apache Kafka.\n\nWorked on RCP plugin development for the IPGEM project, including integration of DSG with Aramco, and delivered required functionality within project timelines.\n\nTechnologies: Java, Apache Teiid, PostgreSQL, Oracle SQL, Federated Modeling, Apache Kafka, Apache Tomcat, SVN, Shell Scripting, RCP.'
        },
        {
            id: 'exp4',
            jobTitle: 'Design Engineer',
            company: 'CARE Pvt Ltd',
            startDate: '2018-07',
            endDate: '2019-09',
            current: false,
            description: 'Worked on the design and development of an ERP system for an aircraft manufacturing facility for a military organization.\n\nDesigned workflow flows, end-to-end CRUD operations, and notification management for the ERP application.\n\nUsed Joget Workflow open-source library and Hydrashark workflow engine to create a complex system managing multiple modules including logistics, user and role management, approval management, and workflow modeling.\n\nCreated dashboards using accurate data to generate KPIs, production plans, and logistics plans for the manufacturing facility.\n\nTechnologies: Java, Joget Workflow, MySQL, Apache Tomcat Server, SVN, Angular, Metabase, BeanShell Scripting, Workflow Modeling.'
        }
    ],

    education: [
        {
            id: 'edu1',
            degree: 'Bachelor of Computer Science',
            institution: 'National University of Sciences and Technology — NUST',
            startDate: '2014-09',
            endDate: '2018-06'
        },
        {
            id: 'edu2',
            degree: 'Intermediate of Computer Science',
            institution: 'Sir Syed College, The Mall',
            startDate: '2012-09',
            endDate: '2014-06'
        }
    ],

    skills: [
        { id: 's1', name: 'Java', level: 'Expert' },
        { id: 's2', name: 'SQL', level: 'Expert' },
        { id: 's3', name: 'Teradata', level: 'Expert' },
        { id: 's4', name: 'Data Engineering', level: 'Expert' },
        { id: 's5', name: 'ETL Pipelines', level: 'Expert' },
        { id: 's6', name: 'GCP BigQuery', level: 'Advanced' },
        { id: 's7', name: 'CI/CD', level: 'Advanced' },
        { id: 's8', name: 'Jenkins', level: 'Advanced' },
        { id: 's9', name: 'Docker', level: 'Intermediate' },
        { id: 's10', name: 'REST / SOAP APIs', level: 'Advanced' },
        { id: 's11', name: 'Spring Boot', level: 'Advanced' },
        { id: 's12', name: 'Python', level: 'Intermediate' },
        { id: 's13', name: 'Apache Kafka', level: 'Advanced' },
        { id: 's14', name: 'Shell Scripting', level: 'Advanced' },
        { id: 's15', name: 'Configuration Management', level: 'Advanced' },
        { id: 's16', name: 'SDLC', level: 'Expert' },
        { id: 's17', name: 'Solution Design & Automation', level: 'Expert' },
        { id: 's18', name: 'CIM / VCX', level: 'Expert' },
        { id: 's19', name: 'Data Analytics', level: 'Advanced' },
        { id: 's20', name: 'Jira', level: 'Advanced' },
        { id: 's21', name: 'Git / SVN', level: 'Advanced' },
        { id: 's22', name: 'React Native', level: 'Intermediate' },
        { id: 's23', name: 'Kendo UI', level: 'Intermediate' },
        { id: 's24', name: 'Joget Workflow', level: 'Advanced' }
    ],

    languages: [
        { id: 'l1', name: 'English', proficiency: 'Fluent' },
        { id: 'l2', name: 'Urdu', proficiency: 'Native' },
        { id: 'l3', name: 'Punjabi', proficiency: 'Native' }
    ],
    certifications: [
    {
        id: 'cert1',
        name: 'Google Cloud Professional Architect',
        issuer: 'Google Cloud',
        date: ''
    },
    {
        id: 'cert2',
        name: 'Google Cloud Database Engineer',
        issuer: 'Google Cloud',
        date: ''
    },
    {
        id: 'cert3',
        name: 'Google Cloud Associate Engineer',
        issuer: 'Google Cloud',
        date: ''
    },
    {
        id: 'cert4',
        name: 'Teradata Data Engineering Certified',
        issuer: 'Teradata',
        date: ''
    },
    {
        id: 'cert5',
        name: 'Teradata Administrator Certified',
        issuer: 'Teradata',
        date: ''
    },
    {
        id: 'cert6',
        name: 'Teradata Vantage 2.3 Associate',
        issuer: 'Teradata',
        date: ''
    },
    {
        id: 'cert7',
        name: 'Scrum Fundamentals Certified',
        issuer: 'SCRUMstudy / Scrum Certification Body',
        date: ''
    }
    ],
interests: [
    {
        id: 'int1',
        name: 'Web Development'
    },
    {
        id: 'int2',
        name: 'Prompt Engineering'
    },
    {
        id: 'int3',
        name: 'Gaming'
    },
    {
        id: 'int4',
        name: 'Data Analytics'
    },
    {
        id: 'int5',
        name: 'Logo / Graphics Designing'
    },
    {
        id: 'int6',
        name: 'Blogging'
    },
    {
        id: 'int7',
        name: 'Linguistics'
    },
    {
        id: 'int8',
        name: 'History'
    }
],
    projects: [
        {
            id: 'p1',
            name: 'Eatphant — Restaurant Table Reservation and Pre-ordering App',
            link: '',
            description: 'Final year project developed to solve common restaurant reservation and ordering problems. The system allowed customers to reserve tables, place dine-in orders before arrival, and create takeaway orders. Developed using React Native.'
        },
        {
            id: 'p2',
            name: 'Enterprise Personalization and Real-Time Decisioning Platform',
            link: '',
            description: 'Implemented and maintained high-volume personalization workflows for commercial banking customers using Teradata CIM, VCX, ETL pipelines, GCP BigQuery, and AWS-hosted real-time interaction management. Supported delivery of 950M+ personalized messages under strict latency and SLA requirements.'
        },
        {
            id: 'p3',
            name: 'Aircraft Manufacturing ERP System',
            link: '',
            description: 'Designed and developed ERP workflows for an aircraft manufacturing facility, including logistics, user management, approval workflows, CRUD operations, notification management, dashboards, KPIs, and production planning modules.'
        }
    ],

    template: 'professional',
    accentColor: '#2563eb'
};

    // Empty default for reset
    const emptyData = {
        personalInfo: {
            fullName: '', jobTitle: '', email: '', phone: '',
            city: '', country: '', linkedin: '', website: '', summary: ''
        },
        experiences: [], education: [], skills: [],
        languages: [], projects: [],
        template: 'modern', accentColor: '#2563eb'
    };

    // On first visit, load sample. After that, load saved.
    let cv = loadFromStorage() || JSON.parse(JSON.stringify(sampleData));

   // let cv = loadFromStorage() || JSON.parse(JSON.stringify(defaultData));

    function saveToStorage() {
        localStorage.setItem('cvData', JSON.stringify(cv));
    }
    function loadFromStorage() {
        const data = localStorage.getItem('cvData');
        return data ? JSON.parse(data) : null;
    }
    function uid() {
        return Math.random().toString(36).substring(2, 11);
    }

    // ============ SIDEBAR NAV ============
    $('.sidebar-item').on('click', function() {
        const section = $(this).data('section');
        $('.sidebar-item').removeClass('active');
        $(this).addClass('active');
        $('.form-section').removeClass('active');
        $(`.form-section[data-section="${section}"]`).addClass('active');
    });

    // ============ POPULATE FORMS FROM STATE ============
    function loadFormsFromState() {
        // Personal Info
        for (const [key, val] of Object.entries(cv.personalInfo)) {
            $('#' + key).val(val);
        }
        renderExperiences();
        renderEducation();
        renderSkills();
        renderLanguages();
        renderProjects();
        renderCertifications();
        renderInterests();

        // Design
        $('.template-card').removeClass('active');
        $(`.template-card[data-template="${cv.template}"]`).addClass('active');
        $('.color-swatch').removeClass('active');
        $(`.color-swatch[data-color="${cv.accentColor}"]`).addClass('active');
    }

    // ============ PERSONAL INFO ============
    $('#fullName, #jobTitle, #email, #phone, #city, #country, #linkedin, #website, #summary')
        .on('input', function() {
            cv.personalInfo[this.id] = $(this).val();
            saveToStorage();
            renderPreview();
        });

    // ============ EXPERIENCES ============
    function renderExperiences() {
        const $list = $('#experienceList').empty();
        cv.experiences.forEach((exp, i) => {
            $list.append(`
                <div class="item-card" data-id="${exp.id}">
                    <div class="item-card-header">
                        <h3>${exp.jobTitle || 'New Position'} ${exp.company ? 'at ' + exp.company : ''}</h3>
                        <button class="delete-btn" data-action="delete-exp"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="item-fields">
                        <input type="text" placeholder="Job Title" data-field="jobTitle" value="${escapeHtml(exp.jobTitle)}">
                        <input type="text" placeholder="Company" data-field="company" value="${escapeHtml(exp.company)}">
                        <div class="row">
                            <input type="month" data-field="startDate" value="${exp.startDate}">
                            <input type="month" data-field="endDate" value="${exp.endDate}" ${exp.current ? 'disabled' : ''}>
                        </div>
                        <label class="checkbox-label">
                            <input type="checkbox" data-field="current" ${exp.current ? 'checked' : ''}>
                            I currently work here
                        </label>
                        <textarea rows="4" placeholder="Describe your responsibilities..." data-field="description">${escapeHtml(exp.description)}</textarea>
                    </div>
                </div>
            `);
        });
    }

    $('#addExperience').on('click', function() {
        cv.experiences.push({
            id: uid(), jobTitle: '', company: '', startDate: '', endDate: '',
            current: false, description: ''
        });
        renderExperiences();
        saveToStorage();
        renderPreview();
    });

    $('#experienceList').on('input change', '[data-field]', function() {
        const id = $(this).closest('.item-card').data('id');
        const field = $(this).data('field');
        const exp = cv.experiences.find(e => e.id === id);
        if (!exp) return;
        if (field === 'current') {
            exp.current = $(this).is(':checked');
            if (exp.current) exp.endDate = '';
        } else {
            exp[field] = $(this).val();
        }
        renderExperiences();
        saveToStorage();
        renderPreview();
    });

    $('#experienceList').on('click', '[data-action="delete-exp"]', function() {
        const id = $(this).closest('.item-card').data('id');
        cv.experiences = cv.experiences.filter(e => e.id !== id);
        renderExperiences();
        saveToStorage();
        renderPreview();
    });

    // ============ EDUCATION ============
    function renderEducation() {
        const $list = $('#educationList').empty();
        cv.education.forEach((edu) => {
            $list.append(`
                <div class="item-card" data-id="${edu.id}">
                    <div class="item-card-header">
                        <h3>${edu.degree || 'New Degree'}</h3>
                        <button class="delete-btn" data-action="delete-edu"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="item-fields">
                        <input type="text" placeholder="Degree" data-field="degree" value="${escapeHtml(edu.degree)}">
                        <input type="text" placeholder="Institution" data-field="institution" value="${escapeHtml(edu.institution)}">
                        <div class="row">
                            <input type="month" data-field="startDate" value="${edu.startDate}">
                            <input type="month" data-field="endDate" value="${edu.endDate}">
                        </div>
                    </div>
                </div>
            `);
        });
    }

    $('#addEducation').on('click', function() {
        cv.education.push({
            id: uid(), degree: '', institution: '', startDate: '', endDate: ''
        });
        renderEducation();
        saveToStorage();
        renderPreview();
    });

    $('#educationList').on('input change', '[data-field]', function() {
        const id = $(this).closest('.item-card').data('id');
        const field = $(this).data('field');
        const edu = cv.education.find(e => e.id === id);
        if (!edu) return;
        edu[field] = $(this).val();
        renderEducation();
        saveToStorage();
        renderPreview();
    });

    $('#educationList').on('click', '[data-action="delete-edu"]', function() {
        const id = $(this).closest('.item-card').data('id');
        cv.education = cv.education.filter(e => e.id !== id);
        renderEducation();
        saveToStorage();
        renderPreview();
    });
    // ============ CERTIFICATIONS ============
function renderCertifications() {
    const $list = $('#certificationsList').empty();

    cv.certifications.forEach((cert) => {
        $list.append(`
            <div class="item-card" data-id="${cert.id}">
                <div class="item-card-header">
                    <h3>${cert.name || 'New Certification'}</h3>
                    <button class="delete-btn" data-action="delete-cert">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>

                <div class="item-fields">
                    <input 
                        type="text" 
                        placeholder="Certification Name" 
                        data-field="name" 
                        value="${escapeHtml(cert.name)}"
                    >

                    <input 
                        type="text" 
                        placeholder="Issuer / Organization" 
                        data-field="issuer" 
                        value="${escapeHtml(cert.issuer)}"
                    >

                    <input 
                        type="month" 
                        data-field="date" 
                        value="${cert.date || ''}"
                    >
                </div>
            </div>
        `);
    });
}

$('#addCertification').on('click', function() {
    cv.certifications.push({
        id: uid(),
        name: '',
        issuer: '',
        date: ''
    });

    renderCertifications();
    saveToStorage();
    renderPreview();
});

$('#certificationsList').on('input change', '[data-field]', function() {
    const id = $(this).closest('.item-card').data('id');
    const field = $(this).data('field');
    const cert = cv.certifications.find(c => c.id === id);

    if (!cert) return;

    cert[field] = $(this).val();

    saveToStorage();
    renderPreview();
});

$('#certificationsList').on('click', '[data-action="delete-cert"]', function() {
    const id = $(this).closest('.item-card').data('id');

    cv.certifications = cv.certifications.filter(c => c.id !== id);

    renderCertifications();
    saveToStorage();
    renderPreview();
});
// ============ INTERESTS ============
function renderInterests() {
    const $list = $('#interestsList').empty();

    cv.interests.forEach((interest) => {
        $list.append(`
            <div class="skill-row" data-id="${interest.id}">
                <input 
                    type="text" 
                    placeholder="Interest" 
                    data-field="name" 
                    value="${escapeHtml(interest.name)}"
                >

                <button class="delete-btn" data-action="delete-interest">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `);
    });
}

$('#addInterest').on('click', function() {
    cv.interests.push({
        id: uid(),
        name: ''
    });

    renderInterests();
    saveToStorage();
    renderPreview();
});

$('#interestsList').on('input change', '[data-field]', function() {
    const id = $(this).closest('.skill-row').data('id');
    const field = $(this).data('field');
    const interest = cv.interests.find(i => i.id === id);

    if (!interest) return;

    interest[field] = $(this).val();

    saveToStorage();
    renderPreview();
});

$('#interestsList').on('click', '[data-action="delete-interest"]', function() {
    const id = $(this).closest('.skill-row').data('id');

    cv.interests = cv.interests.filter(i => i.id !== id);

    renderInterests();
    saveToStorage();
    renderPreview();
});
function renderCertificationsHtml(type = 'list', accent = '#2563eb') {
    if (!cv.certifications || cv.certifications.length === 0) return '';

    if (type === 'pills') {
        return cv.certifications.map(cert => `
            <span class="skill-pill">
                ${escapeHtml(cert.name)}
                ${cert.issuer ? ` • ${escapeHtml(cert.issuer)}` : ''}
            </span>
        `).join('');
    }

    if (type === 'tags') {
        return cv.certifications.map(cert => `
            <span class="skill-tag" style="background:${accent}1a;color:${accent}">
                ${escapeHtml(cert.name)}
            </span>
        `).join('');
    }

    return cv.certifications.map(cert => `
        <div class="item">
            <div class="item-header">
                <h3>${escapeHtml(cert.name)}</h3>
                ${cert.date ? `<span class="date">${formatDate(cert.date)}</span>` : ''}
            </div>
            ${cert.issuer ? `<div class="company">${escapeHtml(cert.issuer)}</div>` : ''}
        </div>
    `).join('');
}

function renderInterestsHtml(type = 'pills', accent = '#2563eb') {
    if (!cv.interests || cv.interests.length === 0) return '';

    if (type === 'tags') {
        return cv.interests.map(interest => `
            <span class="skill-tag" style="background:${accent}1a;color:${accent}">
                ${escapeHtml(interest.name)}
            </span>
        `).join('');
    }

    if (type === 'inline') {
        return cv.interests.map(interest => escapeHtml(interest.name)).join(' · ');
    }

    return cv.interests.map(interest => `
        <span class="skill-pill">${escapeHtml(interest.name)}</span>
    `).join('');
}
    // ============ SKILLS ============
    function renderSkills() {
        const $list = $('#skillsList').empty();
        cv.skills.forEach((skill) => {
            $list.append(`
                <div class="skill-row" data-id="${skill.id}">
                    <input type="text" placeholder="Skill name" data-field="name" value="${escapeHtml(skill.name)}">
                    
                    <button class="delete-btn" data-action="delete-skill"><i class="fa-solid fa-trash"></i></button>
                </div>
            `);
        });
    }

    $('#addSkill').on('click', function() {
        cv.skills.push({ id: uid(), name: '', level: 'Intermediate' });
        renderSkills();
        saveToStorage();
        renderPreview();
    });

    $('#skillsList').on('input change', '[data-field]', function() {
        const id = $(this).closest('.skill-row').data('id');
        const field = $(this).data('field');
        const skill = cv.skills.find(s => s.id === id);
        if (!skill) return;
        skill[field] = $(this).val();
        saveToStorage();
        renderPreview();
    });

    $('#skillsList').on('click', '[data-action="delete-skill"]', function() {
        const id = $(this).closest('.skill-row').data('id');
        cv.skills = cv.skills.filter(s => s.id !== id);
        renderSkills();
        saveToStorage();
        renderPreview();
    });

    // ============ LANGUAGES ============
    function renderLanguages() {
        const $list = $('#languagesList').empty();
        cv.languages.forEach((lang) => {
            $list.append(`
                <div class="skill-row" data-id="${lang.id}">
                    <input type="text" placeholder="Language" data-field="name" value="${escapeHtml(lang.name)}">
                    <select data-field="proficiency">
                        <option ${lang.proficiency === 'Basic' ? 'selected' : ''}>Basic</option>
                        <option ${lang.proficiency === 'Conversational' ? 'selected' : ''}>Conversational</option>
                        <option ${lang.proficiency === 'Fluent' ? 'selected' : ''}>Fluent</option>
                        <option ${lang.proficiency === 'Native' ? 'selected' : ''}>Native</option>
                    </select>
                    <button class="delete-btn" data-action="delete-lang"><i class="fa-solid fa-trash"></i></button>
                </div>
            `);
        });
    }

    $('#addLanguage').on('click', function() {
        cv.languages.push({ id: uid(), name: '', proficiency: 'Fluent' });
        renderLanguages();
        saveToStorage();
        renderPreview();
    });

    $('#languagesList').on('input change', '[data-field]', function() {
        const id = $(this).closest('.skill-row').data('id');
        const field = $(this).data('field');
        const lang = cv.languages.find(l => l.id === id);
        if (!lang) return;
        lang[field] = $(this).val();
        saveToStorage();
        renderPreview();
    });

    $('#languagesList').on('click', '[data-action="delete-lang"]', function() {
        const id = $(this).closest('.skill-row').data('id');
        cv.languages = cv.languages.filter(l => l.id !== id);
        renderLanguages();
        saveToStorage();
        renderPreview();
    });

    // ============ PROJECTS ============
    function renderProjects() {
        const $list = $('#projectsList').empty();
        cv.projects.forEach((proj) => {
            $list.append(`
                <div class="item-card" data-id="${proj.id}">
                    <div class="item-card-header">
                        <h3>${proj.name || 'New Project'}</h3>
                        <button class="delete-btn" data-action="delete-proj"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="item-fields">
                        <input type="text" placeholder="Project Name" data-field="name" value="${escapeHtml(proj.name)}">
                        <input type="text" placeholder="Link (optional)" data-field="link" value="${escapeHtml(proj.link)}">
                        <textarea rows="3" placeholder="Description" data-field="description">${escapeHtml(proj.description)}</textarea>
                    </div>
                </div>
            `);
        });
    }

    $('#addProject').on('click', function() {
        cv.projects.push({ id: uid(), name: '', link: '', description: '' });
        renderProjects();
        saveToStorage();
        renderPreview();
    });

    $('#projectsList').on('input change', '[data-field]', function() {
        const id = $(this).closest('.item-card').data('id');
        const field = $(this).data('field');
        const proj = cv.projects.find(p => p.id === id);
        if (!proj) return;
        proj[field] = $(this).val();
        renderProjects();
        saveToStorage();
        renderPreview();
    });

    $('#projectsList').on('click', '[data-action="delete-proj"]', function() {
        const id = $(this).closest('.item-card').data('id');
        cv.projects = cv.projects.filter(p => p.id !== id);
        renderProjects();
        saveToStorage();
        renderPreview();
    });

    // ============ DESIGN ============
    $('.template-card').on('click', function() {
        $('.template-card').removeClass('active');
        $(this).addClass('active');
        cv.template = $(this).data('template');
        saveToStorage();
        renderPreview();
    });

    $('.color-swatch').on('click', function() {
        $('.color-swatch').removeClass('active');
        $(this).addClass('active');
        cv.accentColor = $(this).data('color');
        saveToStorage();
        renderPreview();
    });

    // ============ HEADER ACTIONS ============
    // ============ HEADER ACTIONS ============
  $('#resetBtn').on('click', function() {
    const choice = confirm('Click OK to load SAMPLE data.\nClick Cancel to start with an EMPTY resume.');
    cv = JSON.parse(JSON.stringify(choice ? sampleData : emptyData));
    saveToStorage();
    loadFormsFromState();
    renderPreview();
});

    $('#downloadBtn').on('click', function() {
    // Open a clean print window with just the resume
    const printWindow = window.open('', '_blank');
    const previewHtml = document.getElementById('cvPreview').outerHTML;
    
    // Get all stylesheets from current page
    const stylesheets = Array.from(document.styleSheets)
        .map(sheet => {
            try {
                return sheet.href 
                    ? `<link rel="stylesheet" href="${sheet.href}">` 
                    : `<style>${Array.from(sheet.cssRules).map(r => r.cssText).join('\n')}</style>`;
            } catch(e) { return ''; }
        }).join('\n');
    
    const filename = (cv.personalInfo.fullName || 'Resume').replace(/\s+/g, '_');
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${filename}</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            ${stylesheets}
            <style>
                @page { size: A4; margin: 0; }
                body { margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
                .cv-page { 
                    width: 210mm; 
                    min-height: 297mm; 
                    box-shadow: none !important; 
                    margin: 0;
                }
                @media print {
                    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                }
            </style>
        </head>
        <body>
            ${previewHtml}
            <script>
                window.onload = function() {
                    setTimeout(() => {
                        window.print();
                        window.onafterprint = () => window.close();
                    }, 500);
                };
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
});

    // ============ HELPERS ============
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function formatDate(dateString) {
        if (!dateString) return '';
        const [year, month] = dateString.split('-');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[parseInt(month) - 1]} ${year}`;
    }

    function getSkillPercent(level) {
        const map = { 'Beginner': 25, 'Intermediate': 50, 'Advanced': 75, 'Expert': 100 };
        return map[level] || 50;
    }

    // ============ RENDER PREVIEW ============
    function renderPreview() {
    const $preview = $('#cvPreview');
    let html;
    switch (cv.template) {
        case 'classic':      html = renderClassicTemplate(); break;
        case 'creative':     html = renderCreativeTemplate(); break;
        case 'minimal':      html = renderMinimalTemplate(); break;
        case 'professional': html = renderProfessionalTemplate(); break;
        case 'elegant':      html = renderElegantTemplate(); break;
        default:             html = renderCreativeTemplate();
    }
    $preview.html(html);
}

    function renderModernTemplate() {
        const p = cv.personalInfo;
        const accent = cv.accentColor;

        // Sidebar contact
        let contactHtml = '';
        if (p.email) contactHtml += `<div><i class="fa-solid fa-envelope"></i><span>${escapeHtml(p.email)}</span></div>`;
        if (p.phone) contactHtml += `<div><i class="fa-solid fa-phone"></i><span>${escapeHtml(p.phone)}</span></div>`;
        if (p.city || p.country) {
            const loc = [p.city, p.country].filter(Boolean).join(', ');
            contactHtml += `<div><i class="fa-solid fa-location-dot"></i><span>${escapeHtml(loc)}</span></div>`;
        }
        if (p.linkedin) contactHtml += `<div><i class="fa-brands fa-linkedin"></i><span>${escapeHtml(p.linkedin)}</span></div>`;
        if (p.website) contactHtml += `<div><i class="fa-solid fa-globe"></i><span>${escapeHtml(p.website)}</span></div>`;

        // Sidebar skills
        let skillsHtml = '';
        if (cv.skills.length > 0) {
            skillsHtml = `
                <div class="sidebar-section">
                    <h2>Skills</h2>
                    ${cv.skills.map(s => `
                        <div class="skill-bar">
                            <div>${escapeHtml(s.name)}</div>
                            <div class="bar-bg">
                                <div class="bar-fill" style="width:${getSkillPercent(s.level)}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Sidebar languages
        let languagesHtml = '';
        if (cv.languages.length > 0) {
            languagesHtml = `
                <div class="sidebar-section">
                    <h2>Languages</h2>
                    ${cv.languages.map(l => `
                        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;">
                            <span>${escapeHtml(l.name)}</span>
                            <span style="opacity:0.8">${escapeHtml(l.proficiency)}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        let certificationsHtml = '';
if (cv.certifications && cv.certifications.length > 0) {
    certificationsHtml = `
        <div class="sidebar-section">
            <h2>Certifications</h2>
            ${cv.certifications.map(cert => `
                <div style="font-size:12px;margin-bottom:8px;">
                    <strong>${escapeHtml(cert.name)}</strong>
                    ${cert.issuer ? `<div style="opacity:0.8">${escapeHtml(cert.issuer)}</div>` : ''}
                </div>
            `).join('')}
        </div>
    `;
}

let interestsHtml = '';
if (cv.interests && cv.interests.length > 0) {
    interestsHtml = `
        <div class="sidebar-section">
            <h2>Interests</h2>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">
                ${cv.interests.map(i => `
                    <span style="font-size:11px;background:rgba(255,255,255,0.18);padding:4px 8px;border-radius:999px;">
                        ${escapeHtml(i.name)}
                    </span>
                `).join('')}
            </div>
        </div>
    `;
}
        // Main: summary
        let summaryHtml = '';
        if (p.summary) {
            summaryHtml = `
                <section>
                    <h2 style="color:${accent}">Profile</h2>
                    <p style="font-size:12.5px;color:#334155;">${escapeHtml(p.summary)}</p>
                </section>
            `;
        }

        // Main: experience
        let experienceHtml = '';
        if (cv.experiences.length > 0) {
            experienceHtml = `
                <section>
                    <h2 style="color:${accent}">Experience</h2>
                    ${cv.experiences.map(e => `
                        <div class="item">
                            <div class="item-header">
                                <h3>${escapeHtml(e.jobTitle)}</h3>
                                <span class="date">${formatDate(e.startDate)} – ${e.current ? 'Present' : formatDate(e.endDate)}</span>
                            </div>
                            <div class="company">${escapeHtml(e.company)}</div>
                            <p>${escapeHtml(e.description)}</p>
                        </div>
                    `).join('')}
                </section>
            `;
        }

        // Main: education
        let educationHtml = '';
        if (cv.education.length > 0) {
            educationHtml = `
                <section>
                    <h2 style="color:${accent}">Education</h2>
                    ${cv.education.map(e => `
                        <div class="item">
                            <div class="item-header">
                                <h3>${escapeHtml(e.degree)}</h3>
                                <span class="date">${formatDate(e.startDate)} – ${formatDate(e.endDate)}</span>
                            </div>
                            <div class="company">${escapeHtml(e.institution)}</div>
                        </div>
                    `).join('')}
                </section>
            `;
        }

        // Main: projects
        let projectsHtml = '';
        if (cv.projects.length > 0) {
            projectsHtml = `
                <section>
                    <h2 style="color:${accent}">Projects</h2>
                    ${cv.projects.map(pr => `
                        <div class="item">
                            <div class="item-header">
                                <h3>${escapeHtml(pr.name)}</h3>
                                ${pr.link ? `<span class="date">${escapeHtml(pr.link)}</span>` : ''}
                            </div>
                            <p>${escapeHtml(pr.description)}</p>
                        </div>
                    `).join('')}
                </section>
            `;
        }

        return `
            <div class="cv-modern">
                <aside class="cv-sidebar" style="background:${accent}">
                    <h1>${escapeHtml(p.fullName) || 'Your Name'}</h1>
                    <div class="role">${escapeHtml(p.jobTitle)}</div>
                    <div class="contact-list">${contactHtml}</div>
                    ${skillsHtml}
                    ${languagesHtml}
                    ${certificationsHtml}
                    ${interestsHtml}
                </aside>
                <main class="cv-main">
                    ${summaryHtml}
                    ${experienceHtml}
                    ${educationHtml}
                    ${projectsHtml}
                </main>
            </div>
        `;
    }

    function renderClassicTemplate() {
        const p = cv.personalInfo;
        const accent = cv.accentColor;

        // Header contacts
        const contactItems = [];
        if (p.email) contactItems.push(`<span><i class="fa-solid fa-envelope"></i> ${escapeHtml(p.email)}</span>`);
        if (p.phone) contactItems.push(`<span><i class="fa-solid fa-phone"></i> ${escapeHtml(p.phone)}</span>`);
        if (p.city || p.country) {
            const loc = [p.city, p.country].filter(Boolean).join(', ');
            contactItems.push(`<span><i class="fa-solid fa-location-dot"></i> ${escapeHtml(loc)}</span>`);
        }
        if (p.linkedin) contactItems.push(`<span><i class="fa-brands fa-linkedin"></i> ${escapeHtml(p.linkedin)}</span>`);
        if (p.website) contactItems.push(`<span><i class="fa-solid fa-globe"></i> ${escapeHtml(p.website)}</span>`);

        // Summary
        const summaryHtml = p.summary ? `
            <section>
                <h2 style="color:${accent}">Summary</h2>
                <p>${escapeHtml(p.summary)}</p>
            </section>` : '';

        // Skills
        const skillsHtml = cv.skills.length > 0 ? `
            <section>
                <h2 style="color:${accent}">Skills</h2>
                <div class="skills-row">
                    ${cv.skills.map(s => `<span class="skill-pill">${escapeHtml(s.name)}</span>`).join('')}
                </div>
            </section>` : '';


        // Experience
        const experienceHtml = cv.experiences.length > 0 ? `
            <section>
                <h2 style="color:${accent}">Experience</h2>
                ${cv.experiences.map(e => `
                    <div class="item">
                        <div class="item-header">
                            <h3>${escapeHtml(e.jobTitle)}</h3>
                            <span class="date">${formatDate(e.startDate)} – ${e.current ? 'Present' : formatDate(e.endDate)}</span>
                        </div>
                        <div class="company">${escapeHtml(e.company)}</div>
                        <p>${escapeHtml(e.description)}</p>
                    </div>
                `).join('')}
            </section>` : '';

        // Education
        const educationHtml = cv.education.length > 0 ? `
            <section>
                <h2 style="color:${accent}">Education</h2>
                ${cv.education.map(e => `
                    <div class="item">
                        <div class="item-header">
                            <h3>${escapeHtml(e.degree)}</h3>
                            <span class="date">${formatDate(e.startDate)} – ${formatDate(e.endDate)}</span>
                        </div>
                        <div class="company">${escapeHtml(e.institution)}</div>
                    </div>
                `).join('')}
            </section>` : '';

        

        // Languages
        const languagesHtml = cv.languages.length > 0 ? `
            <section>
                <h2 style="color:${accent}">Languages</h2>
                <div class="skills-row">
                    ${cv.languages.map(l => `<span class="skill-pill">${escapeHtml(l.name)} • ${escapeHtml(l.proficiency)}</span>`).join('')}
                </div>
            </section>` : '';

        // Projects
        const projectsHtml = cv.projects.length > 0 ? `
            <section>
                <h2 style="color:${accent}">Projects</h2>
                ${cv.projects.map(pr => `
                    <div class="item">
                        <div class="item-header">
                            <h3>${escapeHtml(pr.name)}</h3>
                            ${pr.link ? `<span class="date">${escapeHtml(pr.link)}</span>` : ''}
                        </div>
                        <p>${escapeHtml(pr.description)}</p>
                    </div>
                `).join('')}
            </section>` : '';
                    const certificationsHtml = cv.certifications && cv.certifications.length > 0 ? `
    <section>
        <h2 style="color:${accent}">Certifications</h2>
        ${renderCertificationsHtml('list', accent)}
    </section>` : '';

const interestsHtml = cv.interests && cv.interests.length > 0 ? `
    <section>
        <h2 style="color:${accent}">Interests</h2>
        <div class="skills-row">
            ${renderInterestsHtml('pills', accent)}
        </div>
    </section>` : '';
        return `
            <div class="cv-classic">
                <div class="cv-header" style="border-color:${accent}">
                    <h1 style="color:${accent}">${escapeHtml(p.fullName) || 'Your Name'}</h1>
                    <div class="role">${escapeHtml(p.jobTitle)}</div>
                    <div class="contact-list">${contactItems.join('')}</div>
                </div>
                ${summaryHtml}
                ${skillsHtml}
                ${experienceHtml}
                 ${certificationsHtml}
        
                ${educationHtml}
                
                ${languagesHtml}
                ${projectsHtml}
                ${interestsHtml}
            </div>
        `;
    }
    function renderCreativeTemplate() {
    const p = cv.personalInfo;
    const accent = cv.accentColor;

    const contactList = [];
    if (p.email) contactList.push(`<i class="fa-solid fa-envelope"></i> ${escapeHtml(p.email)}`);
    if (p.phone) contactList.push(`<i class="fa-solid fa-phone"></i> ${escapeHtml(p.phone)}`);
    if (p.city || p.country) contactList.push(`<i class="fa-solid fa-location-dot"></i> ${escapeHtml([p.city, p.country].filter(Boolean).join(', '))}`);
    if (p.linkedin) contactList.push(`<i class="fa-brands fa-linkedin"></i> ${escapeHtml(p.linkedin)}`);
    if (p.website) contactList.push(`<i class="fa-solid fa-globe"></i> ${escapeHtml(p.website)}`);

    const sectionTitle = (icon, title) => `
        <h2 style="color:${accent}">
            <span class="title-icon" style="background:${accent}"><i class="fa-solid ${icon}"></i></span>
            ${title}
        </h2>`;

    const summaryHtml = p.summary ? `
        <section>${sectionTitle('fa-user', 'About Me')}
            <p>${escapeHtml(p.summary)}</p>
        </section>` : '';

    const expHtml = cv.experiences.length ? `
        <section>${sectionTitle('fa-briefcase', 'Experience')}
            ${cv.experiences.map(e => `
                <div class="cv-item">
                    <div class="dot" style="background:${accent}"></div>
                    <div class="item-header">
                        <h3>${escapeHtml(e.jobTitle)}</h3>
                        <span class="date">${formatDate(e.startDate)} – ${e.current ? 'Present' : formatDate(e.endDate)}</span>
                    </div>
                    <div class="company">${escapeHtml(e.company)}</div>
                    <p>${escapeHtml(e.description)}</p>
                </div>`).join('')}
        </section>` : '';

    const eduHtml = cv.education.length ? `
        <section>${sectionTitle('fa-graduation-cap', 'Education')}
            ${cv.education.map(e => `
                <div class="cv-item">
                    <div class="dot" style="background:${accent}"></div>
                    <div class="item-header">
                        <h3>${escapeHtml(e.degree)}</h3>
                        <span class="date">${formatDate(e.startDate)} – ${formatDate(e.endDate)}</span>
                    </div>
                    <div class="company">${escapeHtml(e.institution)}</div>
                </div>`).join('')}
        </section>` : '';

    const skillsHtml = cv.skills.length ? `
        <section>${sectionTitle('fa-screwdriver-wrench', 'Skills')}
            <div class="skill-tags">
                ${cv.skills.map(s => `<span class="skill-tag" style="background:${accent}1a;color:${accent}">${escapeHtml(s.name)}</span>`).join('')}
            </div>
        </section>` : '';

    const projectsHtml = cv.projects.length ? `
        <section>${sectionTitle('fa-folder-open', 'Projects')}
            ${cv.projects.map(pr => `
                <div class="cv-item">
                    <div class="dot" style="background:${accent}"></div>
                    <div class="item-header">
                        <h3>${escapeHtml(pr.name)}</h3>
                        ${pr.link ? `<span class="date">${escapeHtml(pr.link)}</span>` : ''}
                    </div>
                    <p>${escapeHtml(pr.description)}</p>
                </div>`).join('')}
        </section>` : '';
                const certificationsHtml = cv.certifications && cv.certifications.length ? `
    <section>${sectionTitle('fa-certificate', 'Certifications')}
        <div class="skill-tags">
            ${cv.certifications.map(cert => `
                <span class="skill-tag" style="background:${accent}1a;color:${accent}">
                    ${escapeHtml(cert.name)}
                </span>
            `).join('')}
        </div>
    </section>` : '';

const interestsHtml = cv.interests && cv.interests.length ? `
    <section>${sectionTitle('fa-heart', 'Interests')}
        <div class="skill-tags">
            ${renderInterestsHtml('tags', accent)}
        </div>
    </section>` : '';
    const langsHtml = cv.languages.length ? `
        <section>${sectionTitle('fa-language', 'Languages')}
            <div class="skill-tags">
                ${cv.languages.map(l => `<span class="skill-tag" style="background:${accent}1a;color:${accent}">${escapeHtml(l.name)} • ${escapeHtml(l.proficiency)}</span>`).join('')}
            </div>
        </section>` : '';

    return `
        <div class="cv-creative">
            <div class="cv-hero" style="background:linear-gradient(135deg, ${accent}, ${accent}cc)">
                <h1>${escapeHtml(p.fullName) || 'Your Name'}</h1>
                <div class="role">${escapeHtml(p.jobTitle)}</div>
                <div class="contact-row">${contactList.map(c => `<span>${c}</span>`).join('')}</div>
            </div>
            <div class="cv-body">
                ${summaryHtml}${skillsHtml}${certificationsHtml}
            ${expHtml}${eduHtml}${projectsHtml}${langsHtml}${interestsHtml}
            </div>
        </div>`;
}
function renderMinimalTemplate() {
    const p = cv.personalInfo;
    const accent = cv.accentColor;

    const contactItems = [];
    if (p.email) contactItems.push(escapeHtml(p.email));
    if (p.phone) contactItems.push(escapeHtml(p.phone));
    if (p.city || p.country) contactItems.push(escapeHtml([p.city, p.country].filter(Boolean).join(', ')));
    if (p.linkedin) contactItems.push(escapeHtml(p.linkedin));
    if (p.website) contactItems.push(escapeHtml(p.website));

    const summaryHtml = p.summary ? `<section><p class="lead">${escapeHtml(p.summary)}</p></section>` : '';

    const expHtml = cv.experiences.length ? `
        <section>
            <h2>Experience</h2>
            ${cv.experiences.map(e => `
                <div class="m-item">
                    <div class="m-dates">${formatDate(e.startDate)} — ${e.current ? 'Present' : formatDate(e.endDate)}</div>
                    <div class="m-body">
                        <h3>${escapeHtml(e.jobTitle)} · <span class="company">${escapeHtml(e.company)}</span></h3>
                        <p>${escapeHtml(e.description)}</p>
                    </div>
                </div>`).join('')}
        </section>` : '';

    const eduHtml = cv.education.length ? `
        <section>
            <h2>Education</h2>
            ${cv.education.map(e => `
                <div class="m-item">
                    <div class="m-dates">${formatDate(e.startDate)} — ${formatDate(e.endDate)}</div>
                    <div class="m-body">
                        <h3>${escapeHtml(e.degree)} · <span class="company">${escapeHtml(e.institution)}</span></h3>
                    </div>
                </div>`).join('')}
        </section>` : '';

    const skillsHtml = cv.skills.length ? `
        <section>
            <h2>Skills</h2>
            <p class="inline-list">${cv.skills.map(s => escapeHtml(s.name)).join(' · ')}</p>
        </section>` : '';

    const langsHtml = cv.languages.length ? `
        <section>
            <h2>Languages</h2>
            <p class="inline-list">${cv.languages.map(l => `${escapeHtml(l.name)} (${escapeHtml(l.proficiency)})`).join(' · ')}</p>
        </section>` : '';

    const projHtml = cv.projects.length ? `
        <section>
            <h2>Projects</h2>
            ${cv.projects.map(pr => `
                <div class="m-item">
                    <div class="m-dates">${pr.link ? escapeHtml(pr.link) : ''}</div>
                    <div class="m-body">
                        <h3>${escapeHtml(pr.name)}</h3>
                        <p>${escapeHtml(pr.description)}</p>
                    </div>
                </div>`).join('')}
        </section>` : '';

    return `
        <div class="cv-minimal" style="--accent:${accent}">
            <header>
                <h1>${escapeHtml(p.fullName) || 'Your Name'}</h1>
                <div class="role">${escapeHtml(p.jobTitle)}</div>
                <div class="contact">${contactItems.join(' · ')}</div>
            </header>
            ${summaryHtml}${skillsHtml}${expHtml}${eduHtml}${projHtml}${langsHtml}
        </div>`;
}
function renderProfessionalTemplate() {
    const p = cv.personalInfo;
    const accent = cv.accentColor;

    const contacts = [];
    if (p.email) contacts.push(`<i class="fa-solid fa-envelope"></i> ${escapeHtml(p.email)}`);
    if (p.phone) contacts.push(`<i class="fa-solid fa-phone"></i> ${escapeHtml(p.phone)}`);
    if (p.city || p.country) contacts.push(`<i class="fa-solid fa-location-dot"></i> ${escapeHtml([p.city, p.country].filter(Boolean).join(', '))}`);
    if (p.linkedin) contacts.push(`<i class="fa-brands fa-linkedin"></i> ${escapeHtml(p.linkedin)}`);
    if (p.website) contacts.push(`<i class="fa-solid fa-globe"></i> ${escapeHtml(p.website)}`);

    const summaryHtml = p.summary ? `
        <section><h2>Professional Summary</h2><p>${escapeHtml(p.summary)}</p></section>` : '';

    const expHtml = cv.experiences.length ? `
        <section>
            <h2>Work Experience</h2>
            ${cv.experiences.map(e => `
                <div class="pro-item">
                    <div class="pro-header">
                        <div>
                            <h3>${escapeHtml(e.jobTitle)}</h3>
                            <div class="company">${escapeHtml(e.company)}</div>
                        </div>
                        <span class="date">${formatDate(e.startDate)} – ${e.current ? 'Present' : formatDate(e.endDate)}</span>
                    </div>
                    <p>${escapeHtml(e.description)}</p>
                </div>`).join('')}
        </section>` : '';

    const eduHtml = cv.education.length ? `
        <section>
            <h2>Education</h2>
            ${cv.education.map(e => `
                <div class="pro-item">
                    <div class="pro-header">
                        <div>
                            <h3>${escapeHtml(e.degree)}</h3>
                            <div class="company">${escapeHtml(e.institution)}</div>
                        </div>
                        <span class="date">${formatDate(e.startDate)} – ${formatDate(e.endDate)}</span>
                    </div>
                </div>`).join('')}
        </section>` : '';

    const skillsHtml = cv.skills.length ? `
        <section>
            <h2>Core Competencies</h2>
            <div class="pro-skills">
                ${cv.skills.map(s => `
                    <div class="pro-skill">
                        <span>${escapeHtml(s.name)}</span>
                        <span class="level">${escapeHtml(s.level)}</span>
                    </div>`).join('')}
            </div>
        </section>` : '';

    const langsHtml = cv.languages.length ? `
        <section>
            <h2>Languages</h2>
            <div class="pro-skills">
                ${cv.languages.map(l => `
                    <div class="pro-skill">
                        <span>${escapeHtml(l.name)}</span>
                        <span class="level">${escapeHtml(l.proficiency)}</span>
                    </div>`).join('')}
            </div>
        </section>` : '';

    const projHtml = cv.projects.length ? `
        <section>
            <h2>Notable Projects</h2>
            ${cv.projects.map(pr => `
                <div class="pro-item">
                    <div class="pro-header">
                        <h3>${escapeHtml(pr.name)}</h3>
                        ${pr.link ? `<span class="date">${escapeHtml(pr.link)}</span>` : ''}
                    </div>
                    <p>${escapeHtml(pr.description)}</p>
                </div>`).join('')}
        </section>` : '';

    return `
        <div class="cv-professional" style="--accent:${accent}">
            <header class="pro-hero">
                <h1>${escapeHtml(p.fullName) || 'Your Name'}</h1>
                <div class="role">${escapeHtml(p.jobTitle)}</div>
                <div class="contacts">${contacts.map(c => `<span>${c}</span>`).join('')}</div>
            </header>
            <div class="pro-body">
                ${summaryHtml}${skillsHtml}${expHtml}${eduHtml}${projHtml}${langsHtml}
            </div>
        </div>`;
}
function renderElegantTemplate() {
    const p = cv.personalInfo;
    const accent = cv.accentColor;

    const contacts = [];
    if (p.email) contacts.push(`<div><i class="fa-solid fa-envelope"></i> ${escapeHtml(p.email)}</div>`);
    if (p.phone) contacts.push(`<div><i class="fa-solid fa-phone"></i> ${escapeHtml(p.phone)}</div>`);
    if (p.city || p.country) contacts.push(`<div><i class="fa-solid fa-location-dot"></i> ${escapeHtml([p.city, p.country].filter(Boolean).join(', '))}</div>`);
    if (p.linkedin) contacts.push(`<div><i class="fa-brands fa-linkedin"></i> ${escapeHtml(p.linkedin)}</div>`);
    if (p.website) contacts.push(`<div><i class="fa-solid fa-globe"></i> ${escapeHtml(p.website)}</div>`);

    const summaryHtml = p.summary ? `
        <section><h2>Profile</h2><p class="elegant-summary">${escapeHtml(p.summary)}</p></section>` : '';

    const expHtml = cv.experiences.length ? `
        <section>
            <h2>Experience</h2>
            ${cv.experiences.map(e => `
                <div class="el-item">
                    <h3>${escapeHtml(e.jobTitle)}</h3>
                    <div class="el-sub">
                        <span>${escapeHtml(e.company)}</span>
                        <span class="date">${formatDate(e.startDate)} – ${e.current ? 'Present' : formatDate(e.endDate)}</span>
                    </div>
                    <p>${escapeHtml(e.description)}</p>
                </div>`).join('')}
        </section>` : '';

    const eduHtml = cv.education.length ? `
        <section>
            <h2>Education</h2>
            ${cv.education.map(e => `
                <div class="el-item">
                    <h3>${escapeHtml(e.degree)}</h3>
                    <div class="el-sub">
                        <span>${escapeHtml(e.institution)}</span>
                        <span class="date">${formatDate(e.startDate)} – ${formatDate(e.endDate)}</span>
                    </div>
                </div>`).join('')}
        </section>` : '';

    const skillsHtml = cv.skills.length ? `
        <section>
            <h2>Expertise</h2>
            <div class="el-skills">
                ${cv.skills.map(s => `<div class="el-skill">${escapeHtml(s.name)}</div>`).join('')}
            </div>
        </section>` : '';

    const langsHtml = cv.languages.length ? `
        <section>
            <h2>Languages</h2>
            <div class="el-skills">
                ${cv.languages.map(l => `<div class="el-skill">${escapeHtml(l.name)} — <em>${escapeHtml(l.proficiency)}</em></div>`).join('')}
            </div>
        </section>` : '';

    const projHtml = cv.projects.length ? `
        <section>
            <h2>Selected Projects</h2>
            ${cv.projects.map(pr => `
                <div class="el-item">
                    <h3>${escapeHtml(pr.name)}</h3>
                    ${pr.link ? `<div class="el-sub"><span>${escapeHtml(pr.link)}</span></div>` : ''}
                    <p>${escapeHtml(pr.description)}</p>
                </div>`).join('')}
        </section>` : '';

    return `
        <div class="cv-elegant" style="--accent:${accent}">
            <aside class="el-side">
                <div class="el-name">
                    <h1>${escapeHtml(p.fullName) || 'Your Name'}</h1>
                    <div class="role">${escapeHtml(p.jobTitle)}</div>
                </div>
                <div class="el-contacts">${contacts.join('')}</div>
            </aside>
            <main class="el-main">
                ${summaryHtml}${skillsHtml}${expHtml}${eduHtml}${projHtml}${langsHtml}
            </main>
        </div>`;
}

    // ============ INITIALIZE ============
    loadFormsFromState();
    renderPreview();
});