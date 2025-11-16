const defaultPrayerCards = [
  {
    _id: 1,
    title: "Faith into action",
    prayer: "God thank you for the discipline to put my faith into action",
    imageUrl:
      "https://images.pexels.com/photos/2405648/pexels-photo-2405648.jpeg?_gl=1*z2ek3f*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDQwMzMkajU5JGwwJGgw",
  },
  {
    _id: 2,
    title: "Monetize YouTube channel",
    prayer: "God thank you for guiding me to YouTube sucess",
    imageUrl:
      "https://images.pexels.com/photos/7595266/pexels-photo-7595266.jpeg",
  },
  {
    _id: 3,
    title: "World Peace",
    prayer: "God thank you for creating more peace in this world",
    imageUrl:
      "https://images.pexels.com/photos/6963622/pexels-photo-6963622.jpeg?_gl=1*15q6qpr*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDQ0MTMkajI3JGwwJGgw",
  },
  {
    _id: 4,
    title: "Community",
    prayer: "God thank you for covering my community",
    imageUrl:
      "https://images.pexels.com/photos/34390420/pexels-photo-34390420.jpeg?_gl=1*1fdlnr8*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDQ0OTMkajM2JGwwJGgw",
  },
  {
    _id: 5,
    title: "Family",
    prayer: "God thank you for leading my family with love and light",
    imageUrl:
      "https://images.pexels.com/photos/1128316/pexels-photo-1128316.jpeg?_gl=1*94iuyt*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDQ1NDYkajQ2JGwwJGgw",
  },
  {
    _id: 6,
    title: "Emotional Maturity",
    prayer: "God thank you for guiding me into a life of empowerment",
    imageUrl:
      "https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg?_gl=1*5ddt2l*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDQ2MTgkajU5JGwwJGgw",
  },
  {
    _id: 7,
    title: "Daily Bread",
    prayer: "God thank you for allowing me access to your word",
    imageUrl:
      "https://images.pexels.com/photos/272337/pexels-photo-272337.jpeg?_gl=1*1c295kp*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDQ2NzEkajYkbDAkaDA.",
  },
  {
    _id: 8,
    title: "Nature",
    prayer: "God thank you for the healing properties in nature",
    imageUrl:
      "https://images.pexels.com/photos/133682/pexels-photo-133682.jpeg?_gl=1*1i6cmd7*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDQ3NjckajM3JGwwJGgw",
  },
  {
    _id: 9,
    title: "Warm Clothing",
    prayer: "God thank for providing us with warm clothing for cooler seasons",
    imageUrl:
      "https://images.pexels.com/photos/6393346/pexels-photo-6393346.jpeg?_gl=1*sdo8mu*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDQ4NTgkajQyJGwwJGgw",
  },
  {
    _id: 10,
    title: "Work Equipment",
    prayer: "God thank for upgraded equipment, to better serve my purpose",
    imageUrl:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?_gl=1*1akzga5*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDQ5NDQkajI1JGwwJGgw",
  },
  {
    _id: 11,
    title: "Graduation",
    prayer: "God thank for giving me the streghtn to keep going and graduate",
    imageUrl:
      "https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?_gl=1*1nle3sh*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDQ5OTYkajM0JGwwJGgw",
  },
  {
    _id: 12,
    title: "Be a Blessing",
    prayer: "God thank you for allowing me to be a blessing to those around me",
    imageUrl:
      "https://images.pexels.com/photos/6646863/pexels-photo-6646863.jpeg?_gl=1*1ig4vft*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDUwOTMkajE5JGwwJGgw",
  },
  {
    _id: 13,
    title: "Joy",
    prayer: "God thank you for joy and the gift of life",
    imageUrl:
      "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?_gl=1*6b12mv*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDUxNTgkajM5JGwwJGgw",
  },
  {
    _id: 14,
    title: "Spiritual Gifts",
    prayer:
      "God thank you for the spiritual gifts you have given me and future generations",
    imageUrl:
      "https://images.pexels.com/photos/8341889/pexels-photo-8341889.jpeg?_gl=1*19e1szz*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDUyOTMkajU5JGwwJGgw",
  },
  {
    _id: 15,
    title: "Generational Blessings",
    prayer: "God thank you for blessing those who came before me",
    imageUrl:
      "https://images.pexels.com/photos/1024900/pexels-photo-1024900.jpeg?_gl=1*18plg1*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDUzODckajU5JGwwJGgw",
  },
  {
    _id: 16,
    title: "DREAM",
    prayer: "God thank you for DREAM",
    imageUrl:
      "https://images.pexels.com/photos/6931974/pexels-photo-6931974.jpeg?_gl=1*1og486d*_ga*NjcyNTk4OTU2LjE3NjEyNDM3MzU.*_ga_8JE65Q40S6*czE3NjEyNDM3MzUkbzEkZzEkdDE3NjEyNDU1NjAkajE0JGwwJGgw",
  },
];

export default defaultPrayerCards;
