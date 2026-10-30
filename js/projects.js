const projects = [
  {
    id: 'wififlow',
    name: 'WiFiFlow',
    category: 'SaaS application',
    categories: ['saas', 'business'],
    status: 'In Development',
    statusType: 'development',
    description: 'A multi-tenant Wi-Fi management platform designed to help internet providers manage customers, packages, vouchers and connected routers.',
    overview: 'WiFiFlow brings the day-to-day tools for managing a Wi-Fi service into one platform, with organization workspaces and a customer connection portal.',
    problem: 'Internet providers need a clear way to manage customer access, internet packages and voucher-based connections across their operations.',
    solution: 'A multi-tenant SaaS platform structured around organizations, customer management, packages, vouchers, router connections and reporting.',
    features: [
      'Organization and customer management',
      'Internet packages and voucher management',
      'Payment integration architecture',
      'MikroTik router integration and multiple-provider architecture',
      'Dashboard and reporting'
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'API integrations'],
    contribution: 'Product and software development across the platform experience and integration architecture.',
    visual: 'wifi',
    demo: 'https://wifi-flow-rho.vercel.app',
    demoLabel: 'Visit application',
    note: 'The public preview opens the KITAVI WIFI customer portal. It states that payment and router behavior is simulated; this is not the management dashboard.'
  },
  {
    id: 'motor-hub',
    name: 'Motor Hub',
    category: 'Business software',
    categories: ['saas', 'business'],
    status: 'In Development',
    statusType: 'development',
    description: 'A vehicle spare-parts management SaaS concept for bringing inventory, point of sale and everyday shop operations together.',
    overview: 'Motor Hub is being developed for vehicle spare-parts shops that need one workspace for managing stock, sales, purchasing and business activity.',
    problem: 'Spare-parts businesses need to coordinate stock, counter sales, customers, suppliers and reporting without losing sight of daily operations.',
    solution: 'A multi-tenant business platform planned around inventory, POS, purchasing, customer and supplier records, staff and reporting.',
    features: [
      'Inventory management',
      'Point of Sale and sales operations',
      'Purchases and supplier management',
      'Customer and staff management',
      'Business reporting and multi-tenant architecture'
    ],
    stack: [],
    contribution: 'Product development for a spare-parts business management platform.',
    visual: 'motor',
    demo: 'https://motor-hub-sigma.vercel.app/',
    demoLabel: 'Open public website',
    note: 'The public preview currently presents the Motor Hub product website and account entry point; application features may require an account.'
  },
  {
    id: 'schoolyard',
    name: 'Schoolyard',
    category: 'SaaS application',
    categories: ['saas', 'business'],
    status: 'In Development',
    statusType: 'development',
    description: 'A school management SaaS platform for coordinating student records, teaching, attendance, fees and academic reporting.',
    overview: 'Schoolyard is planned as a shared workspace for school administrators, teachers and families to manage core school operations.',
    problem: 'Schools need connected, accessible records for learners, classes, attendance, fee payments and academic progress.',
    solution: 'A school management platform organized around student, teacher and parent records, with attendance, fee workflows and reports.',
    features: [
      'Student, teacher and parent management',
      'Class and subject management',
      'Attendance tracking',
      'Fee management and payments',
      'Academic reports'
    ],
    stack: ['Python', 'Flask', 'MySQL', 'REST APIs'],
    contribution: 'Platform design and development for school administration workflows.',
    visual: 'school',
  },
  {
    id: 'athi-net',
    name: 'ATHI-NET',
    category: 'Web development',
    categories: ['web'],
    status: 'Published',
    statusType: 'published',
    description: 'A professional business website presenting ATHI-NET’s services and business information through a responsive branded experience.',
    overview: 'A published business website created to give ATHI-NET a clear online presence and present its business information and services.',
    problem: 'A business needs an accessible, professional online presence that makes its information and services easy to understand.',
    solution: 'A responsive website structured to present the business, its services and its professional brand.',
    features: [
      'Responsive interface',
      'Business information',
      'Service presentation',
      'Professional branding'
    ],
    stack: [],
    contribution: 'Website design and development.',
    visual: 'site',
    demo: 'https://kitavh1.github.io/ATHI-NET/',
    demoLabel: 'Visit live website'
  },
  {
    id: 'athi-auto',
    name: 'Athi Auto Spares POS',
    category: 'POS & business systems',
    categories: ['business', 'analytics'],
    status: 'Project Experience',
    statusType: 'experience',
    description: 'Retail business software experience focused on point-of-sale workflows, inventory records and day-to-day sales operations.',
    overview: 'A retail business software project focused on supporting spare-parts sales and operational record keeping.',
    problem: 'Retail operations depend on reliable sales workflows and organized inventory and business records.',
    solution: 'POS workflows and inventory database management to support sales operations and business data management.',
    features: [
      'Point-of-sale workflows',
      'Inventory database management',
      'Sales operations',
      'Business data management'
    ],
    stack: [],
    contribution: 'Project experience with retail software workflows and business data management.',
    visual: 'pos',
  },
  {
    id: 'two-heads-tech',
    name: 'Two Heads Tech Enterprise',
    category: 'Technology business',
    categories: ['web', 'business', 'security'],
    status: 'Business website',
    statusType: 'business',
    description: 'My technology business focused on custom software, business automation, POS solutions, SaaS development and web development.',
    overview: 'Two Heads Tech Enterprise is my technology business, focused on practical digital solutions for organizations and growing businesses.',
    problem: 'Businesses need technology that addresses real operational needs while remaining useful, secure and maintainable.',
    solution: 'A technology business offering custom software development, automation, POS solutions, SaaS and web development services.',
    features: [
      'Custom software development',
      'Business automation',
      'POS solutions',
      'SaaS development',
      'Web development'
    ],
    stack: [],
    contribution: 'Founder of Two Heads Tech Enterprise.',
    visual: 'business',
    demo: 'Twoheads.html',
    demoLabel: 'Explore business website',
    internalDemo: true
  }
];

