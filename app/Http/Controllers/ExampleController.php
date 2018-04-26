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
             'titel' => 'required',
             'introtext'=> 'required',
             'situatietext' => 'required',
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
            'titel' => 'required',
            'introtext'=> 'required',
            'situatietext' => 'required',
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
        $examples->titel = $request->get('titel');
        $examples->introtext = $request->get('introtext');
        $examples->situatietext = $request->get('situatietext');
        $examples->vraag1antwoord = $request->get('vraag1antwoord');
        $examples->vraag2antwoord = $request->get('vraag2antwoord');
        $examples->vraag3antwoord = $request->get('vraag3antwoord');
        $examples->vraag4antwoord = $request->get('vraag4antwoord');
        $examples->vraag5antwoord = $request->get('vraag5antwoord');
        $examples->vraag6antwoord = $request->get('vraag6antwoord');
        $examples->vraag7antwoord = $request->get('vraag7antwoord');
        $examples->vraag8antwoord = $request->get('vraag8antwoord');
        $examples->vraag9antwoord = $request->get('vraag9antwoord');
        $examples->vraag10antwoord = $request->get('vraag10antwoord');
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
