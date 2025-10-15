import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const LeetCodeStats = () => {
  const LEETCODE_USERNAME = 'Tanguturi_Rajesh';
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`);
        const data = await response.json();
        if (data.status === 'success') {
          setStats(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeetCodeStats();
  }, []);

  const StatCard = ({ label, value, total, gradient, delay }) => {
    const percentage = total > 0 ? (value / total * 100) : 0;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300 rounded-2xl"
             style={{ background: `linear-gradient(135deg, ${gradient})` }}
        />
        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
          <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {value}
          </div>
          <div className="text-gray-300 mb-4">{label}</div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${gradient}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: delay + 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>{value} / {total}</span>
            <span>{percentage.toFixed(1)}%</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="leetcode" className="relative py-32 px-6 md:px-16 overflow-hidden bg-gray-950">
      <motion.div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.6) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            Competitive Programming
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-4"></div>
          <p className="text-gray-300 text-lg mb-16 max-w-3xl">
            My journey through algorithmic challenges and data structure problems on LeetCode
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : stats ? (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-16"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl rounded-3xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-2xl">
                      <div className="text-5xl font-bold text-white">{stats.totalSolved}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Problems Solved</h3>
                      <p className="text-gray-400">Out of {stats.totalQuestions} total</p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-1">Acceptance</div>
                      <div className="text-2xl font-bold text-cyan-400">{stats.acceptanceRate}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-1">Ranking</div>
                      <div className="text-2xl font-bold text-purple-400">#{stats.ranking}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <StatCard
                label="Easy Problems"
                value={stats.easySolved}
                total={stats.totalEasy}
                gradient="from-green-400 to-emerald-600"
                delay={0.2}
              />
              <StatCard
                label="Medium Problems"
                value={stats.mediumSolved}
                total={stats.totalMedium}
                gradient="from-yellow-400 to-orange-500"
                delay={0.3}
              />
              <StatCard
                label="Hard Problems"
                value={stats.hardSolved}
                total={stats.totalHard}
                gradient="from-red-400 to-pink-600"
                delay={0.4}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contest Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <div className="text-gray-400 mb-2">Contest Rating</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      1583
                    </div>
                    <div className="text-sm text-gray-500 mt-2">Top 25%</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <div className="text-gray-400 mb-2">Contests Attended</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      24
                    </div>
                    <div className="text-sm text-gray-500 mt-2">Global Rank: 12,458</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </div>
    </section>
  );
};
export default LeetCodeStats;