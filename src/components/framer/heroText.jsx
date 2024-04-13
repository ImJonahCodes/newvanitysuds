import { motion } from 'framer-motion';

export default function Celebration() {
    const text = "Mobile Detailing in Pittsburgh".split(" ");
    return (

        <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight">

            {text.map((el, i) => (
                    <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: i / 10,
                    }}
                    key={i}
                    className={el === "Pittsburgh" ? "text-primary" : ""}
                    >
                    {el}{" "}
                    </motion.span>
                ))}

        </h1>

  )
};