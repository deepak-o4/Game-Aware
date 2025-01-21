import React from "react";
import { motion } from "framer-motion";
import "./ResourcesPage.css";

const ResourcesPage = () => {
  const slides = [
    {
      title: "Understanding Responsible Gaming",
      content: `
        Gaming should be fun and not a source of stress. 
        Responsible gaming involves setting clear boundaries, 
        balancing it with real-life activities, and avoiding excessive play.
        Whether you game for leisure or competition, always prioritize your 
        well-being and relationships.`,
      mistakes: `
        - Playing for long hours without breaks.
        - Ignoring responsibilities like work or studies.
        - Spending too much money on in-game purchases.`,
      learning: `
        - Create a schedule that balances gaming with other activities.
        - Always remember: real life comes first.`,
      image: "https://public-content.dezctop.com/media/3e09a2d803714a1b96d5a988499664a2/space-themed.webp",
    },
    {
      title: "Set Limits to Stay in Control",
      content: `
        Time and money management are critical in gaming. 
        Set specific hours for gameplay and decide on a budget for in-game purchases. 
        This ensures that gaming remains an enjoyable hobby without disrupting your 
        daily responsibilities.`,
      mistakes: `
        - Spending impulsively on microtransactions.
        - Playing late at night, affecting your sleep schedule.`,
      learning: `
        - Use tools to monitor your screen time.
        - Avoid spending beyond your budget.`,
      image: "https://cdn.mos.cms.futurecdn.net/9meMCxtJU3NWkh5YcPs7qG.jpg",
    },
    {
      title: "Take Frequent Breaks",
      content: `
        Prolonged gaming can lead to fatigue and burnout. 
        Regular breaks help maintain focus and reduce eye strain. 
        Use a 20-20-20 rule: every 20 minutes, look at something 20 feet 
        away for 20 seconds. Stay hydrated and stretch to relax.`,
      mistakes: `
        - Sitting for hours without moving.
        - Ignoring physical health and hydration.`,
      learning: `
        - Set alarms to remind you to take breaks.
        - Engage in light physical activity during breaks.`,
      image: "https://media.istockphoto.com/id/1316620339/vector/man-doing-warm-up-at-the-workplace-vector-flat-illustration-isolated-male-practicing-workout.jpg?s=612x612&w=0&k=20&c=PF4zwNUlzMw7Y8Ptb2sjXbqsvglqp3eKCZ0vAI7FQ6M=",
    },
    {
      title: "Avoid Financial Risks in Gambling",
      content: `
        Gambling can quickly turn problematic if not handled responsibly. 
        Never bet money you can't afford to lose. Understand the odds 
        and risks before participating in any gambling activities.`,
      mistakes: `
        - Chasing losses by gambling more.
        - Using loans or savings to gamble.`,
      learning: `
        - Set strict financial limits before gambling.
        - Learn the probabilities of games to make informed choices.`,
      image: "https://www.shutterstock.com/shutterstock/photos/2051836073/display_1500/stock-photo-economic-crisis-financial-background-double-exposure-of-coins-and-us-dollars-bank-note-currency-2051836073.jpg",
    },
    {
      title: "Know When to Seek Help",
      content: `
        If gaming or gambling starts interfering with your daily life, 
        it's time to seek help. Talk to friends or family, or reach out 
        to professional support groups. Remember, seeking help is a sign 
        of strength, not weakness.`,
      mistakes: `
        - Waiting too long to address issues.
        - Hiding problems from loved ones.`,
      learning: `
        - Consult a counselor if needed.
        - Join community forums for support and advice.`,
      image: "https://img.freepik.com/premium-vector/cartoon-drawing-handshake-two-people_1332475-6135.jpg",
    },
    // Adding the last slide for YouTube link
    {
      title: "Learn More: Gaming vs Gambling",
      content: "For a better understanding of the differences between gaming and gambling, watch the following videos.",
      mistakes: "",
      learning: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8lkuHpGzBJPYjQEQh6kpQh7hc8TN9_vfvg&s",
      youtubeLink: "https://www.youtube.com/watch?v=6cnd7Layi4E", // Replace with actual YouTube URL
    },
  ];

  return (
    <div className="resources-page">
      {slides.map((slide, index) => (
        <motion.div
          className="slide"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="slide-content">
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
            {slide.mistakes && (
              <div className="additional-content">
                <h3>Mistakes to Avoid:</h3>
                <p>{slide.mistakes}</p>
              </div>
            )}
            {slide.learning && (
              <div className="additional-content">
                <h3>Key Learnings:</h3>
                <p>{slide.learning}</p>
              </div>
            )}
            {/* Add YouTube Video Link for the last slide */}
            {slide.youtubeLink && (
              <div className="youtube-link">
                <a href={slide.youtubeLink} target="_blank" rel="noopener noreferrer">
                  <img src={slide.image} alt="Learn More" className="youtube-thumbnail" />
                  <p>Click to watch more videos on Gaming vs Gambling</p>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ResourcesPage;
