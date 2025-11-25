const projects = [
    {title: 'E-Commerce Revolution', desc: 'A cutting-edge platform revolutionizing online shopping with AI-powered recommendations, seamless checkout, and real-time inventory management.', tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'], features: ['AI product recommendations', 'One-click checkout', 'Real-time inventory', 'Mobile-first design', 'Advanced search']},
    {title: 'Fitness Tracker Pro', desc: 'Comprehensive fitness app that tracks workouts, monitors nutrition, and helps achieve health goals with personalized plans and analytics.', tech: ['React Native', 'Firebase', 'TensorFlow', 'HealthKit'], features: ['Personalized workout plans', 'Nutrition tracking', 'Progress analytics', 'Social challenges', 'Wearable integration']},
    {title: 'Analytics Dashboard', desc: 'Powerful analytics platform transforming complex data into actionable insights with real-time visualization and advanced reporting.', tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Docker'], features: ['Real-time visualization', 'Custom dashboards', 'Advanced filtering', 'Automated reports', 'Role-based access']},
    {title: 'Luxury Brand Identity', desc: 'Complete brand transformation for premium fashion label, including logo design, guidelines, and marketing materials capturing elegance.', tech: ['Adobe Suite', 'Figma', 'After Effects', 'Cinema 4D'], features: ['Custom logo design', 'Brand guidelines', 'Marketing collateral', 'Packaging design', 'Social templates']},
    {title: 'Creator Social Hub', desc: 'Next-gen social platform connecting creators with audiences through exclusive content, live streaming, and Web3 community engagement.', tech: ['Next.js', 'Solidity', 'IPFS', 'Ethereum', 'WebRTC'], features: ['Subscription model', 'Live streaming', 'NFT marketplace', 'Community forums', 'Creator analytics']},
    {title: 'AI Content Generator', desc: 'Intelligent content creation platform powered by machine learning, generating high-quality written content and marketing copy.', tech: ['Python', 'GPT-4', 'TensorFlow', 'FastAPI', 'Redis'], features: ['AI content generation', 'Brand voice consistency', 'Multi-format export', 'SEO optimization', 'Batch processing']}
];

const modal = new bootstrap.Modal(document.getElementById('projectModal'));

function showProject(i) {
    const p = projects[i];
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent = p.desc;
    document.getElementById('modalTech').innerHTML = p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    document.getElementById('modalFeatures').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
    modal.show();
}

const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    icon.className = document.body.classList.contains('dark-mode') ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
});