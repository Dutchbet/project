<?php

namespace App\Http\Controllers;
use App\Examples;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
          $examples = Examples::all()->toArray();
        return view('examples.index', compact('examples'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('examples.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         $examples = $this->validate(request(), [
          'title' => 'required',
          'body' => 'required',
          'vraag1antwoord' => 'required',
          'vraag2antwoord' => 'required',
          'vraag3antwoord' => 'required',
          'vraag4antwoord' => 'required',
          'vraag5antwoord' => 'required',
          'vraag6antwoord' => 'required',
          'vraag7antwoord' => 'required',
          'vraag8antwoord' => 'required',
          'vraag9antwoord' => 'required',
          'vraag10antwoord' => 'required'
        ]);
        
        Examples::create($examples);

        return back()->with('success', 'Example has been added');;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
         $examples = Examples::find($id);
        return view('examples.edit',compact('examples','id'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
             $examples = Examples::find($id);
        $this->validate(request(), [
          'title' => 'required',
          'body' => 'required',
          'vraag1antwoord' => 'required',
          'vraag2antwoord' => 'required',
          'vraag3antwoord' => 'required',
          'vraag4antwoord' => 'required',
          'vraag5antwoord' => 'required',
          'vraag6antwoord' => 'required',
          'vraag7antwoord' => 'required',
          'vraag8antwoord' => 'required',
          'vraag9antwoord' => 'required',
          'vraag10antwoord' => 'required'
        ]);
        $examples->title = $request->get('title');
        $examples->body = $request->get('body');
        $examples->body = $request->get('vraag1antwoord');
        $examples->body = $request->get('vraag2antwoord');
        $examples->body = $request->get('vraag3antwoord');
        $examples->body = $request->get('vraag4antwoord');
        $examples->body = $request->get('vraag5antwoord');
        $examples->body = $request->get('vraag6antwoord');
        $examples->body = $request->get('vraag7antwoord');
        $examples->body = $request->get('vraag8antwoord');
        $examples->body = $request->get('vraag9antwoord');
        $examples->body = $request->get('vraag10antwoord');
        $examples->save();
        return redirect('examples')->with('success','examples has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $examples = Examples::find($id);
        $examples->delete();
        return redirect('examples')->with('success','example has been  deleted');
    }

}
