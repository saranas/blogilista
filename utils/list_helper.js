
const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {

	const reducer = (sum, item) => {
   		return sum + item
  	}
  	const likelist = blogs.map(blog => blog.likes)

	return likelist.reduce(reducer,0)

}

const favoriteBlog = (blogs) => {
	const likelist = blogs.map(blog => blog.likes)
	//console.log(likelist)
	const mostLikes = Math.max(...likelist)
	//console.log(mostLikes)
	const i = likelist.indexOf(mostLikes)
	//console.log(i)
	return blogs[i]
}

const mostBlogs = (blogs) => {
	const authors = blogs.map(blog => blog.author)

	function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    const res = [maxEl, maxCount]
    return res;
}
	console.log(mode(authors))
	return mode(authors)
}

const mostLikes = (blogs) => {

	//const authors = blogs.map(blog => blog.author)

	//-------------------------
	function mode(array) {

    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0].author, maxCount = array[0].likes;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el.author] == null)
            modeMap[el.author] = el.likes;
        else
            modeMap[el.author] += el.likes;

        if(modeMap[el.author] > maxCount)
        {
            maxEl = el.author;
            maxCount = modeMap[el.author];
        }
    }
    const res = [maxEl, maxCount]
    return res;
	}
	//-------------------------

	console.log(mode(blogs))
	return mode(blogs)
}


module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
	mostBlogs,
	mostLikes
}