const categoryLabels = {
  saas: 'SaaS applications',
  web: 'Web development',
  business: 'POS & business systems',
  analytics: 'Data analytics',
  security: 'Cybersecurity'
};

const grid = document.getElementById('project-grid');
const filterButtons = document.querySelectorAll('.filter-button');
const filterResult = document.getElementById('filter-result');
const dialog = document.getElementById('project-dialog');
const dialogVisual = document.getElementById('dialog-visual');
const dialogContent = document.getElementById('dialog-content');
const dialogClose = dialog.querySelector('.dialog-close');
let lastFocusedElement = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function projectPreview(project) {
  const safeName = escapeHtml(project.name);
  const demoText = project.demo ? 'Illustrative interface preview · See project details for the live link' : 'Illustrative interface preview · Screenshots not yet available';

  return `
    <div class="project-preview" data-project="${escapeHtml(project.id)}" data-visual="${escapeHtml(project.visual)}">
      <span class="preview-watermark">${demoText}</span>
      <div class="preview-ui">
        <div class="preview-sidebar"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="preview-main">
          <div class="preview-heading"><span></span><i></i></div>
          <div class="preview-metrics"><span></span><span></span><span></span></div>
          <div class="preview-graph"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
        </div>
      </div>
      <span class="preview-symbol">${safeName}</span>
    </div>`;
}

function projectActions(project, includeDetails = true) {
  const details = includeDetails
    ? `<button class="card-action card-action-primary" type="button" data-details="${escapeHtml(project.id)}">View details <span aria-hidden="true">↗</span></button>`
    : '';
  const demo = project.demo
    ? `<a class="card-action" href="${escapeHtml(project.demo)}" ${project.internalDemo ? '' : 'target="_blank" rel="noopener noreferrer"'}>${escapeHtml(project.demoLabel)} <span aria-hidden="true">↗</span></a>`
    : '';

  return `${details}${demo}`;
}

