const plans = {
            monthly: [
                {
                    name: 'Basic',
                    price: '$29',
                    period: '/mo',
                    features: [
                        'Basic Threat Detection',
                        'Email Security',
                        '24/7 Support',
                        'Monthly Security Reports',
                        'Up to 10 Devices'
                    ]
                },
                {
                    name: 'Advance',
                    price: '$79',
                    period: '/mo',
                    popular: true,
                    features: [
                        'Advanced Threat Detection',
                        'Email & Web Security',
                        'Priority 24/7 Support',
                        'Weekly Security Reports',
                        'Up to 50 Devices',
                        'VPN Access',
                        'Dark Web Monitoring'
                    ]
                },
                {
                    name: 'Pro',
                    price: '$149',
                    period: '/mo',
                    features: [
                        'Enterprise Threat Detection',
                        'Complete Security Suite',
                        'Dedicated Support Team',
                        'Daily Security Reports',
                        'Up to 200 Devices',
                        'Premium VPN Access',
                        'Advanced Dark Web Monitoring',
                        'Penetration Testing',
                        'Custom Security Policies'
                    ]
                },
                {
                    name: 'Ultra',
                    price: '$299',
                    period: '/mo',
                    features: [
                        'AI-Powered Threat Detection',
                        'Military-Grade Security',
                        'Dedicated Security Expert',
                        'Real-time Security Reports',
                        'Unlimited Devices',
                        'Dedicated VPN Server',
                        'Complete Dark Web Protection',
                        'Monthly Penetration Testing',
                        'Custom Security Architecture',
                        'Incident Response Team',
                        'Compliance Management'
                    ]
                }
            ],
            yearly: [
                {
                    name: 'Basic',
                    price: '$290',
                    period: '/yr',
                    save: 'Save $58',
                    features: [
                        'Basic Threat Detection',
                        'Email Security',
                        '24/7 Support',
                        'Monthly Security Reports',
                        'Up to 10 Devices'
                    ]
                },
                {
                    name: 'Advance',
                    price: '$790',
                    period: '/yr',
                    popular: true,
                    save: 'Save $158',
                    features: [
                        'Advanced Threat Detection',
                        'Email & Web Security',
                        'Priority 24/7 Support',
                        'Weekly Security Reports',
                        'Up to 50 Devices',
                        'VPN Access',
                        'Dark Web Monitoring'
                    ]
                },
                {
                    name: 'Pro',
                    price: '$1,490',
                    period: '/yr',
                    save: 'Save $298',
                    features: [
                        'Enterprise Threat Detection',
                        'Complete Security Suite',
                        'Dedicated Support Team',
                        'Daily Security Reports',
                        'Up to 200 Devices',
                        'Premium VPN Access',
                        'Advanced Dark Web Monitoring',
                        'Penetration Testing',
                        'Custom Security Policies'
                    ]
                },
                {
                    name: 'Ultra',
                    price: '$2,990',
                    period: '/yr',
                    save: 'Save $598',
                    features: [
                        'AI-Powered Threat Detection',
                        'Military-Grade Security',
                        'Dedicated Security Expert',
                        'Real-time Security Reports',
                        'Unlimited Devices',
                        'Dedicated VPN Server',
                        'Complete Dark Web Protection',
                        'Monthly Penetration Testing',
                        'Custom Security Architecture',
                        'Incident Response Team',
                        'Compliance Management'
                    ]
                }
            ]
        };

        let currentBilling = 'monthly';

        function toggleBilling(type) {
            currentBilling = type;
            
            document.querySelectorAll('.toggle-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            const saveText = document.getElementById('saveText');
            if (type === 'yearly') {
                saveText.classList.add('show');
            } else {
                saveText.classList.remove('show');
            }
            
            renderPricingCards(type);
        }

        function renderPricingCards(billingType) {
            const grid = document.getElementById('pricingGrid');
            const currentPlans = plans[billingType];
            
            grid.innerHTML = currentPlans.map(plan => `
                <div class="pricing-card ${plan.popular ? 'popular' : ''}">
                    ${plan.popular ? '<div class="popular-badge">POPULAR</div>' : ''}
                    
                    <div class="pricing-header">
                        <h3>${plan.name}</h3>
                        <div class="pricing-price">
                            <span class="amount">${plan.price}</span>
                            <span class="period">${plan.period}</span>
                        </div>
                        ${plan.save ? `<div class="save-badge">${plan.save}</div>` : ''}
                    </div>

                    <ul class="features-list">
                        ${plan.features.map(feature => `
                            <li>
                                <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>${feature}</span>
                            </li>
                        `).join('')}
                    </ul>

                    <button class="${plan.popular ? 'btn-primary' : 'btn-secondary'}">
                        Get Started
                    </button>
                </div>
            `).join('');
        }

        renderPricingCards('monthly');