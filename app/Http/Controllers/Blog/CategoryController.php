<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CategoryBlog;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $category = CategoryBlog::latest()->get();
        return inertia('Blog/FrontUser/Category/Index/Index', [
            'category' => $category
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(CategoryBlog $category)
    {
        dd($category);
    }

}
