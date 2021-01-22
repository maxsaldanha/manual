import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'atendimento',
    loadChildren: () => import('./pmac/atendimento/atendimento.module').then( m => m.AtendimentoPageModule)
  },
  {
    path: 'imprimir',
    loadChildren: () => import('./pmac/imprimir/imprimir.module').then( m => m.ImprimirPageModule)
  },
  {
    path: 'desbloqueimp',
    loadChildren: () => import('./pmac/desbloqueimp/desbloqueimp.module').then( m => m.DesbloqueimpPageModule)
  },
  {
    path: 'caixa',
    loadChildren: () => import('./pmac/caixa/caixa.module').then( m => m.CaixaPageModule)
  },
  {
    path: 'pagam-devol',
    loadChildren: () => import('./pmac/pagam-devol/pagam-devol.module').then( m => m.PagamDevolPageModule)
  },
  {
    path: 'pagam-pendent',
    loadChildren: () => import('./pmac/pagam-pendent/pagam-pendent.module').then( m => m.PagamPendentPageModule)
  },
  {
    path: 'lanc-aberto',
    loadChildren: () => import('./pmac/lanc-aberto/lanc-aberto.module').then( m => m.LancAbertoPageModule)
  },
  {
    path: 'deesconto',
    loadChildren: () => import('./pmac/deesconto/deesconto.module').then( m => m.DeescontoPageModule)
  },
  {
    path: 'rel-guia',
    loadChildren: () => import('./pmac/rel-guia/rel-guia.module').then( m => m.RelGuiaPageModule)
  },
  {
    path: 'control-guia',
    loadChildren: () => import('./pmac/control-guia/control-guia.module').then( m => m.ControlGuiaPageModule)
  },
  {
    path: 'remes-guia',
    loadChildren: () => import('./pmac/remes-guia/remes-guia.module').then( m => m.RemesGuiaPageModule)
  },
  {
    path: 'guia-nao-rem',
    loadChildren: () => import('./pmac/guia-nao-rem/guia-nao-rem.module').then( m => m.GuiaNaoRemPageModule)
  },
  {
    path: 'control-rps',
    loadChildren: () => import('./pmac/control-rps/control-rps.module').then( m => m.ControlRpsPageModule)
  },
  {
    path: 'loc-paciente',
    loadChildren: () => import('./pmac/loc-paciente/loc-paciente.module').then( m => m.LocPacientePageModule)
  },
  {
    path: 'loc-medico',
    loadChildren: () => import('./pmac/loc-medico/loc-medico.module').then( m => m.LocMedicoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pmac/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'servidor',
    loadChildren: () => import('./pmac/servidor/servidor.module').then( m => m.ServidorPageModule)
  },
  {
    path: 'receber',
    loadChildren: () => import('./pmal/receber/receber.module').then( m => m.ReceberPageModule)
  },
  {
    path: 'distribuir',
    loadChildren: () => import('./pmal/distribuir/distribuir.module').then( m => m.DistribuirPageModule)
  },
  {
    path: 'realocar',
    loadChildren: () => import('./pmal/realocar/realocar.module').then( m => m.RealocarPageModule)
  },
  {
    path: 'descartar',
    loadChildren: () => import('./pmal/descartar/descartar.module').then( m => m.DescartarPageModule)
  },
  {
    path: 'control-amostra',
    loadChildren: () => import('./pmal/control-amostra/control-amostra.module').then( m => m.ControlAmostraPageModule)
  },
  {
    path: 'inf-volume',
    loadChildren: () => import('./pmal/inf-volume/inf-volume.module').then( m => m.InfVolumePageModule)
  },
  {
    path: 'gerar-mapa',
    loadChildren: () => import('./pmal/gerar-mapa/gerar-mapa.module').then( m => m.GerarMapaPageModule)
  },
  {
    path: 'ret-exm-mapa',
    loadChildren: () => import('./pmal/ret-exm-mapa/ret-exm-mapa.module').then( m => m.RetExmMapaPageModule)
  },
  {
    path: 'imp-mapa',
    loadChildren: () => import('./pmal/imp-mapa/imp-mapa.module').then( m => m.ImpMapaPageModule)
  },
  {
    path: 'list-trabalho',
    loadChildren: () => import('./pmal/list-trabalho/list-trabalho.module').then( m => m.ListTrabalhoPageModule)
  },
  {
    path: 'dig-mapa',
    loadChildren: () => import('./pmal/dig-mapa/dig-mapa.module').then( m => m.DigMapaPageModule)
  },
  {
    path: 'and-cultura',
    loadChildren: () => import('./pmal/and-cultura/and-cultura.module').then( m => m.AndCulturaPageModule)
  },
  {
    path: 'neg-cultura',
    loadChildren: () => import('./pmal/neg-cultura/neg-cultura.module').then( m => m.NegCulturaPageModule)
  },
  {
    path: 'lib-exame',
    loadChildren: () => import('./pmal/lib-exame/lib-exame.module').then( m => m.LibExamePageModule)
  },
  {
    path: 'catalogar',
    loadChildren: () => import('./pmal/catalogar/catalogar.module').then( m => m.CatalogarPageModule)
  },
  {
    path: 'pesquisar',
    loadChildren: () => import('./pmal/pesquisar/pesquisar.module').then( m => m.PesquisarPageModule)
  },
  {
    path: 'desca-bandeja',
    loadChildren: () => import('./pmal/desca-bandeja/desca-bandeja.module').then( m => m.DescaBandejaPageModule)
  },
  {
    path: 'config-bandeja',
    loadChildren: () => import('./pmal/config-bandeja/config-bandeja.module').then( m => m.ConfigBandejaPageModule)
  },
  {
    path: 'agen-exame',
    loadChildren: () => import('./pmal/agen-exame/agen-exame.module').then( m => m.AgenExamePageModule)
  },
  {
    path: 'dura-exame',
    loadChildren: () => import('./pmal/dura-exame/dura-exame.module').then( m => m.DuraExamePageModule)
  },
  {
    path: 'corre-laudo',
    loadChildren: () => import('./pmal/corre-laudo/corre-laudo.module').then( m => m.CorreLaudoPageModule)
  },
  {
    path: 'anular-exame',
    loadChildren: () => import('./pmal/anular-exame/anular-exame.module').then( m => m.AnularExamePageModule)
  },
  {
    path: 'atl-set-realiza',
    loadChildren: () => import('./pmal/atl-set-realiza/atl-set-realiza.module').then( m => m.AtlSetRealizaPageModule)
  },
  {
    path: 'alt-form-mapa',
    loadChildren: () => import('./pmal/alt-form-mapa/alt-form-mapa.module').then( m => m.AltFormMapaPageModule)
  },
  {
    path: 'redig-rean',
    loadChildren: () => import('./pmal/redig-rean/redig-rean.module').then( m => m.RedigReanPageModule)
  },
  {
    path: 'desblo-impr',
    loadChildren: () => import('./pmal/desblo-impr/desblo-impr.module').then( m => m.DesbloImprPageModule)
  },
  {
    path: 'personalizada',
    loadChildren: () => import('./pmal/personalizada/personalizada.module').then( m => m.PersonalizadaPageModule)
  },
  {
    path: 'geri-exame',
    loadChildren: () => import('./pmal/geri-exame/geri-exame.module').then( m => m.GeriExamePageModule)
  },
  {
    path: 'rastrea-exame',
    loadChildren: () => import('./pmal/rastrea-exame/rastrea-exame.module').then( m => m.RastreaExamePageModule)
  },
  {
    path: 'info-atendi',
    loadChildren: () => import('./pmal/info-atendi/info-atendi.module').then( m => m.InfoAtendiPageModule)
  },
  {
    path: 'hist-paciente',
    loadChildren: () => import('./pmal/hist-paciente/hist-paciente.module').then( m => m.HistPacientePageModule)
  },
  {
    path: 'tab-result',
    loadChildren: () => import('./pmal/tab-result/tab-result.module').then( m => m.TabResultPageModule)
  },
  {
    path: 'formato',
    loadChildren: () => import('./pmal/formato/formato.module').then( m => m.FormatoPageModule)
  },
  {
    path: 'qtd-exam-tec',
    loadChildren: () => import('./pmal/qtd-exam-tec/qtd-exam-tec.module').then( m => m.QtdExamTecPageModule)
  },
  {
    path: 'laudo-corrigido',
    loadChildren: () => import('./pmal/laudo-corrigido/laudo-corrigido.module').then( m => m.LaudoCorrigidoPageModule)
  },
  {
    path: 'and-cult-consul',
    loadChildren: () => import('./pmal/and-cult-consul/and-cult-consul.module').then( m => m.AndCultConsulPageModule)
  },
  {
    path: 'equip-ativo',
    loadChildren: () => import('./pmal/equip-ativo/equip-ativo.module').then( m => m.EquipAtivoPageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./pmal/relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
