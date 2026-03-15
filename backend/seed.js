// -------------------------------------------------
// Database Seeder
// Populates MongoDB with initial salon services
// Run: node seed.js
// -------------------------------------------------

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

// Sample services data for LA Looks Salon
const services = [
  // ===== Hair Services =====
  {
    name: 'Hair Cut',
    category: 'Hair Services',
    description:
      'Professional hair cutting by our expert stylists. Includes consultation, shampoo wash, precision cut, and blow dry styling.',
    price: 200,
    duration: '30 mins',
    image: '✂️',
  },
  {
    name: 'Hair Styling',
    category: 'Hair Services',
    description:
      'Transform your look with trending hairstyles. From elegant updos to modern waves, our stylists create the perfect look for any occasion.',
    price: 500,
    duration: '45 mins',
    image: '💇',
  },
  {
    name: 'Hair Coloring',
    category: 'Hair Services',
    description:
      'Premium hair coloring services including highlights, balayage, and full color. We use top-quality ammonia-free products.',
    price: 1500,
    duration: '90 mins',
    image: '🎨',
  },
  {
    name: 'Hair Spa',
    category: 'Hair Services',
    description:
      'Deep conditioning hair spa treatment to repair damage, reduce frizz, and restore natural shine. Includes head massage.',
    price: 800,
    duration: '60 mins',
    image: '💆',
  },

  // ===== Skin Services =====
  {
    name: 'Facial',
    category: 'Skin Services',
    description:
      'Rejuvenating facial treatment that cleanses, exfoliates, and nourishes the skin. Includes steam, extraction, mask, and moisturizer.',
    price: 600,
    duration: '45 mins',
    image: '✨',
  },
  {
    name: 'Cleanup',
    category: 'Skin Services',
    description:
      'Quick skin cleanup to remove dirt, oil, and dead cells. Leaves your skin fresh, clean, and glowing instantly.',
    price: 400,
    duration: '30 mins',
    image: '🧴',
  },
  {
    name: 'Bleach',
    category: 'Skin Services',
    description:
      'Professional skin bleaching to lighten facial hair and even out skin tone. Uses gentle, dermatologist-approved products.',
    price: 300,
    duration: '20 mins',
    image: '🌟',
  },
  {
    name: 'De-Tan Treatment',
    category: 'Skin Services',
    description:
      'Effective de-tan treatment to remove sun tan and restore your natural complexion. Includes soothing gel application.',
    price: 500,
    duration: '30 mins',
    image: '☀️',
  },

  // ===== Makeup Services =====
  {
    name: 'Bridal Makeup',
    category: 'Makeup Services',
    description:
      'Complete bridal makeup package with HD/airbrush finish. Includes pre-bridal consultation, draping, jewelry setting, and touch-up kit.',
    price: 15000,
    duration: '120 mins',
    image: '👰',
  },
  {
    name: 'Party Makeup',
    category: 'Makeup Services',
    description:
      'Glamorous party-ready makeup for any celebration. Includes base preparation, eye makeup, contouring, and lip styling.',
    price: 3000,
    duration: '60 mins',
    image: '💄',
  },
  {
    name: 'Engagement Makeup',
    category: 'Makeup Services',
    description:
      'Elegant engagement makeup that photographs beautifully. Includes skin prep, flawless base, and long-lasting finish.',
    price: 8000,
    duration: '90 mins',
    image: '💍',
  },

  // ===== Nail Services =====
  {
    name: 'Manicure',
    category: 'Nail Services',
    description:
      'Complete hand care treatment including nail shaping, cuticle care, hand massage, and polish application.',
    price: 400,
    duration: '30 mins',
    image: '💅',
  },
  {
    name: 'Pedicure',
    category: 'Nail Services',
    description:
      'Relaxing foot care treatment with exfoliation, nail care, foot massage, and polish. Leaves feet soft and beautiful.',
    price: 500,
    duration: '45 mins',
    image: '🦶',
  },
];

// Seed function — clears existing data and inserts fresh services
const seedDB = async () => {
  try {
    // Remove all existing services
    await Service.deleteMany({});
    console.log('🗑️  Cleared existing services');

    // Insert new services
    const createdServices = await Service.insertMany(services);
    console.log(`✅ ${createdServices.length} services added successfully!`);

    console.log('\n📋 Services added:');
    createdServices.forEach((s) => {
      console.log(`   ${s.image} ${s.name} — ₹${s.price} (${s.category})`);
    });

    process.exit();
  } catch (error) {
    console.error(`❌ Seeding Error: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