function projectCard(project) {
  const statusClass = `status-${escapeHtml(project.statusType)}`;
  const tags = project.stack.length
    ? project.stack.map(technology => `<span class="project-tag">${escapeHtml(technology)}</span>`).join('')
    : `<span class="project-tag">${escapeHtml(project.category)}</span>`;

  return `
    <article class="project-card">
      ${projectPreview(project)}
      <div class="project-card-body">
        <div class="project-card-top">
          <span class="project-category">${escapeHtml(project.category)}</span>
          <span class="status-badge ${statusClass}">${escapeHtml(project.status)}</span>
        </div>
        <h3>${escapeHtml(project.name)}</h3>
        <p class="project-card-description">${escapeHtml(project.description)}</p>
        <div class="project-tags" aria-label="Technologies and project type">${tags}</div>
        <div class="card-actions">${projectActions(project)}</div>
      </div>
    </article>`;
}

function renderProjects(filter = 'all') {
  const visibleProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(filter));

  grid.innerHTML = visibleProjects.map(projectCard).join('');
  filterResult.textContent = filter === 'all'
    ? `Showing all ${visibleProjects.length} projects`
    : `Showing ${visibleProjects.length} ${categoryLabels[filter]} ${visibleProjects.length === 1 ? 'project' : 'projects'}`;
}

function renderProjectDetails(project) {
  const featureList = project.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join('');
  const stack = project.stack.length
    ? project.stack.map(technology => `<span class="project-tag">${escapeHtml(technology)}</span>`).join('')
    : '<span class="project-tag">Stack details not listed</span>';

  dialogVisual.innerHTML = projectPreview(project);
  dialogContent.innerHTML = `
    <div class="dialog-title-row">
      <h2 id="dialog-title">${escapeHtml(project.name)}</h2>
      <span class="status-badge status-${escapeHtml(project.statusType)}">${escapeHtml(project.status)}</span>
    </div>
    <p>${escapeHtml(project.overview)}</p>
    ${project.note ? `<p class="dialog-note">${escapeHtml(project.note)}</p>` : ''}
    <div class="dialog-details-grid">
      <section class="dialog-detail"><h3>Challenge</h3><p>${escapeHtml(project.problem)}</p></section>
      <section class="dialog-detail"><h3>Approach</h3><p>${escapeHtml(project.solution)}</p></section>
      <section class="dialog-detail"><h3>Key features</h3><ul>${featureList}</ul></section>
      <section class="dialog-detail"><h3>My contribution</h3><p>${escapeHtml(project.contribution)}</p></section>
    </div>
    <div class="project-tags" aria-label="Technology stack">${stack}</div>
    <div class="card-actions">${projectActions(project, false)}</div>`;
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(filterButton => {
      const isActive = filterButton === button;
      filterButton.classList.toggle('is-active', isActive);
      filterButton.setAttribute('aria-pressed', String(isActive));
    });
    renderProjects(button.dataset.filter);
  });
});

grid.addEventListener('click', event => {
  const detailsButton = event.target.closest('[data-details]');
  if (!detailsButton) return;

  const project = projects.find(item => item.id === detailsButton.dataset.details);
  if (!project) return;

  lastFocusedElement = detailsButton;
  renderProjectDetails(project);
  dialog.showModal();
  dialogClose.focus();
});

dialogClose.addEventListener('click', () => dialog.close());

dialog.addEventListener('cancel', event => {
  event.preventDefault();
  dialog.close();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && dialog.open) {
    dialog.close();
  }
});

dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

dialog.addEventListener('close', () => {
  if (lastFocusedElement?.isConnected) lastFocusedElement.focus();
});

document.getElementById('year').textContent = new Date().getFullYear();
renderProjects();
