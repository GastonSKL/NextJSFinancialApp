"use client";
import CountUp from "react-countup";

function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp end={amount} decimal="," prefix="$" duration={2.75}/>
    </div>
  );
}

export default AnimatedCounter;
