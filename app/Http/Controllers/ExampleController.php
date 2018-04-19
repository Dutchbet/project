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
          'body' => 'required'
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
          'body' => 'required'
        ]);
        $examples->title = $request->get('title');
        $examples->body = $request->get('body');
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
