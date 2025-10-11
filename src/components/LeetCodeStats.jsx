import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LeetCodeStats = ({ theme }) => {
  const LEETCODE_USERNAME = 'Tanguturi_Rajesh'; // Your LeetCode username
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using the working LeetCode stats API
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`);
        const data = await response.json();
        
        if (data.status === 'success') {
          setStats(data);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch LeetCode stats');
        }
        
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchLeetCodeStats();
  }, []);
  
  const StatCard = ({ label, value, total, colorClass, delay }) => {
    const percentage = total > 0 ? (value / total * 100) : 0;
    const formattedPercentage = percentage.toFixed(1);
    
    return (
      <motion.div 
        className="bg-gray-100 dark:bg-gray-800 border border-transparent dark:border-gray-700 p-6 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay * 0.2 }}
      >
        <h4 className={`text-4xl font-bold ${colorClass}`}>{value}</h4>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{label}</p>
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mt-4">
          <motion.div 
            className={`${colorClass.replace('text-', 'bg-')} h-3 rounded-full`} 
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + delay * 0.2, ease: 'easeOut' }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">{value} / {total}</p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{formattedPercentage}%</p>
        </div>
      </motion.div>
    );
  };

  // Calculate overall completion percentage
  const calculateOverallCompletion = () => {
    if (!stats) return 0;
    const totalProblems = stats.totalQuestions;
    const solvedProblems = stats.totalSolved;
    return totalProblems > 0 ? (solvedProblems / totalProblems * 100) : 0;
  };

  return (
    <motion.section 
        id="leetcode" 
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
    >
      <h2 className="section-title">Competitive Programming</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
        My journey through algorithmic challenges and data structure problems on LeetCode
      </p>
      
      <div className="mt-12">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 max-w-xl mx-auto">
            <p className="text-center text-red-500 dark:text-red-400">
              Error: {error}. Please check the username.
            </p>
          </div>
        )}
        
        {stats && (
          <>
            <div className="max-w-4xl mx-auto mb-12 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-lg mr-4">
                    <h3 className="text-5xl font-bold">{stats.totalSolved}</h3>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Problems Solved</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Out of {stats.totalQuestions} total problems
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 dark:text-gray-300">Acceptance Rate:</span>
                    <span className="text-lg font-semibold text-cyan-500">{stats.acceptanceRate}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 dark:text-gray-300">Global Ranking:</span>
                    <span className="text-lg font-semibold text-indigo-500">#{stats.ranking}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Completion</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {calculateOverallCompletion().toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                  <motion.div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${calculateOverallCompletion()}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard label="Easy Problems" value={stats.easySolved} total={stats.totalEasy} colorClass="text-green-500" delay={1} />
              <StatCard label="Medium Problems" value={stats.mediumSolved} total={stats.totalMedium} colorClass="text-yellow-500" delay={2} />
              <StatCard label="Hard Problems" value={stats.hardSolved} total={stats.totalHard} colorClass="text-red-500" delay={3} />
            </div>
            
            <div className="mt-10 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Contest Performance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  className="bg-gray-100 dark:bg-gray-800 border border-transparent dark:border-gray-700 p-4 rounded-lg shadow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">Contest Rating</h4>
                  <p className="text-3xl font-bold text-blue-500 mt-2">1489</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Top 45%</p>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-100 dark:bg-gray-800 border border-transparent dark:border-gray-700 p-4 rounded-lg shadow"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">Contests Attended</h4>
                  <p className="text-3xl font-bold text-green-500 mt-2">24</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Global Rank: </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">12,458</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default LeetCodeStats;
