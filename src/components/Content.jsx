import { useEffect, useState } from "react";
import axios from "axios";
import { Triangle, MessagesSquare, Eye} from 'lucide-react'

const Content = () => {
    const [activeCategory, setActiveCategory] = useState("interesting");
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const categories = [
        { label: "interesting", filter: "hot" },
        { label: "bountied", filter: "featured" },
        { label: "hot", filter: "hot" },
        { label: "week", filter: "week" },
        { label: "month", filter: "month" },
    ];

    // fetching data by axios
    const fetchQuestions = async (filter) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.stackexchange.com/2.3/questions`,
                {
                    params:{
                        order: "desc",
                        sort: filter,
                        site: "stackoverflow",
                    },
                }
            )
            setQuestions(response.data.items || []);
        } catch (error) {
            console.log("Error fetching questions: ", error);
            setQuestions([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const category = categories.find((c) => c.label === activeCategory);
        fetchQuestions(category.filter);
    }, [activeCategory]);


  return (   
    <div className="max-w-3xl mx-auto bg-white shadow rounded-lg">
    {/* Header */}
    <div className="p-4 border-b flex items-center">
      <h2 className="text-lg font-bold text-gray-500">Top Question</h2>
      <div className="flex flex-wrap items-center space-x-4 ml-8">
        {categories.map((category) => (
          <button
            key={category.label}
            onClick={() => setActiveCategory(category.label)}
            className={`text-sm font-medium ${
              activeCategory === category.label
                ? "bg-orange-500 text-white px-4 py-3 rounded-full "
                : "text-gray-500"
            }`}
          >
            {category.label.charAt(0).toUpperCase() +
              category.label.slice(1)}
          </button>
        ))}
      </div>
      <button className="ml-auto text-sm font-medium bg-blue-500 text-white px-4 py-3 rounded-full">
        Ask Question
      </button>
    </div>
    {/* Questions Section */}
    <div className="p-4 space-y-4">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : questions.length > 0 ? (
        questions.map((question) => (
          <div key={question.question_id} className="py-4 border-b">
            <h3 className="text-md font-medium text-gray-800">
              {question.title}
            </h3>
            <div className="flex flex-wrap mt-2 gap-2">
              {question.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center mt-4 text-gray-500 text-sm">
              <span className="flex items-center mr-4">
                <Triangle className="w-4 h-4 text-orange-500 mr-1" />
                {question.score}
              </span>
              <span className="flex items-center mr-4">
                <MessagesSquare className="w-4 h-4 text-gray-500 mr-1" />
                {question.answer_count}
              </span>
              <span className="flex items-center">
                <Eye className="w-4 h-4 text-gray-500 mr-1" />
                {question.view_count}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No questions found.</p>
      )}
    </div>
  </div>
      );
    };

export default Content