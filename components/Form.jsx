import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='purple_gradient01'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share your solution with the world, and Fuel the Community's Growth with Your Problem-Solving Wisdom
        <span className='desc text-left max-w-md orange_gradient'> or share your creative AI Prompts for insightful solution</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
          Problem statement
          </span>
          <input
            value={post.statement}
            onChange={(e) => setPost({ ...post, statement: e.target.value })}
            type='text'
            placeholder='Problem statement'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700 '>
            Your Solution / Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your solution'
            required
            className='form_textarea bg-slate-950 '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tags{" "}
            <span className='font-semibold text-sm text-gray-600'>
              (#DP, #Backtracking, #BinarySearch, #Greedy etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Source Link{" "}
          </span>
          <input
            value={post.source}
            onChange={(e) => setPost({ ...post, source: e.target.value })}
            type='link'
            placeholder='Link'
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='purple_gradient01 text-sm font-semibold'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-pink-500 rounded-full text-white'
          >
            {submitting ? `${type}......` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;