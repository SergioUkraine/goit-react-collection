import { Container, CenterMessage } from './App.styled';
import React, { Component } from 'react';

import * as API from '../services/api';

import MaterialEditorForm from './MaterialCreateForm';
import MaterialList from './MaterialList';
import MaterialEditor from './MaterialList/MaterialEditor';
import MaterialModal from './MaterialModal';

export class App extends Component {
  state = {
    materials: [],
    isLoading: null,
    isError: null,
    isModalShown: false,
    editingMaterial: null,
  };

  componentDidMount() {
    this.getMaterials();
  }

  deleteMaterial = async id => {
    try {
      this.setState({ isLoading: true, isError: false });
      await API.deleteMaterials(id);

      this.setState(prevState => {
        return {
          materials: prevState.materials.filter(item => {
            return item.id !== id;
          }),
        };
      });

      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({ isError: true });
      console.log(error);
    }
  };

  getMaterials = async () => {
    try {
      this.setState({ isLoading: true, isError: false });
      const materials = await API.getMaterials();
      this.setState({ materials: materials, isLoading: false });
    } catch (error) {
      this.setState({ isError: true });
      console.log(error);
    }
  };

  addMaterial = async values => {
    try {
      this.setState({ isLoading: true, isError: false });
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
      console.log(material);
    } catch (error) {
      this.setState({ isError: true });
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
      this.setState({ isLoading: true, isError: false });
      const updatedMaterial = await API.updateMaterial(fields);

      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));

      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({ isError: true });
      console.log(error);
    }
  };

  toggleModal = () => {
    this.setState(
      prevState => {
        return { isModalShown: !prevState.isModalShown };
      },
      () => console.log(this.state.isModalShown)
    );
  };

  editMaterial = material => {
    this.toggleModal();
    this.setState({ editingMaterial: material });
  };

  render() {
    return (
      <Container>
        <MaterialEditorForm onSubmit={this.addMaterial}></MaterialEditorForm>
        {this.state.isLoading && <CenterMessage>Loading...</CenterMessage>}
        {this.state.isError && (
          <CenterMessage>Something goes wrong</CenterMessage>
        )}

        <MaterialList
          items={this.state.materials}
          onDelete={this.deleteMaterial}
          onEdit={this.editMaterial}
          isLoading={this.state.isLoading}
        />
        {this.state.isModalShown && (
          <MaterialModal onClose={this.toggleModal}>
            <MaterialEditor
              onCancel={this.toggleModal}
              onApply={this.updateMaterial}
              material={this.state.editingMaterial}
            />
          </MaterialModal>
        )}
      </Container>
    );
  }
}
