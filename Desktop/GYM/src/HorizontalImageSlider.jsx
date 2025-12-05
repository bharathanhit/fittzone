<motion.div
  className="flex-1 flex flex-col sm:flex-row justify-start items-center flex-shrink-0 gap-0"
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 1.2, duration: 0.6 }}
>
  <motion.img
    src={card1}
    alt="Card 1"
    className="rounded-full object-cover w-3/4 h-3/4 sm:w-72 sm:h-72 md:w-96 md:h-96 shadow-2xl"
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.4, duration: 2 }}
  />
</motion.div>