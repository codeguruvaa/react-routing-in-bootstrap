import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                   <div className='bg-info p-4'>
                   <h1 className='display-4'>Contact</h1>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 p-4'>
                            <p>
                                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                                The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                            </p>
                        </div>
                        <div className='col-lg-5 p-4'>
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom02" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="validationCustom02" value="Otto" required />
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustomUsername" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="validationCustom03" class="form-label">City</label>
                                <input type="text" class="form-control" id="validationCustom03" required />
                                <div class="invalid-feedback">
                                Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom04" class="form-label">State</label>
                                <select class="form-select" id="validationCustom04" required>
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                Please select a valid state.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom05" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="validationCustom05" required />
                                <div class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                            </div>

                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>

                <div className='bg-secondary p-4'>
                    <h4 className='display-5'>About Routing</h4>
                </div>

                <div className='container'>
                    <p className='p-4'>
                        The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                        The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                        The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                        The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                        The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                        The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                        The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                        The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                    </p>    
                </div>
            </div>
        )
    }
}