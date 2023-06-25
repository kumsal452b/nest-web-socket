import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('assetHierarchy', { schema: 'dbo' })
export class AssetHierarchy {
  @Column('int', { name: 'isParent', nullable: true })
  isParent: number | null;

  @Column('varchar', { name: 'description', nullable: true })
  description: string | null;

  @Column('varchar', { name: 'pid', nullable: true })
  pid: string | null;

  @PrimaryColumn('varchar', { name: 'id', nullable: false })
  id: string | null;

  @Column('nvarchar', { name: 'plant_desc', nullable: true })
  plant_desc: string | null;

  @Column('nvarchar', { name: 'plt_serial_no', nullable: true })
  plt_serial_no: string | null;

  @Column('nvarchar', { name: 'plt_model', nullable: true })
  plt_model: string | null;

  @Column('nvarchar', { name: 'plt_manufacturer', nullable: true })
  plt_manufacturer: string | null;

  @Column('nvarchar', { name: 'plt_supplier', nullable: true })
  plt_supplier: string | null;

  @Column('nvarchar', { name: 'plt_capital_cost', nullable: true })
  plt_capital_cost: string | null;

  @Column('nvarchar', { name: 'warranty_date', nullable: true })
  warranty_date: string | null;

  @Column('nvarchar', { name: 'plant_type', nullable: true })
  plant_type: string | null;

  @Column('nvarchar', { name: 'plant_no', nullable: true })
  plant_no: string | null;

  @Column('nvarchar', { name: 'plt_attached_to', nullable: true })
  plt_attached_to: string | null;

  @Column('nvarchar', { name: 'attached_to_2', nullable: true })
  attached_to_2: string | null;

  @Column('nvarchar', { name: 'plt_parent_job', nullable: true })
  plt_parent_job: string | null;

  @Column('nvarchar', { name: 'plt_type_codes_1', nullable: true })
  plt_type_codes_1: string | null;

  @Column('nvarchar', { name: 'plt_type_codes_2', nullable: true })
  plt_type_codes_2: string | null;

  @Column('nvarchar', { name: 'plt_type_codes_3', nullable: true })
  plt_type_codes_3: string | null;

  @Column('nvarchar', { name: 'plt_type_codes_4', nullable: true })
  plt_type_codes_4: string | null;

  @Column('nvarchar', { name: 'plt_actual_mtbf', nullable: true })
  plt_actual_mtbf: string | null;

  @Column('nvarchar', { name: 'last_fail_date', nullable: true })
  last_fail_date: string | null;

  @Column('nvarchar', { name: 'total_failures', nullable: true })
  total_failures: string | null;

  @Column('nvarchar', { name: 'avg_weekly_usage', nullable: true })
  avg_weekly_usage: string | null;

  @Column('nvarchar', { name: 'plt_target_mtbf', nullable: true })
  plt_target_mtbf: string | null;

  @Column('nvarchar', { name: 'plt_condition', nullable: true })
  plt_condition: string | null;

  @Column('nvarchar', { name: 'changeout_cost', nullable: true })
  changeout_cost: string | null;

  @Column('nvarchar', { name: 'PLT_BOM_ID', nullable: true })
  PLT_BOM_ID: string | null;

  @Column('nvarchar', { name: 'total_cost', nullable: true })
  total_cost: string | null;

  @Column('nvarchar', { name: 'mat_total_cost', nullable: true })
  mat_total_cost: string | null;

  @Column('int', { name: 'level_num', nullable: true })
  level_num: number | null;
}
